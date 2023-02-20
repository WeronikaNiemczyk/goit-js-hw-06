const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");


const markup = images.map((image) => `<li><img></li>`).join("");

const imagesAtribute = list.insertAdjacentHTML("beforeend", markup);


const image1 = document.querySelector(`img`);
image1.src =
  "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image1.alt = "White and Black Long Fur Cat";

const image2 = list.querySelectorAll(`img`)[1];
image2.src =
  "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";

const image3 = document.querySelectorAll(`img`)[2];
image3.src =
  "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image3.alt = "Group of Horses Running";


image1.classList.add(`image`);
image2.classList.add(`image`);
image3.classList.add(`image`);



