![Status](https://img.shields.io/badge/Status-Stable-brightgreen.svg?style=for-the-badge)
![Backup](https://img.shields.io/badge/Backup-none-red.svg?style=for-the-badge)
![Valide](https://img.shields.io/badge/Valide-Bestanden-brightgreen.svg?style=for-the-badge)
![Speedtest](https://img.shields.io/badge/Speedtest-Bestanden-brightgreen.svg?style=for-the-badge)
![Release](https://img.shields.io/badge/Online-v1.1.0-brightgreen.svg?style=for-the-badge)

# Fakultatsblog Digitale Medien
Entwicklungsbeschreibung des [Fakultätsblogs](http://digitalemedien-furtwangen.de) der Fakultät Digitale Medien der Hochschule Furtwangen. In diesem Repository werden alle Informationen hinterlegt die mit der Verwaltung sowie der Erweiterung der Webstie benötigt werden. Der Aktuelle Ansprechpartner der Website ist @Unleashed-Design bzw. Johannes Schiel.

## Ansprechpartner
Hier werden alle Ansprechpartner die für die Verwaltung der Seite Verantwortlich waren/sind aufgelistet. Dabei sollen hier Private E-Mail Adressen hinterlegt werden sofern Fragen entstehen die nach dem Abschluss bei der Fakultät beantwortet werden müssten.

#### Johannes Schiel / 03.2017 - 08.2018 / johannes.schiel@outlook.de

## Technischer Aufbau des Themes
In diesem Repository findet Ihr alle Informationen die dazu dienen die Website bzw. das Template des Fakultatsblogs zu verwalten. Dazu wird im folgenden Erklärt wie das Template aufgebaut ist und was damit gemacht werden muss. Jedoch wird die Kenntniss des Grundaufbaus von Typo3 vorrausgesetzt und nicht näher beschreiben.

#### Regeln
Für die Arbeit mit diesem Repository ist es wichtig das einige Regeln eingehalten werden.

1. Es dürfen keine Änderungen an Typo3 Datein vorgenommen werden die Außerhalb dieses Repositorys auf dem Server liegen. Da diese Änderungen nicht übernommen werden sofern Typo3 ein Update durchführt.
2. Man sollte im Code Änderungen möglichst genau Kommentieren, denkt immer daran Ihr Seit nicht die einzigen die an dieser Website arbeiten werden.
3. Es sollten nur Minifizierte Datein verwendet werden.
4. Nach einem Erfolgreichen Update der Seite sollte kontrolliert werden ob die Seite Valide ist. Hierzu sollten Test mithilfe der Websites [HTML Validator](https://validator.w3.org/) und [CSS Validator](https://jigsaw.w3.org/css-validator/) durchgeführt werden.
5. Wenn größere Inhaltliche Änderungen durchgeführt werden sollte kontrolliert werden ob die Ladezeiten der Seite ok sind. Hierzu eignen sich die Programme  [Pingdom Speed Test](https://tools.pingdom.com/) und [Google Pagespeed](https://developers.google.com/speed/pagespeed/insights/) . Sofern hier Fehler oder Probleme auftauchen sollten diese Behoben werden.

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
In diesem Bereich findet sich eine komplette Zusammenfassung des Aufbaus des Tempaltes. Die Datein liegen auf dem Server in dem Verzeichnis ```\typo3conf\ext\template/```.

### Grundlagen
Bei Typo3 handelt es sich um ein Content Management System das es ermöglicht einfach und ohne großen Aufwand Inhalte auf einer Website zu verändern. Dazu ist es wichtig das es korrekt aufgebaut wird. Daher liegen in diesem Repository alle Files die zum Aufbau der Seite gebraucht werden.

### Struktur
Die Struktur des Systems basiert auf Gulp, dies bedeutet das es einmal ein src sog. Source Ordner gibt. Hier liegen alle Dateien die bearbeitet werden können. In dem dist Verzeichnis speichert der Taskrunner Automatisch alle Dokumente die später auf die Website verschoben werden.

* ```/content/``` hier liegen alle Elemente die für die Erstellung von Mask Elementen gebraucht werden.
* ```/css/``` hier liegen die Finalen CSS Files, diese werden auf der Seite eingebunden.
* ```/html/``` enthält alle HTML Seiten Templates.
* ```/img/``` hier liegen alle Bilder, Grafiken und Schaubilder.
* ```/js/``` enthält das auf der Seite genutzt JavaScript. Sofern es externe Scripte gibt sollten diese über NPM installiert werden.
* ```/partials/``` enthält alle wiederholbaren Inhaltstypen wie z.B. Header oder Footer.
* ```/sass/``` hier liegen alle SASS Files die für das Aussehen der Seite wichtig sind.
* ```/ts/``` Hier werden alle Typo3 Scripte hinterlegt.
* ```/ts/page/``` hier liegt die ```/setup.ts/``` diese Datei Steuert die gesamte Seite mithilfe von Typescript.

In den Verzeichnissen ```/content/```, ```/html/``` und ```/partials/``` findst du die Sturktur der Website. Also die HTML Bausteine die gebraucht werden um die Website Dynamisch zu generieren. Dabei sind die Bausteine unter ```/content/``` Inhaltsbausteine die von dem Mask Plug-In verwendent werden. Hier werden die Inhalte wie Projekte usw. erstellt und verwaltet. In dem ```/html/``` Verzeichnis sind die eigentlichen Templates der Unterschiedlichen Seiten hinterlegt. Dabei werden die eigentlichen Inhalte der Seiten über die ```/content/``` sowie die ```/partials/``` erstellt die in die Dokumente in ```/html/``` hineingeladen werden.

Bei ```/partials/``` handelt es sich um Template bestandteile die Dynamisch auf jeder Seite geladen werden. Also Elemente die auf der gesamten Website gleich sind. Wie z.B. Footer oder Head Bereiche. Solche Bereiche werden über TypoScript wie z.B. ``` <f:render partial="header" arguments="{_all}" />``` in die ```/html/``` Datein geladen. Mehr Informationen zu TypoScript findest du in der Offiziellen Dokumentation von Typo3. [Zur Ddokumentation](https://typo3.org/documentation/)

Sofern Grafiken wie Icons, Schaubilder oder Grafische Element geladen werden. So sollten diese in dem ```/img/```  Verzeichnis hinterlegt werden. Wenn es sich dabei nicht um Fotografische Elemente handelt, muss die Grafik als SVG Datei hinzugefügt werden.

Änderungen an CSS Datein kann nur mithilfe eines Taskrunners durfgeführt werden. Da es sich bei der Website um Minifizierte bzw. Compilierte Datein handelt. Dies bedeutet das z.B. Änderungen an einer CSS Datei in dem ```/sass/``` Verzeichnis an den SASS Datein durchgeführt werden muss. In dem ```/css/```  Verzeichnis liegen also nur die *Build* Datei, die aus den SASS Datein erstellt wurde. Es sollte immer eine ```/min-style.css/``` und eine ```/style.css/``` Datei erstellt werden, um die Übersicht über den CSS Code zu gewährleisten auch wenn kein SASS genutzt werden kann. Dabei ist es wichtig.

JavaScript Datein liegen im ```/js/``` Verzeichnis auf dem Server dort sind drei Unterverzeichnisse hinterlegt. ```/min/``` beinhaltet die Komprimierte und Zusammengefasste Datei die später auf dem Frontend eingebunden wird. ```/vendor/``` beinhaltet externe Scripte wie z.B. jQuery. ```/work/``` beinhaltet die JavaScript Bausteine die für die Seite geschreiben wurden.   

JavScript und CSS Datein werden per TypeScript genauer gesagt über die ```/ts/page/setup.ts``` Datei in das Frontend der Website geladen. Es werden keine Verlinkungen oder Ähnliches gebraucht.

### Entwicklungsumgebung Starten & Nutzen

#### Schritt 1: Node Installieren
Um die Entwicklungsumgebung zu starten muss das Repository auf dem Lokalem System vorhanden sein. Zusätzlich muss NPM(Node Package Manager) installiert werden. Eine Anleitung findest du mit ausführlichen Anweisungen hier: [NPM Install](https://nodejs.org/en/download/)

### Schritt 2: Console Starten
Wenn Node Installiert ist kann man mit der eigentlichen Umgebung beginnen. In der Console(cmd) muss nun das Verzeichnis angesteuert werden in dem das Repository liegt.

### Schritt 3: NPM Install
In der Console(cmd) muss nun das Verzeichnis angesteuert werden in dem das Repository liegt. Hier kann nun der Befehl ```npm i``` oder npm ```npm install``` eingegeben werden. Dieser installiert eine Menge Packete die für den Taskrunner Gulp ([Mehr Informationen](https://nodejs.org/en/download/)) genutzt werden.

### Schritt 4: Gulp Installieren & Starten
Wenn alles fertig installiert ist, kann durch den Befehl ```gulp``` die Entwicklungsumgebung gestartet werden. Es kann sein das hier nichts passiert oder ein Fehler ausgegeben wird. In diesem Fall sollte der Befehl ```npm install gulp --save -g``` in der Console ausgeführt werden.

Wenn Gulp erfolgreich gestartet ist steht in der Console etwas wie ```default```. Dies bedeutet das im Hintergrund das gesamte Verzeichnis überwacht wird. Sofern es z.B. Änderungen an SASS Dateien gibt speichert das System automatisch minifizierte css Dokumente in das dist Verzeichnis.

## Genutzte Plug-In's:
Um zu verstehen wie die Seite aufgebaut ist, bzw. welche Funktionen die Seite besitzt ist es wichtig das hier hinterlegt wird welche Funktion von Externen Plug-In's übernommen werden. Dazu sollte sofern ein Plug-In Verwendet wird

#### Mask
Das [Mask](https://extensions.typo3.org/extension/mask/) Plug-In ist die wichtigste Komponente die in dieser Website Verwendet wird. Es ermöglicht die Überarbeitung der Website bzw. das erstellung von Eigenen Content Elementen mit Custom Feldern. So kann man die Verwaltung der Seite stark vereinfachen und sicherstellen das jeder die Website verwalten kann.

In dem Repesitory unter dem Verezichnis ```/content/``` findet man die HTML Bausteine die zu Bausteinen des Mask Plug-In's werden. Sofern also neue Elemente erstellt werdedn sollen müssen diese hier hinterlegt werden. Eine Anleitung zur Arbeit mit dem Mask Plug-In findest du [hier](https://jweiland.net/video-anleitungen/typo3/interessante-typo3-extensions/mask.html).

#### Speaking URLs
Das Plug-In [Speaking URLs](https://extensions.typo3.org/extension/realurl/) übernimmt die Verwaltung und das Überschreiben von Lesbaren URLs. Die Einstellungen dazu finden sich auf dem Server im Backend unter dem Menüpunkt **Speaking URLs**

## Backup Versionen
Um eine möglichst sichere Entwicklungsumgebung herzustellen sollte nach der Regel vorgegangen werden nach allen "größeren" Änderrungen ein Komplettes Backup der Seite zu erstellen. Gründe für ein Backup:

* Vor dem hinzufügen eines neuen Plug-In's
* Wenn viele Inhalte auf der Seite verändert wurde z.B. diverse neue Projekte erstellt wurden.
* Nach großen Änderrungen am Strukturellen Aufbau der Seite

#### Vorgehen bei einem Backup
Wenn ein Backup erstellt werden soll, sollte wie folgt vorgegangen werden:
1. Download alle FTP Datein, anschließend sollten diese als ZIP Datei mit dem Namen 'YYYYMMDD_FTP.ZIP' in das ```/backup/``` Verzeichnis in diesem Repository hinterlegt werden.
2. Download der Datenbank über MySQL als ZIP Datei. Diese sollte auch mit ddem Namen 'YYYYMMDD_DATENBANK.ZIP' in das ```/backup/``` Verzeichnis in diesem Repository hinterlegt werden.

* **Letztes Backup** - Vollständiges Backup der Seite zum Jahresende 2017

## Versionen
Sofern dieses Repository auf den Webserver deployed wird, so sollte eine [Issues](https://github.com/Unleashed-Design/Fakultatsblog-Digitale-Medien/releases) vorgenommen werden. Sofern eine gewisse Anzahl an Änderurngen vorliegt sollte in regelmäßigen abständen ein Release vorgenommen werden. Dies dient der Übersicht über den Aktuellen zustand der Versionen.

Dabei sollte in dem Release genau beschreiben werden was verändert wurded sodas es leicht nachvollziehbar ist. Wichtig ist hierbei das im oberen Bereich dieses Repository hinterlegt ist, welcher Release grade Online auf dem Server liegt. So kann auf einen Blick von jedem gesehen werden ob grade alles Funktioniert oder nicht.

## Probleme & FAQ
Sofern im Laufe der Bearbeitung dieser Website Frage oder Probleme enstehen sollten, sollten diese in dem GIT Repository unter [Issues](https://github.com/Unleashed-Design/Fakultatsblog-Digitale-Medien/issues) eingetragen werden. Sofern man selbst nicht dazu in der Lage ist diese zu beheben so kann evtl. ein andere HiWi diese Probleme in Zukunft beheben und dort hinterlegen wie das geschehen ist.
