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
      $(".form-container").hide();
      $(".video-container").show();
      $(".btn-show-video").hide();
      $(".video-container video")[0].play();
    });
    
    $(".btn-show-form").click(function () {
      $(".video-container").hide();
      $(".form-container").show();
      $(".btn-show-video").show(); 
      $(".video-container video")[0].pause(); 
    });
    
});