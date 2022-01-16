$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

$('.lang-select').click(function () {
  var lang = $(this).attr('data-lang');
  window.location = $(this).attr('href');
  location.reload();
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
  }, 'google_translate_element');
}