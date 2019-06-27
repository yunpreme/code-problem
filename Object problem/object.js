var movies = [
  { title: "In Bruges", rating: 5, hasWatched: true },
  { title: "Frozen", rating: 4.5, hasWatched: false },
  { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
  { title: "Les Miserables", rating: 3.5, hasWatched: false }
];

movies.forEach(function(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  console.log(result);
});

var comments = {};
comments.data = ["Good job!", "Bye", "Lame..."];

function print(arr) {
  arr.forEach(function(element) {
    console.log(element);
  });
}


comments.print = function(arr){
    arr.forEach(function(element) {
        console.log(element);
      });
}