console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { toggleMobileMenu, toggleMobileDropdowns, filterPosts, toggleLayout } from "./partials";

const siteHeader = document.querySelector(".header")
const hasSubMenu = document.querySelectorAll(".has-sub-menu")
const heroVideo = document.querySelector(".hero__video")
const projectSlider = document.querySelector(".projectSwiper")
const thumbnailSlider = document.querySelector(".thumbnailSwiper")
const gallerySlider = document.querySelector(".gallerySwiper")
const sliderControls = document.querySelector(".portfolio-controls");

let scrollState = 0;

const scrollTop = () => window.scrollY;

const scrollDetect = (collapse, expand) => {
  const currentScroll = scrollTop();
  if (currentScroll > scrollState) {
    collapse();
  } else {
    expand();
  }
  scrollState = scrollTop();
};

function collapseNav() {
  siteHeader.classList.remove("expand");
  siteHeader.classList.add("collapse");
}

function expandNav() {
  siteHeader.classList.remove("collapse");
  siteHeader.classList.add("expand");
}

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollDetect(collapseNav, expandNav);
      ticking = false;
    });

    ticking = true;
  }
});

hasSubMenu.forEach((link) => {
  // Helper function to set ARIA-expanded attribute
  function setAriaExpandedAttribute(element, value) {
    element.setAttribute("aria-expanded", value);
  };

  const subMenuToggle = document.querySelector(".sub-menu-toggle");
  const subMenuLinks = link.querySelectorAll(".header__sub-menu-link");

  function openSubMenu() {
    link.classList.add("has-sub-menu-open");
    subMenuToggle.classList.add("sub-menu-is-toggled");
    setAriaExpandedAttribute(subMenuToggle, "true");
  };

  function closeSubMenu() {
    link.classList.remove("has-sub-menu-open");
    subMenuToggle.classList.remove("sub-menu-is-toggled");
    setAriaExpandedAttribute(subMenuToggle, "false");
  };

  link.addEventListener("mouseover", openSubMenu);
  link.addEventListener("mouseout", closeSubMenu);

  // ensure that we open our sub menu when sub menu links are tabbed and focused rather than these remaining visually hidden
  subMenuLinks.forEach((subMenuLink) => {
    subMenuLink.addEventListener("focus", openSubMenu);
    subMenuLink.addEventListener("blur", closeSubMenu);
  });
});

if(heroVideo) {
  const videoControls = document.querySelector('.home-hero__controls')

  videoControls.addEventListener('click', () => {
    if(videoControls.classList.contains('video-playing')) {
      videoControls.classList.remove('video-playing')
      videoControls.classList.add('video-paused')
      videoControls.setAttribute('aria-label', 'play the video')
      videoControls.setAttribute('title', 'play the video')
      heroVideo.pause()
    } else {
      videoControls.classList.remove('video-paused')
      videoControls.classList.add('video-playing')
      videoControls.setAttribute('aria-label', 'pause the video')
      videoControls.setAttribute('title', 'pause the video')
      heroVideo.play()
    }
  })
}

if(projectSlider) {
  var swiper = new Swiper(projectSlider, {
    grabCursor: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
  });
}

if(thumbnailSlider) {
  var thumbnailSwiper = new Swiper(thumbnailSlider, {
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 4,
  });
}

if(gallerySlider) {
  var gallerySwiper = new Swiper(gallerySlider, {
    grabCursor: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    thumbs: {
      swiper: thumbnailSwiper,
    },
  });
}

if(sliderControls) {
  sliderControls.addEventListener('click', function () {
    if (gallerySwiper.autoplay.running) {
      gallerySwiper.autoplay.stop();
      sliderControls.classList.remove('slider-playing')
      sliderControls.classList.add('slider-paused')
      sliderControls.setAttribute('aria-label', 'play the image gallery')
      sliderControls.setAttribute('title', 'play the image gallery')
    } else {
      gallerySwiper.autoplay.start();
      sliderControls.classList.remove('slider-paused')
      sliderControls.classList.add('slider-playing')
      sliderControls.setAttribute('aria-label', 'pause the image gallery')
      sliderControls.setAttribute('title', 'pause the image gallery')
    }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  setVideoSource();
});

window.addEventListener('resize', debounce(setVideoSource, 250));

function setVideoSource() {
  var video = document.querySelector('.hero__video');
  if (window.innerWidth < 720) {
      video.src = '/uploads/Fox-Structures-Video-540.mp4';
  } else if (window.innerWidth < 1024) {
      video.src = '/uploads/Fox-Structures-Video-720.mp4';
  } else {
      video.src = '/uploads/Fox-Structures-Video-1080.mp4';
  }
}

function debounce(func, wait) {
  let timeout;
  return function() {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
          timeout = null;
          func.apply(context, args);
      }, wait);
  };
}



