function Carousel(carouselName) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector(carouselName)) {
      const slider = document.querySelector(carouselName);
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        cancelMomentumTracking();
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        beginMomentumTracking();
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); //scroll-fast
        const prevScrollLeft = slider.scrollLeft;
        slider.scrollLeft = scrollLeft - walk;
        velX = slider.scrollLeft - prevScrollLeft;
      });

      // Momentum
      let velX = 0;
      let momentumID;

      slider.addEventListener('wheel', () => {
        cancelMomentumTracking();
      }, { passive: true });

      function beginMomentumTracking() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
      }

      function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
      }

      function momentumLoop() {
        slider.scrollLeft += velX * 2;
        velX *= 0.95;

        if (Math.abs(velX) > 0.5) {
          momentumID = requestAnimationFrame(momentumLoop);
        }
      }

      // Scroll
      const scrollContainer = document.querySelector(carouselName);

      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();

        window.requestAnimationFrame(() => {
          scrollContainer.scrollTo({ top: 0, left: scrollContainer.scrollLeft + (evt.deltaY * 2), behavior: "smooth" });
        });
      }, { passive: true });
    }
  });
}

export default Carousel;
