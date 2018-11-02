$(function(){
	
	/* Basic Slider Code */
	
	var position = 1; // set starting position
	
	function makeSlide(pos){ // a function that takes a parameter 'pos', which is the slide you want to end up with after an event
		$('.slider-wrap').children('div').fadeOut(500); // fade out all the slides
		$('.banner' + pos).fadeIn(500); // fade in the slide you want, as in the 'pos' parameter
		$('ol.carousel-indicators').children('li').removeClass('active'); // remove the .active class from all .carousel-indicators
		$('.indicator' + pos).addClass('active'); // add an .active class to the current .indicator
		position = pos;	// set the position to the current slide
	}
	
	$('.right-slider-control').on('click', function(){ // a function for clicking on the right arrow
		if( position === 1){ // if it's currently the first slide... 
			makeSlide(2); // make it the second slide
		} else if (position === 2){ // if it's currently the second slide... 
			makeSlide(3); // make it the third slide
		} else if (position === 3){ // if it's currently the third slide... 
			makeSlide(1); // make it the first slide
		}
		
	});
	
	$('.left-slider-control').on('click', function(){
		if( position === 1){ // if it's currently the first slide... 
			makeSlide(3); // make it the third slide
		} else if (position === 2){ // if it's currently the second slide... 
			makeSlide(1); // make it the first slide
		} else if (position === 3){ // if it's currently the third slide... 
			makeSlide(2); // make it the second slide
		}
		
	});
	
	$('.indicator1').on('click', function(){ // when indicator 1 is clicked, make it the first slide
		makeSlide(1);
	});
	
	$('.indicator2').on('click', function(){ // when indicator 2 is clicked, make it the second slide
		makeSlide(2);
	});
	
	$('.indicator3').on('click', function(){ // when indicator 3 is clicked, make it the third slide
		makeSlide(3);
	});
	
	function rotateSlides(){ // a function that, when called, will rotate the slides one to the right
			if( position === 1){
				makeSlide(2);
			} else if (position === 2){
				makeSlide(3);
			} else if (position === 3){
				makeSlide(1);
			}
		};
	
	var slider = setInterval(rotateSlides, 6000); // every 6000ms call the rotateSlides() function
	
	
	$('div.slider').hover(function(){ // if the banner is hovered, stop the automatic sliding
			clearInterval(slider); // clear the interval
		}, function(){
			slider = setInterval(rotateSlides, 6000); // restart the interval
		}
	);
	
	/* END Basic Slider Code */
});