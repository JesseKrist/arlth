$menuState = false

$(document).ready(function () {
    $('#lolz').click(function(){
        if($menuState == false) {
            $('#tzt').slideToggle(500).fadeIn(500);
            $('#lolz').slideUp(200);
            $('#lolzx').slideDown(200);
            console.log('Op if==false-works')
        } else if($menuState == true) {
            $('#tzt').slideToggle()
            $('.menu_item').show();
            $('#tzt').slideToggle(500).fadeIn(500);
            $('#lolz').slideUp(200);
            $('#lolzx').slideDown(200);
            $menuState=false;
            console.log('Op if==true-works')

        }
        
    });
    $('#lolzx').click(function(){
        $('#tzt').slideToggle(500);
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
$(".ceo-car").click(function() {
    $('html, body').animate({
        scrollTop: $(".terms").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
    console.log('Set to true-works')
});
$(".reqs").click(function() {
    $('html, body').animate({
        scrollTop: $("#xdd").offset().top
    }, 1000);
});
$(".contacts").click(function() {
    $('html, body').animate({
        scrollTop: $(".blinks").offset().top
    }, 500);
});
$(".menu_item_l").click(function() {
    $('html, body').animate({
        scrollTop: $(".promo_text").offset().top
    }, 1000);
});
