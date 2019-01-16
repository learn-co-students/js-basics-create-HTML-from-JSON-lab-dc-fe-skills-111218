  var titanic = movies.Titanic;
  var terminator2 = movies["Terminator 2"];
  
  function injectInfo(movie) {
    document.getElementById("cast").innerHTML = "";
    document.getElementById("reviews").innerHTML = "";
    
    document.getElementById("title").innerHTML = movie.title;
    document.getElementById("director").innerHTML = movie.director;
    document.getElementById("genre").innerHTML = movie.genre;
    document.getElementById("filmRating").innerHTML = movie.filmRating;
    document.getElementById("poster").src = movie.poster;
    document.getElementById("description").innerHTML = movie.description;
    document.getElementById("audienceScore").innerHTML = movie.audienceScore;
    
    movie.cast.forEach(function(character) {
      var castList = document.createTextNode(`${character.role}, ${character.actor}`);
      var newElement = document.createElement("div");
      newElement.appendChild(castList);
      document.getElementById("cast").appendChild(newElement);
    });
    
    movie.reviews.forEach(function(review) {
      var reviewList = ""
      reviewList = document.createTextNode(`"${review.content}" - ${review.username}`);
      var newElement = document.createElement("div");
      newElement.appendChild(reviewList);
      document.getElementById("reviews").appendChild(newElement);
    });
  }

injectInfo(titanic);

document.getElementById("Titanic").addEventListener("click", function(e) {
  injectInfo(titanic);
});

document.getElementById("Terminator 2").addEventListener("click", function(e) {
  injectInfo(terminator2);
});

document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here

  window.addEventListener("load", function(e) {
    injectInfo(titanic);
  });
  
  document.getElementById("Titanic").addEventListener("click", function(e) {
    injectInfo(titanic);
  });
  
  document.getElementById("Terminator 2").addEventListener("click", function(e) {
    injectInfo(terminator2);
  });

  var titanic = movies.Titanic;
  var terminator2 = movies["Terminator 2"];
  
  function injectInfo(movie) {
    document.getElementById("cast").innerHTML = "";
    document.getElementById("reviews").innerHTML = "";
    
    document.getElementById("title").innerHTML = movie.title;
    document.getElementById("director").innerHTML = movie.director;
    document.getElementById("genre").innerHTML = movie.genre;
    document.getElementById("filmRating").innerHTML = movie.filmRating;
    document.getElementById("poster").src = movie.poster;
    document.getElementById("description").innerHTML = movie.description;
    document.getElementById("audienceScore").innerHTML = movie.audienceScore;
    
    movie.cast.forEach(function(character) {
      var castList = document.createTextNode(`${character.role}, ${character.actor}`);
      var newElement = document.createElement("div");
      newElement.appendChild(castList);
      document.getElementById("cast").appendChild(newElement);
    });
    
    movie.reviews.forEach(function(review) {
      var reviewList = ""
      reviewList = document.createTextNode(`"${review.content}" - ${review.username}`);
      var newElement = document.createElement("div");
      newElement.appendChild(reviewList);
      document.getElementById("reviews").appendChild(newElement);
    });
  }

});