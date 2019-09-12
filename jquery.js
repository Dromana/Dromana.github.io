/* control vars */
var fade_out = 500;
var fade_in = 500;

/* CONTAC ME ANIMATION*/

$("#current_image").mouseover(function() {
  $(current_image).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});

$("#current_image").mouseleave(function() {
  $(current_image).fadeTo("slow", 1, function() {
    // Animation complete.
  });
});

var linkdin = "https://www.linkedin.com/in/diogo-romana-984024156/";
var facebook = "https://www.facebook.com/diogo.romana.5";
var skype = "skype:diogoromana?userinfo";
$(".fa-linkedin").click(function() {
  window.open(linkdin, "_blank");
});
$(".fa-facebook").click(function() {
  window.open(facebook, "_blank");
});
$(".fa-skype").click(function() {
  window.open(skype, "_blank");
});

/*display email*/

$(emailid).hide();
$(".fa-envelope-open-o").click(function() {
  $("#emailid,#emailid1").toggle();
});

/* Scroll stuff*/
$("#aboutme").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      2000,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

$("#lp").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      2000,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

$("#contac").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      2000,
      function() {
        window.location.hash = hash;
        blink_animation();
      }
    );
  } // End if
});

function blink_animation() {
  $(icons1).fadeOut(fade_out, function() {
    $(icons1).fadeIn(fade_in, function() {
      $(icons1).fadeOut(fade_out, function() {
        $(icons1).fadeIn(fade_in, function() {});
      });
    });
  });
}
/* PROJECT SECTION*/
$("#pro1> #Github, #pro1> #Demo").mouseover(function() {
  $(pro1).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro1> #Github ,#pro1> #Demo").mouseleave(function() {
  $(pro1).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});

$("#pro2> #Github, #pro2> #Demo").mouseover(function() {
  $(pro2).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro2> #Github, #pro2> #Demo").mouseleave(function() {
  $(pro2).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});

$("#pro3> #Github, #pro3> #Demo").mouseover(function() {
  $(pro3).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro3> #Github, #pro3> #Demo").mouseleave(function() {
  $(pro3).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});

$("#pro4> #Github, #pro4> #Demo").mouseover(function() {
  $(pro4).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro4> #Github, #pro4> #Demo").mouseleave(function() {
  $(pro4).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});

$("#pro6> #Github, #pro6> #Demo").mouseover(function() {
  $(pro6).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro6> #Github, #pro6> #Demo").mouseleave(function() {
  $(pro6).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});

$("#pro5> #Github, #pr5> #Demo").mouseover(function() {
  $(pro5).fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
});
$("#pro5> #Github, #pro5> #Demo").mouseleave(function() {
  $(pro5).fadeTo("fast", 1, function() {
    // Animation complete.
  });
});
/* ON CLICK FOR PROJECTS */

$("#pro1> #Github, #pro1> #Demo").click(function() {
  window.open("https://github.com/Dromana/Matlab_Radio_Beem");
});
$("#pro2> #Github, #pro2> #Demo").click(function() {
  window.open("https://github.com/Dromana/Mini_voltimetro");
});
$("#pro3> #Github, #pro3> #Demo").click(function() {
  window.open("https://github.com/Dromana/C-sharp_GAME_Unity");
});
$("#pro4> #Github, #pro4> #Demo").click(function() {
  window.open("https://github.com/Dromana/Home_center_webpage");
});
