window.addEventListener("scroll", function() {
    var element = document.getElementsByClassName("header")[0];
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var targetScroll = 700;
  
    if (scrollTop > targetScroll) {
      element.style.background = "var(--bg-gradient-color)"; // Change to the desired background color
      element.style.position = "fixed";
      element.style.top = "0px";
    } else {
      element.style.backgroundColor = "rgba(0, 0, 0, 0)";
      element.style.background = ""; // Revert to the initial background color
      element.style.position = "relative";
    }
  });
  