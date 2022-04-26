window.onload = function () {
    AOS.init({
        once : true
    });

    // 클론코드 관련 안내
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function(){
        modal.fadeOut(300);
    });

    // 패밀리 사이트 기능
    let family_hide = $('.family-hide');
    let family_wrap = $('.family-wrap');
    let family = $('.family');
    
    family_hide.click(function(){
        family_wrap.fadeOut(300);
        $('html').css('overflow-x', 'hidden');
        $('html').css('overflow-y', 'auto');
    });

    family.click(function(){
        family_wrap.fadeIn(300);
        $('html').css('overflow', 'hidden');
    });

    // 메뉴기능
    let gnb_li = $('.gnb > li');
    let gnb_a = $('.gnb li a');
    let submenu_tit = $('.submenu-tit');
    let submenu_tit_img = $('.submenu-tit-img');
    let submenu_list_box = $('.submenu-list-box');
    let submenu_part_box = $('.submenu-part-box');
    let submenu_wrap = $('.submenu-wrap');
    let submenu_wrap_height = [565, 510, 720, 430, 700, 235];
    let header_bottom = $('.header-bottom');
    let header = $('.header');
    let header_index = 10000;
    let header_line = $('.header-line');

    $.each(gnb_a, function(index, item){
        $(this).mouseenter(function(){

            if(index == header_index) {
                return;
            }
            header_index = index;

            gnb_a.removeClass('gnb-focus');
            gnb_a.eq(index).addClass('gnb-focus');
            gnb_li.removeClass('gnb-li-focus');
            gnb_li.eq(index).addClass('gnb-li-focus');
            header_line.addClass('header-line-focus');

            submenu_wrap.css('height', submenu_wrap_height[index]);

            submenu_tit.hide();
            submenu_tit.eq(index).stop().fadeIn(200);
            submenu_tit_img.hide();
            submenu_tit_img.eq(index).stop().fadeIn(200);
            
            submenu_list_box.hide();
            submenu_list_box.eq(index).stop().fadeIn(200);
            
            submenu_part_box.hide();
            if(index == 5) {
                submenu_part_box.stop().fadeIn(200);
            }
            header.addClass('header-focus');
            
        });
    });
    header_bottom.mouseleave(function(event){
        submenu_wrap.css('height', 0);
        header.removeClass('header-focus');
        header_index = 10000;
        // 포커스 해제
        gnb_a.removeClass('gnb-focus');
        gnb_li.removeClass('gnb-li-focus');
        header_line.removeClass('header-line-focus');
    });


    // 비주얼 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        loop : true,
        effect : 'fade',
        fadeEffect : {
            crossFade : true,
        },
        speed : 500,
        navigation : {
            prevEl : '.sw-visual-prev',
            nextEl : '.sw-visual-next',
        },
        autoplay : {
            delay : 2000,
            disableOninteraction : false,
        },

        touchRatio : 0.05,

        pagination : {
            el : '.sw-visual-pg',
            type : 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '/' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function(){
        let temp = $(this).hasClass('sw-visual-pause-active');
        if(temp != true) {
            temp = $(this).addClass('sw-visual-pause-active');
            sw_visual.autoplay.stop();
        } else {
            temp = $(this).removeClass('sw-visual-pause-active');
            sw_visual.autoplay.start();
        }
    });


    // 새소식. 공지사항 탭 메뉴
    let notice_tab_menu = $('.notice-list > li > a');
    let notice_tab_contents = $('.notice-box');
    $.each(notice_tab_menu, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();

            if (index == 4) {
                return;
            };

            notice_tab_menu.removeClass('notice-list-focus')
            notice_tab_menu.eq(index).addClass('notice-list-focus');

            notice_tab_contents.removeClass('notice-box-focus');
            notice_tab_contents.eq(index).addClass('notice-box-focus');

        });
    });

    // 팝업존 슬라이드
    let sw_notice_data = [
        {
            'imgurl' : 'popupzone_01.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_02.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_03.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_04.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_05.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_06.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_07.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_08.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_09.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        },
        {
            'imgurl' : 'popupzone_10.png',
            'alt' : '팝업존',
            'link' : '#',
            'target' : '_self'
        }
    ];

    let sw_notice_total = sw_notice_data.length;
    let sw_notice_html = '';
    for (let i = 0; i < sw_notice_total; i++) {
        let temp_data = sw_notice_data[i];
        sw_notice_html += '<div class="swiper-slide">';
        sw_notice_html += '<a href=\"';
        sw_notice_html += temp_data.link;
        sw_notice_html += '\">';
        sw_notice_html += '<img src=\"images/';
        sw_notice_html += temp_data.imgurl;
        sw_notice_html += '\" alt=\"';
        sw_notice_html += temp_data.alt;
        sw_notice_html += '\" class="sw-notice-link">';
        sw_notice_html += '</a>';
        sw_notice_html += '</div>';
    }
    console.log(sw_notice_html);
    let sw_notice_wrapper = $('.sw-notice .swiper-wrapper');
    sw_notice_wrapper.html(sw_notice_html);

    let sw_notice = new Swiper('.sw-notice', {
        autoplay : {
            delay : 2000,
            disableOninteraction : false,
        },
        loop : true,
        slidesPerView : 2,
        spaceBetween : 15,
        navigation : {
            prevEl : '.sw-notice-prev',
            nextEl : '.sw-notice-next',
        },
        pagination : {
            el : '.sw-notice-pg',
            type : 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '/' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });

    let sw_notice_pause = $('.sw-notice-pause');
    sw_notice_pause.click(function(){
        let temp = sw_notice_pause.hasClass('sw-notice-pause-active');
        if(temp != true) {
            temp = sw_notice_pause.addClass('sw-notice-pause-active');
            sw_notice.autoplay.stop();
        } else {
            temp = sw_notice_pause.removeClass('sw-notice-pause-active');
            sw_notice.autoplay.start();

        }
    });

    
   // 퀵링크 관련 슬라이드
   let sw_quick;
   // 기본 슬라이드 대상
   let sw_quick_div = '.sw-quick-1';  
   // swiper 에 걸어줄 옵션  
   let sw_quick_obj = {
       slidesPerView: 2,
       navigation : {
        prevEl : '.sw-quick-prev',
        nextEl : '.sw-quick-next',
    },
    slidesBetween: 10,
    breakpoints : {
        1000 : {
            slidesPerView: 4,
           }, 
           640 : {
               slidesPerView: 3,
           }, 
       }
   };
   
   // sw_quick_1 = new Swiper('.sw-quick-1', sw_quick_1_obj)
   
   $(window).resize(function(){
       resetQuick();
   });

   function resetQuick() {
       let temp = $(window).width();

       if(temp <= 1190 && sw_quick == undefined){
           console.log('새로 생성되었다.')
        //    $('.sw-quick-1').addClass('quick-list-focus');
           sw_quick = new Swiper(sw_quick_div, sw_quick_obj);        
        }else if(temp <= 1200 && sw_quick != undefined){
            // slide 이미 존재할 때 새로 생성할 필요 없음
        }else{
            if(sw_quick != undefined) {
                // 이미 생성된 slide 삭제
                console.log('삭제됨')
                sw_quick.destroy();
                sw_quick = undefined;

                // swiper wrapper 스타일시트 제거
                $('.sw-quick-1').find('swiper-wrapper').removeAttr('sytle');
                $('.sw-quick-2').find('swiper-wrapper').removeAttr('sytle');
                $('.sw-quick-3').find('swiper-wrapper').removeAttr('sytle');
                
                // swiper slide 스타일시트 제거
                $('.sw-quick-1').find('swiper-slide').removeAttr('sytle');
                $('.sw-quick-2').find('swiper-slide').removeAttr('sytle');
                $('.sw-quick-3').find('swiper-slide').removeAttr('sytle');
                // $('.sw-quick-1').removeClass('quick-list-focus');
            }            
        }
    }
    // 처음에 너비 계산 후 실행
    resetQuick();


    
    // 자주 찾는 서비스 슬라이드
    let sw_service = new Swiper(".sw-service", {
        navigation: {
            nextEl: ".sw-service-next",
            prevEl: ".sw-service-prev",
        },
        slidesPerView: 9,
        slidesPerGroup: 9,
        loop: true,
    });


    // 퀵메뉴 관련 탭 메뉴
    let quick_tab_menu = $('.quick-menu-list li a');
    let quick_tab_desc_txt = $('.quick-desc span');
    let quick_tab_contents = $('.quick-list');
    $.each(quick_tab_menu, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            quick_tab_menu.removeClass('quick-menu-focus');
            quick_tab_menu.removeClass('quick-menu-focus-icon-1');
            quick_tab_menu.eq(index).addClass('quick-menu-focus');
            quick_tab_menu.eq(index).addClass('quick-menu-focus-icon-1');

            quick_tab_desc_txt.removeClass('quick-desc-focus');
            quick_tab_desc_txt.eq(index).addClass('quick-desc-focus');

            quick_tab_contents.removeClass('quick-list-focus');
            quick_tab_contents.eq(index).addClass('quick-list-focus');

            // 탭메뉴 누를 시 slide 처리 진행
            sw_quick_div = `.sw-quick-${index + 1}`;
            console.log(sw_quick_div);
            sw_quick = undefined;
            resetQuick();

        });
    });


    // 산청 슬라이드
    let sw_tour_1 = new Swiper('.sw-tour-1', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween : 0,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-1 .sw-tour-prev',
            nextEl: '.sw-tour-1 .sw-tour-next',
        },
        observer: true,
        observeParents: true,

    });
    let sw_tour_2 = new Swiper('.sw-tour-2', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween : 0,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-2 .sw-tour-prev',
            nextEl: '.sw-tour-2 .sw-tour-next',
        },
        observer: true,
        observeParents: true,

    });
    let sw_tour_3 = new Swiper('.sw-tour-3', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween : 0,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-3 .sw-tour-prev',
            nextEl: '.sw-tour-3 .sw-tour-next',
        },
        observer: true,
        observeParents: true,

    });

    // 산청으로 떠나요 탭메뉴
    let tour_menu = $('.tour-menu-list li a');
    let tour_list = $('.tour-slide .swiper-container');
    let tour_show_index;
    $.each(tour_menu, function (index, item) {
        $(this).click(function(event){
            event.preventDefault();
            tourSelect(index);
            
        });
    });

    function tourSelect(_index){
        if(_index == tour_show_index) {
            return;
        }
        tour_show_index = _index;
        
        tour_menu.removeClass();
        tour_menu.eq(_index).addClass('tour-menu-focus');
        
        tour_list.stop().hide();
        tour_list.eq(_index).fadeIn(); 
        sw_tour_1.slideTo(0);       
        sw_tour_2.slideTo(0);       
        sw_tour_3.slideTo(0); 
        
    }

    tourSelect(0);


    // 배너 슬라이드
    let sw_banner = new Swiper('.sw-banner', {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next',

        },
    })


    // 하단 site-link 기능
    let site_bt = $('.site-bt');
    let site_link_wrap = $('.site-link-wrap');
    $.each(site_bt, function (index, item) {

        $(this).click(function (event) {
            event.stopPropagation();
            let temp = site_link_wrap.eq(index).hasClass('site-link-wrap-focus');
            if (temp) {
            } else {
                site_link_wrap.removeClass('site-link-wrap-focus');
                site_bt.removeClass('site-bt-focus');

            };
            site_link_wrap.eq(index).toggleClass('site-link-wrap-focus');
            site_bt.eq(index).toggleClass('site-bt-focus');
           
        });
    });

    $('html, body').click(function () {
        site_link_wrap.removeClass('site-link-wrap-focus');
        site_bt.removeClass('site-bt-focus');
    });


}