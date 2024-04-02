
  
function toggleMenu() {
  var myLinks = document.getElementById("myLinks");
  // Toggle the visibility of myLinks
  if (myLinks.style.display === "none" || myLinks.style.display === "") {
    myLinks.style.display = "block";
  } else {
    myLinks.style.display = "none";
  }
}

// Add click event listeners to each link in myLinks
var links = document.querySelectorAll("#myLinks a");
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Hide myLinks when a link is clicked
    document.getElementById("myLinks").style.display = "none";
  });
});