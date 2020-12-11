const EVENTS = [

    {
        "description": "Erster bekannter Fall von COVID-19, ausserhalb von China",
        "text": "Die Schweiz reagiert nicht. Am 28. Februar 2020 stufte der Schweizer Bundesrat die Situation in der Schweiz als &laquo;besondere Lage&raquo; gem&auml;ss Epidemiengesetz ein.",
        "date": "13.01.2020",
        "image": "img/covid.jpg",
		"link": "https://de.wikipedia.org/wiki/COVID-19-Pandemie_in_der_Schweiz"
    },     
    {
        "description": "Masken w&uuml;rden nichts bringen",
        "text": "Masken w&uuml;rden nichts bringen. Dies betonte das Bundesamt f&uuml;r Gesundheit (BAG) in den ersten Monaten der Pandemie immer wieder. Daniel Koch sagte am 16. M&auml;rz: &laquo;Schutzmasken sind, wenn sie in der allgemeinen Bev&ouml;lkerung getragen werden, sehr wenig wirksam.&raquo; Es stellt sich die Frage, wie viele Menschen Aufgrund dieser Aussagen erkrankten oder verstarben.",
        "date": "16.03.2020",
        "image": "img/masken.jpg",
		"link": "https://www.aargauerzeitung.ch/schweiz/weshalb-der-bund-sagte-masken-wuerden-nichts-bringen-138635385"
    },

    {
        "description": "Bundesrat erkl&auml;rt die &laquo;ausserordentliche Lage&raquo;",
        "text": "&Ouml;ffentliche und private Veranstaltungen werden verboten. Alle L&auml;den, M&auml;rkte, Restaurants, Bars sowie Unterhaltungs- und Freizeitbetriebe wie Museen, Bibliotheken, Kinos, Konzert- und Theaterh&auml;user, Sportzentren, Schwimmb&auml;der und Skigebiete werden geschlossen. Ebenso werden Betriebe geschlossen, in denen das Abstand halten nicht eingehalten werden kann, wie Coiffeursalons oder Kosmetikstudios.",
        "date": "17.03.2020",
        "image": "img/bund.jpg",
        "link": "https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-78454.html"
    },

    {
        "description": "Ausstieg aus der &laquo;ausserordentliche Lage&raquo;",
        "text": "Die Massnahmen zur Eind&auml;mmung des Coronavirus werden ab dem 27. April etappenweise gelockert, In einer Pressemitteilung freute sich Economiesuisse, dass die &laquo;Vorschl&auml;ge der Wirtschaft weitgehend aufgenommen&raquo; worden seien",
        "date": "16.04.2020",
        "image": "img/emergency.jpg",
        "link": "https://www.woz.ch/-b04b"
    },

    {
        "description": "LongCovid - Post-viral fatigue syndrome",
        "text": "Im Vereinigten K&ouml;nigreich werden erste Dokumente und Hilfestellungen f&uuml;r LongCovid Erkrankte publiziert (ME Association). In der Schweiz ist dies bis Heute (Stand: 08.12.2020) noch nicht geschehen. Weder f&uuml;r &Auml;rzte noch f&uuml;r Patienten.",
        "date": "30.04.2020",
        "image": "img/illness.jpg",
        "link": "https://meassociation.org.uk/wp-content/uploads/MEA-PVF-and-PVFS-Following-Coronavirus-Infection-30.04.20.pdf"
    },
    
    {
        "description": "Der Corona-Task-Force gehen die Lockerungen des Bundesrates zu weit",
        "text": "Am 26.06.2020 berichtet unter anderem Blick.ch, &quot;Das Virus bleibt gef&auml;hrlich. &laquo;In den letzten sieben Tagen gab es eine 30-prozentige Zunahme der F&auml;lle&raquo;, sagt Matthias Egger, Epidemiologe und Leiter der wissenschaft&shy;lichen Taskforce, die den Bundesrat in Corona-&shy;Fragen ber&auml;t. &laquo;Zusammen mit der &shy;Reproduktionszahl, die gegen eins gestiegen ist, deuten die Zahlen in die falsche Richtung. Sie sinken nicht mehr, sondern steigen wieder&raquo;&quot; Die schnelle &Ouml;ffnung des Bundes geht Wissenschaftern zu schnell. Das Risiko ist zu hoch. Bald k&ouml;nnten auch in der Schweiz die ersten Infektions-Hotspots auftreten. Nur 3 Monate sp&auml;ter wird sich die Politik &quot;&uuml;berrascht&quot; geben, das die Fallzahlen exponentiel steigen.",
        "date": "26.06.2020",
        "image": "img/science.jpg",
        "link": "https://www.blick.ch/ausland/corona-taskforce-haelt-lockerung-fuer-uebereilt-der-bundesrat-riskiert-eine-zweite-welle-id15948274.html"
    },  

    {
        "description": "Einf&uuml;hrung der schweizweiten Maskenpflicht im &Ouml;V",
        "text": "Die Landesregierung reagiert mit der Einf&uuml;hrung auf die erneut steigenden Covid-19 Fallzahlen.",
        "date": "06.07.2020",
        "image": "img/publictransport.jpg",
		"link": "https://www.tagesanzeiger.ch/kommt-ab-mitternacht-die-maskenpflicht-im-oev-282908806336"
    },

    {
        "description": "Schulanfang in den meisten Kantonen. &laquo;Ich bin schon etwas besorgt&raquo;",
        "text": "Im August berichtet srf.ch &quot;F&uuml;r tausende Kinder und Jugendliche geht morgen im Kanton Z&uuml;rich die Schule wieder los. Allerdings unter besonderen Voraussetzungen. An Z&uuml;rcher Gymis und Berufsschulen m&uuml;ssen die Sch&uuml;ler in den G&auml;ngen des Schulhauses Masken tragen.&quot; Warum das Virus nicht im sitzen &uuml;bertragen wird, wurde nicht erl&auml;utert. Silvia Steiner betont das sie aufmerksam und besorgt ist.",
        "date": "16.08.2020",
        "image": "img/kids.jpg",
		"link": "https://www.srf.ch/news/regional/zuerich-schaffhausen/schulanfang-in-zuerich-ich-bin-schon-etwas-besorgt"
    },
    {
        "description": "Wenn unter 12-j&auml;hrige Kinder Krankheitssymptome haben",
        "text": "Das BAG empfiehlt das Kinder, auch mit Krankheitssymptomen weiterhin zur Schule oder Kindergarten gehen sollen. Das Kinder aufgrund von COVID-19 an MIS-C erkranken ist bereits seit dem Fr&uuml;hjahr in Italien sowie den USA wissenschaftlich belegt.",
        "date": "25.9.2020",
        "image": "img/children.jpg",
		"link": "https://www.bag.admin.ch/bag/de/home/das-bag/aktuell/news/news-25-09-2020.html"
    },
    {
        "description": "Grossveranstaltungen",
        "text": "Trotz aller Warnungen aus der Wissenschaft werden ab Oktober Grossveranstaltungen in der Schweiz genehmigt. 20min.ch berichtet am 06.10.2020 «Die Menschen versammelten sich, als gäbe es kein Corona»",
        "date": "06.10.2020",
        "image": "img/football.jpg",
		"link": "https://www.20min.ch/story/die-menschen-versammelten-sich-als-gaebe-es-kein-corona-710955826976"
    },
    {
        "description": "Schulen sind Treiber der Pandemie",
        "text": "Im Oktober berichtet tagesanzeiger.ch &quot;Nach Ansicht verschiedener Wissenschaftler im In- und Ausland spielen die Schulen eine zentrale Rolle bei der zweiten Pandemie-Welle in Israel&quot; Es wird empfohlen auf Schul&ouml;ffnungen zu verzichten wenn die Fallzahlen steigen. In der Schweiz wird dies ignoriert.",
        "date": "09.10.2020",
        "image": "img/school.jpg",
		"link": "https://www.tagesanzeiger.ch/corona-lektionen-aus-israel-499729701264"
    },
          
    {
        "description": "Leben wird in wertvoll und weniger wertvoll eingeteilt",
        "text": "Finanzminister Ueli Maurer steht hinter dem vergleichsweise liberalen Umgang der Schweiz mit dem Coronavirus. &laquo;Wir haben eine G&uuml;terabw&auml;gung zwischen Gesundheit, Wirtschaft und &ouml;ffentlichem Leben gemacht.&raquo; Es f&auml;llt der Satz. &laquo;Der ganz grosse Teil sind &uuml;ber 80-J&auml;hrige&raquo;, was einer Abwertung gleich kommt. Warum sollte das weniger schlimm f&uuml;r den Betroffenen und die angeh&ouml;rigen sein? Ueli Maurer pr&auml;gt an diesem Tag den Satz &laquo;F&uuml;r mich stimmt dieser Weg&raquo;. F&uuml;r viele in der Schweiz stimmt dieser Weg allerdings nicht. F&uuml;r viele kann man Leben nicht politisch entwerten. #NichtMeinWeg entsteht.",
        "date": "21.11.2020",
        "image": "img/finance.jpg",
		"link": "https://www.srf.ch/news/schweiz/todesfaelle-und-wirtschaft-ueli-maurer-wir-haben-eine-gueterabwaegung-gemacht"
    },  

    {
        "description": "SP fordert Einf&uuml;hrung einer Corona-Ampel",
        "text": "Im November entsteht in der Schweiz erstmals eine Opposition zum &quot;Weg&quot; welchen die Schweiz eingeschlagen hatten. &quot;Die SP verlangt von Bund und Kantonen eine Corona-Gesamtstrategie bis Ende Jahr in den Bereichen Gesundheit, Soziales und Wirtschaft.&quot; berichtet blick.ch am 25.11.2020",
        "date": "25.11.2020",
        "image": "img/ampel.jpg",
		"link": "https://www.blick.ch/politik/bund-soll-bis-ende-jahr-gesamtstrategie-vorlegen-sp-fordert-einfuehrung-einer-corona-ampel-id16210672.html"
    },  
    
    {
        "description": "Konzert im Parlament",
        "text": "Am 29.11.2020 findet im Parlament in Bern ein Trompetenkonzert statt. In der gleichen Zeit verzeichnet die Schweiz etwa 5000 an Covid-19 verstorbene Menschen.",
        "date": "29.11.2020",
        "image": "img/bund.jpg",
		"link": "https://twitter.com/CarloSommaruga/status/1333443830004277249"
    },  
       

    {
        "description": "Gesang und Musik im St&auml;nderat",
        "text": "Auf nzz.ch wird berichtet: Ueli Maurer wird 70, das Parlament singt und feiert mit Luftballons. Kein Zeichen der Trauer zu den &uuml;ber 5000 an Covid-19 verstorbenen.",
        "date": "01.12.2020",
        "image": "img/ballons.jpg",
		"link": "https://www.nzz.ch/schweiz/staenderrat-gesang-und-musik-trotz-corona-ld.1589836?reduced=true"
    },     

]
