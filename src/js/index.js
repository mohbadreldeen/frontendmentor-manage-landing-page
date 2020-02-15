

document.addEventListener("DOMContentLoaded", function() {
    adjustTestimonialsHeight();
    window.addEventListener('resize', adjustTestimonialsHeight);
    
  });

  function adjustTestimonialsHeight(){
    var testimonials = document.querySelectorAll('.testimonial-col')
    var maxHeight = 0;
    testimonials.forEach(function(e,i){
        var currentHeight = e.querySelector('.testimonial-content').clientHeight;
        if( currentHeight > maxHeight )
            maxHeight = currentHeight
    })
    
    testimonials.forEach(function(e,i) {
        e.style.height = maxHeight + 45 + 'px';
    })
  }
 
var slider = tns({
    "container": '#testimonials-slider',
    "items": 3,
    "slideBy": 1,
    "controls": false,
    "gutter": 30,
    "navPosition": "bottom",
    "responsive": {
        "0": {
          "items": 1,
          "edgePadding": 20,
          "gutter": 30,
        },
        "670": {

            "items": 2,
            "edgePadding": 0,
          },
        "980": {
        "edgePadding": 0,
            nav:false,
          "items": 3,
          "fixedWidth": 540,
          "center" :true,
        }
      },
    "mouseDrag": true,
    "lazyload": true,
    "arrowKeys": true,
  });

  var menuToggle = document.getElementById('nav-toggle');
  
    menuToggle.addEventListener("click", function(){
        var nav = document.getElementById('nav-container');
        var navContent = nav.querySelector('.nav-content');
        if(!nav.classList.contains('active')){
            nav.classList.add('opening');
            nav.style.height = navContent.clientHeight+ 40 + 'px';
            setTimeout(function(){
                nav.classList.remove('opening');
                nav.classList.add('active');
            }, 700)
        }else{
            nav.style.height = '0px';
            nav.classList.remove('active');
        }
    }); 