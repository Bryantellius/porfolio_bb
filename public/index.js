const work = [
  {
    title: "TrueCoders Website",
    imgUrl: "assets/images/work-truecoders.PNG",
    desc: "Business website for TrueCoders Coding Academy. The site is built with Next.js, which is a combination of a React frontend and Node/Express backend. The site uses stripe for checkout and payment processing, graymatter and remark for markdown blog rendering, and mailgun for email templating and sending, all on top of a RESTful api architecture.",
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
    desc: "Example project for TrueCoders students learning the MERN (Mongodb/MySQL, Express.js, React.js, and Node.js) stack. This project has user authentication with JWT, passport.js, and bcrypt. Users have roles defining their access to the learning site. Employees can visit the learn view and cycle through cards to practice learning store inventory. Administrators can post messages to the message board, manage employees, and manage store inventory.",
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
    desc: "The initial frontend for VeroSkills online learning platform. The app uses React.js to render a dashboard to subscribed users, displaying available courses. The core of the app is focused on the Online Code Editor where students can have a 3 panel view of lesson content, code editor, and output window that is an all-in-one view for learning to code.",
    live: null,
    code: null,
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fab fa-react"],
  },
  {
    title: "EagleWing Video Productions Business Site",
    imgUrl: "assets/images/work-eaglewing.PNG",
    desc: "Business site for EagleWind Video Productions. The project is a client facing website built with vanilla HTML, CSS, and JavaScript.",
    live: "http://eaglewingvideoproductions.com/",
    code: null,
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
  },
  {
    title: "Demo Memory Game App",
    imgUrl: "assets/images/work-memory-game.png",
    desc: "Example project for TrueCoders students learning React.js. This project uses a React frontend to allow a user to enjoy a simple memory game. Local Storage is used for caching high scores per visit.",
    live: "https://complete-memory-game.herokuapp.com/",
    code: "https://github.com/Bryantellius/complete-memory-game",
    tech: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fab fa-react"],
  },
  {
    title: "Demo WebRTC Cards App",
    imgUrl: "assets/images/work-tc-cards.PNG",
    desc: "Example project for TrueCoders students learning Node.js and Websockets. This project uses vanilla HTML, CSS, and Javascript for the frontend, and a Node.js backend with Socket.io. Users can connect two or more devices, and slide cards from one device to the other in real time with WebRTC (Web Real Time Communication).",
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

  let workCode = document.querySelector("#workCode");
  workCode.href = work.code || "#";
  if (work.code) workCode.classList.remove("d-none");
  else workCode.classList.add("d-none");
  let workLink = document.querySelector("#workLink");
  workLink.href = work.live || "#";
  if (work.live) workLink.classList.remove("d-none");
  else workLink.classList.add("d-none");

  let iconContainer = document.querySelector(".modal-icons");

  iconContainer.innerHTML = "";

  for (let icon of work.tech) {
    let i = document.createElement("i");
    i.className = "fa-lg " + icon;
    i.title = icon.split(/fa-/)[1];
    iconContainer.appendChild(i);
  }
}

// Form Submission
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let contactName = document.querySelector("#contactName");
  let contactEmail = document.querySelector("#contactEmail");
  let contactSubject = document.querySelector("#contactSubject");
  let contactMessage = document.querySelector("#contactMessage");

  fetch("/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: contactName.value,
      from: contactEmail.value,
      subject: contactSubject.value,
      message: contactMessage.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => flashAlert(data.msg))
    .catch((e) => flashAlert(e.msg, "danger"))
    .finally(() => {
      contactName.value = "";
      contactEmail.value = "";
      contactSubject.value = "";
      contactMessage.value = "";
    });
});

function flashAlert(msg, type) {
  let alert = document.querySelector(".alert");

  alert.textContent = msg;
  alert.classList.remove("d-none");

  if (type == "danger") {
    alert.classList.add("alert-danger");
  } else alert.classList.remove("alert-danger");

  setTimeout(() => alert.classList.add("d-none"), 5000);
}
