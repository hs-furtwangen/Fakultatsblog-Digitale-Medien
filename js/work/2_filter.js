
// Erstellen des globaren FIlter Arrays

var FILTER = new Array();

// Wenn ein Filter ausgewählt wird soll die Funktion gestartet werden
$('.filter-select').on('change',function(){
  // Wert des Selectfeldes auslesen
  var value = $(this).val();
  // Name des Ausgewählten Values
  var name = $(this).children('option[value="' + value + '"]').text();
  if(jQuery.inArray(value, FILTER) == -1) {
    FILTER.push(value);
    createFilter(name,value);
  }

  filtern();

})

// Funktion zum erschaffen von Filter Objekten im Frontend
function createFilter(element,value) {
  $('#filter-auswahl').append('<div class="kriterium" id="' + value + '">' + element + '</div>');
}

// Funktion zum löschen von Filter Objekten im Frontend
$('body').on('click','.kriterium',function(){
  var element = $(this).attr('id');
  $(this).parent().children('#' + element).remove();
  FILTER = jQuery.grep(FILTER, function(value) {
    return value != element;
  });

  filtern();

})

function filtern() {

  $('.projekt-box').removeClass('fadein').addClass('fadeout');

  $('.projekt-box').each(function(){

    var object = $(this);
    var element = $(this).children('a').children('.thumbnail-projekt').children('.inhalt');
    var filterstring;

    for(var i = -1; i < FILTER.length; i++) {
      if(FILTER[i] == null) {
        filterstring = '.inhalt';
      } else {
        filterstring += '.' + FILTER[i];
      }
    }

    filterstring = filterstring.replace('undefined.undefined','');
    filterstring = filterstring.replace('.undefined','');

    if(!(element.is(filterstring))) {
      object.addClass('none');
    }

    setTimeout(function(){
      if(element.is(filterstring)) {
        object.removeClass('none');
      }
    },520);

    setTimeout(function(){
      if(element.is(filterstring)) {
        object.removeClass('fadeout').addClass('fadein');
      }
    },550);

  });
}
