$(document).ready(function() {
    console.log("Prefirst");
    $('div:contains("выбрать тур")').on('click', function() {
         $('.overlay').show('slow', function () {
            $('.modal').slideDown();
        })
        console.log("First");
    });

    $('.main_btn.text-center.contact').on('click', function() {
         $('.overlay').show('slow', function () {
            $('.modal').slideDown();
        })
        console.log("Second");
    });

    $('li:contains("расписания туров")').on('click', function() {
        $('.overlay').show('slow', function () {
            $('.modal').slideDown();
        })
        console.log("Third");
    });

    $('.close').on('click', function() {
        $('.modal').slideUp();
        $('.overlay').hide('slow');            
        console.log("Close");
    });

        
});