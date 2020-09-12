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

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".priorit").click(function() {
    $('html, body').animate({
        scrollTop: $(".ico_desc").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
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
        scrollTop: $("#reqp").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".contacts").click(function() {
    $('html, body').animate({
        scrollTop: $(".blinks").offset().top
    }, 500);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".menu_item_l").click(function() {
    $('html, body').animate({
        scrollTop: $(".promo_text").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});



			// Helper visible check funtion
			function isVisible(elem, heading, container) {
				var isVisible = typeof container !== 'undefined' && container !== null ? $(elem).visible(false, false, 'both', container) : $(elem).visible(),
						$heading = $(heading);

				$heading.find('span').text(isVisible);

            }
$(window).scroll(function() {
    if ($('.ico_blocks_t').visible(true)) {
        // The element is visible, do something
        $('.priorit').removeClass('line-h') && $('.priorit').addClass('line-v');

    } else if ($('.promo').visible(true)) {
        // The element is visible, do something
        $('.home').removeClass('line-h') && $('.home').addClass('line-v');
    
    } else if ($('#xdd').visible(true)) {
        // The element is visible, do something
        $('.reqs').removeClass('line-h') && $('.reqs').addClass('line-v');
    
    } else if ($('.blinks').visible(true)) {
        // The element is visible, do something
        $('.contacts').removeClass('line-h') && $('.contacts').addClass('line-v');
    } 
    
    else {
        // The element is NOT visible, do something else
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
    }  
});           
            


