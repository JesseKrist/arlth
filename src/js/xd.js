let loadingp = $('.preloader');
$(window).width();
var width = $(window).width(); 
var height = $(window).height(); 

$menuState = false

$(window).scroll(function() {
if ((width <= 767)) {
    $menuState = false           
}
}); 

$(window).scroll(function() {
    if ($('.promo').visible(true)) {
        // The element is visible, do something
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
        $('.home').removeClass('line-h') && $('.home').addClass('line-v');

    } else if ($('.ico_desc').visible(true)) {
        // The element is visible, do something
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
        $('.priorit').removeClass('line-h') && $('.priorit').addClass('line-v');

    } else if ($('.mobile').visible(true)) {
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
        $('.mob-app').removeClass('line-h') && $('.mob-app').addClass('line-v');
    
    } else if ($('.terms').visible(true)) {
        // The element is visible, do something
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
        $('.reqs').removeClass('line-h') && $('.reqs').addClass('line-v');

    } else if ($('.blinks').visible(true)) {
        
        $('.contacts').removeClass('line-h') && $('.contacts').addClass('line-v');
        
    }
     else if ($('.maps').visible(true)) {
        
        $('.location').removeClass('line-h') && $('.location').addClass('line-v');
        
    } else {
        // The element is NOT visible, do something else
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
    }
});


$(document).ready(function () {
    $('#lolz').click(function(){
        if($menuState == false) {
            $('.menu_item').slideToggle(500);
            $(this).slideToggle(500);
            $('#lolzx').slideUp(200);
            $('#lolz').slideDown(200);
            $menuState = true;
            console.log('Op if==chertila works')
        } else if($menuState == true) {
            $('#tzt').slideToggle()
            $('.menu_item').show();
            $('#tzt').slideToggle(500).fadeIn(500);
            $('#lolz').slideUp(200);
            $('#lolzx').slideDown(200);
            $menuState=false;
            console.log('Op if==true-chertila works')

        }
        
    });
    $('#lolzx').click(function(){
        $('#tzt').slideToggle(500);
        $('#lolzx').slideUp(200);
        $('#lolz').slideDown(200);
    });

});



$(".home-brgr").click(function() {
    $('html, body').animate({
        scrollTop: $(".promo").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".priorit-brgr").click(function() {
    $('html, body').animate({
        scrollTop: $(".ico_desc").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".mob-app-brgr").click(function() {
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
$(".reqs-brgr").click(function() {
    $('html, body').animate({
        scrollTop: $("#reqp").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".contacts-brgr").click(function() {
    $('html, body').animate({
        scrollTop: $(".blinks").offset().top
    }, 500);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
});
$(".location-brgr").click(function() {
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

            $(window).on('load', function() {
                loadingp.fadeOut().end().delay(400).fadeOut('slow');
                return false;
            });
            


            $(".priorit-brgr").click(function() {
                $('html, body').animate({
                    scrollTop: $("#ico_desc-id").offset().top
                }, 1000);
            
                $('.menu_item').slideToggle(500);
                $(this).slideToggle(500);
                $('#lolzx').slideUp(200);
                $('#lolz').slideDown(200);
                $menuState = true;
                console.log(' link set to true') 
            });
            
            $(".mob-app-brgr").click(function() {
                $('html, body').animate({
                    scrollTop: $("#mobile-id").offset().top
                }, 1000);
            
                $('.menu_item').slideToggle(500);
                $(this).slideToggle(500);
                $('#lolzx').slideUp(200);
                $('#lolz').slideDown(200);
                $menuState = true;
                console.log(' link set to true')
            });
            
            $(".reqs-brgr").click(function() {
                $('html, body').animate({
                    scrollTop: $("#terms-id").offset().top
                }, 1000);
            
                $('.menu_item').slideToggle(500);
                $(this).slideToggle(500);
                $('#lolzx').slideUp(200);
                $('#lolz').slideDown(200);
                $menuState = true;
                console.log(' link set to true') 
            });
            
            $(".contacts-brgr").click(function() {
                $('html, body').animate({
                    scrollTop: $("#maps-id").offset().top
                }, 500);
            
                $('.menu_item').slideToggle(500);
                $(this).slideToggle(500);
                $('#lolzx').slideUp(200);
                $('#lolz').slideDown(200);
                $menuState = true;
                console.log(' link set to true') 
            });
            
            $(".location-brgr").click(function() {
                $('html, body').animate({
                    scrollTop: $("#blinks-id").offset().top
                }, 1000);
            
                $('.menu_item').slideToggle(500);
                $(this).slideToggle(500);
                $('#lolzx').slideUp(200);
                $('#lolz').slideDown(200);
                $menuState = true;
                console.log(' link set to true') 
            });            


