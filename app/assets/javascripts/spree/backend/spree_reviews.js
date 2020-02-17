//= require jquery.rating
//= require spree/backend

// Navigating to a page with ratings via TurboLinks shows the radio buttons
$(document).on('turbolinks:load', function() {
  $('input[type=radio].star').rating();
});
