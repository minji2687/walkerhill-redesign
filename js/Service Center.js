$(document).ready(function(){
  
		//nav
	  $("nav>ul>li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown();
	  });
	  $("nav>ul>li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp();
	  });

	 //nav 끝
	
	
	
 $("#wrap>article>dl>dd>dl>dd:not(:first)").css({"display":"none"});
	  
	  
	  
   $("#wrap>article>dl>dd>dl>dt").click(function(){
		  if (  $(this).next("dd").css("display") == "none" ){
			  
		     $("#wrap>article>dl>dd>dl>dd").slideUp(500);
			  $(this).next("dd").slideDown(500,function(){
				 $('#wrap>article>dl>dd>dl>dt>span>img').attr('src','../images/Servicecenter/skip.png');
				 $(this).prev('dt').find('img').attr('src','../images/Servicecenter/skip_1.png');
			   });
		  }else{
		  		 $(this).next("dd").slideUp(500,function(){
				 $(this).prev('dt').find('img').attr('src','../images/Servicecenter/skip.png');
			   });
		  }
		 
	}); 
		 
$("#wrap article#service02").hide();
$("#wrap div ul li a").click(function(){
$("#wrap article").hide();
var of=$(this).attr("href");
	
	$(of).show();
	return false;
});



});
