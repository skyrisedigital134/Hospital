document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // 2. Hero slider (if present)
  var slides = document.querySelectorAll('.hero .slide');
  if (slides && slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4500);
  }

  // 3. WhatsApp Form Redirection Logic
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
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

  // 4. Achievements / Latest News Slider Logic
  var achievementTrack = document.querySelector('.achievements-track');
  var achievementSlides = document.querySelectorAll('.achievement-slide-item');
  var prevAchievementBtn = document.getElementById('prevAchievement');
  var nextAchievementBtn = document.getElementById('nextAchievement');

  if (achievementTrack && achievementSlides.length > 0 && prevAchievementBtn && nextAchievementBtn) {
    var achievementIndex = 0;
    var totalAchievements = achievementSlides.length;

    function updateAchievementSlider() {
      var percentageTranslate = -achievementIndex * 100;
      achievementTrack.style.transform = 'translateX(' + percentageTranslate + '%)';
    }

    nextAchievementBtn.addEventListener('click', function () {
      achievementIndex++;
      if (achievementIndex >= totalAchievements) {
        achievementIndex = 0;
      }
      updateAchievementSlider();
    });

    prevAchievementBtn.addEventListener('click', function () {
      achievementIndex--;
      if (achievementIndex < 0) {
        achievementIndex = totalAchievements - 1;
      }
      updateAchievementSlider();
    });
  }

  // 5. Testimonials Slider Logic
  var testimonialTrack = document.querySelector('.testimonials-track');
  var testimonialSlides = document.querySelectorAll('.testimonial-slide-item');
  var prevTestimonialBtn = document.getElementById('prevTestimonial');
  var nextTestimonialBtn = document.getElementById('nextTestimonial');

  if (testimonialTrack && testimonialSlides.length > 0 && prevTestimonialBtn && nextTestimonialBtn) {
    var testimonialIndex = 0;
    var totalTestimonials = testimonialSlides.length;

    function updateTestimonialSlider() {
      var percentageTranslate = -testimonialIndex * 100;
      testimonialTrack.style.transform = 'translateX(' + percentageTranslate + '%)';
    }

    nextTestimonialBtn.addEventListener('click', function () {
      testimonialIndex++;
      if (testimonialIndex >= totalTestimonials) {
        testimonialIndex = 0;
      }
      updateTestimonialSlider();
    });

    prevTestimonialBtn.addEventListener('click', function () {
      testimonialIndex--;
      if (testimonialIndex < 0) {
        testimonialIndex = totalTestimonials - 1;
      }
      updateTestimonialSlider();
    });

    // Auto rotate testimonials
    setInterval(function () {
      testimonialIndex++;
      if (testimonialIndex >= totalTestimonials) {
        testimonialIndex = 0;
      }
      updateTestimonialSlider();
    }, 6000);
  }

  // 6. Video Slider Logic
  var videoTrack = document.querySelector('.videos-track');
  var videoSlides = document.querySelectorAll('.video-slide-item');
  var prevVideoBtn = document.getElementById('prevVideo');
  var nextVideoBtn = document.getElementById('nextVideo');

  if (videoTrack && videoSlides.length > 0 && prevVideoBtn && nextVideoBtn) {
    var videoIndex = 0;
    var totalVideos = videoSlides.length;

    function updateVideoSlider() {
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
