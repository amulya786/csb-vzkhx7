let movie = [
  {
    name: "Wanda Vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit modi numquam alias nemo tempore aut odit excepturi quaerat corporis voluptatibus laboriosam dolorum a eveniet assumenda est nostrum id officia libero aperiam ipsa iure velit recusandae maiores pariatur dicta itaque  eius cum. distinctio temporibus nulla Dignissimos dicta ",
    image: "wandavision.jpg"
  },
  {
    name: "Spiderman no way home",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit modi numquam alias nemo tempore aut odit excepturi quaerat corporis voluptatibus laboriosam dolorum a eveniet assumenda est nostrum id officia libero aperiam ipsa iure velit recusandae maiores pariatur dicta itaque  eius cum. distinctio temporibus nulla Dignissimos dicta ",
    image: "spiderman.jpg"
  },
  {
    name: "Avegers Endgame",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit modi numquam alias nemo tempore aut odit excepturi quaerat corporis voluptatibus laboriosam dolorum a eveniet assumenda est nostrum id officia libero aperiam ipsa iure velit recusandae maiores pariatur dicta itaque  eius cum. distinctio temporibus nulla Dignissimos dicta ",
    image: "endgame.jpg"
  },
  {
    name: "Black Panther 2",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit modi numquam alias nemo tempore aut odit excepturi quaerat corporis voluptatibus laboriosam dolorum a eveniet assumenda est nostrum id officia libero aperiam ipsa iure velit recusandae maiores pariatur dicta itaque  eius cum. distinctio temporibus nulla Dignissimos dicta ",
    image: "blackpanther.jpg"
  },
  {
    name: "Joker",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit modi numquam alias nemo tempore aut odit excepturi quaerat corporis voluptatibus laboriosam dolorum a eveniet assumenda est nostrum id officia libero aperiam ipsa iure velit recusandae maiores pariatur dicta itaque  eius cum. distinctio temporibus nulla Dignissimos dicta ",
    image: "joker.jpg"
  }
];

const carosuel = document.querySelector(".carousel");
let sliders = [];

let sliderIndex = 0;

const createSlide = () => {
  if (sliderIndex >= movie.length) {
    sliderIndex = 0;
  }
  // creating DOM elements

  var slide = document.createElement("div");
  var imgElement = document.createElement("img");
  var content = document.createElement("div");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");

  // attaching all Elements
  imgElement.appendChild(document.createTextNode(""));
  h2.appendChild(document.createTextNode(movie[sliderIndex].name));
  p.appendChild(document.createTextNode(movie[sliderIndex].des));

  content.appendChild(h2);
  content.appendChild(p);

  slide.appendChild(content);
  slide.appendChild(imgElement);

  carosuel.appendChild(slide);

  imgElement.src = movie[sliderIndex].image;
  sliderIndex++;

  // setting class name to the created Elements

  slide.className = "slider";
  content.className = "slider-content";
  h2.className = "movie-title";
  p.className = "movie-des";
  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < movie.length; i++) createSlide();
setInterval(() => {
  createSlide();
}, 3000);

// js for cards
/*
<div class="cards">
              <img src="poster 1.png" class="card-img" alt="">
              <div class="card-body">
                  <h2 class="name">movie name</h2>
                  <h6 class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quidem.</h6>
                  <button class="watchlist-button">Add to watchlist</button>
              </div>
</div>
*/

var cardElement = [
  {
    name: "Loki",
    des: "loki ki kahani",
    image: "poster 1.png"
  },
  {
    name: "Mulan",
    des: "Mulan ki kahani",
    image: "poster 2.png"
  },
  {
    name: "Falcon",
    des: "Falcon the new caption america",
    image: "poster 3.png"
  },
  {
    name: "Avenger Endgame",
    des: "Thanos ki band baj gayi",
    image: "poster 4.png"
  },
  {
    name: "Thor Ragnarok",
    des: "Asgard ki mit gaya ",
    image: "poster 5.png"
  },
  {
    name: "Avengers",
    des: "Personally this is my favoutie one",
    image: "poster 6.png"
  },
  {
    name: "Pirates of cariabean",
    des: "Ye part thik thak tha",
    image: "poster 7.png"
  },
  {
    name: "Soul",
    des: "Ye wali nahi dekhi h",
    image: "poster 8.png"
  },
  {
    name: "Raya",
    des: "ye bhi nahi dekhi h",
    image: "poster 9.png"
  },
  {
    name: "Luca",
    des: "Mast movie h yrr you must watch it once",
    image: "poster 10.png"
  },
  {
    name: "Ford Vs Ferrari",
    des: "I didn't watched that",
    image: "poster 11.png"
  },
  {
    name: "Inception",
    des: "I didn't watched that",
    image: "poster 14.jpg"
  },
  {
    name: "xyz",
    des: "I didn't watched that",
    image: "poster 16.jpg"
  },
  {
    name: "Good luck jerry",
    des: "I didn't watched that",
    image: "poster 15.jpg"
  },
  {
    name: "Dil bechara",
    des: "I didn't watched that",
    image: "poster 13.jpg"
  },
  {
    name: "Ashquee",
    des: "I didn't watched that",
    image: "serial 2.jpg"
  },
  {
    name: "Dark Phoenix",
    des: "Adventure movie ,dark magic ,and fantasy",
    image: "poster 12.png"
  }
];

var cls = ".card-containers";

const createCard = (i, c) => {
  const cardContainer = document.querySelector(c);

  // creating DOM Element
  let cards = document.createElement("div");
  let imgs = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardHeading = document.createElement("h2");
  let cardDes = document.createElement("h6");
  let cardButton = document.createElement("button");

  cardBody.appendChild(cardHeading);
  cardBody.appendChild(cardDes);
  cardBody.appendChild(cardButton);
  cards.appendChild(imgs);
  cards.appendChild(cardBody);
  cardContainer.appendChild(cards);

  // providing class name
  cards.className = "cards";
  imgs.className = "card-img";
  cardBody.className = "card-body";
  cardHeading.className = "name";
  cardDes.className = "des";
  cardButton.className = "watchlist-button";

  // giving card details like name ,description,poster etc
  cardHeading.innerText = cardElement[i].name;
  cardDes.innerText = cardElement[i].des;
  cardButton.innerText = "Add watchlist";
  // imgs.appendChild(document.createTextNode(''));
  imgs.src = cardElement[i].image;
};

for (let i = 3; i < cardElement.length; i++) createCard(i, ".sports");
for (let i = 0; i < cardElement.length; i++) createCard(i, cls);
for (let i = cardElement.length - 2; i >= 4; i--) createCard(i, ".show");
for (let i = cardElement.length - 1; i >= 5; i--) createCard(i, ".action");

const containersCards = [...document.querySelectorAll(".card-containers")];
let preBtns = [...document.querySelectorAll(".pre")];
let nxtBtns = [...document.querySelectorAll(".nxt")];

containersCards.forEach((item, i) => {
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= 200;
  });
});
