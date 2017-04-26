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


  // 	@media (min-width:320px){
  // 		window.onload = function(){
	 //    var b1 = document.getElementById("b1");
	 //    var b2 = document.getElementById("b2");
	 //    b1.parentNode.insertBefore(b2, b1);
 	// 	}
 	// }
 	if($(window).width() < 321) {
    	window.onload = function(){
	    var b1 = document.getElementById("b1");
	    var b2 = document.getElementById("b2");
	    b1.parentNode.insertBefore(b2, b1);
	}
	} else {
	    window.onload = function(){
	    var b1 = document.getElementById("b1");
	    var b2 = document.getElementById("b2");
	    b1.parentNode.insertBefore(b1, b2);
	}
	}

});
