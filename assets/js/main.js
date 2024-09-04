
const scrollbtn = document.querySelector('.scrol_btn')

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }
})
scrollbtn.addEventListener('click' , () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})

// --============--SCROll BTN END--============--

$(document).ready(function(){
  var menu = new MmenuLight(document.querySelector("#menu"), "all");
  menu.navigation({ theme: "dark" });
  var drawer = menu.offcanvas();
  document
  .querySelector('a[href="#menu"]')
  .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
  });

// --============--Mmenu END--===============--

  $(window).scroll(function(){
      if(this.scrollY > 0){
          $('.menuSec').addClass("sticky");
      }
      else{
          $('.menuSec').removeClass("sticky");
      }
  });

});

// mmenu Sticky END ---------------

$(document).ready(function(){
  var typed3 = new Typed('.typing', {
    strings: ['Web-Designer','Developer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,

  });
});
  
// --================--SMART TYPING --==============--

$(document).ready(function(){
	$('.gallery_slick').slick({
		arrows: false,
		autoplay:false,
    dots: true,
		autoplaySpeed:600,
		slidesToShow: 3,
		centerMode: false,
		slidesToScroll: 1,
    // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		  responsive: [
		  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
	});
});

// --==================--GALLERY SLICK SLIDER END--===================--

$('.desktop_menu ul li a').click(function(){
  // applying again smooth scroll on menu items click
  $('html').css("scrollBehavior", "smooth");
});

// --===================--HTML SMOOTH END--====================--

(function($) {
  'use strict';

  $('.html').rProgressbar({
      percentage: 100,
      fillBackgroundColor: '#1abc9c'
  });
  $('.css').rProgressbar({
      percentage: 94,
      fillBackgroundColor: '#2ecc71'
  });


  $('.BOOTSTRAP').rProgressbar({
      percentage: 96,
      fillBackgroundColor: '#9b59b6'
  });


  $('.JAVASCRIPT').rProgressbar({
      percentage: 50,
      fillBackgroundColor: '#34495e'
  });


  $('.RESPONSIVE').rProgressbar({
      percentage: 100,
      fillBackgroundColor: '#f1c40f',
  });

})(jQuery);

//  --========================--Js PRogress Bar--==========================--

  
// $(".js-modal-btn").modalVideo();

// --========================--js Modal--====================--

// $(document).ready(function(){
//   var containerEl1 = document.querySelector('[data-ref="container-1"]');
//     var config = {
//        controls: {
//            scope: 'local'
//        }
//    };
//     var mixer1 = mixitup(containerEl1, config);
// });


// --====================--MIXITUP END--===================--


new WOW().init();

// --===================--wow js--======-------=======--

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#999"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.9,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
