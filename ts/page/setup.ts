
// ALLGEMEINE CONFIG EINSTELLUNGEN FÜR TYPO3
config {
    no_cache = 0
    doctype = html5
    baseURL = http://digitalemedien-furtwangen.de
    absRelPath = /
    tx_realurl_enable = 1
    linkVars = L(0-3)
    contentObjectExceptionHandler = 0
    noPageTitle = 2
  }

page = PAGE
page.typeNum = 0
page.shortcutIcon = typo3conf/ext/template/img/favicon.ico
page {

  headerData >
  headerData = COA
  headerData.10 = TEXT
  headerData.10.field = title
  headerData.10.wrap = <title>|&#32;- Fakultätsblog Digitale Medien</title>

  // META INFORMATIONEN DIE AUF JEDERZEITE AUS DEM BACKEND GENERIERT WERDEN
  meta {
    robots = INDEX,FOLLOW
    revisit = 7 days
    date.data = page:SYS_LASTCHANGED
    date.date = Y-m-d
    viewport = width=device-width, initial-scale=1.0
    keywords.field = keywords
    description.field = description
    abstract.field = abstract
    author.field = author
  }

  // AUSWAHL WELCHES HTML TEMPLATE WANN GELADEN WERDEN SOLL
  10 = FLUIDTEMPLATE
  10 {
    file = typo3conf/ext/template/html/startseite.html
    partialRootPath = typo3conf/ext/template/partials
    layoutRootPath = typo3conf/ext/template/layouts
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout

      4 = TEXT
      4.value = typo3conf/ext/template/html/startseite.html
      5 = TEXT
      5.value = typo3conf/ext/template/html/normalpage.html
      6 = TEXT
      6.value = typo3conf/ext/template/html/studiengange.html
      7 = TEXT
      7.value = typo3conf/ext/template/html/campus.html
      8 = TEXT
      8.value = typo3conf/ext/template/html/projekte.html
      9 = TEXT
      9.value = typo3conf/ext/template/html/projekt.html
    }

    // FESTLEGUNG ALLER CONTENT VARIABLEN
    variables {
      content < styles.content.get
      content.select.where = colPos=0
      content1 < styles.content.get
      content1.select.where = colPos=1
      content2 < styles.content.get
      content2.select.where = colPos=2
      seitentitle >
      seitentitle = COA
      seitentitle.10 = TEXT
      seitentitle.10.field = title
      seitentitle.10.wrap = <h2>|</h2>
    }

  }

  // IMPORT DER CSS DATEN
  includeCSS{
    font = https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900
    font.title = display
    font.media = screen
    screen = typo3conf/ext/template/css/min-style.css
    screen.title = display
    screen.media = screen
    }

  // IMPORT DER JS DATEN (VENDOR/EIGENE)
  includeJSFooter{
    jquery = typo3conf/ext/template/js/vendor/jquery.js
    globaljs = typo3conf/ext/template/js/min/min-global.js
  }
}

// HAUPTNAVIGATION
// Hier wird die Hauptnavigation geladen, diese kann im Backend festgelegt werden.
mainmenu = HMENU
mainmenu.special = directory
mainmenu.special.value = 23
mainmenu.1 = TMENU
mainmenu.1 {
  wrap = <ul>|</ul>
  expAll = 0
  NO.allWrap = <li class="menu-item">|</li>
  RO < .NO
  RO = 1
  CUR < .NO
  CUR = 1
  CUR.allWrap = <li class="menu-item menu-currend">|</li>
  ACT < .CUR
}

// META NAVIGATION
// Hier wird die Meta-Navigation geladen, diese kann im Backned festgelegt werden.
metamanu = HMENU
metamanu.special = directory
metamanu.special.value = 16
metamanu.1 = TMENU
metamanu.1 {
  wrap = <ul>|</ul>
  expAll = 0
  NO.allWrap = <li class="menu-item">|</li>
  RO < .NO
  RO = 1
  CUR < .NO
  CUR = 1
  CUR.allWrap = <li class="menu-item menu-currend">|</li>
  ACT < .CUR
}

// PROJEKTE DARSTELLEN
// Hier werden die Projekte dargestellt und ausgegeben.
lib.subpages = COA
lib.subpages {
  10 = HMENU
  10 {
    special = directory
    // 20 ist die ID des Ordners der ausgelesen werden soll.
    special.value = 20
    1 = TMENU
    1 {
      expAll = 1
      NO.doNotLinkIt = 1
      NO.allStdWrap.field = uid
      NO.allStdWrap.wrap = |,
    }
    2 < .1
  }
}

// Hier wird das eigentliche CONTENT Elemente erzeugt das später in das Theme geladen werden muss.
lib.getsubpages = CONTENT
lib.getsubpages {
  table = tt_content
  select {
    // Die ID wurde mi der Funktion lip.subpages ermittelt und wird hier übergeben.
    pidInList.cObject < lib.subpages
    where = colPos = 0
    orderBy = sorting
  }
  renderObj.stdWrap {
    // Das Inhaltselement wird erstellt und alles in ihm wird mit einem Link gewrapt.
    wrap = <article class="projekt-box">|</article>
    typolink.parameter.field = pid
  }
}

// Hier wird das eigentliche CONTENT Elemente erzeugt das später in das Theme geladen werden muss.
lib.getsubpagesfrontpage = CONTENT
lib.getsubpagesfrontpage {
  table = tt_content
  select {
    // Die ID wurde mi der Funktion lip.subpages ermittelt und wird hier übergeben.
    pidInList.cObject < lib.subpages
    // Maximal 5 Projekte werden gelalden
    max = 4
    where = colPos = 0
  }
  renderObj.stdWrap {
    // Das Inhaltselement wird erstellt und alles in ihm wird mit einem Link gewrapt.
    wrap = <article class="projekt-box">|</article>
    typolink.parameter.field = pid
  }
}

// Hier werden zwei Random Projekte erstellt.
lib.getrandomprojektes = CONTENT
lib.getrandomprojektes {
  table = tt_content
  select {
    // Die ID wurde mi der Funktion lip.subpages ermittelt und wird hier übergeben.
    pidInList.cObject < lib.subpages
    // Maximal 5 Projekte werden gelalden
    max = 3
    where = colPos = 0
  }
  renderObj.stdWrap {
    // Das Inhaltselement wird erstellt und alles in ihm wird mit einem Link gewrapt.
    wrap = <article class="projekt-box">|</article>
    typolink.parameter.field = pid
  }
}
