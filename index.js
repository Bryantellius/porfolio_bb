const work = [
  {
    title: "TrueCoders Business Site",
    imgUrl: "assets/images/work-truecoders.PNG",
    desc: `Some text about me. Some text about me. I am lorem ipsum consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
    live: "https://truecoders.io",
    code: null,
    tech: [
      "fab fa-html5",
      "fab fa-css3",
      "fab fa-sass",
      "fab fa-js",
      "fab fa-react",
      "fas fa-database",
      "fab fa-node-js",
    ],
  },
  {
    title: "Trak Shak Employee Learning App",
    imgUrl: "assets/images/work-trakshak.png",
    desc: "",
    live: null,
    code: "https://github.com/Bryantellius/Training-Cards",
    tech: [
      "fab fa-html5",
      "fab fa-css3",
      "fab fa-sass",
      "fab fa-js",
      "fab fa-react",
      "fas fa-database",
      "fab fa-node-js",
    ],
  },
  {
    title: "Vero Skills V1 Portal",
    imgUrl: "assets/images/work-skills-portal.PNG",
    desc: "",
    live: null,
    code: null,
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fab fa-react"],
  },
  {
    title: "EagleWing Video Productions Business Site",
    imgUrl: "assets/images/work-eaglewing.PNG",
    desc: "",
    live: "http://eaglewingvideoproductions.com/",
    code: null,
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
  },
  {
    title: "Demo Memory Game App",
    imgUrl: "assets/images/work-memory-game.png",
    desc: "",
    live: "https://complete-memory-game.herokuapp.com/",
    code: "https://github.com/Bryantellius/complete-memory-game",
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fab fa-react"],
  },
  {
    title: "Demo WebRTC Cards App",
    imgUrl: "assets/images/work-tc-cards.PNG",
    desc: "",
    live: "https://cards-tc.herokuapp.com/",
    code: "https://github.com/Bryantellius/tc-cards",
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fab fa-node-js"],
  },
];

// Generate Work Cards
const work1 = document.querySelector(".work1");
const work2 = document.querySelector(".work2");

for (let i = 0; i < work.length; i++) {
  let img = document.createElement("img");
  img.classList.add("w-100");
  img.src = work[i].imgUrl;
  img.onclick = (e) => onOpen(work[i]);

  if (i >= Math.floor(work.length / 2)) {
    work2.appendChild(img);
  } else {
    work1.appendChild(img);
  }
}

// Toggle sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

for (let item of document.getElementsByClassName("nav-item")) {
  item.addEventListener("click", closeNav);
}

// Modal Logic
let modalVisible = false;
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#modalClose");
const modalDialog = document.querySelector(".modal-dialog");

modal.addEventListener("click", onClose);
modalDialog.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("keyup", escapeModal);

function escapeModal({ key }) {
  if (key == "Escape") onClose();
}

modalClose.addEventListener("click", onClose);

function onClose() {
  modalVisible = false;
  modal.classList.add("d-none");
}

function onOpen(work) {
  modalVisible = true;
  modal.classList.remove("d-none");

  document.querySelector(".modal-title").textContent = work.title;
  document.querySelector(".description").textContent = work.desc;
  document.querySelector(".workPreview").src = work.imgUrl;

  let iconContainer = document.querySelector(".modal-icons");

  iconContainer.innerHTML = "";

  for (let icon of work.tech) {
    let i = document.createElement("i");
    i.className = "fa-lg " + icon;
    i.title = icon.split(/fa-/)[1];
    iconContainer.appendChild(i);
  }
}
