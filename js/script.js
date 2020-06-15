$(document).ready(
  function() {

    // Array attività lista
    var arrayAttivita = [
      'Fare la doccia',
      'Andare a yoga',
      'Fare la spesa'
    ];

    // Ciclo for + funzione per aggiungere gli elementi dell'arrayAttivita
    // alla lista html
    for (var i = 0; i < arrayAttivita.length; i++) {
      aggiungiItemALista(arrayAttivita[i]);
    }

    // Evento al click dello span X
    $(document).on('click', '.lista li span', function() {
      // Al click, si rimuove l'intera li
      $(this).parent('li').remove();
    }
  );

    //Evento al click del button
    $('button').click(function() {

      // Al click, si aggiungono i valori dell'input ad altre li
      var valoreInput = $('input').val();
      aggiungiItemALista(valoreInput);
    });

    // Evento al click del tasto invio (13)
    $(document).keypress(function(event) {
      // Se il tasto corrisponde al numero 13, al click si aggiungono i valori dell'input ad altre li
      if (event.which === 13) {
        var valoreInput = $('input').val();
        aggiungiItemALista(valoreInput);
      }
    });

  }
);

// FUNCTION
// Permette di aggiungere un testoListItem, a un elemento li
// clonato, poi si appende alla ul
// Argomento: testoListItem, testo da inserire
// return: nessuno
function aggiungiItemALista(testoListItem) {
  var listItemClone = $('.template li').clone();
  listItemClone.prepend(testoListItem)
  $('div.lista ul').append(listItemClone);
}
