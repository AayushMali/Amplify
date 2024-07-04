const songCards = document.querySelectorAll(".song-card");
let currentSong = null;
function Song() {
  songCards.forEach((card) => {
    card.addEventListener("click", () => {
      const songTitle = card.querySelector("p").textContent;
      const songArtist = card.querySelector("span").textContent;
      console.log(`User selected: ${songTitle} and artist is: ${songArtist}`);
      if (songTitle == "What Make's You Beautiful") {
        document
          .querySelector(".Player-img")
          .setAttribute("src", "./Assets/Songs/Whatmakesyoubeautiful.jpeg");
        document.querySelector(".song-name").textContent = songTitle;
        document.querySelector(".song-artist").textContent = songArtist;
        document.querySelector(".player").style.backgroundColor =
          "hsl(44, 100%, 55%)";
        var song1 = new Audio(
          "./Assets/Songs/New folder/One Direction  What Makes You Beautiful Lyrics.mp3"
        );
        currentSong = song1;
        song1.play();
      } else if (songTitle == "There's Nothing Holding Me Back") {
        document
          .querySelector(".Player-img")
          .setAttribute(
            "src",
            "./Assets/Songs/theresnothingholdingmeback.jpeg"
          );
        document.querySelector(".song-name").textContent = songTitle;
        document.querySelector(".song-artist").textContent = songArtist;
        document.querySelector(".player").style.backgroundColor = "#9BEC00";
        var song2 = new Audio(
          "./Assets/Songs/New folder/Shawn Mendes  Theres Nothing Holding Me Back Lyrics.mp3"
        );
        currentSong = song2;
        song2.play();
      } else if (songTitle == "Closer") {
        document
          .querySelector(".Player-img")
          .setAttribute("src", "./Assets/Songs/Closer.jpeg");
        document.querySelector(".song-name").textContent = songTitle;
        document.querySelector(".song-artist").textContent = songArtist;
        document.querySelector(".player").style.backgroundColor =
          "rgb(0, 255, 255)";
        var song3 = new Audio(
          "./Assets/Songs/New folder/The Chainsmokers  Closer Lyrics ft Halsey.mp3"
        );
        currentSong = song3;
        song3.play();
      } else if (songTitle == "Asal Mein") {
        document
          .querySelector(".Player-img")
          .setAttribute("src", "./Assets/Songs/asalmain.jpeg");
        document.querySelector(".song-name").textContent = songTitle;
        document.querySelector(".song-artist").textContent = songArtist;
        document.querySelector(".player").style.backgroundColor = "#FF0000";
        var song4 = new Audio(
          "./Assets/Songs/New folder/Asal Mein Lyrics  Darshan Raval  Indie Music Label  Latest Hit song 2020.mp3"
        );
        currentSong = song4;
        song4.play();
      } else if (songTitle == "I Guess") {
        document
          .querySelector(".Player-img")
          .setAttribute(
            "src",
            "./Assets/Songs/WhatsApp Image 2024-07-04 at 19.09.35_4790de00.jpg"
          );
        document.querySelector(".song-name").textContent = songTitle;
        document.querySelector(".song-artist").textContent = songArtist;
        document.querySelector(".player").style.backgroundColor = "#219C92";
        var song5 = new Audio(
          "./Assets/Songs/New folder/Krsna  I Guess  Lyrics .mp3"
        );
        currentSong = song5;
        song5.play();
      }
    });
  });
}
let isPlaying = false;
const playbutton = document.querySelector(".play");

playbutton.addEventListener("click", function () {
  if (isPlaying) {
    currentSong.pause();
    isPlaying = false;
    playbutton.src = "./Assets/pause_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
  } else {
    currentSong.play();
    isPlaying = true;
    playbutton.src = "./Assets/play_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
  }
});
Song();
