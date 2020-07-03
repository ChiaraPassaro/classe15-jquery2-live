// Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente.
$(document).ready(function() {
  // console.log(document.getElementById('pippo'));
  // console.log($('.question > h2'));
  $('.question > h2').click(function() {
    // console.log($(this));
    //console.log($(this).next('p'));
    console.log($('.question > h2 p'));
    $('.question p').hide();
    $(this).next('p').slideToggle();
  });
});
