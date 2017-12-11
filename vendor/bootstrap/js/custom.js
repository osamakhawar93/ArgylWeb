$(document).ready(function () {

    AOS.init();
    $(".owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        dots: true,
        items: 2,
        autoWidth:true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]
    });


    $(".scroller").click(function () {
        $('html,body').animate({
            scrollTop: $(".margin-110").offset().top
        },
            'slow');
    });
    
    
 

});




window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".copyrights").show();
    } else {
        $(".copyrights").hide();
    }



};



// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



/* $(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $("#roadmap").position();

    if (y > (x.top - 50)) { // -50 so things don't overlap
        animations();
    }
    else {
        removeAnimations();
    }
}); */



function animations() {


    $('#first').animate({ opacity: '1' }, 500).delay(100).queue(function () {
        $('#second').animate({ opacity: '1' }, 500).delay(100).queue(function () {
            $('#third').animate({ opacity: '1' }, 500).delay(100).queue(function () {

                $('#fourth').animate({ opacity: '1' }, 500).delay(100).queue(function () {

                    $('#fifth').animate({ opacity: '1' }, 500).delay(100).queue(function () {

                    });


                });


            });
        });
    });


}


function removeAnimations(){
    $('#first').animate({ opacity: '0' }, 1).delay(1).queue(function () {
        $('#second').animate({ opacity: '0' }, 1).delay(1).queue(function () {
            $('#third').animate({ opacity: '0' }, 1).delay(1).queue(function () {

                $('#fourth').animate({ opacity: '0' }, 1).delay(1).queue(function () {

                    $('#fifth').animate({ opacity: '0' }, 1).delay(1).queue(function () {

                    });


                });


            });
        });
    });
}