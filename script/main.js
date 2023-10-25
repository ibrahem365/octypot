$(window).on('scroll', function() {
   if ($(window).scrollTop() + $(window).height() >= $(".progress-par-dot-2").offset().top) {
    $('.progress-par-full').addClass('your-class2');
  } else {
    $('.progress-par-full').removeClass('your-class2');
  }

  if ($(window).scrollTop() + $(window).height() >= $(".progress-par-dot-3").offset().top) {
    $('.progress-par-full').addClass('your-class3');
  } else {
    $('.progress-par-full').removeClass('your-class3');
  }

  if ($(window).scrollTop() + $(window).height() >= $(".progress-par-dot-4").offset().top) {
    $('.progress-par-full').addClass('your-class4');
  } else {
    $('.progress-par-full').removeClass('your-class4');
  }

  if ($(window).scrollTop() + $(window).height() >= $(".sec5").offset().top) {
    $('.progress-par-full').addClass('your-class5');
  } else {
    $('.progress-par-full').removeClass('your-class5');
  }

  if ($(window).scrollTop() + $(window).height() >= $(".footer").offset().top) {
    $('.progress-par-full').addClass('your-class6');
  } else {
    $('.progress-par-full').removeClass('your-class6');
  }
});