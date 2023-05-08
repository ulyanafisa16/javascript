const slider = document.getElementById('slider');
    const slides = slider.getElementsByTagName('img');
    let currentSlide = 0;
    
    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    setInterval(showNextSlide, 2000);
  