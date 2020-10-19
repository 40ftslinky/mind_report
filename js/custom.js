jQuery(document).ready(function($){
	// Smooth scroll to element. Not necessary but provides a bit of delight
	$("a").click(function() {
		// This prevents the default 'jump to' behaviour if JavaScript is enabled,
		// whilst keeping the functionality there for when JavaScript isn't enabled
		event.preventDefault();
	    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
	    return true;
	}); 
});

$(document).ready(function($) {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.mark a.active').removeClass('active');
						$('.mark a').eq(i).addClass('active');
				}
		});
}).scroll();

$(document).ready(function($) {

//smoothscroll
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

                    $('a').each(function () { // reset classses
                            $(this).removeClass('active');
                    })
                    $(this).addClass('active');

                    var target = $(this).attr("href"); // Set the target as variable
                    var sectHeight = $(".et_pb_section").height();

                    // perform animated scrolling by getting top-position of target-element and set it as scroll target
                    $('html, body').stop().animate({
                            'scrollTop': $(target).offset().top
                    }, 600, function() {
                            location.hash = target; //attach the hash (#jumptarget) to the pageurl
                    });

                    return false;
            });
    });
});
