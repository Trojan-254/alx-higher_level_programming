/*
 * script that adds, removes and clears LI elements from a list when the user clicks
 */
$(document).ready(function () {
  $('#add_item').on('click', function () {
    $('ul.my_list').append('<li>Item</li>');
  });
  $('#remove_item').on('click', function () {
    $('ul.my_list li:last-child').remove();
  });
  $('#clear_list').on('click', function () {
    $('ul.my_list').empty();
  });
});
