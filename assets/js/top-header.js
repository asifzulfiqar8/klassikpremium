var desktopHeader = document.querySelector(".top-header");
var mobileHeader = document.querySelector(".top-header-mobile");

if (desktopHeader) {
  desktopHeader.style.transition = "top 0.3s ease, box-shadow 0.3s ease";
  desktopHeader.style.width = "100%";
}

if (mobileHeader) {
  mobileHeader.style.transition = "top 0.3s ease, box-shadow 0.3s ease";
  mobileHeader.style.width = "100%";
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    if (desktopHeader) {
      desktopHeader.style.position = "fixed";
      desktopHeader.style.top = "0";
      desktopHeader.style.width = "100%";
      desktopHeader.style.zIndex = "1000";
      desktopHeader.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    }
    if (mobileHeader && window.innerWidth <= 768) { 
      mobileHeader.style.position = "fixed";
      mobileHeader.style.top = "0";
      mobileHeader.style.width = "100%";
      mobileHeader.style.zIndex = "1000";
      mobileHeader.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    }
  } else {
    if (desktopHeader) {
      desktopHeader.style.position = "relative";
      desktopHeader.style.top = "";
      desktopHeader.style.boxShadow = "none";
    }
    if (mobileHeader && window.innerWidth <= 768) {
      mobileHeader.style.position = "relative";
      mobileHeader.style.top = "";
      mobileHeader.style.boxShadow = "none";
    }
  }
});