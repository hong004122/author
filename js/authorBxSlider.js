$(document).ready(function(){
    $(".slider").bxSlider({
        pagerCustom: '.customPager',
        nextSelector: '.btn_Next',
        prevSelector: '.btn_Prev',
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
})