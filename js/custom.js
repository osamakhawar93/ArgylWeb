toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

var url = "http://35.196.253.127/";

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function subscribe() {
    var name = $.trim($("#s-name").val());
    var email = $.trim($("#s-email").val());

    var error = false;

    if (name == "" || name.length == 0) {
        toastr["error"]("Please enter your name");
        error = true;
    }

    if (email == "" || email.length == 0) {
        toastr["error"]("Please enter your email");
        error = true;
    }

    if (!validateEmail(email)) {
        toastr["error"]("Please enter a valid email");
        error = true;
    }

    if (error) {

    } else {
        $(".loader").show();
        $(".updated").hide();
        $.ajax({
            url: url + 'subscribe/' + name + "/" + email,
            type: 'GET',
            async: false,
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    $("#s-name").val("");
                    $("#s-email").val("");
                    $(".loader").hide();
                    $(".updated").show();
                    toastr["success"]("You have successfully subscribed to our updates");
                } else {
                    toastr["error"](data.message);
                    $(".loader").hide();
                    $(".updated").show();
                }

            },
            error: function (error) {

                $(".loader").hide();
                $(".updated").show();



            }
        });

    }
}

function keyDownForContact(event) {
    if (event.keyCode == 13) {
        contact();
        // rest of your code
    }
}

function keyDownFunction(event) {
    if (event.keyCode == 13) {
        subscribe();
        // rest of your code
    }
}

function contact() {

    var error = false;
    var name = $.trim($("#c-name").val());
    var email = $.trim($("#c-email").val());
    var subject = $.trim($("#c-subject").val());
    var message = $.trim($("#c-message").val());

    if (name == "" || name.length == 0) {
        toastr["error"]("Please enter your name");
        error = true;
    }


    if (email == "" || email.length == 0) {
        toastr["error"]("Please enter an email");
        error = true;
    }


    if (subject == "" || subject.length == 0) {
        toastr["error"]("Please enter a subject");
        error = true;
    }

    if (message == "" || message.length == 0) {
        toastr["error"]("Please enter a message");
        error = true;
    }

    if (!validateEmail(email)) {
        toastr["error"]("Please enter a valid email");
        error = true;
    }



    if (error) {

    } else {


        $(".loader2").show();
        $(".contact-btn-bottom").hide();
        $.ajax({
            url: url + 'contactus',
            type: 'POST',
            data: { name: name, email: email, subject: subject, message: message },
            async: false,
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    $("#c-name").val("");
                    $("#c-email").val("");
                    $("#c-subject").val("");
                    $("#c-message").val("");
                    $(".loader2").hide();
                    $(".contact-btn-bottom").show();
                    toastr["success"]("Message Recieved! We will get back to you shortly");
                } else {
                    toastr["error"](data.message);
                    $(".loader2").hide();
                    $(".contact-btn-bottom").show();
                }

            },
            error: function (error) {

                $(".loader2").hide();
                $(".contact-btn-bottom").show();



            }
        });

    }

}



//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function () {
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();