![Status](https://img.shields.io/badge/Status-stable-brightgreen.svg?style=for-the-badge) ![Release](https://img.shields.io/badge/Online-Verion-1.0.0-brightgreen.svg?style=for-the-badge) ![Update](https://img.shields.io/badge/Update-11.12.2017-blue.svg?style=for-the-badge)


# Fakultatsblog Digitale Medien
Entwicklungsbeschreibung des [Fakultätsblogs](http://digitalemedien-furtwangen.de) der Fakultät Digitale Medien der Hochschule Furtwangen. In diesem Repository werden alle Informationen hinterlegt die mit der Verwaltung sowie der Erweiterung der Webstie benötigt werden. Der Aktuelle Ansprechpartner der Website ist @Unleashed-Design bzw. Johannes Schiel.

## Ansprechpartner
Hier werden alle Ansprechpartner die für die Verwaltung der Seite Verantwortlich waren/sind aufgelistet. Dabei sollen hier Private E-Mail Adressen hinterlegt werden sofern Fragen entstehen die nach dem Abschluss bei der Fakultät beantwortet werden müssten.

#### Johannes Schiel / 03.2017 - heute / johannes.schiel@outlook.de

## Technischer Aufbau des Themes
In diesem Repository findet Ihr alle Informationen die dazu dienen die Website bzw. das Template des Fakultatsblogs zu verwalten. Dazu wird im folgenden Erklärt wie das Template aufgebaut ist und was damit gemacht werden muss. Jedoch wird die Kenntniss des Grundaufbaus von Typo3 vorrausgesetzt und nicht näher beschreiben.

#### Regeln
Für die Arbeit mit diesem Repository ist es wichtig das einige Regeln eingehalten werden.

1. Es dürfen keine Änderungen an Typo3 Datein vorgenommen werden die Außerhalb dieses Repositorys auf dem Server liegen. Da diese Änderungen nicht übernommen werden sofern Typo3 ein Update durchführt.
2. Man sollte im Code Änderungen möglichst genau Kommentieren, denkt immer daran Ihr Seit nicht die einzigen die an dieser Website arbeiten werden.
3. Es sollten nur Minifizierte Datein verwendet werden.
4. Nach einem Erfolgreichen Update der Seite sollte kontrolliert werden ob die Seite Valide ist. Hierzu sollten Test mithilfe der website und durchgeführt werden.
5. Wenn größere Inhaltliche Änderungen durchgeführt werden sollte kontrolliert werden ob die Ladezeiten der Seite ok sind. Hierzu eignen sich die Programme und . Sofern hier Fehler oder Probleme auftauchen sollten diese Behoben werden.

#### Zugangsdaten
Alle Zugangsdaten zu User Accounts, FTP Zugängen, Host Zugang usw. werden bei Übergabe des HiWi Jobs übergeben und werden nicht in diesem Repository gespeichert. Alle Zugsangsdaten werden als .TXT Datei übergeben und sofern diese Erweitert werden z.B. neue Backend Benutzer usw. sollten diese in die .TXT Datei eingetragen werden. Aktuell besitzt @Unleashed-Design die Zugangsdaten sofern also Fragen oder Probleme auftauchen sollten, sollte sich an ihn gewendet werden.

#### Techniken
Um das Design der Seite bearbeiten zu können werden einige Funktionen/Tools genutzt. Diese wären:

* **Gulp** [GULP](https://gulpjs.com/) ist nicht zwingend nötig um das Template zu bearbeiten jedoch muss ein Taskrunner vorhanden sein um die Seite korrekt zu überarbeiten. Dieser Taskrunner muss SASS files sowie JS Files kompilieren können.
* **SASS** Auf der Seite wird nur eine CSS Datei eingebunden diese wird mithilfe des CSS Preprozessors [SASS](http://sass-lang.com/) erstsellt. Daher sollte auch nur in den SASS Datein Änderungen vorgenommen werden. CSS Datein dürfen aus diesem Grund nicht Manuel überarbeitet werden.
* **TypoScript** In Typo3 wird eine eigene Sprache verwendet das sog. TypoScript, dieses dient der Ausgabe von Informationen sowie dem Verwalten bzw. Arbeiten mit diesen. Alle Datein die dazu benötigt werden finden sich in dem 'ts' Verzeichnis in diesem Repository. TypoScript ersetzt im wesentlichen alles was normalerweile von PHP oder Python übernommen wird.
* **HTML/HTML5** Die Gesamte Struktur der Seite wird mithilfe von HTML bzw. HTML5 aufgebaut. Dazu sollen mögichst wenig Elemente erstellt werden. Was die Ladezeit der Seite möglichst minimal halten soll.
* **JavaScript/jQuery** Für diverse Effekte sowie verschiedene Berechnungen und Funktionen wird auf der Seite JavaScript bzw. das Framework jQuery verwendet. In Zukunft soll jedoch versucht werden JavaScript nach dem ES6 Standart zu verwenden und auf das Framework jQuery zu verzichten. Auf diese Weise soll die Performance der Seite verbessert werden.

## Template Aufbau
In diesem Bereich findet sich eine komplette Zusammenfassung des Aufbaus des Tempaltes.

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
Sofern dieses Repository auf den Webserver deployed wird, so sollte eine Release vorgenommen werden. Sofern eine gewisse Anzahl an Änderurngen vorliegt sollte in regelmäßigen abständen ein Release vorgenommen werden. Dies dient der Übersicht über den Aktuellen zustand der Versionen.

Dabei sollte in dem Release genau beschreiben werden was verändert wurded sodas es leicht nachvollziehbar ist. Wichtig ist hierbei das im oberen Bereich dieses Repository hinterlegt ist, welcher Release grade Online auf dem Server liegt. So kann auf einen Blick von jedem gesehen werden ob grade alles Funktioniert oder nicht.
