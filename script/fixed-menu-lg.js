window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPos = window.scrollY;
    
    // Perform actions based on the scroll position
    if (scrollPos > 100) {
      document.querySelector(".pc-navbar").style.backgroundColor = "rgba(255, 255, 255, 0.929)";
      document.querySelector(".pc-navbar").style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    } else {
      document.querySelector(".pc-navbar").style.backgroundColor = "white";
      document.querySelector(".pc-navbar").style.boxShadow = "none";
    }
  });  