"use strict";

const header     = document.createElement("h1"),
      imgWrapper = document.createElement("div"),
      btnWrapper = document.createElement("div"),
      buttonPrev = document.createElement("button"),
      buttonNext = document.createElement("button"),
      images = [];

header.innerText = "My 3D Works";
header.classList.add("header");
document.body.append(header);

imgWrapper.classList.add("imgWrapper");
document.body.append(imgWrapper);

btnWrapper.classList.add("btnWrapper");
document.body.append(btnWrapper);

buttonPrev.innerText = "Prev";
buttonPrev.classList.add("button");
btnWrapper.append(buttonPrev);

buttonNext.innerText = "Next";
buttonNext.classList.add("button");
btnWrapper.append(buttonNext);

function createImg(name, path) {
    const img = document.createElement("img")
    img.src = path;
    img.alt = name;
    img.classList.add("img", "hide");
    imgWrapper.append(img);

    return img;
}

images.push(createImg("Beads", "img/1.jpg"));
images.push(createImg("Field", "img/2.jpg"));
images.push(createImg("Ferrari", "img/3.jpg"));
images.push(createImg("Jet", "img/4.jpg"));
images.push(createImg("Swinging_Bridge", "img/5.jpg"));
images.push(createImg("Landscape", "img/6.jpg"));
images.push(createImg("Penthouse", "img/7.jpg"));
images.push(createImg("Purple_Sofa", "img/8.jpg"));

images[0].classList.remove("hide");

let i = 0;

buttonPrev.addEventListener("mousedown", () => {
    buttonPrev.classList.add("mousedown");
});

buttonPrev.addEventListener("mouseup", () => {
    buttonPrev.classList.remove("mousedown");
    images[i].classList.toggle("hide");
    i--;
    if(i < 0) {
        i = images.length - 1;
    }
    images[i].classList.toggle("hide");
});

buttonNext.addEventListener("mousedown", () => {
    buttonNext.classList.add("mousedown");
});

buttonNext.addEventListener("mouseup", () => {
    buttonNext.classList.remove("mousedown");
    images[i].classList.toggle("hide");
    i++;
    if(i === images.length) {
        i = 0;
    }
    images[i].classList.toggle("hide");
});

setInterval(() => {
    images[i].classList.toggle("hide");
    i++;
    if(i === images.length) {
        i = 0;
    }
    images[i].classList.toggle("hide");
}, 2000);