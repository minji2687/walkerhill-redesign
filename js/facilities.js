$(function(){
	  $("#warp>article>ul>li>img").click(function(){
		var pic=$(this).attr('data-url');
		$(this).parents('ul').siblings('p').children('img').attr("src",pic);
		});
		
		
 
});
