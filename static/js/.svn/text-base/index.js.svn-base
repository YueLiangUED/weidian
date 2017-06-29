var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

$(".w-nav-banner a").click(function () {
//    $(this).addClass("active").siblings("a").removeClass("active");
    var _index = $(".w-nav-banner a").index($(this));
//    if(_index == 1){
//        $('.w-nav-inner').animate({
//            scrollLeft:  '0px'
//        }, 200);
//    }else if(_index == 2){
//        $('.w-nav-inner').animate({
//            scrollLeft:  '0px'
//        }, 200);
//    }else if(_index == 3){
//        $('.w-nav-inner').animate({
//            scrollLeft:  '140px'
//        }, 200);
//    }
    switch (_index) {
        case 0:
            $('html,body').animate({
                scrollTop: 0 + 'px'
            }, 800);
            break;
        default:
            var offsetTop = $(this).closest('.header').next().find(".m-floor").eq(_index-1).offset().top-window.baseSize*(0.88+0.6);
            $('html,body').animate({
                scrollTop: offsetTop + 'px'
            }, 800);
            break;
    }
});
$(window).scroll(function(){
    var DT = $(document).scrollTop();
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if(DT - $(".contanier").offset().top > 0){
        $(".w-nav-banner a").eq(0).addClass('active').siblings("a").removeClass("active");
        $('.w-nav-inner').css({'transform':  'translate3d(-'+scrollTop/10+'px, 0px, 0px)'});
        for (i=0; i<5; i++){
            if(DT + (document.documentElement.style.fontSize.split("px")[0]) * (1 + 0.82) - $(".m-floor").eq(i).offset().top > 0){ //判断滚动条位置
                $(".w-nav-banner a").eq(i+1).addClass("active").siblings("a").removeClass("active");	//给当前导航加c类
                if(scrollTop + windowHeight == scrollHeight){
                     $(".w-nav-banner a").eq(6).addClass("active").siblings("a").removeClass("active");
                 }
            }
        }
    }

});

$(".footer .nav-footer .nav-menu").click(function () {
    $(this).addClass("active").siblings(".nav-menu").removeClass("active");
})

// $(".icon-menu-box .more").click(function () {
//     if ($(this).hasClass("open")) {
//         $(this).removeClass("open");
//         $(this).parent().parent().find(".shop").animate({
//             bottom: window.baseSize * 1.03 + "px",
//             right: window.baseSize * 0.23 + "px",
//             opacity: 1
//         }, 500);
//         $(this).parent().parent().find(".service").animate({
//             bottom: window.baseSize * 0.23 + "px",
//             right: window.baseSize * 1.03 + "px",
//             opacity: 1
//         }, 500);
//     } else {
//         $(this).addClass("open");
//         $(this).parent().parent().find(".service").animate({
//             bottom: "0",
//             right: "0",
//             opacity: 0
//         }, 500);
//         $(this).parent().parent().find(".shop").animate({
//             bottom: "0",
//             right: "0",
//             opacity: 0
//         }, 500);
//     }
// });

// 解决键盘弹出时候,固定定位样式错乱的问题
$("input").focus(function () {
    $(".footer").hide();
    $(".icon-menu-box").hide();
    $(".header").css('position', 'static');
    $(".w-nav-banner").css('position', 'static');
    $(".contanier").css('padding-top', '0');
})
$("input").blur(function () {
    $(".footer").show();
    $(".icon-menu-box").show();
    $(".header").css('position', 'fixed');
    $(".w-nav-banner").css('position', 'fixed');
    $(".contanier").css('padding-top', '0.88rem');
})

var NavBanner = new iScroll('NavBanner', {
    eventPassthrough : true,
    hScrollbar : false,
    vScrollbar : false,
    freeScroll : false,
    scrollX : true,
    scrollY : false,
    bounce : true,
    momentum : false,
    scrollbars : true
});