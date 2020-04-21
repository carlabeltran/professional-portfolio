console.log("JAVA && HTML ARE LINKED!!")

//HOVER EFFECT FOR ABOUT ON MENU OVERLAY
$(document).ready(function () {
  var open = document.getElementById("o-open"),
    close = document.getElementById("o-close"),
    over = document.getElementById("home-overlay");
  open.addEventListener("click", function () {
    over.classList.add("show");
  });
  close.addEventListener("click", function () {
    over.classList.remove("show");
  });

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

function on() {
  document.getElementById("message-overlay").style.display = "block";
}

function off() {
  document.getElementById("message-overlay").style.display = "none";
}