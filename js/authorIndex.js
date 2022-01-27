// let authorScreen = null;


$(document).ready(function(){
    // init();
    reponsive();
    mobileNav();
    authortoSayNextSlide();
    // authortoSaySlide();
});

// function init(){
// }

function reponsive(){
    let authorScreen = $(window).width();

    if(authorScreen >= 1050){
        authorDesktopScrollEvent();
    }else if(authorScreen < 767){
        authorMobileScrollEvent();
    }else{
        authorTabletScrollEvent();
    }
}
function authorDesktopScrollEvent(){
    // if(authorScreen >= 1050){
        $(window).scroll(function(){
            let authorDesktopScrollPosition = parseInt(document.documentElement.scrollTop);
            let authorDesktopFullHeight = parseInt(document.body.scrollHeight);
            let authorDesktopScrollLocation = parseInt((authorDesktopScrollPosition) / authorDesktopFullHeight * 100);
            // console.log(authorDesktopScrollPosition);    
            // console.log(authorDesktopFullHeight);
            // console.log(authorDesktopScrollLocation);
            if(authorDesktopScrollLocation >= 7){
                $('.workArea ul li').addClass('active');
            }
            if(authorDesktopScrollLocation > 12){
                $('.portfolioArea ul li').addClass('active');
            }
            if(authorDesktopScrollLocation > 38){
                $('.teamArea  ul li figure div').addClass('active');
            }
            if(authorDesktopScrollLocation > 54){
                $('.priceArea div > ul > li ul li ').addClass('active');
            }
            if(authorDesktopScrollLocation > 65){
                $('.toSayArea ul li:first-child').addClass('slideActive');
            }
        });
    // }
}

function authorTabletScrollEvent(){
    // if(768 >= authorScreen >= 1049){
        $(window).scroll(function(){
            let authorTabletScrollPosition = parseInt(document.documentElement.scrollTop);
            let authorTabletFullHeight = parseInt(document.body.scrollHeight);
            let authorTabletScrollLocation = parseInt((authorTabletScrollPosition) / authorTabletFullHeight * 100);
            console.log(authorTabletScrollPosition);    
            console.log(authorTabletFullHeight);
            console.log(authorTabletScrollLocation);
            if(authorTabletScrollLocation >= 5){
                $('.workArea ul li').addClass('active');
            }
            if(authorTabletScrollLocation > 20){
                $('.portfolioArea ul li').addClass('active');
            }
            if(authorTabletScrollLocation > 42){
                $('.teamArea  ul li figure div').addClass('active');
            }
            if(authorTabletScrollLocation > 55){
                $('.priceArea div > ul > li ul li ').addClass('active');
            }
            if(authorTabletScrollLocation > 64){
                $('.toSayArea ul li:first-child').addClass('slideActive');
            }
        });
    // }
}

function authorMobileScrollEvent(){
        $(window).scroll(function(){
            let authorMobileScrollPosition = parseInt(document.documentElement.scrollTop);
            let authorMobileFullHeight = parseInt(document.body.scrollHeight);
            let authorMobileScrollLocation = parseInt((authorMobileScrollPosition) / authorMobileFullHeight * 100);
            console.log(authorMobileScrollPosition);    
            console.log(authorMobileFullHeight);
            console.log(authorMobileScrollLocation);
            if(authorMobileScrollLocation >= 1){
                $('.workArea ul li').addClass('active');
            }
            if(authorMobileScrollLocation > 18){
                $('.portfolioArea ul li:nth-child(1)').addClass('active');
            }
            if(authorMobileScrollLocation > 19){
                $('.portfolioArea ul li:nth-child(2)').addClass('active');
            }
            if(authorMobileScrollLocation > 21){
                $('.portfolioArea ul li:nth-child(3)').addClass('active');
            }
            if(authorMobileScrollLocation > 23){
                $('.portfolioArea ul li:nth-child(4)').addClass('active');
            }
            if(authorMobileScrollLocation > 25){
                $('.portfolioArea ul li:nth-child(5)').addClass('active');
            }
            if(authorMobileScrollLocation > 27){
                $('.portfolioArea ul li:nth-child(6)').addClass('active');
            }
            if(authorMobileScrollLocation > 33){
                $('.teamArea  ul li:nth-child(1) figure div').addClass('active');
            }
            if(authorMobileScrollLocation > 37){
                $('.teamArea  ul li:nth-child(2) figure div').addClass('active');
            }
            if(authorMobileScrollLocation > 50){
                $('.teamArea  ul li:nth-child(3) figure div').addClass('active');
            }
            if(authorMobileScrollLocation > 50){
                $('.teamArea  ul li:nth-child(4) figure div').addClass('active');
            }
            if(authorMobileScrollLocation > 58){
                $('.priceArea div > ul > li:nth-child(1) ul li ').addClass('active');
            }
            if(authorMobileScrollLocation > 65){
                $('.priceArea div > ul > li:nth-child(2) ul li ').addClass('active');
            }
            if(authorMobileScrollLocation > 73){
                $('.priceArea div > ul > li:nth-child(3) ul li ').addClass('active');
            }
            if(authorMobileScrollLocation > 80){
                $('.toSayArea ul li:first-child').addClass('slideActive');
            }
        });
    // }
}

function mobileNav(){
    $('header span.mobNav').click(function(){
        $('header nav').toggleClass('active');
    });
}

function authortoSayNextSlide(){
    // let count = 0;
    // let tosaySlideLength = tosaySlide.length;
    // let tosaySlideIndex = tosaySlide.eq(count);
    // let nextSlide = currentSlide.nextElementSibling;
    $('.toSayArea > button').click(function(){
        let tosaySlide = $('.toSayArea ul li.slideActive');
        let currentSlide = tosaySlide.attr('data-slideNumb');
        console.log(currentSlide);
        let slideThisBtn = $(this).text();
        if(slideThisBtn == 'next'){
            if(currentSlide < 4){
                tosaySlide.removeClass('slideActive');
                tosaySlide.next().addClass('slideActive');
            }else{
                tosaySlide.removeClass('slideActive');
                $('.toSayArea ul li:first-child').addClass('slideActive')
            }
        }else{
            if(currentSlide > 1){
                tosaySlide.removeClass('slideActive');
                tosaySlide.prev().addClass('slideActive');
            }else{
                tosaySlide.removeClass('slideActive');
                $('.toSayArea ul li:last-child').addClass('slideActive');
            }
        }
    });
}
// $('.toSayArea > button').click(function(){
//     let i = 1;
//     const authorSlideBtn = $(this).text();
//     const authorSlideIndex = $('.toSayArea ul li');
//     const slideLength = authorSlideIndex.length;
//     let authorThisSlide = authorSlideIndex.eq(i);
//     if(authorSlideBtn == 'next'){
//         if(i < slideLength){
//             i++
//             authorSlideIndex.removeClass('active');
//             authorThisSlide.addClass('active');
//             console.log(i);
//         }else if(i >= slideLength){
//             i = 1;
//             authorSlideIndex.removeClass('active');
//             authorSlideIndex.eq(0).addClass('active');
//             console.log(i);
//         }
//     }
//     if(authorSlideBtn == 'prev'){
//         if(i <= 0){
//             i = 4;
//             authorSlideIndex.removeClass('active');
//             authorSlideIndex.eq(3).addClass('active');
//             console.log(i);
//         }else{
//             i--
//             authorSlideIndex.removeClass('active');
//             authorThisSlide.addClass('active');
//             console.log(i);
//         }
//     }
// });