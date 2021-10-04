$(function(){
  
	//nav
	  $("nav>ul>li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown();
	  });
	  $("nav>ul>li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp();
	  });

	 //nav 끝







//패럴렉스 스크롤링

	 var dHeight=$(window).height();
	 //화면 높이를 함수에 저장

    //$("#wrap>ul>li>a").css('height',dHeight+'px');
	$("#wrap>ul>li").height(dHeight);
 	//이미지를 화면높이에 맞춤
	//자식 div hide
	$("#wrap>ul>li>div").hide();
	
	$("aside>ul>li>a").on('click',function(){
	//버튼을 클릭했을때
		var secPos=$(this).attr('href');
		//클릭한 링크(화면 이미지)를 함수에 저장
		var sec=$(secPos).offset().top;
		
		$('html,body').stop().animate({scrollTop:sec+'px'},700,function(){
			$(secPos).children("div").fadeIn("slow");
			});
			$("aside>ul>li>a").removeClass('on');
			$(this).addClass('on');
			
		//화면을 이미지 top에 맞춤을 함수에 저장
			//$('p#test').text(sec);
		/*$('html,body').stop().animate({scrollTop:sec},700,
		$(secPos).children("div").fadeIn("slow"));*/
			//화면을 스크롤 해서 이미지로 이동함
			return false;
	});

 
 
$(window).on('scroll',function(){
var ht=$(window).height();//윈도우의 높이값을 구한다
var dScroll=$(window).scrollTop();//스크롤된 값을 구한다
//
if(dScroll>=0 && dScroll<ht){//스크롤된 값이 0보다 크거나 같거나 윈도우의 높이값이 스크롤된 값보다 작으면 
	$('aside>ul>li>a').removeClass('on');
	$('aside>ul>li:eq(0)>a').addClass('on');}
//
if(dScroll>=ht && dScroll<ht*2){//윈도우의 높이값과 스크롤된 값이 같거나 
	$('aside>ul>li>a').removeClass('on');
	$('aside>ul>li:eq(1)>a').addClass('on');}
//
if(dScroll>=ht*2 && dScroll<ht*3){
	$('aside>ul>li>a').removeClass('on');
	$('aside>ul>li:eq(2)>a').addClass('on');}
//
if(dScroll>=ht*3 && dScroll<ht*4){
	$('aside>ul>li>a').removeClass('on');
	$('aside>ul>li:eq(3)>a').addClass('on');}
if(dScroll>=ht*4 && dScroll<ht*5){
	$('aside>ul>li>a').removeClass('on');
	$('aside>ul>li:eq(4)>a').addClass('on');}
});
 
 
 
 
//마우스휠 플러그인

	$("#wrap>ul>li").on('mousewheel',function(event,delta){
		//화면에서 마우스 휠을 움직일 때
		
		if(delta>0){
			 
		var prev=$(this).prev().offset().top;
		
		//이전 화면의 탑 값을 저장
		var prevChild = $(this).prev().children('div');
			
		
		$("#wrap>ul>li>div").hide();
		$('html,body').stop().animate({scrollTop:prev},700,
			function(){$(prevChild).fadeIn("fast")});
		
/*var btn=$(this).prev().attr('id');

switch(btn){
	case'#brand00':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(1)>a').addClass('on');
		break;
	case'#brand01':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(2)>a').addClass('on');
		break;
	case'#brand03':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(3)>a').addClass('on');
		break;
	case'#brand04':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(4)>a').addClass('on');
		break;
	case'#brand05':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(5)>a').addClass('on');
		break;


}*/
		
		}
		
		
		//이전 화면으로 이동시킴
		if(delta<0){
		var next=$(this).next().offset().top;
		
		//다음화면의 탑 값을 저장
		var nextChild = $(this).next().children('div');
			
			
			
			
		$("#wrap>ul>li>div").hide();
		$('html,body').stop().animate({scrollTop:next},700,
			function(){$(nextChild).fadeIn("fast")});
			
			
/*var btn=$(this).prev().attr('id');

switch(btn){
	case'#brand00':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(1)>a').addClass('on');
		break;
	case'#brand01':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(2)>a').addClass('on');
		break;
	case'#brand03':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(3)>a').addClass('on');
		break;
	case'#brand04':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(4)>a').addClass('on');
		break;
	case'#brand05':
		$('aside>ul>li>a').removeClass('on');
		$('aside>ul>li:nth-of-type(5)>a').addClass('on');
		break;


}*/
		
			
		}

		//다음 화면으로 이동함
		
	}); 



});
