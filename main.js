$(document).ready(() => {
    const animationContainer = $(".animation-container");
    const pageContents = $(".page-contents");
    const scrollToTopButton = $(".scroll-to-top");
    const headerText = $(".header-text");
  
    setTimeout(() => {
      animationContainer.remove();
      pageContents.css("visibility", "visible");
    }, 5000);
  
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
    
  });
  