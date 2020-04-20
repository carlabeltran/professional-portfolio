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
  $(".transbox-work").on({
    mouseenter: function () {
      $(this).css("background-color", "#b19cd9");
    },
    mouseleave: function () {
      $(this).css("background-color", "transparent");
    },
    click: function () {
      $(this).css("background-color", "#b19cd9");
    },
  });
  $(".transbox-contact").on({
    mouseenter: function () {
      $(this).css("background-color", "#ffff00");
    },
    mouseleave: function () {
      $(this).css("background-color", "transparent");
    },
    click: function () {
      $(this).css("background-color", "#ffff00");
    },
  });
  $(".transbox-blog").on({
    mouseenter: function () {
      $(this).css("background-color", "#00ff00");
    },
    mouseleave: function () {
      $(this).css("background-color", "transparent");
    },
    click: function () {
      $(this).css("background-color", "#ffff00");
    },
  });
});

