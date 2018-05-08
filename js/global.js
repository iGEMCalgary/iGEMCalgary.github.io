function is_touch_device() {
  return ('ontouchstart' in document.documentElement);
}

function is_narrow_device() {
  return $(window).width() <= 600;
}

function get_header_bar() {
  return is_narrow_device() ? $('.header-bar.minimal') : $('.header-bar.full');
}


function enable_mobile_nav() {
  var navTrigger = $('#nav-trigger');
  var menuVisible = false;
  navTrigger.click(function() {
    $('#nav-popover').slideToggle();
    var backgroundX = menuVisible ? 0 : -navTrigger.width();
    navTrigger.css('backgroundPosition', backgroundX + 'px 0');
    menuVisible = !menuVisible;
  });
}

function scroll_to(target) {
  var header_bar = is_narrow_device() ? $('.header-bar.minimal') : $('.header-bar.full');
  $('html, body').animate({
    scrollTop: $(target).offset().top - get_header_bar().outerHeight()
  }, {
    duration: 700,
    complete: function() {
      // Manually change location hash, since we prevent default event
      // behaviour. Do so after animation completes so page doesn't
      // immediately jump to this section.
      // (Disabled because people copying/pasting the URL probably don't want
      // to scroll immediately to given section.)
      //window.location.hash = target;
    }
  });
}

$(document).ready(function() {
  if(is_touch_device())
    $(document.documentElement).removeClass('no-touch');
  enable_mobile_nav();
});
