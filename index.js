var swiper = new Swiper(".cement-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        500: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992:{
            slidesPerView: 5,
            spaceBetween: 20,
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
  const stepsFilter = document.querySelector(".steps-filter");
  const stepsItem = document.querySelectorAll(".steps-item");
  
  // Add 'active' class to the first filter item initially
  const stepsFirstFilter = stepsFilter.querySelector(".filter-item");
  stepsFirstFilter.classList.add("active");
  
  // Get the filter value of the first filter item
  const stepsFirstValue = stepsFirstFilter.getAttribute("data-filter");
  
  // Show items corresponding to the first filter value
  stepsItem.forEach(item => {
      if (item.classList.contains(libraryFirstValue) || libraryFirstValue === 'all') {
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
          libraryFilter.querySelector(".active").classList.remove("active");
          // activate new 'filter-item'
          event.target.classList.add("active");
          const filterValue = event.target.getAttribute("data-filter");
          libraryItem.forEach((item) => {
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
  