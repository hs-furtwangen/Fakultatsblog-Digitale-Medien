![Release](https://img.shields.io/badge/Release-1.0.0-brightgreen.svg?style=for-the-badge)

# Fakultatsblog-Digitale-Medien
Entwicklungsbeschreibung des [Fakultätsblogs](http://digitalemedien-furtwangen.de) der Fakultät Digitale Medien der Hochschule Furtwangen. In diesem Repository werden alle Informationen hinterlegt die mit der Verwaltung sowie der Erweiterung der Webstie benötigt werden. Der Aktuelle Ansprechpartner der Website ist @Unleashed-Design bzw. Johannes Schiel.

## Ansprechpartner
Hier werden alle Ansprechpartner die für die Verwaltung der Seite Verantwortlich waren/sind aufgelistet. Dabei sollen hier Private E-Mail Adressen hinterlegt werden sofern Fragen entstehen die nach dem Abschluss bei der Fakultät beantwortet werden müssten.

#### Johannes Schiel / 03.2017 - heute / johannes.schiel@outlook.de

## Technischer Aufbau des Themes
In diesem Repository findet Ihr alle Informationen die dazu dienen die Website bzw. das Template des Fakultatsblogs zu verwalten. Dazu wird im folgenden Erklärt wie das Template aufgebaut ist und was damit gemacht werden muss. Jedoch wird die Kenntniss des Grundaufbaus von Typo3 vorrausgesetzt und nicht näher beschreiben.

#### Zugangsdaten
Alle Zugangsdaten zu User Accounts, FTP Zugängen, Host Zugang usw. werden bei Übergabe des HiWi Jobs übergeben und werden nicht in diesem Repository gespeichert. Alle Zugsangsdaten werden als .TXT Datei übergeben und sofern diese Erweitert werden z.B. neue Backend Benutzer usw. sollten diese in die .TXT Datei eingetragen werden. Aktuell besitzt @Unleashed-Design die Zugangsdaten sofern also Fragen oder Probleme auftauchen sollten, sollte sich an ihn gewendet werden.

#### Techniken
Um das Design der Seite bearbeiten zu können werden einige Funktionen/Tools genutzt. Diese wären:

* **Gulp** [GULP](https://gulpjs.com/) ist nicht zwingend nötig um das Template zu bearbeiten jedoch muss ein Taskrunner vorhanden sein um die Seite korrekt zu überarbeiten. Dieser Taskrunner muss SASS files sowie JS Files kompilieren können.
* **SASS** Auf der Seite wird nur eine CSS Datei eingebunden diese wird mithilfe des CSS Preprozessors [SASS](http://sass-lang.com/) erstsellt. Daher sollte auch nur in den SASS Datein Änderungen vorgenommen werden. CSS Datein dürfen aus diesem Grund nicht Manuel überarbeitet werden.
* **TypoScript** In Typo3 wird eine eigene Sprache verwendet das sog. TypoScript, dieses dient der Ausgabe von Informationen sowie dem Verwalten bzw. Arbeiten mit diesen. Alle Datein die dazu benötigt werden finden sich in dem 'ts' Verzeichnis in diesem Repository. TypoScript ersetzt im wesentlichen alles was normalerweile von PHP oder Python übernommen wird.
* **HTML/HTML5** Die Gesamte Struktur der Seite wird mithilfe von HTML bzw. HTML5 aufgebaut. Dazu sollen mögichst wenig Elemente erstellt werden. Was die Ladezeit der Seite möglichst minimal halten soll.
* **JavaScript/jQuery** Für diverse Effekte sowie verschiedene Berechnungen und Funktionen wird auf der Seite JavaScript bzw. das Framework jQuery verwendet. In Zukunft soll jedoch versucht werden JavaScript nach dem ES6 Standart zu verwenden und auf das Framework jQuery zu verzichten. Auf diese Weise soll die Performance der Seite verbessert werden.

## Genutzte Plug-In's:
Um zu verstehen wie die Seite aufgebaut ist, bzw. welche Funktionen die Seite besitzt ist es wichtig das hier hinterlegt wird welche Funktion von Externen Plug-In's übernommen werden. Dazu sollte sofern ein Plug-In Verwendet wird

#### Mask
Dasa Mask Plug-In ist die wichtigste Komponente die in dieser Website Verwendet wird.

#### Speaking URLs
Dieses Plug-In übernimmt die Verwaltung und das Überschreiben von Lesbaren URLs. Die Einstellungen dazu finden sich auf dem Server im Backend unter dem Menüpunkt **Speaking URLs**

## Backup Versionen
Um eine möglichst sichere Entwicklungsumgebung herzustellen sollte nach der Regel vorgegangen werden nach allen "größeren" Änderrungen ein Komplettes Backup der Seite zu erstellen. Gründe für ein Backup:

* Vor dem hinzufügen eines neuen Plug-In's
* Wenn viele Inhalte auf der Seite verändert wurde z.B. diverse neue Projekte erstellt wurden.
* Nach großen Änderrungen am Strukturellen Aufbau der Seite

#### Vorgehen bei einem Backup
Wenn ein Backup erstellt werden soll, sollte wie folgt vorgegangen werden:
1. Download alle FTP Datein, anschließend sollten diese als ZIP Datei mit dem Namen 'YYYYMMDD_FTP.ZIP' in das *backup* Verzeichnis in diesem Repository hinterlegt werden.
2. Download der Datenbank über MySQL als ZIP Datei. Diese sollte auch mit ddem Namen 'YYYYMMDD_DATENBANK.ZIP' in das *backup* Verzeichnis in diesem Repository hinterlegt werden.

* **Letztes Backup** - Vollständiges Backup der Seite zum Jahresende 2017

## Versionen
In diesem Bereich wird beschreiben welche Änderungen bzw. Anpassungen an der Seite vorgenommen werden, dies soll dazu dienen nachzuvollziehen, was wann verändert wurde. Dazu wird ein für jedes Update ein Titel vergeben das beim Commit übermittelt werdedn muss. Jeder Commit wird zusätzlich mit einer Versionsnummer versehen. Diese Nummer ist wie folgt aufgebaut: X.0.0 - beschreibt welche Version es ist, wird also genutzt wenn z.B. ein Redesign durchgeführt werden soll das Umfangreiche Änderungen zur folge hat, 0.X.0 - beschreibt wenn Erweiterungen der Seite hinzugefügt werden, 0.0.X - beschreib kleine BugFixes oder Verbesserungen die jedoch keine Erweiterung der Funktionalität zur folge hat.

#### Version - V.0.0.0 - Beta
* **PAGE:** Die Seite wurde das erste mal mit fast allen Funktionen veröffentlicht.
* **FRONTEND:** Frontend basiertes Update wurde durchgeführt.
* **FRONTEND:** Kleine Anpassungen am Layout, neue Farben, Größen und Mobile Richtlinien.
* **BACKEND:** Zusätzliche Funktionalität im vergleich zu der "Test-Version" wurde hinzugefügt.

#### Version - V.0.1.0 - Campus Rework
* **FRONTEND:** Logo im Footer wurde verändert, dazu wurde ein neues SVG verlinkt.
* **CAMPUS:** Campus Layout wurde überarbeitet und durch ein neues Mask Element Erweitert.
* **CAMPUS:** Kleine Anpassungen an Abständen.

#### Version - V.0.2.0 - Campus Rework
* **FRONTEND:** Kleine Anpassungen auf der ganzen Seite.
* **BUGFIX:** Termine auf der Startsite.
* **BUGFIX:** Mobiles Menü.
* **BACKEND:** Backend layouts Erweiterrung.

#### Version - V.1.0.1 - META Update & SEO Stuff
* **PAGE:** H1 wurde eingefügt.
* **SEO:** eitentitel wurde verbessert.

#### Version - V.1.0.2 - Inhaltliche Verbesserungen
* **STUDIENGÄNGE:** CTA bei dern Studiengängen wurde zu "Alle Infos" geändert.
* **STUDIENGÄNGE:** Abstand bei den Studiengängen wurde reduziert, sieht jetzt so aus wie bei Campus.

#### Version - V.1.0.3 - Meta Erweiterrungen & Inhaltliche Verbesserungen
* **META:** Das Plug-In RealURL wurde hinzugefügt.
* **META:** Favicon wurde in die Meta-Tags aufgenommen.
* **CAMPUS:** Bei Campus wurde so erweitert das bei "campusbasis.html" jetzt der Name des Buttons frei vergeben werden kann.

#### Version - V.1.1.0 - Filter Projekte
* **FRONTEND:** Button wurden Global auf eine min-width gesetzt, damit auch kleine button genug Aufmerksamkeit bekommen.
* **FRONTEND:** Erweiterung der Funktionalität der Projekt Seite durch die Möglichkeit den Inhalt zu Filtern.

#### Version - V.1.2.0 - Campus Filter
* **FILTER:** Schatten wird von den Elementen genommen, nur bei Hover wird dieser jetzt gezeigt.
* **FRONTEND:** Erweiterung der Funktionalität der Campus Seite durch die Möglichkeit den Inhalt zu Filtern.
* **STARTSEITE:** Termine werden nur angezeigt wenn es Termine gibt.

#### Version - V.1.2.1 - Campus Filter, Logo Hover & Effekte
* **FILTER:** Rechtschreibfehler verbessert.
* **HEADER:** Logo verändert die Farbe beim Hover über den Menüpunkt
* **FRONTEND:** Fade & Slide Effekte werden beim Scrollen auf der Seite ausgelöst.

#### Version - V.1.2.2 - BUGFIX
* **FILTER:** MusicDesign wurde auf der Projekt Filter Seite zu Music Design umbenannt.
