// document.getElementById('wrapper').innerHTML += 'pippo';

// $('body').prepend('<h3>Sottotitolo</h3>');
// $('h2').appendTo('.prova');

$(document).ready(function() {
  for (var i = 0; i < 10; i++) {
    if(i % 2 == 0) {
      var thisClass = 'red';
    }
    else {
      var thisClass = 'green';
    }
    $('#wrapper').append('<div class="square ' + thisClass + '"></div>');
  }
  // console.log();
  // $('.square').each(function() {
  //     $(this).text(getRandom(1,100));
  // });
  // $('.square').click();
  $(document).on('click', '.square', function() {
    // console.log($(this));
    var numRand = getRandom(1,100);
    $(this).text(numRand);
    if(numRand % 2 == 0) {
      var thisClass = 'red';
    }
    else {
      var thisClass = 'green';
    }
    $(this).removeClass('red green').addClass(thisClass);
  })
});


//FUNCTIONS
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
