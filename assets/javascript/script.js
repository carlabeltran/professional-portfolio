console.log("JAVA && HTML ARE LINKED!!")

// OPEN MENU
function openNav() {
  document.getElementById("menu").style.width = "100%";
}
openNav();


// CLOSE MENU
function closeNav() {
  document.getElementById("menu").style.width = "0%";
}
closeNav();

//HOVER EFFECT FOR ABOUT ON MENU OVERLAY
$(document).ready(function () {
  
  $(".transbox-about").on({
    mouseenter: function () {
      $(this).css("background-color", "#40e0d0");
    },
    mouseleave: function () {
      $(this).css("background-color", "transparent");
    },
    click: function () {
      $(this).css("background-color", "#40e0d0");
    },
  });
});

