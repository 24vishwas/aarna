var swiper = new Swiper(".cement-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
   
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        // when window width is >= 480px
        500: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        992:{
            slidesPerView: 6,
            spaceBetween: 100,
        },
    },
  });





  var swiper = new Swiper(".project-wrapper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  });



// faqq
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const toggleSymbol = element.querySelector('.faq-toggle');

  if (answer.style.maxHeight == '100%') {
      answer.style.maxHeight = '0';
      answer.style.padding = '0';
      toggleSymbol.textContent = '+';
  } else {
      answer.style.maxHeight = '100%';
      answer.style.padding = '30px';
      toggleSymbol.textContent = '-';
  }
}


