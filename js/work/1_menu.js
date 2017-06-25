
// ############################################
// MENÜ FÜR DIE WEBSITE
// ############################################

// MENÜ STATUS
// Legt den Aktuellen Status des Menüs fest, um zu entscheiden wie das Programm weiter läuft.
var STATUS = false;

// TRIGGER DES MENÜS
$('#menu').stop().on('click',function(){
  if(STATUS == false) { // Fragt ab ob das Menü gezeigt werden soll oder nicht
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
