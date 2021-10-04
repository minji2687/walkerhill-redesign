$(function(){
//예약하기 
	 $("#reservation_modal").hide();//회색배경 숨기기

	
$("section#diningWrap article p a").click(function(){//버튼을 클릭했을 때
	
	$("#reservation_modal").show();//회색배경 보이기
	
	
	});
	
	$("#reservation_modal section .close_btn").click(function(){
		
		$("#reservation_modal").hide();
		
		
	});	

		
		
 
});
