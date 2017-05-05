$(document).ready(function(){
  // весь ваш код

  	$('.single-item').slick({
  		  dots: true,
  		  
  		prevArrow: '<img class="prevArrow" src="/img/leggends-arrow-prev.png" width="40px" height="48px">',
		  nextArrow: '<img class="nextArrow" src="/img/leggends-arrow-next.png" width="40px" height="48px">'
  		
	});

	$('.responsive').slick({
  	 	dots: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1280,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
  		
	});


    




	$('ul.residence-tabs__list').each(function() {
	    $(this).find('li').each(function(i) {
	      $(this).click(function(){
	        $(this)
	        	.addClass('active-li')
	        	.siblings()
	        	.removeClass('active-li')
	          	.closest('div.residence-tabs')
	          	.find('div.residence-tabs__content')
	          	.removeClass('active-tab')
	          	.eq(i)
	          	.addClass('active-tab');
	      	});
	    });
  	});

});
