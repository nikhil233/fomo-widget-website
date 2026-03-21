(function () {
  'use strict';

  // Mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  var headerCta = document.querySelector('.header-cta');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !open);
      nav.classList.toggle('is-open', !open);
      if (headerCta) headerCta.classList.toggle('is-open', !open);
    });
  }

  // FAQ accordion
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', !expanded);
      if (answer) answer.hidden = expanded;
    });
  });
})();
