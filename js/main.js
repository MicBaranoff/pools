$(document).ready(function () {
    $("nav").on("click", "a.contacts_link", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);

    });


});
