const DESKTOP_BREAKPOINT = 480;
window.addEventListener("load",function() {
  let heroVideoEl = document.getElementByID("hero-video");
  let heroVideoSrc = heroVideoEl.dataset.srcMobile
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= DESKTOP_BREAKPOINT) {
    heroVideoSrc = heroVideoEl.dataset.srcDesktop;
  }
  heroVideoEl.src = heroVideoSrc;
})