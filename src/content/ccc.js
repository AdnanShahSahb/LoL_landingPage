document.addEventListener("DOMContentLoaded", function() {
    var touchStartX = 0;
    var touchEndX = 0;
  
    var carouselInner = document.querySelector(".carousel-inner");
  
    carouselInner.addEventListener("touchstart", function(event) {
      touchStartX = event.touches[0].clientX;
    });
  
    carouselInner.addEventListener("touchend", function(event) {
      touchEndX = event.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        carouselInner.parentElement.querySelector(".carousel-control-next").click();
      } else if (touchStartX - touchEndX < -50) {
        carouselInner.parentElement.querySelector(".carousel-control-prev").click();
      }
    });
  });
  