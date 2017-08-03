# Fakultatsblog-Digitale-Medien
Fakultätsblog der Fakultät Digitale Medien der Hochschule Furtwangen.

<h2>Beschreibung</h2>

<p>Um diese Seite zu bearbeiten müssen eine Punkte geklärt werden. Der MASTER/Bench des Repository wird direkt auf den Server gespielt. Daher sollten alle Änderungen erst auf einem BETA/Bench getestet und auf der Staging Ungebungen veröffentlicht werden, bevor Sie final gepushed werden können.</p>

<p>Um das Design der Seite bearbeiten zu können werden einige Funktionen/Tools genutzt. Diese wären:</p>

<ul>
  <li>Gulp (Taskrunner)</li>
  <li>SASS (CSS)</li>
  <li>TypoScript</li>
  <li>HTML/HTML5</li>
  <li>JavaScript/jQuery</li>
</ul>

<p>Desweiteren ist die Seite durch ein eigenes Template entwickelt worden, dieses bietet alle Möglichkeiten der Erweiterung und ist wie Folgt aufgebaut:</p>

- Template<br>
-- backend (Backend Themes für Mask)<br>
-- content (Frontend Themes für Mask)<br>
-- css (CSS Files)<br>
-- fonts (Schriften)<br>
-- html (HTML Template für Typo3)<br>
-- img (Grafiken die nur im Design vorkommen wie z.B. das Logo)<br>
-- js (JavaScripte)<br>
--- min (Minifizierte JavaScripte)<br>
--- vendor (Scripte von Externen Quellen)<br>
--- work (eigene JavaScripte, Werden durch Gulp zu einer Datei zusammengefasst)<br>
-- partials (Elemente die bei Typo3 auf verschiedenen Seiten vorkommen)<br>
-- sass (SASS Datein, müssen zu einer CSS Datei zusammengefasst werden)<br>
-- ts (Typoscript, wird direkt ins Backend geladen)<br>

<h3>Versionen</h3>

<h5>Version - V.0.0.0 - Beta</h5>
<ul>
  <li>PAGE: Die Seite wurde das erste mal mit fast allen Funktionen veröffentlicht.</li>
  <li>FRONTEND: Frontend basiertes Update wurde durchgeführt.</li>
  <li>FRONTEND: Kleine Anpassungen am Layout, neue Farben, Größen und Mobile Richtlinien.</li>
  <li>BACKEND: Zusätzliche Funktionalität im vergleich zu der "Test-Version" wurde hinzugefügt.</li>
</ul>

<h5>Version - V.0.1.0 - Campus Rework</h5>
<ul>
  <li>FRONTEND: Logo im Footer wurde verändert, dazu wurde ein neues SVG verlinkt.</li>
  <li>CAMPUS: Campus Layout wurde überarbeitet und durch ein neues Mask Element Erweitert.</li>
  <li>CAMPUS: Kleine Anpassungen an Abständen.</li>
</ul>

<h5>Version - V.0.2.0 - Campus Rework</h5>
<ul>
  <li>FRONTEND: Kleine Anpassungen auf der ganzen Seite.</li>
  <li>BUGFIX: Termine auf der Startsite.</li>
  <li>BUGFIX: Mobiles Menü.</li>
  <li>BACKEND: Backend layouts Erweiterrung.</li>
</ul>

<h5>Version - V.1.0.1 - META Update & SEO Stuff</h5>
<ul>
  <li>PAGE: H1 wurde eingefügt.</li>
  <li>SEO: eitentitel wurde verbessert.</li>
</ul>

<h5>Version - V.1.0.2 - Inhaltliche Verbesserungen</h5>
<ul>
  <li>STUDIENGÄNGE: CTA bei dern Studiengängen wurde zu "Alle Infos" geändert.</li>
  <li>STUDIENGÄNGE: Abstand bei den Studiengängen wurde reduziert, sieht jetzt so aus wie bei Campus.</li>
</ul>

<h5>Version - V.1.0.3 - Meta Erweiterrungen & Inhaltliche Verbesserungen</h5>
<ul>
  <li>META: Das Plug-In RealURL wurde hinzugefügt.</li>
  <li>META: Favicon wurde in die Meta-Tags aufgenommen.</li>
  <li>CAMPUS: Bei Campus wurde so erweitert das bei "campusbasis.html" jetzt der Name des Buttons frei vergeben werden kann.</li>
</ul>
