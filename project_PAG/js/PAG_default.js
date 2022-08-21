$(function(){
    $("#subMenuBg, #menuList li").on('mouseenter', function(){ //서브메뉴
        $('.subMenu').stop().slideDown('fast');
        $("#subMenuBg").stop().slideDown('fast');
        $('#popupBg').css({
            display : 'block',
            top : '300px'
        })
    });
    $("#subMenuBg, #menuList").on('mouseleave', function(){
        $('.subMenu').stop().slideUp('fast');
        $("#subMenuBg").stop().slideUp('fast');
        $('#popupBg').css({
            display : 'none',
            top : '0'
        })
    });


    $('#loginList .login').on('click', function(){ //로그인 팝업
        $('#popupBg, .popPosi').css({
            display : 'block'
        });
    });
    $('#close').on('click', function(){
        $('#popupBg, .popPosi').css({
            display : 'none'
        });
    });

    $('button#loginBtn').on('click', function(){ //로그인 에러 팝업
        $('#errorPopPosi').css({
            display : 'block'
        });
        $('#popupBg').css({
            zIndex: '1000'
        });
    });
    $('#okBtn').on('click', function(){
        $('#errorPopPosi').css({
            display : 'none'
        });
        $('#popupBg').css({
            zIndex: '500'
        });
    });


    $(document).ready(function(){ //메뉴화면 이동
        var $mainM=$('header');
        var mainMPos=$mainM.offset().top;
        $(window).on('scroll',function(){
            var scrollY = window.pageYOffset;
            if(scrollY>200){
                $mainM.addClass('mainMenuFixed');
            }else{
                $mainM.removeClass('mainMenuFixed');
            }
        });
    });
});