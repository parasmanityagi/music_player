import { songs } from "./data.js";

let div = document.getElementById("sidebar_user_panel");
let divs = div.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  if (i == 0) continue;
  divs[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

let songName = document.getElementById("song_name");
let songDesc = document.getElementById("song_desc");
let songImg = document.getElementById("song_img");
let audio = document.getElementById("audio");
let prev_btn = document.getElementById("prev_btn");
let next_btn = document.getElementById("next_btn");
let shuffle_btn = document.getElementById("shuffle");
let repeat_all_btn = document.getElementById("repeat_all");
let wishlist_btn = document.getElementById("wishlist");
let wishlist_count = document.getElementById("wishlist_count");
let wishlist_div = document.getElementById("playlist_container");
let right_container = document.getElementById("right-container");
let sidebar = document.getElementById("sidebar_user_panel");
let music_player_div = document.getElementById("music_player");
let progress_container = document.getElementById("progress-container");
let progress = document.getElementById("progress");
let audio_pause_btn = document.getElementById("audio_pause_btn");
let audio_current_time = document.getElementById("audio_current_time");
let audio_duration = document.getElementById("audio_duration");

let idx = 0;
let wishlist_songs = [];

function updateSongDetails() {
  songName.innerHTML = songs[idx].title;
  songDesc.innerHTML = songs[idx].genre;
  songImg.src = songs[idx].img;
  audio.src = songs[idx].src;
  updateWishlistIconColor();
}

let prev = () => {
  if (idx === 0) {
    idx = songs.length - 1;
  } else {
    idx--;
  }
  updateSongDetails();
  audio.play();
  audio_pause_btn.children[0].className = "bi bi-pause-fill";
};

let next = () => {
  if (idx === songs.length - 1) {
    idx = 0;
  } else {
    idx++;
  }
  updateSongDetails();
  audio.play();
  audio_pause_btn.children[0].className = "bi bi-pause-fill";
};

function shuffleSongs(songs) {
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
}

let shuffle = () => {
  shuffle_btn.childNodes[0].classList.add("text-primary");
  shuffleSongs(songs);
  idx = 0;
  updateSongDetails();
  audio.play();
  audio_pause_btn.children[0].className = "bi bi-pause-fill";
};

let repeatAll = () => {
  repeat_all_btn.childNodes[0].classList.add("text-primary");
  audio.play();
  audio_pause_btn.children[0].className = "bi bi-pause-fill";
  audio.addEventListener("ended", next);
};

function updateWishlistDisplay() {
  if (wishlist_songs.length != 0) {
    wishlist_div.children[0].childNodes[1].innerHTML = "";
    wishlist_div.children[1].innerHTML = "";
    wishlist_songs.forEach((song) => {
      let song_title = song.title;
      let song_artist = song.artist;
      let song_img = song.img;
      let song_genre = song.genre;
      let node = document.createElement("div");
      node.innerHTML = `
      <div class="d-flex flex-row gap-3 bg-dark p-2 text-light rounded-3 mb-1" style="max-width:300px;">
        <img src=${song_img} class="w-25" style="height:50px" alt="" />
        <div>
          <p class="m-0 p-0">${song_title}</p>
          <div class="d-flex flex-row gap-2">
            <span>
              <i class="bi bi-person-fill"></i>
              <span class="m-0 p-0" style="font-size: 14px">${song_artist}</span>
            </span>
            <span>
              <i class="bi bi-music-note-beamed"></i>
              <span class="m-0 p-0" style="font-size: 14px">${song_genre}</span>
            </span>
          </div>
        </div>
      </div>
      `;
      wishlist_div.children[1].appendChild(node);
    });
  } else {
    wishlist_div.children[0].childNodes[1].innerHTML = ": Empty";
    wishlist_div.children[1].innerHTML = "";
  }
}

function updateWishlistIconColor() {
  let h6 = music_player_div.querySelector("h6").innerText.trim();
  let isInWishlist = wishlist_songs.some((song) => song.title === h6);
  wishlist_btn.childNodes[0].className = isInWishlist
    ? "bi bi-heart-fill text-danger"
    : "bi bi-heart";
}

function updateWishlistCount() {
  if (wishlist_songs.length == 0) {
    wishlist_count.style.display = "none";
  } else {
    wishlist_count.style.display = "inline";
    wishlist_count.innerHTML = wishlist_songs.length;
  }
}

let wishlist = () => {
  const currentSong = songs[idx];
  if (!wishlist_songs.some((song) => song.title === currentSong.title)) {
    wishlist_songs.push(currentSong);
  } else {
    wishlist_songs = wishlist_songs.filter(
      (song) => song.title !== currentSong.title
    );
  }
  updateWishlistIconColor();
  updateWishlistDisplay();
  updateWishlistCount();
};

let updateProgress = () => {
  let { duration, currentTime } = audio;
  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  audio_current_time.innerHTML = sToTime(currentTime);
  audio_duration.innerHTML = isNaN(duration) ? "00:00" : sToTime(duration);
};

let setProgress = (e) => {
  let width = progress_container.clientWidth;
  let clickX = e.offsetX;
  let duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
};

function sToTime(t) {
  return padZero(parseInt((t / 60) % 60)) + ":" + padZero(parseInt(t % 60));
}

function padZero(v) {
  return v < 10 ? "0" + v : v;
}

updateWishlistCount();

let toggleWishlistDiv = () => {
  if (sidebar.children[2].classList.contains("active")) {
    right_container.style.visibility = "visible";
  } else {
    right_container.style.visibility = "hidden";
  }
};

updateSongDetails();
prev_btn.addEventListener("click", prev);
next_btn.addEventListener("click", next);
shuffle_btn.addEventListener("click", shuffle);
repeat_all_btn.addEventListener("click", repeatAll);
wishlist_btn.addEventListener("click", wishlist);
sidebar.addEventListener("click", toggleWishlistDiv);
audio.addEventListener("timeupdate", updateProgress);
progress_container.addEventListener("click", setProgress);
audio.addEventListener("ended", next);
audio_pause_btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audio_pause_btn.children[0].className = "bi bi-pause-fill";
  } else {
    audio.pause();
    audio_pause_btn.children[0].className = "bi bi-play-fill";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  audio.play();
});

