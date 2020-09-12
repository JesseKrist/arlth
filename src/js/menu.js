
$(document).ready(function () {
    $('#lolz').click(function(){
        $('#tzt').slideToggle(200);
        $('#lolz').slideUp(200);
        $('#lolzx').slideDown(200);
    });
    $('#lolzx').click(function(){
        $('#tzt').slideToggle(200);
        $('#lolzx').slideUp(200);
        $('#lolz').slideDown(200);
    });

});



$(".home").click(function() {
    $('html, body').animate({
        scrollTop: $(".promo").offset().top
    }, 1000);
});
$(".own-car").click(function() {
    $('html, body').animate({
        scrollTop: $(".terms").offset().top
    }, 1000);
});