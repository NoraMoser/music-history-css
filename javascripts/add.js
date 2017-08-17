var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});