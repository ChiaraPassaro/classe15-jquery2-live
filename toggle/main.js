// Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione.

//Versione con toggle

//Versione manuale
$(document).ready(
  function () {
    //si avvia a pagina completata
    // alert('ciao');
    $('h1').click(
      function () {
        // $('p').slideToggle();
        $('p').toggleClass('pippo');
      }
    );
  }
);
