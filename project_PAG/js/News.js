window.onload=function(){}
$(document).ready(function(){
    $('body').hide();
    $(function() {
        $('body').fadeIn(2000);
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100){
                $('#newsText').fadeIn(3000);
            } else {
                $('#newsText').fadeOut(0);
            }
            if ($(this).scrollTop() > 1100) {
                $('#nextBar').fadeIn(3000);
            } else {
                $('#nextBar').fadeOut(0);
            }
            if ($(this).scrollTop() > 1200) {
                $('#footer').fadeIn(3000);
            } else {
                $('#footer').fadeOut(0);
            }
        });
    });
});

    // $(function() {
    //     $(window).scroll(function() {
    //         if ($(this).scrollTop() > 1100) {
    //                 $('#nextBar').fadeIn(3000);
    //         } else {
    //             $('#nextBar').fadeOut();
    //         }
    //     });
    // });