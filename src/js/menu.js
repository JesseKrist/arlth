let loadingp = $('.preloader');
$(window).width();

$menuState = false
$(window).resize(function() {
if ($(window).width() <= 767) { 
    $(window).scroll(function() {

    if ($('.logo_i').visible()) {
        // The element is visible, do something
        $('#tzt').fadeOut(400)
        $('.menu_item').hide()  && $('.home-brgr').show().fadeIn(500);
    } else {
        $('#tzt').slideDown(300)
    }

    if ($('.promo').visible(true)) {
        $('.menu_item').hide() && $('.home-brgr').show().fadeIn(500);
    } else if ($('.ico_desc').visible(true)) {
        // The element is visible, do something
        $('.menu_item').hide() && $('.priorit-brgr').show();
    } else if ($('.mobile').visible(true)) {
        $('.menu_item').hide() && $('.mob-app-brgr').show();
    } else if ($('.terms').visible(true)) {
        // The element is visible, do something
        $('.menu_item').hide() && $('.reqs-brgr').show();

    } else if ($('.blinks').visible(true)) {
        
        $('.menu_item').hide() && $('.contacts-brgr').show();
    }
     else if ($('.maps').visible(true)) {
        
        $('.menu_item').hide() && $('.location-brgr').show();
    } else {
        // The element is NOT visible, do something else
        $('.menu_item').removeClass('line-v') && $('.menu_item').addClass('line-h');
    }

});
} else {
    location.reload();
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
}
});




$(document).ready(function () {
    $('#lolz').click(function(){
        if ($menuState == false) {
        $('#tzt').show(500);
        $('#lolzx').slideToggle(200);
        $('#lolz').slideToggle(200);
        $('.menu_item').show(500);
        $menuState = false;
        console.log(' burger if== false than set to true')
        } else if ($menuState == true) {
            $('.menu_item').hide();
            $('#tzt').slideToggle();
            $('.menu_item').show();
            $('#tzt').slideToggle();
            $('#lolzx').slideToggle(200);
            $('#lolz').slideToggle(200); 
            $menuState=false;
            console.log(' burger if== true than set to false')  
        }
        
            
    });
    $('#lolzx').click(function(){
        if($menuState == false) {
          $('#tzt').slideToggle(500);
            $('#lolzx').slideToggle(200);
            $('#lolz').slideToggle(200);
            console.log(' X if== false than set to true')  
        } else if ($menuState == true) {
            $('#tzt').slideToggle(500);
            $('.menu_item').hide();
            $('.menu_item').show();
            $('#lolzx').slideToggle(200);
            $('#lolz').slideToggle(200);
            console.log(' X if== true than set to false')  
        }
            
            
    });

});


$(".home-brgr").click(function() {
    $('html, body').animate({
        scrollTop: $("#promo-id").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
    console.log(' link set to true')
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
        scrollTop: $("#blinks-id").offset().top
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
        scrollTop: $("#maps-id").offset().top
    }, 1000);

    $('.menu_item').slideToggle(500);
    $(this).slideToggle(500);
    $('#lolzx').slideUp(200);
    $('#lolz').slideDown(200);
    $menuState = true;
    console.log(' link set to true') 
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
            


