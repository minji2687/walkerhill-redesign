$(function(){
  
	//nav
	  $("nav>ul>li").on("mouseenter",function(){//마우스를 올리면
		$(this).children("ul").stop().slideDown();//그 요소의 자식 ul이 밑으로 내려온다
	  });
	  $("nav>ul>li").on("mouseleave",function(){//li에 마우스를 떼면
		$(this).children("ul").stop().slideUp();//li의 자식 ul이 다시 올라간다
	  });

	 //nav 끝

	

	//메인 비주얼
    
   setInterval(function(){//반복해서 일어남
        $('section#mainvisual>ul>li:last').fadeOut(1500,function(){ //li의 마지막1.5초로 사라지면  //콜백
        $('section#mainvisual>ul>li:eq(1)>p').fadeIn(3000,function(){//2번째의 p가 3초로 생겨난다 //콜백
         $(this).delay(1000).fadeOut(2000);//이것은 1초간 딜레이 되서 나타나고 2초되에 사라진다
         $('section#mainvisual>ul>li:last').prependTo('section#mainvisual>ul').css('display','block');  //마지막 li가 ul앞에 붙고 이것은 나타난다.
            
        });
       // $(this).prependTo('section#mainvisual>ul').css('display','block');  
    });
   },7000);
   
   
   






//offer 넣어보기
	
$("#offerWrap>div:eq(1)").hide();
$("#offer_menu>li>a").on('click',function(){
	var menuOffer = $(this).attr('href');
$("#offerWrap>div").hide();	
$(menuOffer).show();	
$("#offerWrap>div>ul").removeClass('bxslider');
$(menuOffer).children('ul').addClass('bxslider');
	return false;
});




//section Nav
$('section#Nav ul li').mouseenter(function(){
	
	$(this).stop().animate({"background-size":"115%"},700);
	$("section#Nav ul li dl dt,section#Nav ul li dl dd").stop().animate({"color":"rgba(255,255,255,1)"},700);
	
});

$('section#Nav ul li').mouseleave(function(){
		
	$(this).stop().animate({"background-size":"100%"},700);
		$("section#Nav ul li dl dt,section#Nav ul li dl dd").stop().animate({"color":"rgba(255,255,255,.6)"},700);
}); 


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
$("#sns>ul>li.snsBtn").mouseenter(function(){ //lisnsbtn에 마우스를 올리면 
		var sns=$(this).attr("name");//li의 name 속성(.sns)을 sns함수에 담아서 (name 값과 다른 li들의 class 값을 일치시킴)
		  $(sns).animate({"opacity":"0.6"}); //sns의 투명도 값을 애니메이트시킴
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

	
$("header div p:nth-of-type(2)").click(function(){//버튼을 클릭했을 때
	
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

