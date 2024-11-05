// For the desktop header
var desktopHeader = document.querySelector(".top-header");
desktopHeader.style.transition = "top 0.3s ease, box-shadow 0.3s ease";
desktopHeader.style.width = "100%";

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    desktopHeader.style.position = "fixed";
    desktopHeader.style.top = "0";
    desktopHeader.style.width = "100%";
    desktopHeader.style.zIndex = "1000";
    desktopHeader.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    desktopHeader.style.position = "relative";
    desktopHeader.style.top = "";
    desktopHeader.style.boxShadow = "none";
  }
});

// For the mobile header
var mobileHeader = document.querySelector(".top-header-mobile");
mobileHeader.style.transition = "top 0.3s ease, box-shadow 0.3s ease";
mobileHeader.style.width = "100%";

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    mobileHeader.style.position = "fixed";
    mobileHeader.style.top = "0";
    mobileHeader.style.width = "100%";
    mobileHeader.style.zIndex = "1000";
    mobileHeader.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    mobileHeader.style.position = "relative";
    mobileHeader.style.top = "";
    mobileHeader.style.boxShadow = "none";
  }
});