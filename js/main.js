Document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Hero slider (if present)
  var slides = document.querySelectorAll('.hero .slide');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4500);
  }

  // WhatsApp Form Redirection Logic (Checks if form exists on page)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Primary Hospital Number
      var whatsappNumber = "917505348664";

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;

      var textMessage = "*🏥 New Prem Ji Hospital Inquiry*\n\n" +
                        "• *Name:* " + name + "\n" +
                        "• *Email:* " + email + "\n" +
                        "• *Phone:* " + phone + "\n\n" +
                        "*Message:* \n" + message;

      var encodedMessage = encodeURIComponent(textMessage);
      var whatsappUrl = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodedMessage;

      window.open(whatsappUrl, '_blank');
    });
  }

  // Testimonials Slider Logic
  var track = document.querySelector('.testimonials-track');
  var slideItems = document.querySelectorAll('.testimonial-slide-item');
  var prevBtn = document.getElementById('prevTestimonial');
  var nextBtn = document.getElementById('nextTestimonial');

  if (track && slideItems.length > 0 && prevBtn && nextBtn) {
    var testimonialIndex = 0;
    var totalSlides = slideItems.length;

    function updateTestimonialSlider() {
      var percentageTranslate = -testimonialIndex * 100;
      track.style.transform = 'translateX(' + percentageTranslate + '%)';
    }

    nextBtn.addEventListener('click', function () {
      testimonialIndex++;
      if (testimonialIndex >= totalSlides) {
        testimonialIndex = 0;
      }
      updateTestimonialSlider();
    });

    prevBtn.addEventListener('click', function () {
      testimonialIndex--;
      if (testimonialIndex < 0) {
        testimonialIndex = totalSlides - 1;
      }
      updateTestimonialSlider();
    });

    setInterval(function () {
      testimonialIndex++;
      if (testimonialIndex >= totalSlides) {
        testimonialIndex = 0;
      }
      updateTestimonialSlider();
    }, 6000);
  }

  // Video Slider Logic
  var videoTrack = document.querySelector('.videos-track');
  var videoSlides = document.querySelectorAll('.video-slide-item');
  var prevVideoBtn = document.getElementById('prevVideo');
  var nextVideoBtn = document.getElementById('nextVideo');

  if (videoTrack && videoSlides.length > 0 && prevVideoBtn && nextVideoBtn) {
    var videoIndex = 0;
    var totalVideos = videoSlides.length;

    function updateVideoSlider() {
      // Pause any currently playing video when sliding
      videoSlides.forEach(function(slide) {
        var vid = slide.querySelector('video');
        if (vid) vid.pause();
      });
      
      var percentageTranslate = -videoIndex * 100;
      videoTrack.style.transform = 'translateX(' + percentageTranslate + '%)';
    }

    nextVideoBtn.addEventListener('click', function () {
      videoIndex++;
      if (videoIndex >= totalVideos) {
        videoIndex = 0;
      }
      updateVideoSlider();
    });

    prevVideoBtn.addEventListener('click', function () {
      videoIndex--;
      if (videoIndex < 0) {
        videoIndex = totalVideos - 1;
      }
      updateVideoSlider();
    });
  }
});
