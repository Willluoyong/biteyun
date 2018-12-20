$(function () {
    //切换语言
    if ($(window).width() > 1080) {
        $('.header .header_right .header_lang').click(function (e) { 
            e.preventDefault();
           $('.header .header_right .header_lang .lang_list').show(); 
           $('.header .header_right .header_lang').hover(function (){},
           function () {  
                $(this).find('ul').hide();
           })
        });
        //点击切换广告
        
        $('.banner_btn span').click(function (e) {
        
            e.preventDefault();
            $(this).addClass('banner_btn_active').siblings().removeClass('banner_btn_active');
            var index = $(this).index();
            if (index == 0) {
                $('.banner_in').children().eq(index).animate({'left':0 + 'rem'});
                $('.banner_in').children().eq(index+1).animate({'left':10 + 'rem'});
            }
            if (index == 1) {
                $('.banner_in').children().eq(index).animate({'left':0+ 'rem'});
                $('.banner_in').children().eq(index-1).animate({'left':-10 + 'rem'});
            }
        });
        //点击下载
        $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_noraml.png) no-repeat","background-size": "cover"});
        $('.app_download_left_btn').hover(function () {
                // over
                $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_hover.png) no-repeat","background-size": "cover"});
            }, function () {
                // out
                $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_noraml.png) no-repeat","background-size": "cover"});
            }
        );
        $('.app_download_left_btn').mousedown(function () {
            $(this).css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_pre.png) no-repeat","background-size": "cover"})
            location.href = "http://cococo.org/apk/BlockChainCommune.apk";
        }).mouseup(function () {
                $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":""})
        })
        
    }else if ($(window).width() <1080) {

        $('.header .header_right .header_lang').click(function (e) { 
            e.preventDefault();
           $('.header .header_right .header_lang .lang_list').show(); 
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
            e.preventDefault();
            $('.cover').show();
            $('.header .header_btn .header_list').show();
            
            return false;
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
            location.href = "http://cococo.org/apk/BlockChainCommune.apk";
        }).mouseup(function () {
                $('.app_download_left_btn').css({"width": "6.89rem", "height": "1.93rem","background":""})
        })
    }








    $(window).resize(function () {
        if ($(window).width() > 1080) {
            $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_noraml.png) no-repeat","background-size": "cover"});
            $('.app_download_left_btn').mousedown(function () { 
                $(this).css({"width": "2.443rem", "height": "0.87rem","background":"url(../img/web_btn_download_pre.png) no-repeat","background-size": "cover"})
            }).mouseup(function () {
                    $('.app_download_left_btn').css({"width": "2.443rem", "height": "0.87rem","background":""})
            })
        }else if ($(window).width() <1080) {
            $('.app_download_left_btn').css({"width": "6.89rem", "height": "1.93rem","background":"url(../img/app_btn_download_nor.png) no-repeat","background-size": "cover",});
            $('.app_download_left_btn').mousedown(function () { 
                $(this).css({"width": "6.89rem", "height": "1.93rem","background":"url(../img/app_btn_download_pre.png) no-repeat","background-size": "cover",})
            }).mouseup(function () {
                    $('.app_download_left_btn').css({"width": "6.89rem", "height": "1.93rem","background":""})
            })
        }
    })
})