$(function(){
    var $button=$('#slideBtnBox li'); //메인 배너 슬라이드
    var $visual=$('#mainbanner .banner_list li');
    var current=0;
    $button.click(function(){
        var $tg=$(this);
        var i=$tg.index();
        $button.removeClass('active');
        $tg.addClass('active');
        move(i);
    });
    function move(i){
        $visual.eq(current).css({left:0}).stop().animate({left:'-100%'});
        $visual.eq(i).css({left:'100%'}).stop().animate({left:0});
        current=i;
    }
    setInterval(function(){
        var n=current+1;
        if(n==$button.length) n=0;
        $button.eq(n).trigger('click');
    },3000);
    
    $("li.poster").on('mouseenter', function(){ //포스터 상세설명
        $(this).find("#posterText").stop().fadeIn();
    });
    $("li.poster").on('mouseleave', function(){
        $(this).find("#posterText").stop().fadeOut();
    });


    $(".artistBox").on('mouseenter', function(){ //작가 설명 더 보기
        $(this).find('#more').stop().slideDown('fast');
    });
    $(".artistBox").on('mouseleave', function(){
        $(this).find('#more').stop().slideUp('fast');
    });

    $(window).resize(function(){
        if(window.innerWidth > 1100){
            $('#artPoster').AccordionImageMenu({ //전시포스터 아코디언 효과
                position:'horrizontal',
            //    openItem:0,
            openDim:450,
            closeDim:275,
            height:600,
            duration:300,
            border:0
            })
        }else{
            $('').AccordionImageMenu({ //전시포스터 아코디언 효과
                position:'horrizontal',
            //    openItem:0,
            openDim:450,
            closeDim:275,
            height:600,
            duration:300,
            border:0
            })
        }
    }).resize();

    


});