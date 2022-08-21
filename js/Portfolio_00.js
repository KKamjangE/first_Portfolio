$(function(){
    window.addEventListener('wheel', function(e){ //원페이지 스크롤
        e.preventDefault(); //스크롤 기본 효과 제거
    },{passive : false});

    var $html = $('html');
    var page = 1;
    var lastPage = $('.main_content_wrap').length;
    $html.animate({scrollTop:0},10);

    $(window).on('wheel', function(e){ //스크롤 이벤트
        if($html.is(':animated')) return; // 이벤트 진행중 스크롤 무시
        if(e.originalEvent.deltaY > 0){ // +값이면 페이지 증가
            if(page==lastPage) return; // 마지막 페이지면 정지
     
            page++;
        }else if(e.originalEvent.deltaY < 0){ // -값이면 페이지 감소
            if(page==1) return; // 첫번째 페이지면 정지
     
            page--;
        }
        onePageMove(page);
        pageBtn();
    });

    function onePageMove(page){ // 이동할 페이지 위치 계산 함수
        var posTop = (page-1) * $(window).height();
        
        $html.animate({  // 페이지 이동
            scrollTop: posTop
        });
        shortCutBtn();
        headerBlink();
        if(page==2){ //페이지별 효과
            page2Event();
        }else if(page==3){
            page3Event();
        }else if(page==4){
            page4Event();
        }
    }
    
    $('#down_btn').on('click', function(){ //페이지 다운버튼
        page++;
        onePageMove(page);
        pageBtn();
    });
    $('#top_btn').on('click', function(){ //페이지 탑버튼
        page=1;
        onePageMove(page);
        pageBtn();
        $('.bottom_section').css({
            zIndex: '8'
        });
    });
    $('#top_btn_w').on('click', function(){ //페이지 탑버튼 화이트
        page=1;
        onePageMove(page);
        pageBtn();
    });

    $('.aboutMeBtn').on('click', function(){ //바로가기 버튼 1
        page=2;
        onePageMove(page);
        pageBtn();
    });
    $('.skillBtn').on('click', function(){ //바로가기 버튼 2
        page=3;
        onePageMove(page);
        pageBtn();
    });
    $('.contactBtn').on('click', function(){ //바로가기 버튼 3
        page=4;
        onePageMove(page);
        pageBtn();
    });

    function pageBtn(){ //페이지 버튼 변경 함수
        if(page==1){
            $('#down_btn').fadeIn();
            $('#top_btn').fadeOut();
            $('#top_btn_w').fadeOut();
        }else if(page==4){
            $('#down_btn').fadeOut();
            $('#top_btn').fadeOut();
            $('#top_btn_w').fadeIn();
        }else{
            $('#down_btn').fadeOut();
            $('#top_btn').fadeIn();
            $('#top_btn_w').fadeOut();
        }
    }

    function shortCutBtn(){ //바로가기버튼 선택 함수
        if(page==1){
            $('.shortCut_btn span').removeClass('select');
        }
        else if(page==2)
        {
            $('.aboutMeBtn').addClass('select');
            $('.skillBtn').removeClass('select');
            $('.contactBtn').removeClass('lastSelect');
        }
        else if(page==3)
        {
            $('.aboutMeBtn').removeClass('select');
            $('.skillBtn').addClass('select');
            $('.contactBtn').removeClass('lastSelect');
        }else{
            $('.aboutMeBtn').removeClass('select');
            $('.skillBtn').removeClass('select');
            $('.contactBtn').addClass('lastSelect');
        }
    }
    function headerBlink(posTop){ //페이지 이동시 헤더깜박임 함수
        $('.header').fadeOut();
        $('.subHeader').fadeOut();
        if(page>1 && page<4){
            $('.subHeader').delay(300).fadeIn();
            $('.shortCut_btn span').addClass('color');
        }else{
            $('.header').delay(300).fadeIn();
            $('.shortCut_btn span').removeClass('color');
        }
    }
    
    var toggleCount=false;
    $('.menu_toggle_btn').on('click', function(){ //메뉴 토글버튼
        $('.menu_toggle_btn').toggleClass('formX');
        $('.goMain').trigger('click');
        if(toggleCount==false){
            toggleCount=true;
            $('.allMenu_section').stop().slideDown('fast');
            $('.subHeader').fadeOut();
            $('.header').fadeIn();
            $('.bottom_section').css({
                zIndex: '4'
            }); 
        }else{
            toggleCount=false;
            $('.allMenu_section').stop().slideUp('fast');
            $('.bottom_section').css({
                zIndex: '8'
            });
            if(page>1 && page<4){
                $('.header').fadeOut();
                $('.subHeader').fadeIn();
            }else{
                $('.header').fadeIn();
            }
        }
    });

    $('.allMenu_section').on('scroll touchmove mousewheel', function(e){ //토글 메뉴에서 스크롤 정지
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    $('.header').on('scroll touchmove mousewheel', function(e){ //헤더에서 스크롤정지
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    $('.subHeader').on('scroll touchmove mousewheel', function(e){ //헤더에서 스크롤정지
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    $('.bottom_section').on('scroll touchmove mousewheel', function(e){ //바텀 메뉴 스크롤정지
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('.AboutMe').on('click', function(){ //토글메뉴에서 바로가기 클릭
        $('.menu_toggle_btn').toggleClass('formX');
        if(toggleCount==false){
            toggleCount=true;
            $('.allMenu_section').stop().slideDown('fast');
            $('.subHeader').fadeOut();
            $('.header').fadeIn();
        }else{
            toggleCount=false;
            $('.allMenu_section').stop().slideUp('fast');
            if(page>1){
                $('.header').fadeOut();
                $('.subHeader').fadeIn();
            }else{
                $('.header').fadeIn();
            }
        }
        $('.aboutMeBtn').trigger('click');
    });

    $('.Skill').on('click', function(){ //토글메뉴에서 바로가기 클릭
        $('.menu_toggle_btn').toggleClass('formX');
        if(toggleCount==false){
            toggleCount=true;
            $('.allMenu_section').stop().slideDown('fast');
            $('.subHeader').fadeOut();
            $('.header').fadeIn();
        }else{
            toggleCount=false;
            $('.allMenu_section').stop().slideUp('fast');
            if(page>1){
                $('.header').fadeOut();
                $('.subHeader').fadeIn();
            }else{
                $('.header').fadeIn();
            }
        }
        $('.skillBtn').trigger('click');
    });

    $('.Contact').on('click', function(){ //토글메뉴에서 바로가기 클릭
        $('.menu_toggle_btn').toggleClass('formX');
        if(toggleCount==false){
            toggleCount=true;
            $('.allMenu_section').stop().slideDown('fast');
            $('.subHeader').fadeOut();
            $('.header').fadeIn();
        }else{
            toggleCount=false;
            $('.allMenu_section').stop().slideUp('fast');
            if(page>1){
                $('.header').fadeOut();
                $('.subHeader').fadeIn();
            }else{
                $('.header').fadeIn();
            }
        }
        $('.contactBtn').trigger('click');
    });

    $('.Project').on('click', function(){ //토글메뉴에서 바로가기 클릭
        $('.menu_toggle_btn').toggleClass('formX');
        if(toggleCount==false){
            toggleCount=true;
            $('.allMenu_section').stop().slideDown('fast');
            $('.subHeader').fadeOut();
            $('.header').fadeIn();
        }else{
            toggleCount=false;
            $('.allMenu_section').stop().slideUp('fast');
            if(page>1){
                $('.header').fadeOut();
                $('.subHeader').fadeIn();
            }else{
                $('.header').fadeIn();
            }
        }
        $('.goProject').trigger('click');
        $('.bottom_section').css({
            zIndex: '8'
        });
    });
    
    //----------------------------------------------------------------------------------------------------
    
    $(document).mousemove(function(e){ //메인화면 배경이미지 효과
            var moveX = (e.pageX/50)+"%";
            $('.container #main_content_01 .main_bg_img').css({
                backgroundImage: 'url(../img/main.01.jpg)',
                backgroundPositionX: moveX
            });
        });
    
        $('.main_text h2:first-child').delay(500).animate({ //메인 텍스트 효과
            left: '0',
            opacity: '1'
        }, 800);
        $('.main_text h2:last-child').delay(700).animate({
            left: '0',
            opacity: '1'
        }, 800);
        
    //----------------------------------------------------------------------------------------------------

    function page2Event(){ // 2번 페이지 효과
        for(i=0;i<5;i++){ // 이야기글 효과
            $('.myStory').children().eq(i).delay((i*50)+700).animate({
                left: '0',
                opacity: '1'
            }, 800);
        }
        
        $('.info_box').delay(1000).animate({
            top: '0',
            opacity: '1'
        }, 800)
        
        $('.education_btn').delay(1500).animate({
            opacity: '1'
        }, 500)
    }
    $('.education_btn span').on('mouseenter', function(){
        $('.education_section').css({
            opacity: '1'
        });
    });
    $('.education_btn span').on('mouseleave', function(){
        $('.education_section').css({
            opacity: '0'
        });
    });
    
    //----------------------------------------------------------------------------------------------------
    
    function page3Event(){ //퍼센트 바 효과
        $('.html_section .skill_bar').delay(300).animate({
            height: '180'
        }, 500);
        $('.html_section .interest_bar').delay(500).animate({
            height: '200'
        }, 500);
    
        $('.css_section .skill_bar').delay(300).animate({
            height: '180'
        }, 500);
        $('.css_section .interest_bar').delay(500).animate({
            height: '190'
        }, 500);
        
        $('.js_section .skill_bar').delay(300).animate({
            height: '160'
        }, 500);
        $('.js_section .interest_bar').delay(500).animate({
            height: '200'
        }, 500);
    
        $('.psd_section .skill_bar').delay(300).animate({
            height: '150'
        }, 500);
        $('.psd_section .interest_bar').delay(500).animate({
            height: '140'
        }, 500);
    
        $('.ai_section .skill_bar').delay(300).animate({
            height: '120'
        }, 500);
        $('.ai_section .interest_bar').delay(500).animate({
            height: '60'
        }, 500);
    
        $('.skill_box span').delay(800).animate({
            opacity: '1'
        },300)
    
        for(i=0;i<5;i++){ //프로그램 아이콘 효과
            $('.skill_box').children('img').eq(i).delay((i*50)+500).animate({
                bottom: '0',
                opacity: '1'
            }, 800);
        }
    
        $('.percent_info').delay(1000).animate({ //퍼센트 정보 효과
            opacity: '1'
        }, 800);
        $('.another_section').delay(1000).animate({ //다른 프로그램버튼 효과
            opacity: '1',
            top: '0'
        }, 800);
    }

    $('.another_section span').on('mouseenter', function(){ //다룰 줄 아는 다른 프로그램
        $('.another_box').stop().slideDown();
    });
    $('.another_section span').on('mouseleave', function(){ //다룰 줄 아는 다른 프로그램
        $('.another_box').stop().slideUp();
    });
    //----------------------------------------------------------------------------------------------------
    
    var mantcursor=document.querySelector('.endMant h3');
    var typingBool = false;
    function mantBlink(){ //마무리 멘트 커서 블링크
        mantcursor.classList.toggle('active');
    }
    setInterval(mantBlink, 500); //0.5초마다 블링크

    function page4Event(){
        var mantTxt = '저의 포트폴리오를 봐주셔서 감사합니다.';
        var typingCount = 0;
        
        mantTxt=mantTxt.split("");
        
        if(typingBool==false){ //타이핑 한번만 실행
            typingBool=true;
            var typingInt = setInterval(typing, 100);
        }
        
        function typing(){ //마무리 멘트 타이핑 함수
            if(typingCount<mantTxt.length){ //글자수만큼 동작
                $(".endMant h3").append(mantTxt[typingCount]);
                typingCount++;
            }else{ 
                clearInterval(typingInt); //멈춤
            } 
        }

        $('.content_box').stop().delay(300).animate({ //연락처박스 효과
            top: '0',
            opacity: '1'
        }, 500);

        $('.map_section').stop().delay(500).animate({ //지도박스 효과
            opacity: '1'
        }, 700);
    }

    //----------------------------------------------------------------------------------------------------


    $('.project_section').on('scroll touchmove mousewheel', function(e){ //프로젝트에서 스크롤정지
        e.preventDefault();
        e.stopPropagation();
    });

    $('.goProject').on('click', function(){
        $('.project_section').stop().animate({
            left: '0'
        });
        $('.bottom_section a').css({
            color: '#000'
        });
        $('.bottom_section').css({
            position: 'fixed'
        });
        $('.goMain').removeClass('select');
        $('.goProject').addClass('select');
        $('.header').fadeOut();
        $('.subHeader').fadeIn();
    });

    $('.goMain').on('click', function(){
        $('.project_section').stop().animate({
            left: '-100%'
        });
        $('.bottom_section a').css({
            color: '#fff'
        });
        $('.bottom_section').css({
            position: 'absolute'
        });
        $('.goMain').addClass('select');
        $('.goProject').removeClass('select');
        $('.header').fadeIn();
        $('.subHeader').fadeOut();
    });

    $('.review_txt_box').off('scroll touchmove mousewheel'); //텍스트박스 스크롤 가능하게

    $('.pbBox').on('mouseenter', function(){ //프로젝트 작업내용 효과
        $(this).find('.work_info').css({
            top: '0'
        });
    });
    $('.pbBox').on('mouseleave', function(){
        $(this).find('.work_info').css({
            top: '100%'
        });
    });
});