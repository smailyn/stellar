/* add wow.js class affter document ready*/

/* end wow.js class affter document ready*/

$(document).on("ready",function(){
	
	/* carousel initialize*/
	$(".carousel").carousel({
		interval: 4000,
		pause: "hover"
	})
	/* end carousel */

	/* smoth scroll intialize*/
	$(function() {
	  $('a[href*=#]:not([href=#carousel-stellar]):not([href=#carousel-testimonial]):not([data-toggle])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	/* end nav change*/
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("navbar-change");
	    } else {
	        $(".navbar-fixed-top").removeClass("navbar-change");
	    }
	});


	/* star nav change*/


	$('body').scrollspy({ target: '.navbar-fixed-top' })

	/* end scrollspy*/

	/* scrollTop initialize*/

	/* end scrolltop*/

});