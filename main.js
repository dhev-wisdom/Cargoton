$(document).ready(() => {
    const animationContainer = $(".animation-container");
    const pageContents = $(".page-contents");
    const scrollToTopButton = $(".scroll-to-top");
    const headerText = $(".header-text");
    let counterTriggered = false;
    let screen;
    let change = false;

    if ($(window).width() <= 768) screen = "small";
    else screen = "big";
  
    setTimeout(() => {
      animationContainer.remove();
      pageContents.css("visibility", "visible");
    }, 9000);
  
    $(".hover-dropdown .dropdown-menu").on("click", (e) => {
      e.stopPropagation();
    });
  
    scrollToTopButton.on("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    $(window).on("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.addClass("active");
      } else {
        scrollToTopButton.removeClass("active");
      }
    });
  
    headerText.addClass("header-text-visible");

    $(window).on("scroll", function () {
      const counterSection = $('#counter-section')
      const counterElement1 = $('#counter1');
      const counterElement2 = $('#counter2');
      const countTo1 = parseInt(counterElement1.attr("data-count"));
      const countTo2 = parseInt(counterElement2.attr("data-count"));

      const windowBottom = $(this).scrollTop() + $(this).height();
      const sectionTop = counterSection.offset().top;

      if (!counterTriggered && windowBottom > sectionTop) {
        counterTriggered = true;
        let count1 = 0;
        let count2 = 0;

        const counterInterval1 = setInterval(function () {
            if (count1 <= countTo1) {
                counterElement1.text(count1 + '+');
                count1++;
            } else {
                clearInterval(counterInterval1);
            }
        }, 30);
        const counterInterval2 = setInterval(function () {
          if (count2 <= countTo2) {
              counterElement2.text(count2 + '+');
              count2++;
          } else {
              clearInterval(counterInterval2);
          }
      }, 300);
    }
    });
    
    if ($(window).width() <= 768) {
      setupCardSlider();
    }

    $(window).resize(function() {
      if ($(window).width() <= 768) {
        if (screen === "small") change = false;
        else change = true;
        screen = "small";
        if (change === true && screen === "small") setupCardSlider();
        // setupCardSlider();
      } else {
        if (screen === "big") change = false;
        else change = true;
        screen = "big";
        if (change === true && screen === "big") reverseSlideEffect();
        // reverseSlideEffect();
      }
  });

  function setupCardSlider() {
    const carouselSection = $(".carousel-section");
    const innerDiv = $("#sect1-inner-div");
    const slideElement = $("._box");

    innerDiv.removeClass("d-flex-x-around");
    innerDiv.addClass("carousel-inner");
    carouselSection.addClass("carousel slide");
    carouselSection.attr("id", "carouselExampleSlidesOnly");
    carouselSection.attr("data-bs-ride", "carousel");
    slideElement.first().addClass("active");
    slideElement.addClass("carousel-item");
  }

  function reverseSlideEffect() {
    const carouselSection = $(".carousel-section");
    const innerDiv = $("#sect1-inner-div");
    const slideElement = $("._box");

    innerDiv.addClass("d-flex-x-around");
    innerDiv.removeClass("carousel-inner");
    carouselSection.removeClass("carousel slide");
    carouselSection.removeAttr("id");
    carouselSection.removeAttr("data-bs-ride");
    slideElement.first().removeClass("active");
    slideElement.removeClass("carousel-item");
  }
  

  });


