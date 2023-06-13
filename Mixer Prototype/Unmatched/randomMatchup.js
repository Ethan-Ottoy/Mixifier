  function getRandomImage() {
    const images = [
      "Medusa.jpg", "Alice.jpg", "Arthur.jpg", "Sinbad.jpg",
      "Dracula.jpg", "Sherlock.jpg", "Jekyll _ Hyde.jpg", "Invisible Man.jpg",
      "Buffy.jpg", "Angel.jpg", "Spike.jpg", "Willow.jpg",
      "Achilles.png", "Bloody Mary.png", "Sun Wukong.png", "Yennenga.png",
      "Luke Cage.jpg", "Ghost Rider.jpg", "Moon Knight.jpg",
      "Daredevil.jpg", "Bullseye.jpg", "Elektra.jpg",
      "Robin Hood.jpg", "Bigfoot.jpg",
      "Muldoon.jpg", "Raptors.jpg",
      "Little Red.jpg", "Beowulf.jpg",
      "Dr. Sattler.png", "T-Rex.png",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  function displayMatchup() {
    const firstImage = getRandomImage();
    let secondImage = getRandomImage();

    while (secondImage === firstImage) {
      secondImage = getRandomImage();
    }

    document.getElementById("firstImage").src = firstImage;
    document.getElementById("secondImage").src = secondImage;
  }

  document.addEventListener("DOMContentLoaded", displayMatchup);
