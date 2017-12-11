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
});




window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".copyrights").show();
    } else {
        $(".copyrights").hide();
    }


    $(".scroller").click(function () {
        $('html,body').animate({
            scrollTop: $(".margin-110").offset().top
        },
            'slow');
    });

};




var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});



$(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $("#roadmap").position();

    if (y > (x.top - 50)) { // -50 so things don't overlap
        animations();
    }
    else {
        removeAnimations();
    }
});



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