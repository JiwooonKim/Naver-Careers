$(function(){
    // GNB SUBMENU: 하위메뉴가 있을 때 on 클래스 추가
    $('.header .gnb-area .gnb-item').hover(function(){
        if ( $(this).children().length > 1 ) {
            $(this).addClass('on');
            $('.header').addClass('on');
        }
    }, function(){
        if ( $(this).children().length > 1 ) {
            $(this).removeClass('on');
            $('.header').removeClass('on');
        }
    });

    // 모바일에서 메뉴 버튼 클릭시 
    $('.header .btn-menu').click(function(){
        $(this).toggleClass('btn-close');
        $('.header .mobile-area').toggleClass('active');
        $('body').toggleClass('scroll-fix');
    })

    // 모바일에서 메뉴 리스트 클릭시 하위메뉴가 있다면 펼쳐짐
    $('.mobile-area .gnb-item').click(function(){
        if ( $(this).children().length > 1 ) {
            $(this).toggleClass('active');
            $(this).children('.sub-box').toggleClass('active');
        }
    })

    // 검색 select 클릭 시 화살표 변경
    $('.select-box').click(function(){
        $(this).toggleClass('active');
    });

    // 검색 select 색 변경
    $('.select-box').change(function(){
        $(this).css('color','#000');
    });

    /**
     *  모바일 검색 select
     */
    $('.sc-search .group-mobile .btn-search').click(function(){
        $('.group-mobile .wrap').addClass('active');
        $('body').addClass('scroll-fix');
    });

    $('.group-mobile .btn-close').click(function(){
        $('.group-mobile .wrap').removeClass('active');
        $('body').removeClass('scroll-fix');
    });

    $('.group-mobile .check-item .list').click(function(){
        $(this).next('.check-list').toggleClass('active');
    })

    /**
     * 모바일 select
     * @name : 같은 리스트에 묶인 체크박스들의 name
     * 해당 name을 가진 체크박스들만 전체 선택
     */
    $('.btn-all').click(function(){
        let name = $(this).attr('name');
            if( $(this).is(':checked') ) {
                $(`input:checkbox[name=${name}]`).prop('checked',true);
            } else {
                $(`input:checkbox[name=${name}]`).prop('checked',false);
            }
    })
    // 리셋 버튼 클릭하면 모든 체크 해제
    $('.btn-reset').click(function(){
        $('input:checkbox').prop('checked',false);
    })

    // FOOTER 버튼 클릭 시 링크 메뉴 나오기
    $('.footer .btn-site').click(function(){
        $(this).toggleClass('active');
        $('footer .site-list').toggleClass('active');
    })

    // 스와이퍼
    var swiper = new Swiper(".visual-slide", {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        allowTouchMove : false,
        loop: true,
    });
    var peopleSlide = new Swiper(".people-slide", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".btn-arrow.next",
            prevEl: ".btn-arrow.prev",
        },
        breakpoints: {
            1025 : { 
                slidesPerView: 1.1
            }
        }
    });
    var benefitSlide = new Swiper(".benefits-slide", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".btn-arrow.next",
            prevEl: ".btn-arrow.prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            }
        }
    });
})