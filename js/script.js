$('.app-btn').on({click:function(){
    $('.bar').toggleClass('add');
    $('.mobile-nav').stop().slideToggle(500);
}});


//news
const newsBanner=$('.news-box-wrap .news-item');
let current=0;
let newsInterval;


newsSlide();
function newsSlide(){
    newsInterval=setInterval(function(){
        let prev=newsBanner.eq(current);
        newsMove(prev, 0, '-100%');
        current++;
        if(current==newsBanner.size()) current=0;
        let next=newsBanner.eq(current);
        newsMove(next, '100%', 0);
    },2000);
}
function newsMove(tg, start, end){
    tg.css("top",start).stop().animate({top:end},500);
}

$('.news-box-wrap').hover(function(){
    clearInterval(newsInterval)
},function(){
    newsSlide();
});

//btn
const bottomRadius=$('.btn li');
const line=$('.template-line .title li');
bottomRadius.click(function(){
    bottomRadius.removeClass('on');
    $(this).addClass('on');
    let lines=$(this).index();
    //console.log(lines)
    line.removeClass('on');
    line.eq(lines).addClass('on');
});


//bannerslide
const slideBanner=$('.bannerArea > .area');
const leftBtn=$('.bLeftBtn');
const rightBtn=$('.bRightBtn');
const slideList=$('.bannerArea > .area > li');
const slideWidth=slideList.width();
let setIntervalId;

bannerSlide();
function bannerSlide(){
    //setIntervalId=setInterval(() => {},2000);
    setIntervalId=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('.bannerArea > .area > li:first').insertAfter('.bannerArea > .area > li:last');
            slideBanner.css({left:0});
        });
    },2000);
}
//마우스 올리면 슬라이드 멈춤
//마우스 빠져나오면 슬라이드 움직임



//오른쪽버튼을 누르면 오른쪽으로 한칸이동
//왼쪽버튼을 누르면 왼쪽으로 한칸이동

$('.bRightBtn').click(function(){
    slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
        $('.bannerArea > .area > li:first').insertAfter('.bannerArea > .area > li:last');
        slideBanner.css({left:0});
    });
});

leftBtn.click(function(){
    $('.bannerArea > .area > li:last').insertBefore('.bannerArea > .area > li:first');
    slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500);
});

leftBtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});
rightBtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});

$('.bannerArea').hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   $(document).ready(function(){
//     $('.bxslider').bxSlider();
//   });
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });