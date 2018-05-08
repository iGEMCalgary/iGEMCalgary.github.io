$(document).ready(function() {
  $('.project .project-thumbnail, .project .synopsis').click(function(evt) {
    evt.preventDefault();

    var project = $(this).parents('.project');
    project.toggleClass('active');
    var full_desc = project.find('.full-description');
    full_desc.slideToggle();

    // Only scroll to project when we are opening it, not when closing.
    if(project.hasClass('active')) {
      var synopsis = $(this).parents('.project').find('.synopsis');
      scroll_to(synopsis);
    }
  });
});
