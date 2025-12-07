$(document).ready(function ($) {
   $('.js-main-nav-button').on('click tap', function() {
       $('#main-nav').toggleClass('is-open');
   });
    
   // erreur console, à voir ..? 

    // $('.js-gallery').magnificPopup({
    //type: 'image',
    //gallery:{
    //enabled:true
    // }
    // }); 

    $(".btn-show-video").click(function () {
      $(".form-container").addClass("down");
      setTimeout(() => {
        $(".form-container").hide().removeClass("down");
        $(".video-container").show().addClass("up");
      }, 500);
      $(".btn-show-video").hide();
      $(".video-container video")[0].play();
    });
    
    $(".btn-show-form").click(function () {
      $(".video-container video")[0].pause(); 
      $(".video-container").addClass("down");
      setTimeout(() => {
        $(".video-container").hide().removeClass("down");
        $(".form-container").show().addClass("up");
        $(".btn-show-video").show(); 
      }, 500);
    });
    
});