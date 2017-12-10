# Fakultatsblog-Digitale-Medien
Entwicklungsbeschreibung des Fakultätsblogs der Fakultät Digitale Medien der Hochschule Furtwangen.

## Zusammenfassung
In diesem Repository befindet sich das Template das auf der Website zum Einsatz kommt. Dazu

Um das Design der Seite bearbeiten zu können werden einige Funktionen/Tools genutzt. Diese wären:

* Gulp (Taskrunner)
* SASS (CSS)
* TypoScript
* HTML/HTML5
* JavaScript/jQuery

Desweiteren ist die Seite durch ein eigenes Template entwickelt worden, dieses bietet alle Möglichkeiten der Erweiterung und ist wie Folgt aufgebaut:

Template
--> backend (Backend Themes für Mask)
--> content (Frontend Themes für Mask)
--> css (CSS Files)
--> fonts (Schriften)
--> html (HTML Template für Typo3)
--> img (Grafiken die nur im Design vorkommen wie z.B. das Logo)
--> js (JavaScripte)
---> min (Minifizierte JavaScripte)
---> vendor (Scripte von Externen Quellen)
---> work (eigene JavaScripte, Werden durch Gulp zu einer Datei zusammengefasst)
--> partials (Elemente die bei Typo3 auf verschiedenen Seiten vorkommen)
--> sass (SASS Datein, müssen zu einer CSS Datei zusammengefasst werden)
--> ts (Typoscript, wird direkt ins Backend geladen)

Es wurden verschiedene Plug-In's genutzt im Funktionalität zu der Seite hinzuzufügen. Diese müssen bestehen bleiben da es sonnst zu Problemen mit der Inhaltsdarstellung kommen könnte.

## Genutzte Plug-In's:
* Mask
* Speaking URLs

## Backup Versionen
Um eine möglichst sichere Entwicklungsumgebung herzustellen sollte nach der Regel vorgegangen werden nach allen "größeren" Änderrungen ein Komplettes Backup der Seite zu erstellen. Gründe für ein Backup:

* Vor dem hinzufügen eines neuen Plug-In's
* Wenn viele Inhalte auf der Seite verändert wurde z.B. diverse neue Projekte erstellt wurden.
* Nach großen Änderrungen am Strukturellen Aufbau der Seite

* 23.07.2017 - Datenbank & FTP Datein - Johannes Schiel

## Versionen
In diesem Bereich wird beschreiben welche Änderungen bzw. Anpassungen an der Seite vorgenommen werden, dies soll dazu dienen nachzuvollziehen, was wann verändert wurde. Dazu wird ein für jedes Update ein Titel vergeben das beim Commit übermittelt werdedn muss. Jeder Commit wird zusätzlich mit einer Versionsnummer versehen. Diese Nummer ist wie folgt aufgebaut: X.0.0 - beschreibt welche Version es ist, wird also genutzt wenn z.B. ein Redesign durchgeführt werden soll das Umfangreiche Änderungen zur folge hat, 0.X.0 - beschreibt wenn Erweiterungen der Seite hinzugefügt werden, 0.0.X - beschreib kleine BugFixes oder Verbesserungen die jedoch keine Erweiterung der Funktionalität zur folge hat.

#### Version - V.0.0.0 - Beta
* PAGE: Die Seite wurde das erste mal mit fast allen Funktionen veröffentlicht.
* FRONTEND: Frontend basiertes Update wurde durchgeführt.
* FRONTEND: Kleine Anpassungen am Layout, neue Farben, Größen und Mobile Richtlinien.
* BACKEND: Zusätzliche Funktionalität im vergleich zu der "Test-Version" wurde hinzugefügt.

#### Version - V.0.1.0 - Campus Rework
* FRONTEND: Logo im Footer wurde verändert, dazu wurde ein neues SVG verlinkt.
* CAMPUS: Campus Layout wurde überarbeitet und durch ein neues Mask Element Erweitert.
* CAMPUS: Kleine Anpassungen an Abständen.

#### Version - V.0.2.0 - Campus Rework
* FRONTEND: Kleine Anpassungen auf der ganzen Seite.
* BUGFIX: Termine auf der Startsite.
* BUGFIX: Mobiles Menü.
* BACKEND: Backend layouts Erweiterrung.

#### Version - V.1.0.1 - META Update & SEO Stuff
* PAGE: H1 wurde eingefügt.
* SEO: eitentitel wurde verbessert.

#### Version - V.1.0.2 - Inhaltliche Verbesserungen
* STUDIENGÄNGE: CTA bei dern Studiengängen wurde zu "Alle Infos" geändert.
* STUDIENGÄNGE: Abstand bei den Studiengängen wurde reduziert, sieht jetzt so aus wie bei Campus.

#### Version - V.1.0.3 - Meta Erweiterrungen & Inhaltliche Verbesserungen
* META: Das Plug-In RealURL wurde hinzugefügt.
* META: Favicon wurde in die Meta-Tags aufgenommen.
* CAMPUS: Bei Campus wurde so erweitert das bei "campusbasis.html" jetzt der Name des Buttons frei vergeben werden kann.

#### Version - V.1.1.0 - Filter Projekte
* FRONTEND: Button wurden Global auf eine min-width gesetzt, damit auch kleine button genug Aufmerksamkeit bekommen.
* FRONTEND: Erweiterung der Funktionalität der Projekt Seite durch die Möglichkeit den Inhalt zu Filtern.

#### Version - V.1.2.0 - Campus Filter
* FILTER: Schatten wird von den Elementen genommen, nur bei Hover wird dieser jetzt gezeigt.
* FRONTEND: Erweiterung der Funktionalität der Campus Seite durch die Möglichkeit den Inhalt zu Filtern.
* STARTSEITE: Termine werden nur angezeigt wenn es Termine gibt.

#### Version - V.1.2.1 - Campus Filter, Logo Hover & Effekte
* FILTER: Rechtschreibfehler verbessert.
* HEADER: Logo verändert die Farbe beim Hover über den Menüpunkt
* FRONTEND: Fade & Slide Effekte werden beim Scrollen auf der Seite ausgelöst.

#### Version - V.1.2.2 - BUGFIX
* FILTER: MusicDesign wurde auf der Projekt Filter Seite zu Music Design umbenannt.
