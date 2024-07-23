// javascript
hamburger = document.querySelector(".hamburger");
side_bar = document.querySelector(".side-bar");
btn_close = document.querySelector(".btn-close");
overlay = document.querySelector(".overlay");

console.log(hamburger);
hamburger.addEventListener("click", function(){
          side_bar.classList.add("active");
          overlay.classList.add("active");
})

btn_close.addEventListener("click", function(){
          side_bar.classList.remove("active");
          overlay.classList.remove("active");
})

// jquery
$(document).ready(function () {
    $('.imageslide').hide();
    var s = $('.imageslide');
    var num = s.length;
    var index = 0;
    s.eq(index).show();
    // btn next
    $('.tbnSlideNext').click(function () {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    })

    // btn back
    $('.tbnSlideBack').click(function () {
        s.eq(index).hide();
        index--;
        if (index < 0) {
            index = num - 1;
        }
        s.eq(index).show();
    })
    // Auto slide
    setInterval(() => {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    }, 5000);
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

