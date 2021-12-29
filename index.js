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
