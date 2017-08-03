'use strict';

// ############################################
// MENÜ FÜR DIE WEBSITE
// ############################################

// MENÜ STATUS
// Legt den Aktuellen Status des Menüs fest, um zu entscheiden wie das Programm weiter läuft.
var STATUS = false;

// TRIGGER DES MENÜS
$('#menu').stop().on('click', function () {
  if (STATUS == false) {
    // Fragt ab ob das Menü gezeigt werden soll oder nicht
    $(this).addClass('aktiv'); // Fügt dem Menü-Icon die Klasse "aktiv" hinzu
    $('.menu-mobile').addClass('aktiv'); // Fügt dem Menü die Klasse "aktiv" hinzu
    $('header').addClass('aktiv'); // Fügt dem header die Klasse "aktiv" hinzu
    STATUS = true; // Stellt den Menü Status auf Offen
  } else {
    $(this).removeClass('aktiv'); // Löscht die Klasse "Aktiv" vom Menü-Icon
    $('.menu-mobile').removeClass('aktiv'); // Löscht die Klasse "Aktiv" von dem Menü
    $('header').removeClass('aktiv'); // Löscht die Klasse "Aktiv" aus dem Header
    STATUS = false; // Stellt den Menü Status auf Geschlossen
  }
});

// Erstellen des globaren FIlter Arrays

var FILTER = new Array();

// Wenn ein Filter ausgewählt wird soll die Funktion gestartet werden
$('.filter-select').on('change', function () {
  // Wert des Selectfeldes auslesen
  var value = $(this).val();
  // Name des Ausgewählten Values
  var name = $(this).children('option[value="' + value + '"]').text();
  if (jQuery.inArray(value, FILTER) == -1) {
    FILTER.push(value);
    createFilter(name, value);
  }

  filtern();
});

// Funktion zum erschaffen von Filter Objekten im Frontend
function createFilter(element, value) {
  $('#filter-auswahl').append('<div class="kriterium" id="' + value + '">' + element + '</div>');
}

// Funktion zum löschen von Filter Objekten im Frontend
$('body').on('click', '.kriterium', function () {
  var element = $(this).attr('id');
  $(this).parent().children('#' + element).remove();
  FILTER = jQuery.grep(FILTER, function (value) {
    return value != element;
  });

  filtern();
});

function filtern() {

  $('.projekt-box').removeClass('fadein').addClass('fadeout');

  $('.projekt-box').each(function () {

    var object = $(this);
    var element = $(this).children('a').children('.thumbnail-projekt').children('.inhalt');
    var filterstring;

    for (var i = -1; i < FILTER.length; i++) {
      if (FILTER[i] == null) {
        filterstring = '.inhalt';
      } else {
        filterstring += '.' + FILTER[i];
      }
    }

    filterstring = filterstring.replace('undefined.undefined', '');
    filterstring = filterstring.replace('.undefined', '');

    if (!element.is(filterstring)) {
      object.addClass('none');
    }

    setTimeout(function () {
      if (element.is(filterstring)) {
        object.removeClass('none');
      }
    }, 520);

    setTimeout(function () {
      if (element.is(filterstring)) {
        object.removeClass('fadeout').addClass('fadein');
      }
    }, 550);
  });
}

$(document).ready(function () {
  // In dieser Datei findest du alle Funktionen die, die Terminsteuerrung bzw. den
  // Slider auf der Startseite steuern.

  // Zeigt beim laden der Seite den ersten Termin
  $('.termine').children('.termin').first().addClass('aktiv');

  $(window).resize(function () {
    var height = $('.aktiv').height();
    $('.termine').css('height', height + 'px'); // Ändert die Höhe der Box
  });

  $('.termine').css({
    height: $('.termine').children('.termin').first().height() + 'px' // Ändert die Höhe der Box
  });

  $('.termin').css({
    height: $('.termine').children('.termin').first().height() + 'px' // Ändert die Höhe der Box
  });

  // Triggert die Funktion die, den nächsten Termin zeigt
  $('.termine').stop().on('click', function () {

    // #1 Als erstes wird die Terminbox die aktuell zu sehen ist aus dem "Canvas" gezogen, also versteckt.
    $(this).children('.aktiv').stop().animate({ left: '-100%' }, 250, function () {
      $(this).css('left', '100%');
    });

    // #2 Danach wird geguckt ob das nächste Element ein Termin ist.
    if ($(this).children('.aktiv').next().hasClass('termin')) {
      // $('.termine').css({
      //  height: $(this).children('.aktiv').next('.termin').height() + 'px' // Ändert die Höhe der Box
      // });
      $(this).children('.aktiv').next('.termin').stop().animate({ left: '0' }, 250, function () {
        $('.termine').children().removeClass('aktiv'); // "Aktiv"-Element wird die aktiv classen entzogen
        $(this).addClass('aktiv'); // Element wird das "Aktiv"-Element
      });
    } else {
      $(this).children('.termin').first().stop().animate({ left: '0' }, 250, function () {
        $('.termine').children().removeClass('aktiv'); // "Aktiv"-Element wird die aktiv classen entzogen
        $(this).addClass('aktiv'); // Element wird das "Aktiv"-Element
      });
    }
  });

  // DOKUMENT READYy
});