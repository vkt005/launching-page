(function($){
   	
   	// Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
    }); 

	$(document).ready(function() {
		
		// Slider background
		
		$.vegas('slideshow', {
		  backgrounds:[
			{ src:'assets/img/bg1.jpg', fade:1000, delay: 9000 },
			{ src:'assets/img/bg2.jpg', fade:1000, delay: 9000 },
			{ src:'assets/img/bg3.jpg', fade:1000, delay: 9000 },
			{ src:'assets/img/bg4.jpg', fade:1000, delay: 9000 },
			{ src:'assets/img/bg5.jpg', fade:1000, delay: 9000 }
		  ]
		})('overlay', {
		  src:'assets/img/06.png'
		});		

		var countdown =  $('.countdown-time');

		createTimeCicles();

		$(window).on('resize', windowSize);

		function windowSize(){
			countdown.TimeCircles().destroy();
		    createTimeCicles();
			countdown.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
        		countdown.removeClass('animated bounceIn');
        	});
		}

		// TimeCicles - Create and Options
		function createTimeCicles() {
			countdown.addClass('animated bounceIn');
			countdown.TimeCircles({
				bg_width: 0.2,
    			fg_width: 0.04,
				circle_bg_color: '#bbb',
				time: {
    				    Days: {color: '#fff'}
    			,	   Hours: {color: '#fff'}
    			,	 Minutes: {color: '#fff'}
    			,	 Seconds: {color: '#fff'}
    			,	 Seconds: {color: '#fff'}
    			}
			});
			countdown.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
        		countdown.removeClass('animated bounceIn');
        	});
		}

		// Open modal window on click
		$('.more-links a').on('click', function(e) {
			var mainInner = $('.overlay'),
				modal = $('#' + $(this).attr('data-modal'));
					
			mainInner.animate({opacity: 0}, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('active').fadeIn(400);
				countdown.TimeCircles().destroy();
			});
			e.preventDefault();

			$('.modal-close').on('click', function(e) {
				modal.removeClass('active').fadeOut(400, function(){
					mainInner.animate({opacity: 1}, 400);
		       		createTimeCicles();
					countdown.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
        				countdown.removeClass('animated bounceIn');
        			});
				});
				e.preventDefault();
			});
		});

		// Tooltips
		$('.more-links a, .social a').tooltip();
	
		$('.more-links a, .social a').on('click', function () {
			$(this).tooltip('hide')
		});
			
	});
})(jQuery);
