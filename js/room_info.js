$(function(){
  
	//nav
	  $("nav>ul>li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown();
	  });
	  $("nav>ul>li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp();
	  });

	 //nav 끝

	








  


//멤버십

$("#membershipWrap>p.next_btn>a").click(function(){
		$("#membershipBox").animate({marginLeft:"-1200px"});
		$("#membershipWrap>p.next_btn>a").hide();
		$("#membershipWrap>p.prev_btn>a").show();
		return false;
	});
$("#membershipWrap>p.prev_btn>a").click(function(){
		$("#membershipBox").animate({marginLeft:"0px"});
		$("#membershipWrap>p.prev_btn>a").hide();
		$("#membershipWrap>p.next_btn>a").show();
		return false;
	});


/*sns*/
$("#sns>ul>li.snsBtn").mouseenter(function(){
		var sns=$(this).attr("name");
		  $(sns).animate({"opacity":"0.6"});
		});
$("#sns>ul>li.snsBtn").mouseleave(function(){
		var sns1=$(this).attr("name");
		  $(sns1).animate({"opacity":"1"});
		});




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

	
$("header nav p").click(function(){//버튼을 클릭했을 때
	
	$("#reservation_modal").show();//회색배경 보이기
	
	
	});
	
	$("#reservation_modal section .close_btn").click(function(){
		
		$("#reservation_modal").hide();
		
		
	});	

//모달 룸서치

$("#modal_room").hide();//회색배경 숨기기

	
$("#reservationWrap div p a").click(function(){//버튼을 클릭했을 때
	
	$("#modal_room").show();//회색배경 보이기
	
	
	});
	
	$("#modal_room>p").click(function(){
		
		$("#modal_room").hide();
		
		
});



$("#top").on("click",function(){
  $("html, body").animate({
    scrollTop: 0
  }, 500);
});



});

