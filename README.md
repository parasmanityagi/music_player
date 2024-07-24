# Music Player

A feature-rich music player application built with HTML, CSS,Bootstrap and JavaScript. It supports custom progress bar, shuffle, repeat, and wishlist functionalities. Enjoy your favorite songs with a seamless user experience!

## Features

- **Play/Pause**: Play or pause the current song.
- **Previous/Next**: Navigate to the previous or next song.
- **Shuffle**: Shuffle the playlist to play songs in a random order.
- **Repeat All**: Repeat the entire playlist.
- **Wishlist**: Add or remove songs from your wishlist.
- **Custom Progress Bar**: Display the progress of the current song with a custom progress bar.
- **Dynamic Song Details**: Update song details dynamically as you navigate to the next or previous song.

## Installation

1. Clone the repository:
    git clone https://github.com/parasmanityagi/music_player.git
    
2. Navigate to the project directory:
    cd music_player
    
3. Open `index.html` in your favorite web browser to start the music player.

## Usage

- **Play/Pause**: Click the play/pause button to toggle between playing and pausing the current song.
- **Previous/Next**: Use the previous and next buttons to navigate to the previous/next song.
- **Shuffle**: Click the shuffle button to play songs in a random order.
- **Repeat All**: Click the repeat button to continuously play all the songs.
- **Wishlist**: Click the heart icon to add or remove the current song from your wishlist.
- **Progress Bar**: Click on the progress bar to seek to a specific part of the song.

## Code Overview

- **HTML**: Defines the structure of the music player.
- **CSS**: Styles the music player for a visually appealing user interface.
- **JavaScript**: Implements the functionality of the music player, including audio controls,  and wishlist handling.

### JavaScript Functions

- **updateSongDetails**: Updates the song details displayed in the player.
- **prev**: Navigates to the previous song in the songs list.
- **next**: Navigates to the next song in the songs list.
- **shuffleSongs**: Shuffles all the songs in the songs list.
- **shuffle**: Handles the shuffle button click event.
- **repeatAll**: Handles the repeat all button click event.
- **updateWishlistDisplay**: Updates the wishlist display.
- **updateWishlistIconColor**: Updates the wishlist icon color based on the current song's wishlist status.
- **updateWishlistCount**: Updates the count of songs in the wishlist.
- **wishlist**: Handles adding/removing songs from the wishlist.
- **updateProgress**: Updates the progress bar and time display as the song plays.
- **setProgress**: Sets the song's current time based on the progress bar click event.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.


## Acknowledgements

- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/)
- Inspiration from various online music players

---

Enjoy your music with our custom music player!
