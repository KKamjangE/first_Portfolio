$(function(){
    var menuBtn = false;
    $('#menu-toggle-btn').on('click', function(){ //메뉴토글 버튼
        if(menuBtn==false){
            menuBtn=true;
            $('#menuList li').stop().slideDown('fast');
        }else{
            $('#menuList li').stop().slideUp('fast');
            menuBtn=false;
        }
    });
});