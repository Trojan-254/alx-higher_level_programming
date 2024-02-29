/*
 * script that fetches and lists the title for all movies by
 * using this URL: https://swapi-api.alx-tools.com/api/films/?format=json
 */
$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    data.results.forEach(function (movie) {
      $('<li>').text(movie.title).appendTo('#list_movies');
    });
  });
});
