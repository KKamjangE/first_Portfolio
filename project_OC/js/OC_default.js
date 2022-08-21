$(function(){
    $('#menuList>li').on('mouseenter', function(){ //서브메뉴 오픈
        $(this).find('.subMenuOpen').stop().slideDown('fast');
    });
    $('#menuList>li').on('mouseleave', function(){
        $(this).find('.subMenuOpen').stop().slideUp('fast');
    });
    

    $('#category').on('click', function(){ //서브메뉴 전체 오픈
        $('#menuList>li').find('.subMenu').stop().slideDown('fast').css({
            background:0
        });
        $('#categoryBox').stop().slideDown('fast');
        $('#categoryBg').css({
            display:'block'
        });
        $('.subMenu').removeClass("subMenuOpen");
    });
    $("#categoryBg").on('mouseenter', function(){
        $('#menuList>li').find('.subMenu').stop().slideUp('fast').css({
            background: '#fff'
        });
        $('#categoryBox').stop().slideUp('fast');
        $('#categoryBg').css({
            display:'none'
        });
        $('.subMenu').addClass("subMenuOpen");
        $('.menuselect1 ul').removeClass("subMenuOpen");
    });


    $('#rank-section').on('mouseenter', function(){ //랭킹 오픈
        $("#ranking").stop().slideDown('fast');
    });
    $('#rank-section').on('mouseleave', function(){
        $("#ranking").stop().slideUp('fast');
    });

    var rankListEvent=0;
    var count=0;
    rankListEvent=setInterval(function(){ //랭킹 변경
        var $rankList=$("ul#rankList li");
        var rankListCont=$rankList.eq(count).text();
        $("#rank-sec p").text(rankListCont);
        count++;
        if(count==($rankList.length)) count=0;
    },2000);

    var rankListcolor=0;
    rankListcolor=setInterval(function(){ //랭킹 오픈 색상 변경
        var $rankList=$("ul#rankList li");
        $rankList.eq(count-1).css({
            color:'#ff812a'
        });
        $rankList.eq(count-2).css({
            color:'#000'
        });
    },2000);

    $(window).resize(function(){ //헤더 스크롤 무빙
        if(window.innerWidth > 1024){
            $(document).ready(function(){ //PC
                var $mainM=$('#mainMenu');
                var mainMPos=$mainM.offset().top;
                $(window).on('scroll',function(){
                    var scrollY = window.pageYOffset;
                    if(scrollY>200){
                        $mainM.addClass('menuFixed');
                    }else{
                        $mainM.removeClass('menuFixed');
                    }
                });
            });
        }else{
            $(document).ready(function(){ // T M
                var $mainM=$('header');
                var mainMPos=$mainM.offset().top;
                $(window).on('scroll',function(){
                    var scrollY = window.pageYOffset;
                    if(scrollY>100){
                        $mainM.addClass('T_M_headerFixed');
                    }else{
                        $mainM.removeClass('T_M_headerFixed');
                    }
                });
            });
        }
    }).resize();

    $(window).resize(function(){ //T_M 메뉴 토글버튼
        if(window.innerWidth > 1024){
            $('#category').removeClass('menu-toggle-btn')
        }else{
            $('#category').addClass('menu-toggle-btn')
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