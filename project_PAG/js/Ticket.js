window.onload=function(){}
$(document).ready(function(){
	// $('body').hide();
	// $('body').fadeIn(4000);
    $('td').each(function(){
        $(this).click(function(){
            $(this).toggleClass('on');
            console.log($(this));
        });
    });
    let num = 0;
	var $poster=$('.poster');
	var $showText=$('#ticketPoster p');
	var $ticketImg=$('.ticketImg');
	console.log($showText);
	console.log($ticketImg);
	let imageName = ["포스터05", "포스터02", "포스터03", "포스터04"];
	let textName =['Photographs By YOSIGO','동물,영감의 원천이 되다.','김소연 :화(花)답하다','Roy Fox Lichtenstein'];
	let ex=['ticket_01','ticket_02','ticket_03','ticket_04'];
	$(".right").click(function() {
		if(num == 3) num=0;
		else 	     num++;	
		$showText.html(textName[num]);
		$poster.attr( "src","../img/"+ imageName[num]+".jpg");
		$ticketImg.attr("src","../티켓/"+ ex[num]+".jpg");
	});
	$(".left").click(function() {
		if(num == 0) num=3;
		else 	     num--;	
		$showText.html(textName[num]);
		$poster.attr("src","../img/"+ imageName[num]+".jpg");
		$ticketImg.attr("src","../티켓/"+ ex[num]+".jpg");
	});
});
    