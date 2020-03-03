$(document).ready(function() { 
    $(".main_menu_button").click(function(){
		$(".menu ul").slideToggle();
	});
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
			
		});
	});
	$(".fancybox").fancybox();
	$('.slider').each(function() {

		var $this = $(this),
		  $status = $this.closest('.catalog_of_tulips').find('.slider-num');
	  
	  
		$this.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	  
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status.html('<strong>' + (((i) < 10) ? "0" + (i) : i) + '</strong>' + '<small>/' + (((slick.slideCount) < 10) ? "0" + (slick.slideCount) : slick.slideCount) + '</<small>');
		});
	$this.slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScrol:4,
		speed:500,
		infinite:false,
		rows:2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 3
				}
			  },
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 2
				}
			  }
		]
	});
});
});

