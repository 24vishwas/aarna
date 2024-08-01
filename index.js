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


  // ant tab code
// ant design for library section
// Library filter
const stepsFilter = document.querySelector(".steps-filter");
const stepsItem = document.querySelectorAll(".steps-item");

// Add 'active' class to the first filter item initially
const stepsFirstFilter = stepsFilter.querySelector(".filter-item");
stepsFirstFilter.classList.add("active");

// Get the filter value of the first filter item
const stepsFirstValue = stepsFirstFilter.getAttribute("data-filter");

// Show items corresponding to the first filter value
stepsItem.forEach(item => {
    if (item.classList.contains(stepsFirstValue) || stepsFirstValue === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
    } else {
        item.classList.remove("show");
        item.classList.add("hide");
    }
});

// Event listener for filter items
stepsFilter.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) { // deactivate existing active 'filter-item'
        stepsFilter.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        stepsItem.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
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


