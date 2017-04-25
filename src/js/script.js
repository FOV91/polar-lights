$(document).ready(function(){
  // весь ваш код

  // $('#carouselOne').owlCarousel({
  // 	item:1,
  // 	nav: true,
  // 	dots: true,
  // });


    // $('#tab').on('click', function(event){
    // 	event.preventDefault()
	   //  $(this)
	   //    .parent()
	   //    .addClass('regions--active')
	   //    .siblings()
	   //    .removeClass('regions--active')
	      
	    // var activeId = $(this).attr('rel') // tabs2
	    // var activePanel = $('#' + activeId) //tab2
	    // var otherPanel = activePanel.siblings();
	    
	    // otherPanel.hide();
	    
	    // activePanel.addClass('d_active')
	    //   .fadeIn();
	// });


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
