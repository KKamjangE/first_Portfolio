$(function(){
    var $button=$('#slideBtn li');
    var $visual=$('#banners li');
    var current=0;

    $button.click(function(){ //배너 슬라이드 버튼
        var $tg=$(this);
        var i=$tg.index();
        
        $button.removeClass('select');
        $tg.addClass('select');

        move(i);
    });
    
    function move(i){ //배너 이동함수
        $visual.eq(current).css({left:0}).stop().animate({left:'-100%'});
        $visual.eq(i).css({left:'100%'}).stop().animate({left:0});
        current=i;
    }
    
    setInterval(function(){ //배너 이동
        var n=current+1;
        if(n==$button.length) n=0;
        $button.eq(n).trigger('click');
    },3000);

    var count=0;
    setInterval(function(){ //공지 변경
        var $notiList=$("ul#notiText li");
        var notiListCount=$notiList.eq(count).text();
        $("#noti p").text(notiListCount);
        count++;
        if(count==($notiList.length)) count=0;
    },2000);
    
    $(document).ready(function(){ //장바구니 이동
        var $tabM=$('#userBox');
        var tabMPos=$tabM.offset().top;
        $(window).on('scroll',function(){
            var scrollY = window.pageYOffset;
            if(scrollY>800&&scrollY<5050){
                $tabM.addClass('fixed');
            }else if(scrollY>5050){
                $tabM.removeClass('fixed');
                $tabM.css({
                    top:'5250px'
                });
            }else if(scrollY<950){
                $tabM.removeClass('fixed');
                $tabM.css({
                    top:'950px'
                });
            }
        });
    });

    $(window).resize(function(){
        if(window.innerWidth > 1024){
            dietslide(550);
        }else if(window.innerWidth <= 1024){
            dietslide(450);
        }
    }).resize();
});

function dietslide(imgWidth){
    var $list=$('#diet #dietUl');
    var show_num=2;
    var num=0;
    var total=$('>li', $list).length;
    var liWidth = imgWidth;
    var $copyObj = $('>li:lt('+show_num+')', $list).clone();
    $list.append($copyObj);
    console.log($list);
    $('#right').on('click', function(){ //식단 오른쪽 버튼 클릭시 이동
        if(num==total){
            num=0;
            $list.css({marginLeft:num});
        }
        num++;
        $list.stop().animate({marginLeft:-liWidth*num},500);
        return false;
    });
    $('#left').on('click', function(){ //식단 왼쪽 버튼 클릭시 이동
        if(num==0){
            num=total;
            $list.css({marginLeft:-liWidth*num});
        }
        num--;
        $list.stop().animate({marginLeft:-liWidth*num},500);
        return false;
    });
    setInterval(function(){ //식단 자동 슬라이드
        $('#right').trigger('click');
    }, 4000)
}