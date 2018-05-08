function enable_learn_more_button_animation(target) {
  target.click(function(evt) {
    // Prevent default to stop "flash" as browser immediately jumps to content,
    // then jumps back to top of page as animation begins.
    evt.preventDefault();
    scroll_to($(this).attr('href'));
  });
}

function enable_masthead_scroll_fade(scroll_target) {
  if(!is_touch_device()) {
    // Scroll events don't fire continuously on iOS as user scrolls (either
    // with finger on screen, or with display scrolling speed decelerating
    // after user swipes finger). As such, disable opacity-changing effect on
    // touch devices to prevent sudden changes in opacity when finger-scrolling
    // momentum drops to zero.
    $(window).scroll(function() {
      var target_height = $(scroll_target).offset().top;
      var current_height = window.pageYOffset;
      $('#masthead > .container').css('opacity', 1 - (current_height / target_height));
    });
  }
}

function enable_header_bar_scroll_toggle(header_bar) {
  var header_bar = get_header_bar();

  if(!is_narrow_device()) {
    var masthead = $('#masthead');

    $(window).scroll(function() {
      var current_height = window.pageYOffset;
      if(current_height > masthead.height() && !header_bar.is(':visible'))
        header_bar.fadeIn();
      else if(current_height <= masthead.height() && header_bar.is(':visible'))
        header_bar.fadeOut();
    });
  }
}

function position_content_below_masthead() {
  // Position page content to be immediately below masthead, correcting
  // approximation given in stylesheet.
  var masthead_base = $('#masthead').offset().top + $('#masthead').outerHeight();
  $('#content').css('marginTop', masthead_base + 'px');
}

$(document).ready(function() {
  var learn_more_button = $('#learn-more');
  enable_learn_more_button_animation(learn_more_button);
  enable_masthead_scroll_fade(learn_more_button);
  enable_header_bar_scroll_toggle();

  //position_content_below_masthead();
  setTimeout(position_content_below_masthead, 302);
  // Disabled because it was giving odd results in Dolphin browser on iPad,
  // where page would randomly jump back up to top while scrolling.
  //$(window).resize(position_content_below_masthead);
});
