$(document).ready(function(){
  // весь ваш код

  // $('#carouselOne').owlCarousel({
  // 	item:1,
  // 	nav: true,
  // 	dots: true,
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



 // 	if($(window).width() < 321) {
 //    	window.onload = function(){
	//     var b1 = document.getElementById("b1");
	//     var b2 = document.getElementById("b2");
	//     b1.parentNode.insertBefore(b2, b1);
	// }
	// } else {
	//     window.onload = function(){
	//     var b1 = document.getElementById("b1");
	//     var b2 = document.getElementById("b2");
	//     b1.parentNode.insertBefore(b1, b2);
	// }
	// }



// 	if(window.matchMedia('(min-width: 320px)').matches)
// 	{
// 	    window.onload = function(){
// 	    var b1 = document.getElementById("b1");
// 	    var b2 = document.getElementById("b2");
// 	    b1.parentNode.insertBefore(b2, b1);
// 	   } 
// }

});
