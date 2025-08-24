const images = [
    "astronaunt.jpg",
    "bluegojyo.jpg",
    "bluesky.jpg",
    "castle.jpg",
    "castlebig.jpg",
    "castlebig.jpg",
    "cat.jpg",
    "fatcat.jpg",
    "giant.jpg",
    "giyu.jpg",
    "giyueye.jpg",
    "gojyo.jpg",
    "gozyo.jpg",
    "moon.jpg",
    "moonbk.jpg",
    "mountine.jpg",
    "sky.jpg",
    "snoopy.jpg",
    "space.jpg",
    "spiderman.jpg",
    "yellowmoon.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);