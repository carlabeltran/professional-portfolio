console.log("JAVA && HTML ARE LINKED!!");

var elements = document.getElementsByClassName("column");

var i;
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
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
  $(".transbox-resume").on({
    mouseenter: function () {
      $(this).css("background-color", "#ffa500");
    },
    mouseleave: function () {
      $(this).css("background-color", "transparent");
    },
    click: function () {
      $(this).css("background-color", "#ffa500");
    },
  });
    openNav();
    closeNav();
});

$(".m").on({
  mouseenter: function () {
    $(this).css("margin-left", "5px");
  },
  mouseleave: function () {
    $(this).css("margin-left", "-5px");
  },
  click: function () {
    $(this).css("margin-left", "5px");
  },
});

$(".n").on({
  mouseenter: function () {
    $(this).css("margin-left", "5px");
  },
  mouseleave: function () {
    $(this).css("margin-left", "-5px");
  },
  click: function () {
    $(this).css("margin-left", "5px");
  },
});

// OPEN MENU
function openNav() {
  document.getElementById("menu").style.width = "100%";
}

// CLOSE MENU
function closeNav() {
  document.getElementById("menu").style.width = "0%";
}