$(function(){
	
		//nav
	  $("nav>ul>li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown();
	  });
	  $("nav>ul>li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp();
	  });

	 //nav 끝	

	  $("#gallery>div>div>ul>li>img").click(function(){
		var pic=$(this).attr('data-url');
		$("#gallery>p>img").attr("src",pic);
		});
		
		
		
		//bxslider

var mySlider=$('ul.slider8').bxSlider({
		mode: 'vertical',
		slideWidth: 386,
		minSlides: 3,
		moveSlides: 1,
		slideMargin: 3,
		pager:false
	  });
	
$(".prev_btn").on("click",function(){
	mySlider.goToPrevSlide();
	return false;
});
	
$(".next_btn").on("click",function(){
	mySlider.goToNextSlide();
	return false;
});

		
 
});
