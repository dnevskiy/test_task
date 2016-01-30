$(document).ready(function() {

//Set background to fit screen (jquery.background-fit.min.js)
	$(function() {
  	$(".back-to-fit").bg_fit();
	});

// Scroll
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
//Bottom Carousel (owl.carousel.min.js)
	$(".owl-carousel").owlCarousel({
		
		responsive:{
	    0:{
	        items:3
	    },
	    768:{
	        items:6
	    }
		},
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,

	});

// sliderFrostbite =============
$(function() {

	var currImg = $('.show-current-image img'),
			currImgThmb = $('.show-next-image img'),
			currDesc = $('.slide-text'),
			currBullet = $('#slider .bullets span'),
			next = $('#slider .next'),
			prev = $('#slider .prev');	

	currImg.first().addClass('active');
	currImgThmb.eq(1).addClass('active');
	currDesc.first().addClass('active');
	currBullet.first().addClass('active');

	next.click(function(){
		var ind = currImg.filter('.active').index();
		var ind2 = currImgThmb.filter('.active').index();
		if(ind == currImg.length - 1){
			ind = -1
		}
		if(ind2 == currImgThmb.length - 1){
			ind2 = -1
		}
		currImg.eq(ind + 1).addClass('active').siblings().removeClass('active');
		currImgThmb.eq(ind2 + 1).addClass('active').siblings().removeClass('active');
		currDesc.eq(ind + 1).addClass('active').siblings().removeClass('active');
		currBullet.eq(ind + 1).addClass('active').siblings().removeClass('active');
	});
	prev.click(function(){
		var ind = currImg.filter('.active').index();
		var ind2 = currImgThmb.filter('.active').index();
		currImg.eq(ind - 1).addClass('active').siblings().removeClass('active');
		currImgThmb.eq(ind2 - 1).addClass('active').siblings().removeClass('active');
		currDesc.eq(ind - 1).addClass('active').siblings().removeClass('active');
		currBullet.eq(ind - 1).addClass('active').siblings().removeClass('active');
	});

	});

});