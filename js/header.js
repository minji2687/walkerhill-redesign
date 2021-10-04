$(function(){
    
	//nav
	  $("nav>ul>li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown();
	  });
	  $("nav>ul>li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp();
	  });

	 //nav 끝
 
 
 	//modal 로그인
$("#login").hide();//회색배경 숨기기

	
$("header ul li.login").click(function(){//버튼을 클릭했을 때
	
	$("#login").show();//회색배경 보이기
	
	
	});
	
	$("#login p.close_btn").click(function(){
		
		$("#login").hide();
		
		
});


//모달 예약하기

$("#reservation_modal").hide();//회색배경 숨기기

	
$("header div p:nth-of-type(2)").click(function(){//버튼을 클릭했을 때
	
	$("#reservation_modal").show();//회색배경 보이기
	
	
	});
	
	$("#reservation_modal section .close_btn").click(function(){
		
		$("#reservation_modal").hide();
		
		
	});	
});
