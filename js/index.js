$(function () {
  // header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("hide");
    } else {
      $("header").removeClass("hide");
    }
  });

  $(".menu").on("click", function () {
    $(".top-slide").stop().slideToggle();
  });

  // visual
  $(function () {
    setInterval(function () {
      $("#visual ul")
        .stop()
        .animate({ "margin-left": "-100%" }, function () {
          $("#visual ul li:first-child").appendTo("#visual ul");
          $("#visual ul").css({ "margin-left": "0" });
        });
    }, 3000);
  });

  $(function () {
    $(".side-nav a").on("click", function () {
      let target = $(this).attr("href");
      let targetTop = $(target).offset().top;
      $("html, body").stop().animate({ scrollTop: targetTop }, 800);
    });
  });

  // con1
  $(".wrap").on("mouseenter", function () {
    $(".card").addClass("on");
  });
  $(".wrap").on("mouseleave", function () {
    $(".card").removeClass("on");
  });
  $(".wrap2").on("mouseenter", function () {
    $(".card2").toggleClass("on");
  });
  $(".wrap2").on("mouseleave", function () {
    $(".card2").removeClass("on");
  });
  $(".wrap3").on("mouseenter", function () {
    $(".card3").toggleClass("on");
  });
  $(".wrap3").on("mouseleave", function () {
    $(".card3").removeClass("on");
  });

  $(window).on("scroll", function () {
    let scr1Top = $(window).scrollTop();

    let con1Top = $(".con1").offset().top;
    if (scr1Top > con1Top - 500) {
      $(".pc").addClass("active");
      $(".side-nav a").removeClass("green");
      $(".side-nav a:nth-child(1)").addClass("green");
    }
    let cardsTop = $(".cards").offset().top;
    if (scr1Top > cardsTop - 800) {
      $(".cards").addClass("active");
    }
  });

  // con2
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 2,
      perSlideRotate: 4,
      slideShadows: false,
    },
  });

  swiper.on("slideChange", function () {
    var currentNum = swiper.realIndex + 1;

    $(".arrnum p").html(currentNum + " <span>/ 5</span>");
  });

  $(".arrnum i:first-child").on("click", function () {
    swiper.slidePrev();
  });

  $(".arrnum i:last-child").on("click", function () {
    swiper.slideNext();
  });

  $(".imgnavi li").on("click", function () {
    const navi = $(this).index();

    swiper.slideTo(navi);
  });

  $(window).on("scroll", function () {
    let scr2Top = $(window).scrollTop();
    let con2Top = $(".con2").offset().top;

    if (scr2Top > con2Top - 500) {
      $(".con2").addClass("active");
      $(".side-nav a").removeClass("green");
      $(".side-nav a:nth-child(2)").addClass("green");
    }
    let rightTop = $(".right").offset().top;
    if (scr2Top > rightTop - 500) {
      $(".right").addClass("active");
    }
  });

  //con3
  $(window).on("scroll", function () {
    let scr3Top = $(window).scrollTop();
    let con3Top = $(".con3").offset().top;

    if (scr3Top > con3Top - 700) {
      $(".side-nav a").removeClass("green");
      $(".side-nav a:nth-child(3)").addClass("green");
    }
  });

  let con3 = $(".con3").offset().top;
  let sc = false;

  $(window).on("scroll", function () {
    let pos = $(this).scrollTop();

    if (pos >= con3 - 500 && !sc) {
      sc = true;

      let num1 = 100000;
      let num2 = 100000;
      let num3 = 100000;
      let num4 = 100000;

      let end1 = 191357;
      let end2 = 182517;
      let end3 = 297600;
      let end4 = 277287;

      let count = 0;

      let timer = setInterval(function () {
        count++;

        num1 += 700;
        num2 += 800;
        num3 += 900;
        num4 += 1000;

        $(".con3 li:nth-child(1) span").text(num1.toLocaleString());
        $(".con3 li:nth-child(2) span").text(num2.toLocaleString());
        $(".con3 li:nth-child(3) span").text(num3.toLocaleString());
        $(".con3 li:nth-child(4) span").text(num4.toLocaleString());

        if (num3 >= end2) {
          clearInterval(timer);

          $(".con3 li:nth-child(1) span").text(end1.toLocaleString());
          $(".con3 li:nth-child(2) span").text(end2.toLocaleString());
          $(".con3 li:nth-child(3) span").text(end3.toLocaleString());
          $(".con3 li:nth-child(4) span").text(end4.toLocaleString());
        }
      }, 20);
    }
  });

  //con4
  $(window).on("scroll", function () {
    let scr4Top = $(window).scrollTop();
    let con4Top = $(".con4").offset().top;

    if (scr4Top > con4Top - 700) {
      $(".con4 .right li").addClass("on");
      $(".side-nav a").removeClass("green");
      $(".side-nav a:nth-child(4)").addClass("green");
    }
  });
});
