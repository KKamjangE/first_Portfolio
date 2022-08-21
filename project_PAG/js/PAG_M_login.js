$(function(){
    $('button#loginBtn').on('click', function(){ //로그인 에러 팝업
        $('#popUpBg').css({
            display : 'block'
        });
    });
    $('#okBtn').on('click', function(){
        $('#popUpBg').css({
            display : 'none'
        });
    });
});