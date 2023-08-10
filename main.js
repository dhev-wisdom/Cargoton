document.addEventListener("DOMContentLoaded", function () {
    var animationContainer = document.querySelector(".animation-container");
    var pageContents = document.querySelector(".page-contents");
    
    setTimeout(function () {
      animationContainer.remove();
      pageContents.style.visibility = "visible";
    }, 5000);
  });

$(document).ready(function () {
    // $(".hover-dropdown").on("mouseenter click", function () {
    //   var dropdownMenu = $(this).find(".dropdown-menu");
    //   dropdownMenu.toggle();
    // });
    $(".hover-dropdown .dropdown-menu").on("click", function (e) {
        e.stopPropagation();
        });
    // $(document).on("click", function (e) {
    //   if (!$(".hover-dropdown").is(e.target) && $(".hover-dropdown").has(e.target).length === 0) {
    //     $(".dropdown-menu").hide();
    //   }
    // });

    let lastScroll = 0;
    $(window).on("scroll", function () {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > lastScroll) {
          $(".navbar").addClass("hidden-navbar");
        } else {
          $(".navbar").removeClass("hidden-navbar");
        }

        lastScroll = currentScroll;
      });


      let scrollToTopButton = document.querySelector(".scroll-to-top");
    scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add("active");
    } else {
        scrollToTopButton.classList.remove("active");
    }
});
  });

var scrollToTopButton = document.querySelector(".scroll-to-top");
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("active");
  } else {
    scrollToTopButton.classList.remove("active");
  }
});

