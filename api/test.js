const x = "http://js-post-api.herokuapp.com/api/posts";
fetch(x)
  .then((response) => response.json())
  .then((data) => console.log(data));
