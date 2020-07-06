// Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente.
$(document).ready(function() {
  // console.log(document.getElementById('pippo'));
  // console.log($('.question > h2'));
  $('.question > h2').click(function() {
    // console.log($(this));
    //console.log($(this).next('p'));
    // console.log($('.question > h2 p'));
    // $('.question p').hide();
     console.log(this);
    $(this).next('p').slideToggle();
  });

  // $('.question').text(getRandom(1,100));
  $('.question').each(function(i) {
    console.log(i);
    $(this).text(getRandom(1,100));
  });
  // var questions = $('.question');
  // for (var i = 0; i < questions.length; i++) {
  //   $(questions[i]).text(getRandom(1,100));
  //   console.log(questions[i]);
  // }
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
