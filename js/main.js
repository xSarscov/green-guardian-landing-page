(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 50, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// Sending mails with EmailJS

const ApiKey = "o5K1B5X-f-DV-Hbyy";
const ServiceID = "service_x4u364c";
const TemplateID = "template_bmu10d4";

const Name = document.querySelector("#name");
const Subject = document.querySelector("#subject");
const Email = document.querySelector("#email");
const Message = document.querySelector("#message");
const SubmitBtn = document.querySelector("#submit-btn");
const Form = document.querySelector("#form");

emailjs.init(ApiKey);

Form.addEventListener("submit", e => {
    e.preventDefault();

    SubmitBtn.innerText = "Espere un momento...";

    const inputfields = {
        name: Name.value,
        subject: subject.value,
        email: Email.value,
        message: Message.value
    };

    emailjs.send(ServiceID, TemplateID, inputfields)
    .then(() => {
        SubmitBtn.innerText = "¡Mensaje enviado correctamente!";
        Form.reset();
    }, (error) => {
        console.log(error);
        SubmitBtn.innerText = "¡Algo salió mal!";
    });
});

