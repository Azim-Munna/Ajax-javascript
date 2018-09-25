  (function ($) {
    "use Strict";

 
  // css  area 
     $(".navbar-collapse ul li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });

     // menu fixed
     $(window).scroll(function() {
        var topscrool = $(window).scrollTop();
        if (topscrool > 10){
             $(".navbar.navbar-area").addClass("sticky");
        }else{
              $(".navbar.navbar-area").removeClass("sticky");
        }

     });
     // $(window).scroll(function() {
     //    var topscrool = $(window).scrollTop();
     //    if (topscrool > 10){
     //         $(".movile_menu").addClass("sticky");
     //    }else{
     //          $(".movile_menu").removeClass("sticky");
     //    }

     // });

     // menu active

     // $(".menu li").on("click", function() {
     //     $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
     // })
     // one page nav 
      $('#one-page-nav').onePageNav({
        currentClass: 'active-pr',
        // changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });
     })(jQuery);