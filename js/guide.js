$(document).keypress(function(e) {
  var elem = $('#guide');
  var opacity = elem.css('opacity');

  if(e.keyCode === 97)         // a
    elem.css('opacity', 1).toggle();
  else if(e.keyCode === 115 || e.keyCode === 100) {
    if(e.keyCode === 115) // s
      var delta = -0.1;
    else                  // d
      var delta = 0.1;

    var new_opacity = parseFloat(elem.css('opacity')) + delta;
    if(new_opacity < 0) new_opacity = 0;
    if(new_opacity > 1) new_opacity = 1;
    elem.show().css('opacity', new_opacity);
  }
});
