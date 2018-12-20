$(function () {
    $('.header .header_right .header_lang').click(function (e) { 
        e.preventDefault();
    // $('.header .header_right .header_lang .lang_list').show();
    return false;
    });
    $("body>*").click(function(event){  
        var _con = $('.header .header_right .header_lang .lang_list');   // 设置目标区域  
        if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1  
        //$('#divTop').slideUp('slow');   //滑动消失  
        $('.header .header_right .header_lang .lang_list').hide();          //淡出消失  
        }  
    });
    $('.header .header_right .header_btn').click(function (e) {
        event.stopPropagation();
        // if (!$('.header .header_btn .header_list').is(":visible")) {
        //     $('.header .header_btn .header_list').show();
        
        $('.cover').toggle();
        // }else{
        //     $('.header .header_btn .header_list').hide();
        //     $('.cover').hide();
        //     $('.header .header_right .header_list').children().css('background','');
        // }
        $( '.header .header_btn .header_list' ).toggle();
    });
    $(".cover").click(function(event){  
        //$('#divTop').slideUp('slow');   //滑动消失  
        $('.header .header_right .header_list').hide();
        //淡出消失  
        $('.cover').hide();
        $('.header .header_right .header_list').children().css('background','');
    });
    $('.header_list_login,.header_list_reg').click(function () {
        $(this).css('background','#09a3ec');
    })
    $('.header_list_wirite_book,.header_list_shequ').click(function () {
    $(this).css('background','#a0a0a0');
    })

    //点击下载
    $('.app_download_left_btn').css({"width": "6.89rem", "height": "1.93rem","background":"url(../img/app_btn_download_nor.png) no-repeat","background-size": "cover",});
    $('.app_download_left_btn').mousedown(function () { 
        $(this).css({"width": "6.89rem", "height": "1.93rem","background":"url(../img/app_btn_download_pre.png) no-repeat","background-size": "cover",})
    }).mouseup(function () {
            $('.app_download_left_btn').css({"width": "6.89rem", "height": "1.93rem","background":""})
    })
})