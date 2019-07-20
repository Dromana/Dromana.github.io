// get container
var current_img = document.getElementById("current_image");
// get butons
const nextBtn = document.querySelector(".next");
const prewBtn = document.querySelector(".prew");
// control vars;
const interval_time = 3000;
// aux vars
var auto = 1;
var image = ["Web_Center", "Android_Game", "Radio_Beem"];
var i = 1;

/* BUTAO NEXT!*/
nextBtn.addEventListener("click", () => {
  i++;
  current_img.src = "../imagens/" + image[i - 1] + ".jpg";
  if (i >= image.length) {
    i = 0;
  }
});
nextBtn.addEventListener("mouseover", () => {
  auto = 2;
});
nextBtn.addEventListener("mouseout", () => {
  auto = 1;
});

current_img.addEventListener("mouseover", () => {
  auto = 2;
});
current_img.addEventListener("mouseout", () => {
  auto = 1;
});
/* BUTAO ANTES!*/
prewBtn.addEventListener("click", () => {
  i--;
  current_img.src = "../imagens/" + image[i] + ".jpg";
  if (i <= 0) {
    i = image.length;
  }
});
prewBtn.addEventListener("mouseover", () => {
  auto = 2;
});
prewBtn.addEventListener("mouseout", () => {
  auto = 1;
});

/* automatic display */
function nextImageAutomatic() {
  if (i < image.length) {
    i++;
    current_img.src = "../imagens/" + image[i - 1] + ".jpg";
  } else {
    i = 0;
  }
}

function automaticImages() {
  if (auto == 1) {
    nextImageAutomatic();
  } else {
  }
}

setInterval(automaticImages, interval_time);

/* slider Ananimation */

const slidercont = document.querySelector(".slider");
const tl = new TimelineMax();
tl.fromTo(slidercont, 3, { width: "0%" }, { width: "80%" });

/* Scroll stuff*/
