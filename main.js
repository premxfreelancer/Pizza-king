document.getElementById("selectpizza").addEventListener("click", function() {
  var divToHide = document.getElementById("select2");
  var divToview = document.getElementById("select1");
  divToHide.style.display = "none";
  divToview.style.display = "block";
});


document.getElementById("selectburger").addEventListener("click", function() {
  var divToHide2 = document.getElementById("select1");
var divToview2 = document.getElementById("select2");
  divToHide2.style.display = "none";
  divToview2.style.display = "block";
});


