$(document).ready(function(){//시작

  $(".depth").hide();
  $(".dim").hide();

  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({
      right : "0"
    }, 500);
  })

  // 메뉴닫기
  $(".close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({
      right : "-100%"
    }, 500);
  })


  
  $(".mgnb > li").click(function(){
   $(".depth").stop().slideUp();
   $(this).children(".depth").stop().slideDown();
  });

  $(window).scroll(function(){
       
    if($(window).scrollTop() > 70){
      
     $("header").addClass("scroll")
    }
    else{
     $("header").removeClass("scroll")
    }
    });

    AOS.init();

    $("header .depth2, header .depth2-bg").hide();
    $("header .gnb > li").hover(function(){
     $("header .depth2, header .depth2-bg").stop().slideToggle();
    });


    //스와이퍼

    var imgList = new Swiper(".img-list", {
      slidesPerView : 1,
      speed : 1000,
      loop : true,
      autoplay: {
        delay: 2500,
        disableOnlnteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      breakpoints : {
        800 : {
          slidesPerView : 2,
          spaceBetween : -200,
        },
        1200 : {
          slidesPerView : 3,
          spaceBetween : -200,
        }
      }
  }); 

  // var swiper = new Swiper(".mySwiper", {
  //   autoplay: {
  //    delay: 0,
  //    stopOnLastSlide: false,
  //    disableOnInteraction: true,
  // },
  // speed:5000,
  // loop:true,
  // slidesPerView: "auto",
  // loopedSlides: 5, //noSwiping : true,
  // observer:true, observeParents:true,
  // });

  var swiper = new Swiper(".mySwiper1", {
    autoplay: {
     delay: 0,
     stopOnLastSlide: false,
     disableOnInteraction: true,
  },
  speed:5000,
  loop:true,
  slidesPerView: "auto",
  loopedSlides: 5, //noSwiping : true,
  observer:true, observeParents:true,
  });


  var swiper = new Swiper(".mySwiper2", {
    autoplay: {
     delay: 0,
     stopOnLastSlide: false,
     disableOnInteraction: true,
  },
  speed:5000,
  loop:true,
  slidesPerView: "auto",
  loopedSlides: 5, //noSwiping : true,
  observer:true, observeParents:true,
  });

  
  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-con li").hide();
  $(".tab-con li").eq(0).show();
  $(".tab-btn li a").click(function (e){
    e.preventDefault();
    $(this).parent("li").addClass("active").siblings().removeClass("active");
    var indexNum = $(this).parent("li").index();
    $(".tab-con li").eq(indexNum).show().siblings().hide();
  });

});//끝