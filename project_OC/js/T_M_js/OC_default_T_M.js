$(function(){
    $(window).resize(function(){
        if(window.innerWidth < 1024){
            $('#category').addClass('menu-toggle-btn')
        }else{
            $('#category').removeClass('menu-toggle-btn')
        }
    }).resize();
    var count=false;
    $('.menu-toggle-btn').on('click', function(){
        if(count == false){
            $('#menuList li').stop().slideDown('fast');
            count = true;
        }else{
            $('#menuList li').stop().slideUp('fast');
            count = false;
        }
    });
});