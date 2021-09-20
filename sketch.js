// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY

var treeEph;
var tree;
var max_dist = 300;
var min_dist = 15;
var max_distLar = 50;
var min_distLar = 5;

var today = new Date();
var da = today.getDate() * 2.55;
var mo = today.getMonth() + 1;

if (mo <= 10) {
  min_dist = 250 - da;
} else if (mo === 11) {
  min_dist = 177 - da;
} else if (mo === 12){
  min_dist = 79 - da;
} else {
  min_dist = 10;
}

var ho = today.getHours();
var min_distEph = 120 - ho * 5;
var max_distEph = 300;

let videos = ["IMG_0108", "IMG_0233", "IMG_0313", "IMG_0461", "IMG_0462", "IMG_1257", "IMG_1173", "IMG_1375"];
var nex = Math.round((7/23)* 4)//ho);
var hue = 50 + (200/30)* today.getDate();
var video = document.getElementById('video');
var newSrc = videos[nex] + ".MOV"
var video = document.getElementById('video');
video.style.filter = "blur(4px) hue-rotate("+ hue + "deg)";
video.src = newSrc;
video.play();

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
  treeEph = new TreeEph();
  tree = new Tree();
}

function draw() {
  tree.show();
  tree.grow();
  treeEph.grow();
}

function mouseClicked() {
}