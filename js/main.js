//-------------------наличие файла в инпуте
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-icon-wrapper').innerText;

    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.input__file-icon-wrapper').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.input__file-icon-wrapper').innerText = labelVal;
    });
});


//---------------------SLIDER
$(function () {
    $(".main-content_slider").slick({
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 6000,
        arrows: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false,

                },
            },
            {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,

                },
            },
        ],
    });
});
//==========счетчик слайдов
$(".main-content_slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
});


//=======================Send Form
$(document).ready(function () {
    $('.form').submit(function () {
        $.ajax({
            type: "POST",
            url: "form.php",
            data: $(this).serialize(),
        })
        // .done(function () {
        //     $('.js-overlay-thank-you').fadeIn();
        //     $(this).find('input').val('');
        //     $('#form').trigger('reset');
        // });
        // return false;
    });
});