//Sipario
$(document).ready(function () {
    // var isVisible = false;
    //
    // $('#bottone').click(
    //   function () {
    //     if(isVisible == false) {
    //       $('#sipario').slideDown(2000);
    //       isVisible = true;
    //     } else {
    //       $('#sipario').slideUp(2000);
    //       isVisible = false;
    //     }
    //   }
    // );

    $('#bottone').click(
      function () {
        var isVisible = $('#sipario').hasClass('visible');

        if(isVisible == false) {
          $('#sipario').slideDown(2000, function() {
            $('#sipario').addClass('visible');
          });
        } else {
          $('#sipario').slideUp(2000);
          $('#sipario').removeClass('visible');
        }
        console.log(miaFunzione());
      }
    );


  });

//---FUNCTION UTILITIES
function randomNumber() {
  return 'Fine click';
}
