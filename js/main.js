document.addEventListener('DOMContentLoaded', function () {
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

  // WhatsApp Form Redirection Logic
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Prevent standard form submission behavior
      e.preventDefault();

      // Hospital WhatsApp number with country code (91), no symbols or spaces
      var whatsappNumber = "917505348664";

      // Grab data from input fields
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;

      // Construct beautifully formatted message text using WhatsApp bold formatting (*)
      var textMessage = "*🏥 New Prem Ji Hospital Inquiry*\n\n" +
                        "• *Name:* " + name + "\n" +
                        "• *Email:* " + email + "\n" +
                        "• *Phone:* " + phone + "\n\n" +
                        "*Message:* \n" + message;

      // URL encode the message string safely
      var encodedMessage = encodeURIComponent(textMessage);

      // Construct the final URL endpoint
      var whatsappUrl = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodedMessage;

      // Open link in a new tab/application smoothly
      window.open(whatsappUrl, '_blank');
    });
  }
});
