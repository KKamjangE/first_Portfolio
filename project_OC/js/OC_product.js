$(function(){
    $(document).ready(function(){ //장바구니 이동
        var $tabM=$('#userBox');
        var tabMPos=$tabM.offset().top;
        $(window).on('scroll',function(){
            var scrollY = window.pageYOffset;
            if(scrollY>300&&scrollY<1200){ //000~000 사이에서 동작
                $tabM.addClass('fixed');
            }else if(scrollY>1200){ //하단 정지
                $tabM.removeClass('fixed');
                $tabM.css({
                    top:'1400px'
                });
            }else if(scrollY<300){ //상단 시작
                $tabM.removeClass('fixed');
                $tabM.css({
                    top:'410px'
                });
            }
        });
    });
});