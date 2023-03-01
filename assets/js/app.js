$(document).ready(() => {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("./data/data.json", (data) => {
    var scorecontainer = " ";
    // ITERATING THROUGH OBJECTS
    $.each(data, (key, value) => {
      //CONSTRUCTION OF ROWS HAVING
      scorecontainer += `<div id=${key} class="score d-f ai-c jc-sb">`;
      scorecontainer += `<div class="d-f ai-c g-p">`;
      scorecontainer += `<img src = ${value.icon}  alt= ${value.category}>`;
      scorecontainer += `<h2>${value.category}</h2>`;
      scorecontainer += `</div>`;
      scorecontainer += `<div class="number"><span>${value.score}</span> / 100</div>`;
      scorecontainer += `</div>`;
    });
    //INSERTING whole into html
    $(".scroes").append(scorecontainer);
  });
});