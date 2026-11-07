// German translations, keyed by the English article path. Untranslated articles are not published under /de/.
export const de = {
  categories: {
    'getting-started': { title: 'Erste Schritte', description: 'Dein erstes Pferd, dein erster Tag und wie es weitergeht.' },
    horses: { title: 'Pferde & Pflege', description: 'Lerne die Pferde kennen, um die sich auf deinem Hof alles dreht.' },
    breeding: { title: 'Zucht', description: 'Pferde verpaaren und die nächste Generation begrüßen.' },
    training: { title: 'Training', description: 'Kraft und Selbstvertrauen aufbauen, eine Einheit nach der anderen.' },
    competitions: { title: 'Turniere', description: 'Vom Trainingsplatz auf den Turnierparcours.' },
    buildings: { title: 'Gebäude & Personal', description: 'Schaffe Platz für deine Pferde und lass deinen Stall wachsen.' },
    help: { title: 'Hilfe & Fehlerbehebung', description: 'Hängst du bei einer Aufgabe, einem Absturz oder einem kaputten Spielstand? Hier geht’s los.' }
  },
  articles: {
    '/guides/beginners-guide/': {
      title: 'Einsteiger-Anleitung',
      description: 'Verstehe den Kreislauf aus Pflege, Training und Turnieren, bevor du deinen Hof vergrößerst.',
      answer: 'Horses of Hoofprint Bay beginnt mit einem kleinen, heruntergekommenen Hof und einer Stute. Die Pflege deines Pferdes, das Trainieren ihrer Fähigkeiten und die Teilnahme an Turnieren bilden die Grundlage, um deinen Stall wachsen zu lassen.',
      sections: [
        ['Beginne mit deinem Pferd', 'Nimm dir Zeit, den Pflegebildschirm kennenzulernen, bevor du eine größere Herde planst. Putzen und Hufpflege sind Teil des Gesundheitssystems und verdienen genauso viel Aufmerksamkeit wie das Training. Die Bibliothek im Spiel hilft, wenn dir ein Begriff oder eine Pflegeaktion unbekannt ist.'],
        ['Setze dir ein frühes Ziel', 'Ein gut machbares erstes Ziel ist, mit deinem Startpferd eine komplette Pflege- und Trainingsroutine zu lernen. Das ist ein redaktioneller Vorschlag, keine verpflichtende Questreihe. Lies die aktuellen Ziele im Spiel und ihre Bedingungen, bevor du Geld dafür ausgibst.'],
        ['Den Spielkreislauf verstehen', 'Training entwickelt Fähigkeiten, die du bei Turnieren brauchst. Preisgelder helfen beim nächsten Ausbau deines Hofs. Wenn dein Stall wächst, helfen Gebäude und Personal bei der zusätzlichen Arbeit. Vergleiche jeden Kauf mit den Bedürfnissen der Pferde, die du schon hast.'],
        ['Mit Plan erweitern', 'Bevor du ein weiteres Pferd kaufst, prüfe deinen Platz, dein Geld und den Pflegeaufwand. Genaue Kaufpreise und Gebäudebedingungen sind hier noch nicht dokumentiert. Verlasse dich auf die Zahlen in deinem eigenen Spiel, nicht auf alte Screenshots.']
      ],
      faq: [['Ist das ein Rennspiel?', 'Die offizielle Beschreibung dreht sich um Stallverwaltung, Pferdepflege, Springreiten, Geländeritte und Ausritte.'], ['Kann ich das Spiel vorher testen?', 'Laut Steam-Store gibt es eine kostenlose Demo. Laut Publisher ist sie auf 25 Spieltage begrenzt.'], ['Ist diese Anleitung ein getesteter Walkthrough?', 'Nein. Es ist eine Einführung auf Basis offizieller Informationen; Planungstipps sind klar von bestätigten Spielmechaniken getrennt.']],
      unknown: 'Genaue Tutorial-Reihenfolge, frühe Kaufpreise und die besten Aktionen am ersten Tag müssen in der Vollversion getestet werden.'
    },
    '/guides/buy-sell-horses/': {
      title: 'Pferde kaufen & verkaufen',
      description: 'Wo der Pferdehandel in der Stadt stattfindet und was du vor einer Erweiterung prüfen solltest.',
      answer: 'Laut Publisher kannst du in der Stadt Hoofprint Bay Pferde kaufen und verkaufen. Die genaue Navigation, Preise und Einschränkungen müssen in der Vollversion noch geprüft werden.',
      sections: [
        ['Ab in die Stadt', 'Die Stadt ist der Ort für Pferdehandel, Sattelzeug, Futter und Turniere. Suche auf dem Stadtbildschirm den Pferdeverkauf. Der Launch-Artikel zeigt einen Screenshot der Verkaufsoberfläche, beschreibt aber keine vollständige Klickfolge.'],
        ['Vor dem Kauf', 'Als Checkliste: Sieh dir die Pferdeinformationen im Spiel an, prüfe deinen Kontostand und den freien Platz auf deinem Hof. Diese Punkte helfen bei der Entscheidung, sind aber keine bestätigte Liste von Kaufbeschränkungen.'],
        ['Vor dem Verkauf', 'Überlege, ob das Pferd Teil deiner Turnier- oder Zuchtpläne ist, bevor du einen Verkauf bestätigst. Ob verkaufte Pferde zurückgekauft werden können, ist hier nicht geprüft. Gehe nicht davon aus, dass ein Verkauf rückgängig gemacht werden kann.']
      ],
      faq: [['Wo werden Pferde gehandelt?', 'In der Stadt, laut Launch-Artikel des Publishers.'], ['Wie viel kostet ein Pferd?', 'Eine verlässliche Preistabelle ist hier noch nicht geprüft. Sieh dir das aktuelle Angebot im Spiel an.'], ['Muss ich sofort ein zweites Pferd kaufen?', 'Eine verpflichtende frühe Kaufreihenfolge ist hier nicht bestätigt. Folge den Zielen in deinem Spiel.']],
      unknown: 'Bezeichnungen im Laden, Verfügbarkeit von Pferden, Verkaufswerte, Aktualisierung des Angebots und Platzprüfungen sind ungeprüft.'
    },
    '/guides/horse-care/': {
      title: 'Pferdepflege',
      description: 'Putzen, Hufpflege und die Rolle von Verletzungen im Stallalltag.',
      answer: 'Zur Pferdepflege gehören Bürsten, Striegeln, Hufe auskratzen und das Behandeln von Verletzungen. Laut offiziellem Store helfen Putzen und Hufpflege, Probleme wie Satteldruck und Hufabszesse zu vermeiden.',
      sections: [
        ['Den Pflegebildschirm lesen', 'Prüfe den Zustand deines Pferdes und die verfügbaren Pflegewerkzeuge. Offizielle Screenshots zeigen eine eigene Pflegeansicht mit Zugang zu Fütterung, Putzen, Sattelzeug und Medizin. Store-Screenshots können eine ältere Version zeigen, Bezeichnungen können also abweichen.'],
        ['Putzen und Hufe', 'Bürsten und der Hufkratzer sind wichtige Teile der Pflege. Lerne, was jedes Werkzeug im Spiel bewirkt, und nutze die Hinweise im Spiel, wenn ein Problem auftaucht. Eine feste Anzahl Bürstenstriche oder eine bewiesene Reihenfolge gibt es hier nicht.'],
        ['Verletzungen und Genesung', 'Schürfwunden und andere Verletzungen können eine Behandlung erfordern. Lies die medizinischen Informationen des Pferdes, bevor du entscheidest, was zu tun ist. Genaue Behandlungsmittel, Heilungszeiten und versteckte Verletzungswahrscheinlichkeiten sind ungeprüft.'],
        ['Die Herde überschaubar halten', 'Als redaktioneller Tipp: Stelle sicher, dass du mit der Pflege hinterherkommst, bevor die Herde wächst. Personal kann auf einem größeren Hof helfen, welche Aufgaben es genau übernimmt, solltest du im Spiel prüfen.'], ['Tägliche Routine', 'Laut Community-Wiki legst du jeden Tag für jede Stallgruppe Heu und Wasser hin und mistest aus. Wasser wird nicht als Wert angezeigt, aber ohne Wasser werden Pferde durstig. Zum Putzen ziehst du die Bürsten über die schmutzigen Stellen, und zum Behandeln einer Wunde ziehst du das passende Medikament darauf.'], ['Krankheiten und Verletzungen im Spiel', 'Das Community-Wiki nennt: Schnittwunde, infizierte Schnittwunde, Schürfwunde, infizierte Schürfwunde, Lahmheit, Satteldruck, Sehnenverletzung, „schmutzig und krank“, Unterernährung, Hufrehe und Strahlfäule mit Hufabszess. Jede braucht die richtige Behandlung, aus deiner Hausapotheke oder vom Tierarzt. Das Buch „Injuries & Illnesses“ in der Bibliothek erklärt sie. Stürze erhöhen das Verletzungsrisiko, und vernachlässigte oder verletzungsanfällige Pferde verursachen höhere Tierarztkosten.']
      ],
      faq: [['Wirkt sich Putzen auf das Spiel aus?', 'Ja. Der Store verbindet die Pflegewerkzeuge ausdrücklich mit der Vermeidung bestimmter Gesundheitsprobleme.'], ['Was passiert, wenn ich meine Pferde vernachlässige?', 'Laut FAQ des Studios kann der Tierschutz vernachlässigte Pferde mitnehmen. Ein beschlagnahmtes Pferd ist damit praktisch aus dem Spiel.'], ['Wo kaufe ich mehr Heu und Futter?', 'Eine Antwort aus der Community unter der offiziellen FAQ: Geh von der Hofkarte in die Stadt, betritt den Laden (das Gebäude rechts mit dem Sattelschild) und klicke auf Heu und Futter hinter dem Verkäufer. Das ist eine Community-Antwort, keine Dokumentation des Studios.'], ['Was ist die richtige Behandlung für jede Verletzung?', 'Eine vollständige, geprüfte Behandlungstabelle gibt es hier noch nicht. Nutze die medizinischen Informationen im Spiel.'], ['Kann Personal bei der Pflege helfen?', 'Laut offiziellem Store hilft Personal bei Pflege und Training; eine vollständige Aufgabenliste wurde nicht veröffentlicht.'], ['Welche Krankheiten gibt es in Horses of Hoofprint Bay?', 'Laut Community-Wiki Schnitt- und Schürfwunden (beide können sich entzünden), Lahmheit, Satteldruck, Sehnenverletzungen, „schmutzig und krank“, Unterernährung, Hufrehe sowie Strahlfäule mit Hufabszess.']],
      unknown: 'Pflegeschwellen, Verletzungswahrscheinlichkeiten, Behandlungskosten, Heilungsdauer und die genaue Grenze, ab der der Tierschutz eingreift, müssen im Spiel geprüft werden.'
    },
    '/guides/breeding/': {
      title: 'Zucht-Anleitung',
      description: 'Was Fohlen erben können, wie du eine Verpaarung wählst und das Zuchtlabor.',
      answer: 'Fohlen können eine Mischung aus Fellfarben, weißen Abzeichen und Charaktereigenschaften ihrer Eltern erben. Die offizielle Beschreibung nennt außerdem ein späteres Labor in der Zuchtstation, das mögliche Fohlen vorab zeigt.',
      sections: [
        ['Entscheide, was du von einer Verpaarung willst', 'Dir kann das Aussehen, die künftigen Fähigkeiten oder der Charakter eines Fohlens wichtig sein. Vergleiche die Informationen zu beiden Elternteilen, bevor du dich festlegst. Das ist ein Planungsansatz, keine Garantie für ein bestimmtes Ergebnis.'],
        ['Vererbung verstehen', 'Offiziell bestätigt ist die Vererbung von Fellfarbe, weißen Abzeichen und Charakter. Ein vollständiges Genetikmodell wurde nicht veröffentlicht. Echte Fellgenetik kann Hintergrundwissen liefern, sollte aber nicht zur Berechnung von Spielergebnissen genutzt werden.'],
        ['Das Labor der Zuchtstation', 'Der Store beschreibt ein erweitertes Zuchtlabor mit Vorschau möglicher Fohlen und erweiterten Deckdiensten. Prüfe die Ausbauinformationen in deinem Spiel für genaue Freischaltbedingungen und Kosten. Eine Vorschau ist keine veröffentlichte Wahrscheinlichkeitsformel.'],
        ['Führe ein nützliches Zuchtbuch', 'Notiere für deine eigenen Vergleiche die Eltern, sichtbare Merkmale, die Spielversion und das Ergebnis. Mehrere Beobachtungen sagen mehr als ein einzelnes schönes Fohlen, aber auch einige Ergebnisse ergeben keine genaue Vererbungsquote.']
      ],
      faq: [['Werden Fellfarben vererbt?', 'Der Store bestätigt eine Mischung aus den Fellfarben und weißen Abzeichen der Eltern.'], ['Kann der Charakter vererbt werden?', 'Ja, Charaktereigenschaften sind Teil der offiziellen Beschreibung der Vererbung.'], ['Ist eine bestimmte Fellfarbe garantiert?', 'Für bestimmte Verpaarungen gibt es hier keine geprüfte Garantie oder Wahrscheinlichkeitstabelle.']],
      unknown: 'Zuchtkosten, Voraussetzungen, Trächtigkeitsdauer, garantierte Ergebnisse und Vererbungswahrscheinlichkeiten sind ungeprüft.'
    },
    '/guides/training/': {
      title: 'Trainings-Anleitung',
      description: 'Wie Training mit Kraft, Selbstvertrauen und Turnierreife zusammenhängt.',
      answer: 'Trainingsübungen entwickeln Kraft und Selbstvertrauen deines Pferdes bis zur Turnierreife. Laut Publisher kam vor dem Release außerdem ein Gelassenheitstraining hinzu.',
      sections: [
        ['Mit einem Ziel trainieren', 'Wähle ein Turnier oder ein Ziel im Spiel und lies die Anforderungen. Vom Ziel aus rückwärts zu planen ist sinnvoller als anzunehmen, dass jede Übung dieselbe Fähigkeit verbessert. Genaue Zuwächse pro Übung sind hier nicht geprüft.'],
        ['Selbstvertrauen und Gelassenheitstraining', 'Selbstvertrauen ist Teil der offiziellen Trainingsbeschreibung, und das Gelassenheitstraining ist bestätigt. Welche Übung welches Verhalten und welche Werte verändert, muss im Spiel getestet werden.'],
        ['Neue Parcours und Ausbauten', 'Höhere Ausbaustufen können neue Trainingsparcours freischalten. Ist ein Parcours nicht verfügbar, sieh im Ausbaumenü des Gebäudes nach den Bedingungen deiner Version.'], ['Trainingsparcours und Wertezuwachs', 'Das Community-Wiki nennt die Parcours auf dem Reitplatz mit Kraft- und Ausdauerzuwachs sowie Bewegungskosten. Reitplatz Stufe 1: Cavaletti (+3 Kraft, +2 Ausdauer, 12 Bewegung), Caprilli-Training 1 (+3/+2, 12), Springtraining 1 (+5/+3, 18), Springtraining 2 (+7/+4, 24) sowie Longieren Schritt-Trab (+1/+1, 5), Schritt-Trab-Galopp (+2/+1, 8) und Übergänge (+3/+2, 12). Stufe 2: Caprilli-Training 2 (+5/+3, 16), Springtraining 3 (+8/+4, 25), Geländetraining 1 (+3/+6, 23), Gymnastikreihen (+6/+2, 15), Rhythmustraining (+4/+2, 12) und zufälliges Longieren kurz (+3/+2, 11) und lang (+6/+3, 20). Stufe 3: Springtraining 4 (+9/+5, 30).'], ['Führen, freies Longieren und Vertrauensarbeit', 'Führen, freies Longieren und die beiden Selbstvertrauenstrainings geben Bewegung, aber keine Kraft oder Ausdauer. Führen kostet 5 Bewegung, freies Longieren 10 und Selbstvertrauenstraining 2. Nutze sie für das Selbstvertrauen oder um ein Pferd zu bewegen, ohne es zu verschleißen.'], ['Ausritte trainieren Ausdauer', 'Die Arbeit auf dem Reitplatz zielt auf Kraft, Ausritte zählen als Training und zielen auf Ausdauer. Im Heimatwald gibt der Mushroom Trail +1 Kraft und +3 Ausdauer, der Mossy Trail +2 und +4. Bessere Strecken schaltest du mit Prestige frei; siehe die Prestige-Anleitung.'], ['Turnierlizenzen', 'Manche Parcours sind als Turnierlizenz gekennzeichnet, etwa Caprilli-Training 1, die Springtrainings und die Geländetrainings. Wer sie besteht, ist für Turniere in dieser Disziplin qualifiziert.']
      ],
      faq: [['Was verbessert Training?', 'Der offizielle Store nennt Kraft und Selbstvertrauen.'], ['Gibt es ein Gelassenheitstraining?', 'Ja, der Publisher nennt es im Launch-Artikel.'], ['Was ist der schnellste Trainingsplan?', 'Ein optimaler Plan wurde hier nicht getestet.'], ['Wie bekomme ich eine Turnierlizenz?', 'Bestehe einen als Lizenz gekennzeichneten Parcours dieser Disziplin, etwa Caprilli-Training 1.'], ['Welches Training gibt am meisten Kraft?', 'Springtraining 4 (+9 Kraft) auf Reitplatz-Stufe 3, laut Community-Wiki.']],
      unknown: 'Die Zuwächse pro Einheit aus dem Community-Wiki müssen im Spiel geprüft werden; Obergrenzen, Ermüdung und der beste Trainingsplan müssen noch getestet werden.'
    },
    '/guides/competitions/': {
      title: 'Turnier-Anleitung',
      description: 'Eine Einführung in Springreiten, Geländeritt und die Turniervorbereitung.',
      answer: 'Horses of Hoofprint Bay bietet Springturniere und Geländeprüfungen mit Preisgeld. Training ist Teil der Vorbereitung, damit sich dein Pferd qualifiziert.',
      sections: [
        ['Springreiten und Gelände', 'Beide Disziplinen sind vom offiziellen Store und vom Publisher bestätigt. Sie geben dir Ziele für die Entwicklung eines Pferdes, eine vollständige Liste der Klassen oder Parcours gibt es hier aber noch nicht.'],
        ['Vor der Anmeldung', 'Lies den Anmeldebildschirm, vergleiche die Anforderungen mit deinem Pferd und prüfe angezeigte Kosten. Das ist eine Checkliste als Vorschlag. Startbedingungen, Strafpunkte und Preisgelder müssen in der Vollversion dokumentiert werden.'],
        ['Preisgeld sinnvoll einsetzen', 'Preisgelder fließen in den Ausbau deines Stalls. Entscheide, ob die Bedürfnisse deines aktuellen Pferdes oder der Hofausbau Vorrang haben. Das ist allgemeiner Planungsrat, keine getestete Gewinnstrategie.']
      ],
      faq: [['Welche Turniere gibt es?', 'Offizielle Quellen nennen Springreiten und Gelände.'], ['Kann man mit Turnieren Geld verdienen?', 'Ja, Preisgeld ist ausdrücklich Teil der Spielbeschreibung.'], ['Wo stehen die genauen Preisgelder?', 'Nutze die aktuellen Turnierinformationen im Spiel; eine Preistabelle ist hier nicht geprüft.']],
      unknown: 'Klassen, Startvoraussetzungen, Startgebühren, Wertung und Preisgeldtabellen sind ungeprüft.'
    },
    '/buildings/': {
      title: 'Gebäude & Ausbau',
      description: 'Mehr Platz für Pferde, neue Trainingsparcours und ein wachsender Stall.',
      answer: 'Gebäudeausbauten schaffen Platz für Pferde und schalten Personal, Trainingsparcours und Zuchtoptionen frei. Laut der von der Community gepflegten TMQ Horse Game Database wächst der Stall von 4 Boxen auf 8, 14 und 20, für 2.500, 10.000 und 50.000, und jede Stallstufe bringt eine weitere Stallgruppe. Die Jährlingskoppel fasst 6 Jährlinge, nach dem Ausbau 13, ohne Stallboxen zu belegen.',
      sections: [['Stallkapazität', 'Stufe 1 fasst 4 Pferde und kostet 10 pro Tag. Stufe 2 fasst 8 (2.500 Baukosten, 30 pro Tag, 2 Tage). Stufe 3 fasst 14 (10.000, 80 pro Tag, 3 Tage). Stufe 4 fasst 20 (50.000, 200 pro Tag, 4 Tage). Jeder Ausbau bringt eine Stallgruppe mehr, sodass du Stuten, Wallache und Hengste trennen kannst. Ein voll ausgebauter Stall voller Pferde schaltet den Erfolg Full House frei.'], ['Jährlingskoppel und Weide', 'Die Jährlingskoppel ist eine eigene Gruppe und belegt keine Stallboxen: Stufe 1 fasst 6 Jährlinge (1.500), Stufe 2 fasst 13 (10.000). Die Weide wird getrennt ausgebaut, für 200, 1.000, 5.000 und 10.000; sie erhöht die Stallkapazität nicht.'], ['Haupthaus und Personal', 'Das Haupthaus schaltet Personal frei. Stufe 1: Laura (Pflegerin) und Maria (Reitlehrerin für dich). Stufe 2 (5.000): Fiete (Pfleger), Julia (gibt Reitstunden), Tara (Trainerin) und Bianca (Jährlingstrainerin). Stufe 3 (20.000): Lucas (Pfleger) sowie die Trainer Meilin und Markus.'], ['Zuchtstation', 'Stufe 1 (1.500) ermöglicht Natursprung. Stufe 2 (5.000) bringt Samengewinnung (frisch) und den Fohlensimulator, der mögliche Fohlen zeigt. Stufe 3 (15.000) ermöglicht das Einfrieren von Samen.'], ['Reitplatz und Parkplatz', 'Der Reitplatz ist für das Training nötig. Stufe 1 (500) bietet die Grundparcours; Stufe 2 (5.000) ergänzt Caprilli 2, Springen 3, Gelände 1, Gymnastikreihen, Rhythmustraining und zufälliges Longieren; Stufe 3 (10.000) ergänzt Springen 4. Der Parkplatz bietet Platz für deinen Anhänger: 2, 4 oder 10 Pferde für 200, 500 oder 1.500. Er begrenzt auch, wie viele Pferde du pro Tag kaufen oder verkaufen kannst.'], ['Futterlager', 'Das Lager für Heu, Kraftfutter und Leckerlis wächst von 30/30/30 auf 65/70/40 und dann auf 110/150/50. Ab Stufe 3 ist es ein eigenes Gebäude.'], ['Den nächsten Ausbau planen', 'Jedes Gebäude erhöht die täglichen Kosten, prüfe also vorher dein Einkommen. Willst du mehr Pferde, zählen Stall und Parkplatz am meisten; fürs Training der Reitplatz; für die Zucht Zuchtstation und Jährlingskoppel.']],
      faq: [['Wie viele Pferde passen in meinen Stall?', 'Anfangs 4, nach drei Ausbauten bis zu 20, laut Community-Wiki.'], ['Belegen Jährlinge Stallboxen?', 'Nein. Sie stehen auf der Jährlingskoppel, die 6 oder 13 fasst.'], ['Wie schalte ich Julia und die Trainer frei?', 'Baue das Haupthaus auf Stufe 2 aus; weitere Trainer kommen mit Stufe 3.'], ['Was kostet ein voll ausgebauter Stall?', '2.500 + 10.000 + 50.000 = 62.500, dazu höhere tägliche Kosten.']],
      unknown: 'Alle Kosten und Kapazitäten stammen aus dem Community-Wiki und können sich mit Patches ändern; prüfe sie im Spiel.'
    },
    '/horses/colors-and-patterns/': {
      title: 'Fellfarben & Abzeichen',
      description: 'Fellfarben, weiße Abzeichen und was über die Fellvielfalt bekannt ist.',
      answer: 'Das Spiel bietet verschiedene Fellfarben und weiße Abzeichen, die an Fohlen weitergegeben werden können. Die Entwickler beschreiben einen Shader-basierten Ansatz für die Vielfalt der Muster.',
      sections: [
        ['Farbe und Abzeichen getrennt betrachten', 'Notiere beim Vergleichen von Pferden die sichtbare Grundfarbe getrennt von den weißen Abzeichen. Die offizielle Beschreibung nennt beides, liefert aber keinen vollständigen Katalog benannter Fellfarben.'],
        ['Vielfalt ist Teil des Designs', 'Im Launch-Interview erklärt der Programmierer, wie die Beobachtung echter Pferdemuster das System geprägt hat. Das spricht für eine an echten Pferden orientierte Grafik, ist aber keine exakte Simulation echter Genetik.'],
        ['Ein Katalog braucht Belege', 'Ein nützliches Nachschlagewerk braucht den Namen im Spiel, ein klares Bild und die Spielversion. Bis diese Daten gesammelt sind, zeigt diese Seite bewusst keine erfundene vollständige Liste.'], ['Abzeichen kombinieren sich nicht', 'Laut Spielern erbt ein Fohlen nach dem Zuchtratgeber im Spiel das Fell entweder vom Vater oder von der Mutter, ebenso die Mähne. Zwei weiße Muster wie Tobiano und Appaloosa kombinieren sich daher nicht in einem Fohlen, obwohl der Spaß-Pferdegenerator das erlaubt. Spieler haben sich kombinierte Muster vom Studio gewünscht.']
      ],
      faq: [['Können Fohlen weiße Abzeichen erben?', 'Ja, das ist Teil der offiziellen Zuchtbeschreibung.'], ['Ist das System wissenschaftlich exakt?', 'Die Entwickler beanspruchen keine wissenschaftliche Genauigkeit in jedem Detail.'], ['Ist das ein vollständiger Fellkatalog?', 'Nein. Es ist ein Überblick; ein geprüfter, bebilderter Katalog steht noch aus.'], ['Kann ein Fohlen zwei weiße Muster haben?', 'Nein. Laut Spielern erbt ein Fohlen das Fell eines Elternteils.']],
      unknown: 'Die vollständige Liste der Fellfarben, Musterparameter und Vererbungswahrscheinlichkeiten sind ungeprüft.'
    },
    '/horses/personality-traits/': {
      title: 'Charaktereigenschaften',
      description: 'Eine Einführung in den Charakter der Pferde und seine Rolle bei der Vererbung.',
      answer: 'Charaktereigenschaften sind ein bestätigtes Feature, und laut offizieller Zuchtbeschreibung können Fohlen sie von ihren Eltern erben.',
      sections: [
        ['Ein bestätigter Teil des Pferdesystems', 'Der Launch-Artikel nennt Charaktereigenschaften unter den Neuerungen nach der ersten Demo. Der Store führt sie auch in der Beschreibung der Fohlenvererbung auf.'],
        ['Beobachtungen sorgfältig vergleichen', 'Unterscheide beim Beobachten zwischen der angezeigten Eigenschaft, einem vorübergehenden Zustand und einer Vermutung über das Temperament. Eine sichtbare Reaktion allein belegt keine Zahlenwirkung einer Eigenschaft.'],
        ['Zucht und Charakter', 'Der Charakter kann bei der Planung einer Verpaarung eine Rolle spielen. Die Quellen erklären weder die Auswahlregeln noch die Wahrscheinlichkeiten, eine Verpaarung garantiert also kein bestimmtes Temperament.']
      ],
      faq: [['Gibt es Charaktereigenschaften in der Vollversion?', 'Ja, der Publisher bestätigt sie.'], ['Können Fohlen Eigenschaften erben?', 'Ja, die Vererbung ist im offiziellen Store beschrieben.'], ['Kann ich den Charakter eines Pferdes ändern?', 'Nicht über eine dokumentierte Option im Spiel. Ein von Spielern geschriebener Steam-Guide („How To Edit Horse Personalities“) beschreibt, wie man Eigenschaften im Spielstand bearbeitet, damit eine unerwünschte Eigenschaft nicht vererbt wird. Das ist inoffiziell: Sichere vorher deinen Spielstand und rechne damit, dass es nach Updates nicht mehr funktioniert.'], ['Was bewirkt jede Eigenschaft?', 'Eine vollständige Liste mit Namen und gemessenen Effekten gibt es hier noch nicht.']],
      unknown: 'Namen der Eigenschaften, Effektwerte, Kompatibilitätsregeln und Vererbungschancen müssen im Spiel geprüft werden. Die Community-Methode zum Bearbeiten des Spielstands wurde hier nicht getestet.'
    },
    '/guides/staff/': {
      title: 'Personal-Anleitung',
      description: 'Hilfe für eine größere Herde einstellen und Personal-Freischaltungen verstehen.',
      answer: 'Du kannst Personal einstellen, das bei Pflege und Training hilft. Laut offiziellem Store schalten höhere Ausbaustufen Bewerbungen von Personal frei.',
      sections: [
        ['Hilfe für einen wachsenden Hof', 'Das Personalsystem hilft dir, mehr Pferde zu versorgen, wenn dein Hof wächst. Lies vor der Einstellung die Stellenbeschreibung im Spiel, statt anzunehmen, dass jede Person jede Aufgabe übernimmt.'],
        ['Bewerbungen und Gebäude', 'Der Gebäudeausbau ist mit Personalbewerbungen verknüpft. Siehst du keine Einstellungsoption, prüfe die Ausbaubeschreibungen in deinem Spiel. Die genaue Freischaltstufe ist hier nicht geprüft.'],
        ['Kosten und Bedarf vergleichen', 'Eine hilfreiche Frage: Bei welcher wiederkehrenden Aufgabe brauchst du Hilfe? Lies Lohn und Zuständigkeiten, bevor du jemanden einstellst. Eine Lohntabelle oder Leistungsrangliste wurde hier nicht getestet.'],
        ['Reitlehrerin Julia: jeden Platz belegen', 'Laut Spielerberichten kostet Julia 100 pro Tag und kann bis zu 8 Reitstunden am Tag geben, aber nur eine Stunde pro zugewiesenem Platz. Weist du zwei Pferde zu, gibt sie zwei Stunden. Um alle 8 Stunden zu nutzen, belege jeden Platz; dasselbe Pferd kann mehrere Plätze belegen. Ein Spieler berichtet, dass der Trainer drei Pferde pro Tag schafft.'],
        ['Trainer, die Pferde überlasten', 'Wenn dein Trainingspersonal immer wieder Verletzungen wie Sehnenschäden verursacht, empfehlen Spieler, das Personal aufzuleveln (zu schulen). Du kannst Pferde auch nur der Person zuweisen, die sie gut trainiert.'],
        ['Was Maria macht', 'Laut Spielern sagt Maria selten etwas: Sie gibt Reittipps, etwa dass ein Sprung im Galopp besser gelingt, wenn dir an einem Hindernis ein Fehler passiert.']
      ],
      faq: [['Kann Personal Pferde trainieren?', 'Laut offiziellem Store hilft Personal bei Pflege und Training.'], ['Warum gibt Julia nur eine Stunde pro Pferd?', 'Jeder zugewiesene Platz ist eine Reitstunde. Laut Spielern kannst du dasselbe Pferd mehreren Plätzen zuweisen.'], ['Wie werden Bewerbungen freigeschaltet?', 'Höhere Ausbaustufen werden als Quelle genannt.'], ['Welche Person ist die beste?', 'Namen, Löhne und Leistung des Personals sind hier nicht geprüft.']],
      unknown: 'Vollständige Aufgaben, Löhne und Effizienz des Personals sind ungeprüft; die Details oben sind Spielerberichte.'
    },
    '/guides/demo-vs-full-game/': {
      title: 'Demo vs. Vollversion',
      description: 'Die bestätigte Tagesgrenze, der Release-Status und wie du ältere Screenshots einordnest.',
      answer: 'Laut Publisher ist die Demo auf die ersten 25 Spieltage begrenzt, während die Vollversion darüber hinaus spielbar ist. Das Spiel erschien als fertiges Produkt, nicht im Early Access.',
      sections: [
        ['Der bestätigte Unterschied', 'Der Launch-Artikel stellt die ersten 25 Spieltage der Demo den unbegrenzten Tagen der Vollversion gegenüber. Das beschreibt die Spielgrenze; es heißt nicht, dass in einem neuen Spielstand der Vollversion alles sofort freigeschaltet ist.'],
        ['Welche Demo-Spielstände übernommen werden', 'Es gab zwei öffentliche Demo-Versionen. Laut offizieller FAQ des Studios sind Spielstände aus der Oktober-Demo mit der Vollversion kompatibel, Spielstände aus der Februar-Demo nicht. Hast du nur die Februar-Demo gespielt, plane einen neuen Spielstand in der Vollversion ein.'],
        ['Demo-Infos können veralten', 'Die Demo wurde vor dem Release verändert, und offizielle Screenshots können Demo-Hinweise enthalten. Prüfe Datum und Version, bevor du eine ältere Anleitung auf die Vollversion überträgst.'],
        ['Release und Zukunftspläne', 'Der Publisher beschreibt den Release als fertiges Spiel; Feedback und Fehler werden weiter beobachtet. Große Inhaltserweiterungen wurden zum Release nicht versprochen. Das ist der Plan zum Launch, keine Garantie, dass es nie ein Update geben wird.']
      ],
      faq: [['Wie lang ist die Demo?', 'Laut Publisher ist sie auf 25 Spieltage begrenzt.'], ['Ist die Vollversion Early Access?', 'Laut Publisher erschien sie als fertiges Produkt ohne Early-Access-Label.'], ['Wird ein Demo-Spielstand übernommen?', 'Das hängt von der Demo ab. Laut offizieller FAQ sind Spielstände aus der Oktober-Demo kompatibel, aus der Februar-Demo nicht.'], ['Gibt es in der Vollversion eine Tagesgrenze?', 'Nein. Laut FAQ des Studios kannst du unbegrenzt spielen; nur nach etwa 2 Millionen Tagen könnte das Spiel wegen eines Integer-Überlaufs abstürzen.'], ['Wo ist die Hufschuh-Aufgabe in der Demo?', 'Laut Spielern im Steam-Forum auf dem kleinen Ausritt, oberer Weg. Das ist eine Community-Antwort zur Demo, keine Dokumentation des Studios.']],
      unknown: 'Die genauen Schritte zum Übertragen eines Oktober-Spielstands, der aktuelle Funktionsumfang der Demo und versionsspezifische Einschränkungen müssen gesondert geprüft werden.'
    },
    '/guides/horse-age-and-retirement/': {
      title: 'Alter & Ruhestand der Pferde',
      description: 'Wie das Alter der Pferde gezählt wird, ob Pferde sterben können und was der Ruhestand für deine Herde bedeutet.',
      answer: 'Das Alter der Pferde in Horses of Hoofprint Bay wird in Spieltagen (Runden) gezählt, nicht in Jahren oder Monaten. Pferde sterben nicht: Laut Studio gehen sie irgendwann in den Ruhestand, oder der Tierschutz nimmt sie mit, wenn du sie vernachlässigst. Pferde im Ruhestand oder beschlagnahmte Pferde sind praktisch aus dem Spiel.',
      sections: [
        ['Alter in Tagen, nicht in Jahren', 'Wenn das Spiel das Alter eines Pferdes anzeigt, sind Spieltage gemeint, die das Studio auch Runden nennt. Lies die Zahl nicht als echtes Alter in Jahren oder Monaten. Das ist wichtig, wenn du Pferde für Zucht oder Turniere vergleichst.'],
        ['Ruhestand statt Tod', 'Die FAQ des Studios beantwortet die Frage „Können Pferde sterben?“ direkt: Pferde gehen irgendwann in den Ruhestand. Ein Pferd im Ruhestand ist praktisch aus dem aktiven Spiel entfernt und zählt nicht mehr zu deiner Herde.'],
        ['Vernachlässigung führt zur Beschlagnahme', 'Der Tierschutz kann ein vernachlässigtes Pferd mitnehmen. Laut Studio ist ein beschlagnahmtes Pferd ebenso aus dem Spiel wie eines im Ruhestand. Gute Pflege geht also nicht nur um Leistung, sondern darum, die Pferde zu behalten, in die du investiert hast.'],
        ['Den Ruhestand einplanen', 'Da Pferde mit der Zeit das aktive Spiel verlassen, lohnt es sich, an die nächste Generation zu denken, bevor dein bestes Pferd in Rente geht. Das ist ein allgemeiner Tipp, kein getesteter Zeitplan. In der Zucht-Anleitung steht, was Fohlen erben können.'],
        ['Ein Lieblingspferd behalten: der Fähren-Trick', 'Einen Gnadenhof auf deinem eigenen Gelände gibt es nicht. Ein Spieler im Steam-Forum schlägt eine Lösung vor: Exportiere das Pferd an der Fähre in der Stadt. Du bekommst denselben Preis wie beim Verkauf und kannst das Pferd in einem anderen Spielstand wieder importieren. Manche lassen Lieblingspferde einfach als Erinnerung an der Fähre.']
      ],
      faq: [['Können Pferde in Horses of Hoofprint Bay sterben?', 'Nein. Laut Studio gehen sie in den Ruhestand oder werden bei Vernachlässigung vom Tierschutz mitgenommen.'], ['In welcher Einheit wird das Alter angezeigt?', 'In Spieltagen (Runden), laut FAQ des Studios.'], ['Bekomme ich ein Pferd aus dem Ruhestand zurück?', 'Laut Studio sind beide Fälle praktisch aus dem Spiel. Ein offizieller Weg zurück ist hier nicht bekannt.'], ['In welchem Alter gehen Pferde in Rente?', 'Das Studio hat kein Rentenalter veröffentlicht. Es muss im Spiel geprüft werden.']],
      unknown: 'Das Rentenalter, ob es je nach Pferd schwankt, und die genaue Grenze für das Eingreifen des Tierschutzes müssen im Spiel geprüft werden.'
    },
    '/guides/stable-groups/': {
      title: 'Stallgruppen ändern',
      description: 'Pferde zwischen Stallgruppen verschieben, den Hengst von den Stuten trennen und volle Ställe umgehen.',
      answer: 'Wähle das Pferd aus, klicke oben auf „Move“ und wähle die Option „Stable“, um die Gruppe zu wechseln. Sind alle Boxen belegt, musst du laut Spielern zuerst Platz schaffen, etwa indem du ein Pferd vorübergehend in die Zuchtstation stellst oder beim Züchter einstellst.',
      sections: [
        ['Warum Stallgruppen wichtig sind', 'Das Spiel teilt deine Pferde in Stallgruppen ein. Ein Spieler im Steam-Forum bemerkte, dass sein Hengst immer wieder Stuten deckte, weil sie in derselben Gruppe standen. Das ist ein häufiger Grund, die Gruppen neu zu ordnen.'],
        ['So wechselst du die Gruppe', 'Laut der akzeptierten Spielerantwort im Steam-Forum: Pferd auswählen, oben auf „Move“ klicken und „Stable“ wählen. Dort kannst du die Gruppe wechseln. Die Beschriftung kann je nach Version und Sprache leicht abweichen.'],
        ['Wenn alle Ställe voll sind', 'Du brauchst freien Platz, bevor du wechseln kannst. Spieler nennen zwei Lösungen: ein Pferd vorübergehend in die Zuchtstation stellen oder beim Züchter einstellen und dann tauschen. Laut derselben Antwort sollte der Wechsel bei vollen Ställen später per Update möglich werden; prüfe also, ob deine Version das schon kann.'],
        ['Auf der Koppel umsortieren', 'Ein anderer Spieler berichtet: Sind deine Koppeln nicht voll, kannst du Pferde auch einfach anklicken und per Hand anders verteilen.']
      ],
      faq: [['Wie trenne ich meinen Hengst von den Stuten?', 'Stelle eines der Pferde in eine andere Stallgruppe: Pferd auswählen, „Move“, dann „Stable“. Das ist eine Community-Antwort.'], ['Warum kann ich die Gruppe nicht wechseln?', 'Deine Ställe sind wahrscheinlich voll. Schaffe zuerst eine freie Box, etwa über die Zuchtstation oder den Züchter.'], ['Stammt das vom Studio?', 'Nein. Die Schritte stammen aus Spielerantworten im Steam-Forum aus der Demo-Zeit. Prüfe sie in deinem aktuellen Spiel.']],
      unknown: 'Ob der Wechsel bei vollen Ställen in der Vollversion möglich ist und wie die Buttons in jeder Sprache heißen, muss im Spiel geprüft werden.'
    },
    '/guides/platforms-and-steam-deck/': {
      title: 'Plattformen, Steam Deck & Sprachen',
      description: 'Auf welchen Systemen Horses of Hoofprint Bay läuft, die Steam-Deck-Bewertung, unterstützte Sprachen und Konsolenpläne.',
      answer: 'Horses of Hoofprint Bay ist auf Steam für Windows und Linux erhältlich. Steam bewertet es auf dem Steam Deck als „Spielbar“, mit Hinweisen zu Controller und Tastatur. Es gibt keine Version für Mac, Mobilgeräte oder Konsolen; das Studio konzentriert sich zuerst auf den PC. Deutsch ist eine der unterstützten Sprachen.',
      sections: [
        ['Unterstützte Plattformen', 'Der Steam-Store nennt Windows und Linux (SteamOS). Mac wird nicht aufgeführt. Die Mindestanforderung für Windows ist Windows 10 Version 21H1 (Build 19043) oder neuer.'],
        ['Steam-Deck-Bewertung', 'Die Kompatibilitätsprüfung von Steam bewertet das Spiel auf dem Steam Deck als „Spielbar“. Laut Valve ist die Standard-Controllerbelegung nicht voll funktionsfähig, einige Tastensymbole passen nicht zum Deck, und bei Texteingaben öffnet sich die Bildschirmtastatur nicht automatisch. Der Text ist gut lesbar, die Standardeinstellungen laufen flüssig.'],
        ['Tipps von Steam-Deck-Spielern', 'Spieler im Steam-Forum teilen diese Tipps: Stelle das Kompatibilitätstool auf Proton Experimental, wähle die Steuerungsvorlage Tastatur (WASD) + Maus und bediene Menüs per Touchscreen. Ein Spieler legt Esc auf die B-Taste, um Gebäude schnell zu verlassen; ein anderer reitet mit Pfeil rechts schneller, Pfeil links langsamer und springt mit A. Reitstunden brauchen eventuell weitere Anpassungen. Lässt sich das Sattelzeug auf dem Deck nicht wechseln, ziehe das Teil statt es anzutippen, und versuche Proton Experimental. Das sind Community-Tipps aus der Demo-Zeit und der ersten Release-Woche, keine offiziellen Anleitungen.'],
        ['Controller-Unterstützung', 'Steam führt keine Controller-Unterstützung auf, und laut Valves Deck-Prüfung ist die Standard-Controllerbelegung nicht voll funktionsfähig. Das Studio schrieb im Februar 2026, dass Steam-Deck-Kompatibilität geplant ist. Bis volle Controller-Unterstützung bestätigt ist, rechne mit Tastenbelegung per Hand oder Touchscreen.'],
        ['Mac, CrossOver und GeForce Now', 'Eine native Mac-Version gibt es nicht. Spieler berichten, dass CrossOver und die Unity-Engine des Spiels schlecht zusammenarbeiten; das ist also keine verlässliche Lösung. Auf GeForce Now ist das Spiel nicht bekannt; ein Spieler hält eine native Mac-Version für wahrscheinlicher als Cloud-Unterstützung.'],
        ['Mac, Mobilgeräte und Konsolen', 'Laut offizieller FAQ konzentriert sich das Team zuerst auf den PC, weil Entwicklung für mehrere Plattformen derzeit nicht machbar ist. Andere Plattformen wären später schön, versprochen oder terminiert ist aber nichts.'],
        ['Sprachen', 'Der Steam-Store nennt 24 Sprachen für die Benutzeroberfläche: Englisch, Deutsch, Französisch, Niederländisch, Russisch, Italienisch, Spanisch (Spanien), Spanisch (Lateinamerika), Tschechisch, Finnisch, Ungarisch, Norwegisch, Polnisch, Portugiesisch (Brasilien), Portugiesisch (Portugal), Türkisch, Ukrainisch, Slowakisch, Dänisch, Koreanisch, Rumänisch, vereinfachtes Chinesisch, Japanisch und Schwedisch.']
      ],
      faq: [['Läuft Horses of Hoofprint Bay auf dem Steam Deck?', 'Ja. Steam bewertet es als „Spielbar“, mit Hinweisen zu Controller und Bildschirmtastatur.'], ['Gibt es eine Mac-Version?', 'Nein. Mac wird auf Steam nicht aufgeführt, und das Studio konzentriert sich zuerst auf den PC.'], ['Kommt das Spiel für Switch oder andere Konsolen?', 'Eine Konsolenversion ist nicht angekündigt. Das Studio würde gern auf andere Plattformen gehen, hat es aber nicht versprochen.'], ['Gibt es das Spiel auf Deutsch?', 'Ja. Deutsch gehört zu den unterstützten Sprachen auf Steam.'], ['Gibt es Mehrspieler oder Koop?', 'Nein. Steam führt das Spiel nur als Einzelspieler.'], ['Unterstützt das Spiel Steam Cloud?', 'Ja, Steam Cloud ist auf der Store-Seite aufgeführt.'], ['Kann ich über GeForce Now spielen?', 'Dort ist es nicht bekannt. Prüfe die GeForce-Now-Bibliothek für den aktuellen Stand.']],
      unknown: 'Volle Controller-Unterstützung in der Vollversion muss noch geprüft werden.'
    },
    '/faq/': {
      title: 'FAQ',
      description: 'Antworten auf die häufigsten Fragen zu Horses of Hoofprint Bay, aus der offiziellen FAQ des Studios und der Community.',
      answer: 'Horses of Hoofprint Bay erschien am 4. November 2026 als fertiges Spiel für den PC, mit unbegrenzten Spieltagen und ohne geplante große Inhaltsroadmap. Pferde gehen in den Ruhestand statt zu sterben, ihr Alter wird in Spieltagen gezählt, und Spielstände der Oktober-Demo werden übernommen, die der Februar-Demo nicht.',
      sections: [
        ['Zum Spiel und zu Zukunftsplänen', 'Das Studio beschreibt den Release als fertiges Produkt. Spätere Ergänzungen sind nicht ausgeschlossen, aber es gibt bewusst keine Inhaltsroadmap. Große neue Features wie andere Pferderassen oder Disziplinen sind nicht geplant. Fehlerberichte und kleine Wünsche werden weiter beobachtet. Ob es DLCs gibt, ist offen; versprochen wird nichts.'],
        ['Schwierigkeit und Barrierefreiheit', 'Wenn dir das Spiel zu schwer ist, verweist die FAQ des Studios auf die Schwierigkeitseinstellungen: Probiere leichtere Turniere oder einen höheren Prestigegewinn. Wenn dir das Springen schwerfällt, gibt es eine Auto-Sprung-Option bei der Barrierefreiheit.'],
        ['Pferdenamen', 'Die zufälligen Namen deiner Pferde gehen auf Pferde zurück, die das Team persönlich kennt, auf Namen von Übersetzerinnen und Übersetzern und auf einige berühmte Pferde. Ein ungewöhnlicher Name wie „Oil Rig“ ist also Absicht.'],
        ['Community und Discord', 'Es gibt einen offiziellen Discord-Server. Das Studio veröffentlicht den Einladungslink bewusst nicht auf Steam, um Bots und Betrüger fernzuhalten. Laut Studio findest du die Einladung auf der Website von Thogli Studios (thoglistudios.com). Spieler berichten außerdem von einem Link im Hauptmenü des Spiels.'],
        ['Mehrspieler, Preis und Erfolge', 'Laut Steam-Store ist das Spiel reiner Einzelspieler, ohne Mehrspieler oder Koop. Es unterstützt Steam Cloud und hat 47 Steam-Erfolge. Der Grundpreis liegt bei 26,99 € / 26,99 $ / 21,99 £; laut Studio gibt es regionale Preise. Details stehen auf der Preisseite.']
      ],
      faq: [['Gibt es große Updates oder DLCs?', 'Große Updates sind nicht geplant, DLCs sind offen. Fehlerbehebungen und kleine Wünsche werden weiter bearbeitet.'], ['Gibt es eine Tagesgrenze?', 'Nein, die Vollversion erlaubt unbegrenzt viele Tage (das Studio scherzt, nach etwa 2 Millionen Tagen könnte das Spiel abstürzen).'], ['Können Pferde sterben?', 'Nein. Sie gehen in den Ruhestand oder werden bei Vernachlässigung vom Tierschutz mitgenommen.'], ['Werden Demo-Spielstände übernommen?', 'Oktober-Demo ja, Februar-Demo nein.'], ['Gibt es das Spiel für Mac, Handy oder Konsole?', 'Derzeit nicht. Das Team konzentriert sich zuerst auf den PC.'], ['Wie komme ich auf den Discord?', 'Laut Studio steht die Einladung auf der Website von Thogli Studios, nicht auf Steam. Spieler nennen auch einen Link im Hauptmenü.'], ['Gibt es Mehrspieler?', 'Nein. Steam führt Horses of Hoofprint Bay nur als Einzelspieler.']],
      unknown: 'Diese Seite fasst die FAQ des Studios mit Stand 4. November 2026 zusammen. Antworten können sich ändern; der angepinnte Steam-Thread ist die aktuelle Quelle.'
    },
    '/guides/price-and-release-date/': {
      title: 'Preis & Erscheinungsdatum',
      description: 'Was Horses of Hoofprint Bay kostet, der Launch-Rabatt, regionale Preise und wann es erschienen ist.',
      answer: 'Horses of Hoofprint Bay erschien am 4. November 2026 auf Steam. Der Grundpreis liegt bei 26,99 €, 26,99 $ (USD), 21,99 £ oder 68 ¥ (CNY). Zum Launch gab es 15 % Rabatt, der laut Spielern bis zum 11. November 2026 läuft. Das Studio bestätigt regionale Preise.',
      sections: [
        ['Erscheinungsdatum', 'Die Vollversion erschien am 4. November 2026 auf Steam als fertiges Produkt, nicht im Early Access. Laut Spielern im Forum peilte das Studio einen Release am Nachmittag (MEZ) an. Eine kostenlose Demo gab es seit Februar 2026.'],
        ['Preise nach Region', 'Preise im Steam-Store am 6. November 2026: 26,99 € in Deutschland, 26,99 $ in den USA, 21,99 £ in Großbritannien und 68 ¥ in China. Im Launch-Sale sanken sie um 15 %, etwa auf 22,94 € oder 18,69 £. Preise in deiner Region können abweichen; maßgeblich ist immer der Steam-Store.'],
        ['Regionale Preise und Rabatte', 'Auf die Frage nach regionalen Preisen antwortete das Studio, dass sie aktiv sind. Ein anderer Spieler merkt an, dass der Regionalrabatt echt ist, aber geringer als bei manchen anderen Spielen. Zu Sales nach dem Launch-Rabatt gibt es noch keine Infos. Spieler verweisen außerdem auf Steam-Bundles mit anderen Pferdespielen wie Blackboard Ponies und Ranch of Rivershine, die den Preis weiter senken können, wenn du diese schon besitzt.'],
        ['Soundtrack', 'Der Original-Soundtrack von Michal Sinka hat eine eigene Steam-Seite und war beim Verfassen als „Demnächst verfügbar“ gelistet.']
      ],
      faq: [['Was kostet Horses of Hoofprint Bay?', '26,99 € / 26,99 $ / 21,99 £ / 68 ¥ zum Grundpreis, mit 15 % Launch-Rabatt zum Release.'], ['Wann ist Horses of Hoofprint Bay erschienen?', 'Am 4. November 2026 auf Steam für den PC.'], ['Gibt es regionale Preise?', 'Ja, laut Studio.'], ['Gibt es eine kostenlose Demo?', 'Ja. Die Demo ist auf die ersten 25 Spieltage begrenzt.']],
      unknown: 'Preise ändern sich mit Sales und Wechselkursen. Das Ende des Launch-Rabatts stammt aus Spielerberichten.'
    },
    '/guides/crashes-and-launch-errors/': {
      title: 'Abstürze & Startfehler',
      description: 'Lösungen und nächste Schritte, wenn Horses of Hoofprint Bay abstürzt, nicht startet oder einen schwarzen oder grauen Bildschirm zeigt.',
      answer: 'Wenn Horses of Hoofprint Bay abstürzt oder nicht startet, aktualisiere zuerst das Spiel und starte Steam neu. Bei Abstürzen bittet das Studio, im Spiel mit F8 einen Fehlerbericht zu senden oder die Logdateien an support@thoglistudios.com zu schicken. Beim Windows-Fehler „an application control policy has blocked this file (0x11C7)“ empfehlen Spieler, die Eigenschaften der .exe zu prüfen und sie als Administrator zu starten.',
      sections: [
        ['Den Absturz ans Studio melden', 'Der Rat des Studios bei Abstürzen: Sende im Spiel mit der Taste F8 einen Fehlerbericht mit mehr Infos, oder schicke deine Logdateien an support@thoglistudios.com. Die Logdateien heißen player.log und player-prev.log. Für die Demo nannte das Studio den Ordner C:\\Users\\BENUTZERNAME\\AppData\\LocalLow\\ThogliStudios\\Horses of Hoofprint Bay Demo; bei der Vollversion liegt er vermutlich in einem ähnlichen ThogliStudios-Ordner.'],
        ['„Failed to start process“ (0x11C7) unter Windows', 'Manche sehen unter Windows 11 die Meldung „failed to start process for this game: an application control policy has blocked this file (0x11C7)“. Ein Helfer aus der Community vermutet ein Berechtigungsproblem: Öffne die Eigenschaften der .exe des Spiels und starte sie als Administrator. Werden die Windows-Sicherheitsrichtlinien von deiner Firma oder Schule verwaltet, kannst du das eventuell nicht selbst ändern.'],
        ['Schwarzer oder grauer Bildschirm', 'In der Februar-Demo blieb bei Neuinstallationen von Version 0.1.8 die erste Reitstunde auf einem grauen Bildschirm hängen; laut Spielern wurde das per Update behoben. Unter Linux und auf dem Steam Deck empfehlen Spieler bei schwarzem Bildschirm eine Neuinstallation und Proton Experimental als Kompatibilitätstool.'],
        ['Abstürze beim Start eines neuen Tages', 'Spieler meldeten Abstürze beim Laden des nächsten Tages nach dem Reiten oder Training. Ein Community-Helfer antwortete am 6. November 2026, dass der Fehler gefunden und ein kleiner Patch veröffentlicht wurde; aktualisiere also zuerst das Spiel. Ein Spieler berichtet, dass der Absturz einen Tag später zurückkam; passiert dir das, sende mit F8 einen Fehlerbericht.'], ['„Failed to load il2cpp“', 'Seit einem kürzlichen Update sehen manche beim Start der Vollversion „Failed to load il2cpp“, teils mit einer Windows-Meldung, das Spiel sei nicht korrekt signiert. Eine offizielle Lösung gibt es noch nicht. Ein Spieler schlägt vor, die NVIDIA-Grafiktreiber zurückzusetzen, was bei einem ähnlichen Fehler in einem anderen Spiel half. Als allgemeine Steam-Hilfe kannst du außerdem die Spieldateien in Steam überprüfen lassen. Melde den Fehler mit deinen Logdateien, damit das Studio ihn sieht.']
      ],
      faq: [['Wie melde ich einen Fehler?', 'Drücke im Spiel F8, oder schicke deine Logdateien an support@thoglistudios.com, wie vom Studio empfohlen.'], ['Wo liegen die Logdateien?', 'Im ThogliStudios-Ordner unter AppData\\LocalLow, als player.log und player-prev.log.'], ['Mein ganzer PC startet neu, wenn ich das Spiel öffne. Liegt das am Spiel?', 'Andere hatten das in der Demo nicht. Es kann an deinem Rechner liegen; ein Fehlerbericht hilft dem Studio bei der Prüfung.'], ['Was bedeutet „Failed to load il2cpp“?', 'Das Spiel kann einen Teil seiner Engine nicht laden. Noch keine offizielle Lösung; überprüfe die Spieldateien, denk an die Grafiktreiber und melde den Fehler.']],
      unknown: 'Eine offizielle Lösung für Abstürze beim Laden eines neuen Tages und der genaue Logordner der Vollversion müssen bestätigt werden.'
    },
    '/guides/save-files-and-achievements/': {
      title: 'Spielstand-Probleme & gesperrte Erfolge',
      description: 'Was tun, wenn ein Spielstand beschädigt ist, Erfolge gesperrt sind, weil der Spielstand „bearbeitet“ wurde, oder ein Spielstand verschwindet.',
      answer: 'Wenn Horses of Hoofprint Bay meldet, dein Spielstand sei „außerhalb des Spiels bearbeitet“ worden, und Erfolge sperrt, hast du nicht unbedingt etwas falsch gemacht: Spieler berichten davon nach Abstürzen und Stromausfällen. Eine offizielle Lösung im Steam-Forum gibt es noch nicht. Melde es mit F8 oder auf dem offiziellen Discord und sichere zuerst deinen Spielstand-Ordner.',
      sections: [
        ['„Dieser Spielstand wurde außerhalb des Spiels bearbeitet“', 'Mehrere Spieler berichten, dass Erfolge nach einem Absturz oder Stromausfall gesperrt wurden, mit der Meldung, der Spielstand sei bearbeitet worden, obwohl sie die Dateien nie angefasst haben. Spieler haben Fehlerberichte auf dem offiziellen Discord eingereicht. Ein Spieler schlägt vor, den letzten Speicherstand vorübergehend zu entfernen; sichere vorher alles, denn dabei geht Fortschritt verloren.'],
        ['Erfolge werden gar nicht freigeschaltet', 'Ein anderes Problem: Manche, die am Release-Tag begannen, bekamen nur den ersten Erfolg. Ein Spieler berichtet, dass Erfolge nach einem Neustart des Spiels funktionierten. Insgesamt gibt es 47 Steam-Erfolge.'],
        ['Beschädigte Spielstände nach Abstürzen', 'Spieler berichten von Spielständen, die nach mehreren Abstürzen nicht mehr laden. Einem Spieler half das Löschen früherer Tage nicht. Sende mit F8 einen Fehlerbericht, damit das Studio die Datei prüfen kann.'],
        ['Spielstände fehlen nach erneutem Demo-Start', 'Wer nach dem Start der Vollversion alte Demo-Spielstände geladen hat, berichtet, dass der neue Spielstand der Vollversion nicht mehr im Menü erscheint, obwohl die Datei noch im Spielordner liegt. Ein bestätigter Weg zum Re-Import gibt es noch nicht. Lösche keine Spielstände in der Demo, sobald du die Vollversion spielst, und behalte eine Kopie deines Spielstand-Ordners.'],
        ['Demo-Spielstände', 'Laut FAQ des Studios werden Spielstände der Oktober-Demo in die Vollversion übernommen, die der Februar-Demo nicht.']
      ],
      faq: [['Warum sind meine Erfolge gesperrt?', 'Das Spiel hält den Spielstand für bearbeitet, was Spieler nach Abstürzen oder Stromausfällen berichten. Eine offizielle Lösung gibt es noch nicht; melde es dem Studio.'], ['Kann ich einen Spielstand manuell importieren?', 'Eine bestätigte Methode wurde noch nicht geteilt. Behalte eine Sicherung des Spielstand-Ordners.'], ['Gibt es Cloud-Spielstände?', 'Ja, Steam Cloud ist auf der Store-Seite aufgeführt.'], ['Wie viele Erfolge gibt es?', '47.']],
      unknown: 'Eine offizielle Lösung für gesperrte Erfolge und fehlende Spielstände wurde noch nicht veröffentlicht. Alle Lösungsansätze oben sind Spielerberichte.'
    },
    '/horses/starter-horse/': {
      title: 'Startpferd',
      description: 'Ist das Startpferd immer eine Stute? Was sich zwischen Startpferden ändert und wie du stattdessen einen Hengst oder Wallach bekommst.',
      answer: 'Ja, das Startpferd in Horses of Hoofprint Bay ist immer eine Stute. Laut Spielern hat sie immer dieselben Werte, Eigenschaften und dasselbe Alter; nur die Farben unterscheiden sich. Willst du einen Wallach oder Hengst, kannst du die Startstute verkaufen und in der Stadt ein anderes Pferd kaufen.',
      sections: [
        ['Immer eine Stute, mit Grund', 'Spieler aus Demo und Vollversion berichten, dass jedes Startpferd eine Stute ist. Die übliche Erklärung: Mit einer Stute kannst du schnell mit der Zucht beginnen. Eine Decktaxe ist viel günstiger als ein zweites Pferd, und mit einem Hengst oder Wallach bekommst du keine eigenen Fohlen.'],
        ['Was sich zwischen Startpferden ändert', 'Laut Spielern hat die Startstute in jedem neuen Spielstand dieselben Werte, Eigenschaften und dasselbe Alter. Nur Fellfarbe und Abzeichen ändern sich. Ein Neustart bringt dir also kein stärkeres oder männliches Startpferd.'],
        ['Niedrigere Werte in der Vollversion', 'Ein Community-Mitglied berichtete vor dem Release, dass die Vollversion langsameren Fortschritt und niedrigere Startwerte hat als die Demo, in der man sehr schnell an die Werteobergrenze züchten konnte. Prüfe die Werte deiner Startstute in deinem Spielstand.'],
        ['Wenn du ein anderes erstes Pferd willst', 'Du kannst die Startstute verkaufen und beim Züchter in der Stadt einen Wallach oder Hengst kaufen. Eine andere Idee von Spielern: Behalte die Stute und züchte auf das Pferd hin, das du dir wünschst.'], ['Werte des Startpferds', 'Laut Community-Wiki wählst du bei der Ankunft auf der Fähre eines von 10 Startpferden. Alle sind Stuten, 60 Runden (Spieltage) alt, mit 30 Kraft, 25 Ausdauer und vollem Selbstvertrauen; sie unterscheiden sich nur in Fellfarbe und Abzeichen. Eine davon ist eine Hommage an die Startstute aus Mein Pferdehof. Außerdem startest du mit einem alten Vielseitigkeitssattel, einem alten Sidepull, zwei Schabracken und einfacher Reitkleidung; alter Sattel, alter Sidepull und grauer Helm lassen sich nach einem Verkauf nicht zurückkaufen.']
      ],
      faq: [['Ist das Startpferd immer eine Stute?', 'Ja, laut Spielern in Demo und Vollversion.'], ['Bekomme ich durch einen Neustart ein männliches Startpferd?', 'Nein. Nur die Farben ändern sich.'], ['Kann ich meine Startstute verkaufen?', 'Ja, Spieler berichten, dass sie sie verkauft und in der Stadt ein anderes Pferd gekauft haben.'], ['Welche Werte hat das Startpferd?', '30 Kraft und 25 Ausdauer bei 60 Tagen Alter, laut Community-Wiki.']],
      unknown: 'Die genauen Startwerte in der Vollversion müssen im Spiel geprüft werden.'
    },
    '/horses/secret-horse-names/': {
      title: 'Geheime Pferdenamen & eigene Farben',
      description: 'Besondere Namen, die das Fell eines Pferdes verändern, wie du Pferde umfärbst und ob du eigene Pferde erstellen kannst.',
      answer: 'Manche Pferdenamen in Horses of Hoofprint Bay verändern das Aussehen des Pferdes. Laut Community-Wiki wechselt ein Pferd, das nach einem von 38 Pferden aus Mein Pferdehof benannt wird, etwa Summerrain, Baghira, Samurai, Daydream oder Pandora, zur Farbpalette dieses Spiels; Umbenennen macht es rückgängig. Einen Pferde-Editor gibt es nicht, aber Farbvorlagen können alle Pferde deines Spielstands umfärben, sogar in Regenbogenfarben.',
      sections: [['Die geheimen Mein-Pferdehof-Namen', 'Das Community-Wiki beschreibt das als Easter Egg: Pferde mit dem Namen eines von 38 Pferden aus Mein Pferdehof wechseln zur MPH-Farbpalette. Die Liste: Eclipse, Casiopaya, Trinity, Wisper, Destiny, Daydream, BlackBeauty, Cher, Abra, Bienchen, Eco, Pandora, Baghira, Jackie, Dinarsad, Chantal, Golden Echo, Eleonora, Dutchess, Ramona, Britney, Escandalo, Terentino, Justus, Acapulco, Capuchino, Abony, Aberkan, Dahooka, Bijou, Bajadere, Tulipan, Godewind, Salinero, Summerrain, Windhauch, Samurai, Jungle Prince. Spieler im Steam-Forum haben Summerrain, Baghira, Samurai, Daydream und Pandora bestätigt.'], ['Die Wirkung hängt von der Grundfarbe ab', 'Ein Spieler, der mehrere Namen am selben Pferd getestet hat, fand heraus, dass die Namen dieselbe Tönung ergeben und das Ergebnis von der Grundfarbe abhängt: Ein Schimmel wird gelblich mit rosa Mähne und Schweif, ein Fuchs tiefrot. Umbenennen bringt die normalen Farben zurück.'], ['Farbvorlagen', 'Die Pferdefarb-Einstellungen bieten die Vorlagen Default, MPH und Rainbow, und du kannst eigene speichern. Ein Wechsel der Vorlage färbt alle Pferde im Spielstand um. Der Steam-Store nennt Farbalternativen auch bei den Barrierefreiheitsfunktionen.'], ['Kein Pferde-Editor und keine kombinierten Abzeichen', 'Es gibt keine Option, ein Pferd von Grund auf zu gestalten. Der Weg zu einem bestimmten Aussehen ist die Zucht, aber laut Spielern erbt ein Fohlen Fell und Mähne entweder vom Vater oder von der Mutter, sodass sich zwei weiße Muster wie Tobiano und Appaloosa nicht kombinieren.'], ['Keine Kopfabzeichen', 'Weiße Abzeichen im Gesicht gibt es nicht. Ein Spieler zitiert das Studio: Das Farblayout wird an jede Pose angepasst, wodurch Abzeichen kaputtgehen, wenn das Pferd den Kopf dreht.']],
      faq: [['Welche Namen geben ein besonderes Fell?', 'Die 38 Mein-Pferdehof-Namen, etwa Summerrain, Baghira, Samurai, Daydream und Pandora.'], ['Kann ich das besondere Fell rückgängig machen?', 'Ja, benenne das Pferd um.'], ['Kann ich Regenbogenpferde machen?', 'Ja, mit der Farbvorlage Rainbow.'], ['Können sich weiße Abzeichen kombinieren?', 'Nein. Laut Spielern erbt ein Fohlen das Fell eines Elternteils.']],
      unknown: 'Die vollständige Namensliste stammt aus dem Community-Wiki; einzelne Namen und ihr Aussehen müssen im Spiel geprüft werden.'
    },
    '/guides/mods/': {
      title: 'Mods & eigenes Sattelzeug',
      description: 'Wo du Mods und eigenes Sattelzeug für Horses of Hoofprint Bay findest und warum es keinen Steam Workshop gibt.',
      answer: 'Horses of Hoofprint Bay hat keinen Steam Workshop. Mods, auch eigenes Sattelzeug, werden von Community-Erstellern geteilt, meist auf Patreon, mit Installationsanleitung. Der offizielle Discord hat einen eigenen Kanal für Mods.',
      sections: [
        ['Kein Steam Workshop', 'Die Community beschreibt das Spiel als modfreundlich, aber auf Steam gibt es keine Workshop-Seite. Mods werden stattdessen von ihren Erstellern bereitgestellt.'],
        ['Wo Spieler Mods finden', 'Ein Community-Helfer im Steam-Forum nennt mehrere Patreon-Ersteller, die Mods und Installationsanleitungen veröffentlichen, darunter WestmoreSaddlery, Tackandmoremclain, NameOfAMoon und threelilies. Eigenes Sattelzeug (Sättel, Trensen und andere Ausrüstung) ist eine beliebte Kategorie.'],
        ['Mod-Kanal auf Discord', 'Der offizielle Discord-Server hat einen Kanal für Mods. Laut Studio steht die Einladung auf der Website von Thogli Studios.'],
        ['Spielstand bearbeiten', 'Ein separater Community-Guide erklärt, wie man Charaktereigenschaften im Spielstand bearbeitet. Das Bearbeiten kann Erfolge sperren, weil das Spiel Spielstände erkennt, die außerhalb des Spiels verändert wurden.'],
        ['Sicher bleiben', 'Mods sind inoffiziell. Sichere deine Spielstände vor jeder Installation, lade nur von Erstellern, denen du vertraust, und rechne damit, dass Mods nach Updates nicht mehr funktionieren.']
      ],
      faq: [['Gibt es einen Steam Workshop?', 'Nein.'], ['Wo bekomme ich eigenes Sattelzeug?', 'Von Community-Erstellern, vor allem auf Patreon, laut Spielern.'], ['Sperren Mods die Erfolge?', 'Nicht bestätigt. Das Bearbeiten von Spielständen außerhalb des Spiels kann Erfolge sperren, also sichere vorher.']],
      unknown: 'Eine offizielle Mod-Dokumentation und ob Mods Erfolge beeinflussen, sind nicht bestätigt.'
    },
    '/horses/breeding-potential/': {
      title: 'Zuchtpotenzial & Geschlecht der Fohlen',
      description: 'Beeinflusst Training die Fohlen? Wie Potenzial funktioniert, Werte beim Tierarzt prüfen, versteckte Eigenschaften von Deckhengsten und Hengst- oder Stutfohlen.',
      answer: 'Bei der Zucht in Horses of Hoofprint Bay zählt laut Spielern nur das Potenzial eines Pferdes, nicht wie weit es trainiert ist. Du kannst den Tierarzt rufen, um das Potenzial zu prüfen, ohne das Pferd voll zu trainieren. Das Geschlecht eines Fohlens scheint zufällig zu sein: Manche bekommen vor allem Hengstfohlen, andere vor allem Stutfohlen.',
      sections: [
        ['Potenzial statt aktuellem Trainingsstand', 'Laut Spielern richten sich Fohlen nach den Potenzialwerten der Eltern. Eine Stute muss vor der Zucht nicht bis zum Maximum trainiert sein. Stuten, die direkt hintereinander gedeckt werden, verlieren Trainingsstand, ihr Potenzial bleibt aber gleich.'],
        ['Potenzial beim Tierarzt prüfen', 'Du kannst ein Pferd einmal bis zum Maximum trainieren, um sein Potenzial zu sehen, oder gegen Bezahlung den Tierarzt rufen, der laut Spielern die Potenzialwerte ohne Training zeigt.'],
        ['Vererbung und die Eigenschaft „Bad Inheritance“', 'Ein Spieler, der das Spiel analysiert hat, erklärt: Das Potenzial eines Fohlens ist der Durchschnitt der Eltern plus ein Zufallswurf, und die Eigenschaft „Bad Inheritance“ (schlechte Vererbung) zählt nur, wenn du mit diesem Pferd züchtest. Das Buch über Eigenschaften und Eigenheiten in deiner Bibliothek erklärt jede Eigenschaft, nennt aber keine Zahlen.'],
        ['Hengste beim Züchter', 'Manche Hengste, die beim Züchter zum Decken angeboten werden, erscheinen nicht in der Kaufliste. Laut Spielern kannst du ihre Eigenschaften vorher nicht prüfen.'],
        ['Hengst- oder Stutfohlen?', 'Spieler sehen Serien in beide Richtungen, zum Beispiel 8 Hengstfohlen und 4 Stutfohlen oder 4 Stutfohlen von 5. Nichts deutet darauf hin, dass man das Geschlecht beeinflussen kann; es wirkt zufällig.'],
        ['Keine realistische Genetik', 'Das Studio sagt, das Spiel nutze keine realistische Farbgenetik, daher ist ein Gentest nicht geplant. Ein Test auf bestimmte Charaktereigenschaften ist möglich.']
      ],
      faq: [['Bekommt eine besser trainierte Stute bessere Fohlen?', 'Nein, laut Spielern zählt nur das Potenzial.'], ['Wie sehe ich das Potenzial eines Pferdes?', 'Einmal voll trainieren oder den Tierarzt rufen.'], ['Warum sind alle meine Fohlen Hengste?', 'Wahrscheinlich Zufall. Andere bekommen vor allem Stutfohlen.'], ['Nutzt das Spiel echte Farbgenetik?', 'Nein, laut Studio.']],
      unknown: 'Die genaue Vererbungsformel und die Größe des Zufallswurfs stammen aus einer Spieleranalyse und sind vom Studio nicht bestätigt.'
    },
    '/horses/gelding-and-accidental-pregnancy/': {
      title: 'Kastration & ungewollte Trächtigkeit verhindern',
      description: 'Warum Stuten ohne Zuchtstation tragend werden, wie du einen Hengst kastrierst und Pensionspferde schützt.',
      answer: 'In Horses of Hoofprint Bay deckt ein Hengst, der mit Stuten zusammensteht, diese ganz natürlich, auch ohne Zuchtstation, und das gilt auch für Pensionspferde. Um das zu verhindern, lass den Hengst vom Tierarzt kastrieren (laut Spielern 50 Münzen) oder stelle Hengste in eine eigene Stallgruppe und Koppel.',
      sections: [
        ['Warum deine Stute plötzlich tragend ist', 'Kaufst du einen Hengst und hältst ihn in derselben Gruppe wie deine Stute, kann sie über Nacht tragend werden, ohne dass du etwas tust. Spieler bestätigen, dass das schon passiert, bevor du die Zuchtstation baust.'],
        ['Auch Pensionspferde können tragend werden', 'Mehrere Spieler haben so Geld verloren: Wurde eine Pensionsstute tragend, war die Besitzerin verärgert, es gab eine Strafe von etwa 500, Prestige ging verloren, und das Pferd wurde früher abgeholt. Halte Hengste von Pensionspferden fern.'],
        ['So kastrierst du einen Hengst', 'Ruf im Medizin-Tab des Pferdes den Tierarzt. Laut Spielern enthält die Tierarztrechnung eine Option, den Hengst für 50 Münzen zu kastrieren. Laut einem Community-Helfer hat die Kastration keine Auswirkung auf die Werte; sie erlaubt nur, ihn ohne ungewollte Trächtigkeiten oder Kämpfe mit Stuten zu halten.'],
        ['Pferde stattdessen trennen', 'Baue deinen Stall aus, um mehr als eine Stallgruppe zu bekommen, und verschiebe Pferde über die Optionen „Move“ oder „Manage“ des Pferdes. Du kannst ein Pferd auch auf eine andere Koppel ziehen. Ein Spieler hält drei Gruppen: Stuten, Wallache und Hengste. Hengste, die zusammenstehen, können kämpfen.']
      ],
      faq: [['Können Stuten ohne Zuchtstation tragend werden?', 'Ja, wenn ein Hengst in derselben Gruppe steht.'], ['Was kostet eine Kastration?', 'Laut Spielern 50 Münzen, über den Tierarzt.'], ['Verändert die Kastration die Werte?', 'Nein, laut einem Community-Helfer.'], ['Kämpfen Hengste?', 'Spieler berichten, dass Hengste, die zusammenstehen, kämpfen können.']],
      unknown: 'Die genaue Strafe bei Pensionspferden und die Tierarztpreise können abweichen; sie stammen aus Spielerberichten.'
    },
    '/horses/foals-and-yearlings/': {
      title: 'Fohlen & Jährlinge',
      description: 'Wann Fohlen und Jährlinge erwachsen werden, was ohne Stallplatz passiert und wie die Trächtigkeit die Stute beeinflusst.',
      answer: 'Laut Spielern bleibt ein Fohlen 4 Tage bei seiner Mutter im Stall, kommt dann auf die Jährlingskoppel und wird um Tag 12 zum jungen Erwachsenen. Wird ein Jährling erwachsen, während dein Stall voll ist, wird er weggeschickt; du findest ihn im Verkaufsstall in der Stadt wieder. Die Jährlingskoppel fasst laut Community-Wiki 6 Jährlinge, nach dem Ausbau 13.',
      sections: [
        ['Wie lange Fohlen zum Wachsen brauchen', 'Das Alter der Pferde wird in Spieltagen gezählt. Laut Spielern verbringt ein Fohlen die ersten 4 Tage bei der Mutter im Stall und lebt dann bis etwa Tag 12 auf der Jährlingskoppel, wo es zum jungen Erwachsenen wird. Ein Demo-Spieler verfolgte ein Fohlen von der Geburt an Tag 13 bis zum Erwachsensein an Tag 25, was dazu passt. Auf der Koppel kannst du Jährlinge versorgen und trainieren.'],
        ['Platz schaffen, bevor ein Jährling erwachsen wird', 'Wird ein Jährling auf der Jährlingskoppel erwachsen und es ist kein Platz im Stall frei, wird er weggeschickt. Laut Spielern kannst du ihn im Verkaufsstall in der Stadt zurückholen, sobald du Platz geschaffen hast.'],
        ['Trächtigkeit und Säugen kosten die Stute Training', 'Stuten gewinnen in der späten Trächtigkeit und während der Säugezeit keine Werte. Bis das Fohlen ein Jährling ist, muss die Stute laut Spielern wieder trainieren, um verlorene Punkte aufzuholen.'],
        ['Zuchtmöglichkeiten', 'Neben dem Decken einer Stute beschreiben Spieler, dass man in der Zuchtstation Samen gewinnen und frisch verwenden oder einfrieren kann.'], ['Einen Jährling auf die Koppel bringen', 'Wurde ein Fohlen zum Jährling, bevor du die Jährlingskoppel gebaut hattest, bleibt es eventuell im Stall, und Ziehen auf die Koppel funktioniert nicht. Ein Spieler löste das, indem er den Jährling auswählte, „Manage“ öffnete und ihn über die Stallgruppen verschob. Die Koppel fasst auf Stufe 1 sechs und auf Stufe 2 dreizehn Jährlinge.']
      ],
      faq: [['Wann werden Jährlinge erwachsen?', 'In einem Demo-Bericht etwa 12 Spieltage nach der Geburt. Prüfe die Bibliothek im Spiel für deine Version.'], ['Mein Jährling ist verschwunden. Wo ist er?', 'Wahrscheinlich im Verkaufsstall in der Stadt, falls dein Stall voll war, als er erwachsen wurde.'], ['Warum hat meine Stute Kraft verloren?', 'Stuten gewinnen in der späten Trächtigkeit und beim Säugen keine Werte.']],
      unknown: 'Die Wachstumszeiten in der Vollversion müssen im Spiel geprüft werden; der Demo-Bericht kann abweichen.'
    },
    '/competitions/breeds-and-disciplines/': {
      title: 'Rassen & Disziplinen',
      description: 'Gibt es Dressur, Barrel Racing, Westernreiten oder andere Pferderassen? Was im Spiel ist und was nicht.',
      answer: 'Horses of Hoofprint Bay bietet Springreiten, Gelände und die Caprilli-Prüfung. Das Studio hat bestätigt, dass Westernreiten nicht kommt und andere Pferderassen nicht geplant sind. Dressur und Barrel Racing gibt es nicht.',
      sections: [
        ['Worin du starten kannst', 'Offizieller Store und Publisher nennen Springreiten und Gelände. Caprilli, eine Prüfung der Gangartwechsel über niedrige Hindernisse, ist eine weitere Turnierart, die Community-Mitglieder zu den Neuerungen gegenüber älteren Pferdespielen zählen.'],
        ['Westernreiten: nein', 'Auf die Frage nach Westernreiten antwortete das Studio, dass es nicht hinzugefügt wird und das Spiel Springreiten und Gelände bietet.'],
        ['Dressur und Barrel Racing: nicht geplant', 'Laut FAQ des Studios sind weitere Disziplinen nicht geplant. Spieler ergänzen, dass die seitliche Ansicht und die handgezeichneten Gangarten Dressurfiguren oder Barrel-Muster schwer darstellbar machen.'],
        ['Andere Rassen: nicht geplant', 'Das Studio sagt, andere Rassen seien nicht geplant. Über die Farbpalette kannst du deine Pferde trotzdem wie andere Rassen aussehen lassen.']
      ],
      faq: [['Gibt es Dressur?', 'Nein, und weitere Disziplinen sind nicht geplant.'], ['Gibt es Westernreiten?', 'Nein. Das Studio hat bestätigt, dass es nicht kommt.'], ['Gibt es Kaltblüter oder andere Rassen?', 'Nein. Laut Studio sind andere Rassen nicht geplant.'], ['Gibt es Gelände?', 'Ja, Gelände gehört zur offiziellen Feature-Liste.']],
      unknown: 'Die vollständige Liste der Turnierklassen muss im Spiel geprüft werden.'
    },
    '/guides/my-horse-farm-comparison/': {
      title: 'Vergleich mit Mein Pferdehof',
      description: 'Wie Horses of Hoofprint Bay im Vergleich zu Mein Pferdehof (My Horse Farm, 2003) abschneidet, dem Spiel, das es inspiriert hat.',
      answer: 'Horses of Hoofprint Bay ist von Mein Pferdehof (My Horse Farm, 2003) inspiriert, aber keine Kopie. Es gibt keine Gästehäuser; stattdessen versorgst du Pensionspferde und gibst Reitstunden. Neu sind unter anderem Longieren, Caprilli-Prüfungen und Charaktereigenschaften.',
      sections: [
        ['Ein inspirierter Nachfolger', 'Der Publisher beschreibt das Spiel als inspiriert vom Lieblingsspiel der Entwicklerinnen aus der Kindheit. Mein Pferdehof erschien international als My Horse Farm und laut einem Spieler in manchen Regionen als Horse and Pony Tycoon. Fans des Originals beschreiben das neue Spiel als nostalgisch, aber deutlich übersichtlicher.'],
        ['Keine Gäste und Gästehäuser', 'Anders als im Original gibt es keine Gästehäuser oder Besucher. Laut Spielern übernehmen Pensionspferde und Reitstunden diese Rolle als Einnahmequelle.'],
        ['Was neu ist', 'Community-Mitglieder nennen Reitstunden auf deinen eigenen Pferden, Longieren, die Caprilli-Prüfung und Charaktereigenschaften. Spieler erwähnen außerdem detaillierteres Training, Zucht und Pflege sowie realistische Krankheiten und Verletzungen.'],
        ['Mehr Informationen auf dem Bildschirm', 'Wer das Original wieder gespielt hat, beschreibt es als Blackbox, während Hoofprint Bay klare Informationen über deine Pferde, Pensionspferde und Stallplätze zeigt.']
      ],
      faq: [['Ist Horses of Hoofprint Bay ein Remake von Mein Pferdehof?', 'Nein. Es ist ein neues Spiel, das davon inspiriert ist.'], ['Gibt es Gäste wie im Original?', 'Nein, stattdessen gibt es Pensionspferde und Reitstunden.'], ['Kann ich es vorher ausprobieren?', 'Ja, die kostenlose Demo umfasst 25 Spieltage.']],
      unknown: 'Ein genauer Funktionsvergleich erfordert praktische Tests beider Spiele.'
    },
    '/training/horse-too-tired-to-train/': {
      title: 'Pferd zu müde, krank oder explosiv zum Trainieren',
      description: 'Was tun, wenn alle Trainingsoptionen gesperrt sind, weil dein Pferd erschöpft, krank oder explosiv ist.',
      answer: 'Kannst du kein Training auswählen, öffne den medizinischen Bericht über dem Pferd, um zu sehen, ob mehr als Erschöpfung dahintersteckt, und ruf bei Krankheit den Tierarzt. Bei einem explosiven Pferd berichten Spieler, dass freies Longieren (die unterste Longieroption) mit ein paar Galopprunden hilft. Pferde verlieren ohne regelmäßige Arbeit Fitness, also trainiere auch zwischen Turnieren.',
      sections: [
        ['Zuerst den medizinischen Bericht prüfen', 'Ein Pferd kann aus mehreren Gründen für das Training gesperrt sein. Sieh dir den medizinischen Bericht über dem Pferd an: Zeigt er eine Krankheit oder Verletzung, behandle sie oder ruf den Tierarzt, bevor du trainierst. Laut Spielern solltest du bei bloßem Erschöpfungsrisiko trotzdem ein Training wählen können.'],
        ['Explosives Pferd: freies Longieren', 'Meldet das Spiel, dein Pferd sei explosiv, und schlägt freies Longieren („Free Lunge“) vor, berichten Spieler: Geh zum Longiertraining, wähle die unterste Option und lass das Pferd ein paar Mal galoppieren. Das löst das Problem.'],
        ['Erschöpfung und Ruhe', 'Wer ein müdes Pferd überfordert, riskiert Erschöpfung, und laut Spielern entstehen Krankheiten und Verletzungen, wenn Pferde überlastet oder schlecht versorgt werden. Verteile das Training auf mehrere Tage und bleib bei Putzen und Füttern dran.'],
        ['Warum Pferde Kraft und Ausdauer verlieren', 'Werte sinken, wenn ein Pferd nicht regelmäßig trainiert wird, selbst wenn es Turniere geht, ähnlich wie echte Fitness. Reitstunden mit unerfahrenen Reitern kosten ebenfalls etwas Kraft und Ausdauer. Stuten verlieren in der späten Trächtigkeit und beim Säugen Trainingsstand.'],
        ['Personal kann Pferde überlasten', 'Verursacht dein Trainingspersonal immer wieder Sehnenverletzungen, schule dein Personal oder weise Pferde nur der Person zu, die sie gut trainiert.']
      ],
      faq: [['Warum kann ich kein Training auswählen?', 'Dein Pferd ist wahrscheinlich krank oder verletzt, nicht nur müde. Prüfe den medizinischen Bericht.'], ['Wie beruhige ich ein explosives Pferd?', 'Spieler nutzen freies Longieren mit ein paar Galopprunden.'], ['Warum verliert mein Pferd Werte?', 'Pferde brauchen regelmäßiges Training, um fit zu bleiben; Turniere allein reichen nicht.']],
      unknown: 'Die genauen Schwellen für Erschöpfung und Explosivität müssen im Spiel geprüft werden.'
    },
    '/training/confidence/': {
      title: 'Selbstvertrauen-Anleitung',
      description: 'Stärke das Selbstvertrauen deines Pferdes, stoppe Buckeln und Scheuen und verstehe, warum die Herzen verschwinden.',
      answer: 'Um das Selbstvertrauen (Confidence) in Horses of Hoofprint Bay zu steigern, nutze das Selbstvertrauenstraining und lobe dein Pferd (standardmäßig S) direkt nach einem Gangartwechsel. Leckerlis geben etwas Selbstvertrauen, Pferde mit der Eigenheit „Snacky“ mehr. Zeigt dein Pferd beim Streicheln keine Herzen mehr, ist das normal: Laut Spielern verschwinden die Herzen ab hohem Selbstvertrauen, etwa 80.',
      sections: [
        ['Warum Selbstvertrauen wichtig ist', 'Pferde mit wenig Selbstvertrauen wählen ihr eigenes Tempo, buckeln, schnauben und verweigern Sprünge; selbst leichtes Training dauert dann lange. Mehr Selbstvertrauen sorgt dafür, dass sie deinen Kommandos folgen. Laut Spielern musst du Pferde außerdem an gruselige Gegenstände gewöhnen, bevor sie mitarbeiten.'],
        ['Nach dem Gangartwechsel loben', 'Spieler berichten von einem schnellen Weg: Wechsle bei jedem Training oder Ausritt selbst die Gangart und drücke dann S (Standardtaste), um das Pferd für seinen Gehorsam zu loben. Loben scheint nur direkt nach einem Gangartwechsel zu wirken.'],
        ['Selbstvertrauenstraining', 'Für ein Pferd, das im Vollberitt-Training buckelt, empfehlen Spieler das Selbstvertrauenstraining weit unten in der Trainingsliste.'],
        ['Leckerlis', 'Leckerlis geben ein wenig Selbstvertrauen, sofern es nicht schon voll ist, und etwas Gewicht. Pferde mit der Eigenheit „Snacky“ bekommen durch Leckerlis mehr Selbstvertrauen.'],
        ['Warum dein Pferd „nicht mehr gestreichelt werden will“', 'Herzen erscheinen, wenn du ein Pferd an einer Stelle streichelst, die es mag. Laut Spielern verschwinden die Herzen ab etwa 80 Selbstvertrauen (dem letzten Balken). Das Pferd mag dich nicht weniger; es hat einfach ein hohes Selbstvertrauen erreicht.'],
        ['Rebellische Pferde', 'Ein Spieler, der das Spiel analysiert hat, erklärt: Pferde wechseln von selbst das Tempo, bis ihr Selbstvertrauen fast voll ist. Ein Pferd mit der Eigenschaft „Rebellious“ tut das auch bei hohem Selbstvertrauen und warnt dich kürzer vorher.']
      ],
      faq: [['Wie höre ich auf, dass mein Pferd buckelt?', 'Arbeite mit Selbstvertrauenstraining und Lob am Selbstvertrauen.'], ['Mit welcher Taste lobe ich das Pferd?', 'Standardmäßig S, direkt nach einem Gangartwechsel.'], ['Warum sind die Herzen weg?', 'Laut Spielern verschwinden sie ab hohem Selbstvertrauen, etwa 80.'], ['Was bewirken Leckerlis?', 'Ein kleines Plus an Selbstvertrauen und etwas Gewicht.']],
      unknown: 'Genaue Selbstvertrauenswerte, auch die Grenze für die Herzen, stammen aus Spielerberichten und müssen im Spiel geprüft werden.'
    },
    '/guides/apple-tree-and-hoof-boot-tasks/': {
      title: 'Apfelbaum- & Hufschuh-Aufgabe',
      description: 'Wo du den Apfelbaum und den Hufschuh für die Ausritt-Aufgaben findest und wie du die Äpfel pflückst.',
      answer: 'Der Apfelbaum steht auf dem kleinen Waldausritt: Nimm den Weg nach unten über die Brücke und halte dein Pferd am Baum vollständig an, um die Äpfel zu pflücken. Der Hufschuh liegt auf dem kleinen Ausritt, oberer Weg. Mit der Leertaste wechselst du den Weg, wenn das Wegsymbol erscheint.',
      sections: [
        ['Apfelbaum-Aufgabe', 'Laut Spielern steht der Apfelbaum auf dem kleinen Waldausritt. Wähle an der Gabelung den Weg nach unten über die Brücke. Wenn du den Apfelbaum siehst, halte dein Pferd an, um die Äpfel zu pflücken.'],
        ['Wenn sich die Äpfel nicht pflücken lassen', 'Bei einem Spieler blinkten die Äpfel und die Eingabetaste, ohne dass die Aufgabe abgeschlossen wurde. Ein vollständiger Halt ist nötig; laut dem Spieler verschwand der Fehler bei einem späteren Ausritt.'],
        ['Hufschuh-Aufgabe', 'Für die Hufschuh-Aufgabe berichten Spieler, dass der Gegenstand auf dem kleinen Ausritt auf dem oberen Weg liegt. Das wurde von Spielern in der Demo bestätigt.'],
        ['So wechselst du auf einem Ausritt den Weg', 'Wenn das U-förmige Wegsymbol erscheint, drücke die Leertaste (Standardtaste), um auf den anderen Weg zu wechseln. Tasten lassen sich in den Einstellungen ändern.']
      ],
      faq: [['Wo ist der Apfelbaum?', 'Kleiner Waldausritt, unterer Weg über die Brücke.'], ['Wie pflücke ich die Äpfel?', 'Halte dein Pferd neben dem Baum vollständig an.'], ['Wo ist der Hufschuh?', 'Kleiner Ausritt, oberer Weg.'], ['Wie wechsle ich den Weg?', 'Leertaste drücken, wenn das Wegsymbol erscheint.']],
      unknown: 'Die Strecken können sich zwischen Versionen ändern; die Orte stammen von Spielern.'
    },
    '/training/riding-lesson-corrections/': {
      title: 'Korrekturen in Reitstunden',
      description: 'So bestehst du Reitstunden: worauf du beim Reitschüler achtest, wie viele Korrekturen du gibst und wie du „nicht genug Korrekturen“ vermeidest.',
      answer: 'Um Reitstunden zu bestehen, konzentriere dich auf wenige Bezugspunkte: Die Fußspitzen des Reitschülers gehören an die Vorderkante des Sattelgurts, die Hände etwa eine Faust über die Mähne, und der Oberkörper aufrecht, ohne Vorlage. Gib viele Korrekturen: Spieler geben mindestens 4–5 pro Runde, denn eine falsche Korrektur ist besser als zu wenige.',
      sections: [
        ['Zuerst die richtige Haltung lernen', 'Sieh dir vor der Stunde die richtige Haltung an, die das Spiel zeigt. Vergleiche die Positionen zueinander, statt kleine Bewegungen zu suchen: Füße parallel zum Boden, Rücken im rechten Winkel zum Boden, Hände knapp über der fliegenden Mähne.'],
        ['Zuerst die Beine prüfen', 'Spieler finden die Beine am einfachsten: Die Fußspitzen des Reitschülers sollen an der Vorderkante des Sattelgurts sein. Sind sie davor oder dahinter, korrigiere.'],
        ['Oft korrigieren', 'Die Meldung „not enough corrections given“ (nicht genug Korrekturen) ist häufig. Spieler empfehlen, so viele Korrekturen wie möglich zu geben, mindestens 4–5 pro Runde: Lieber korrigieren und danebenliegen als gar nichts sagen.'],
        ['Die Steuerung erleichtern', 'Lege die Korrekturtasten in den Einstellungen neu, um Fehlklicks zu vermeiden. Manche finden die Stunden schwer, wenn das Pferd schnell ist; später kann auch Personal die Stunden übernehmen.'],
        ['Reitstunden durch Personal', 'Reitlehrerin Julia gibt eine Stunde pro zugewiesenem Platz, belege also jeden Platz, um alle Stunden zu nutzen. Reitstunden kosten das Schulpferd mit der Zeit etwas Kraft und Ausdauer.']
      ],
      faq: [['Warum bekomme ich „not enough corrections given“?', 'Du musst öfter korrigieren. Spieler geben mindestens 4–5 Korrekturen pro Runde.'], ['Wo sollen die Füße des Reitschülers sein?', 'Fußspitzen an der Vorderkante des Sattelgurts.'], ['Muss ich Reitstunden selbst geben?', 'Du kannst Personal für Reitstunden einstellen.']],
      unknown: 'Die genauen Bewertungsregeln der Reitstunden müssen im Spiel geprüft werden.'
    },
    '/guides/where-to-buy-medicine-and-feed/': {
      title: 'Wo du Medizin & Futter kaufst',
      description: 'Wo du Medizin, Desinfektionsmittel, Heu und Kraftfutter in der Stadt kaufst, da es keinen Tierarzt-Laden gibt.',
      answer: 'In der Stadt gibt es kein Tierarztgebäude. Medizin und medizinisches Zubehör kaufst du im normalen Laden: Geh in die Stadt, betritt den Laden rechts (das Gebäude mit dem Sattelschild) und sieh ins Regal ganz hinten, über der Pferdepuppe und links vom Futter. Heu und Futter liegen hinter dem Verkäufer.',
      sections: [
        ['Den Laden finden', 'Klicke auf der Hofkarte auf die Stadt. Der Laden ist das Gebäude rechts mit dem Sattelschild. Dort gibt es Futter, Sattelzeug und medizinisches Zubehör.'],
        ['Medizinisches Zubehör', 'Laut Spielern steht das Medizinregal hinten im Laden, über der Pferdepuppe und links vom Futter. Dort gibt es auch Desinfektionsmittel für Schnittwunden. Der Tierarzt behandelt Krankheiten, verkauft aber kein Zubehör.'],
        ['Heu und Kraftfutter', 'Klicke auf Heu und Futter hinter dem Verkäufer, um mehr Futter zu kaufen.'],
        ['Den Tierarzt rufen', 'Nutze das Telefon im Medizin-Tab des Pferdes, um den Tierarzt bei Krankheit zu rufen, das Potenzial eines Pferdes zu prüfen oder einen Hengst zu kastrieren.']
      ],
      faq: [['Wo ist der Tierarzt in der Stadt?', 'Es gibt kein Tierarztgebäude. Medizin kaufst du im normalen Laden, den Tierarzt rufst du über den Medizin-Tab.'], ['Wo kaufe ich Desinfektionsmittel?', 'Im hinteren Regal des Ladens, über der Pferdepuppe.'], ['Wo kaufe ich Heu?', 'Hinter dem Verkäufer im Laden.']],
      unknown: 'Die Preise der Artikel müssen im Spiel geprüft werden.'
    },
    '/horses/feeding/': {
      title: 'Fütterungs-Anleitung',
      description: 'Warum deine Pferde und Pensionspferde immer hungrig sind, wie viel Kraftfutter du gibst und wie Heu funktioniert.',
      answer: 'Sind deine Pferde oder Pensionspferde immer hungrig, füttere Kraftfutter, bis der Zustandsbalken die Mitte des grünen Bereichs erreicht, nicht nur dessen Anfang. Pensionspferde werden von ihren Besitzern geritten und verbrauchen mehr Energie. Sieh ins Pferdebuch in deinem Büro: Eine negative Zahl in der Spalte für den Körperzustand (Waagen-Symbol) bedeutet, dass das Pferd über Nacht abnimmt.',
      sections: [
        ['Bis zur Mitte des grünen Bereichs füttern', 'Laut Spielern reicht es nicht, ein Pferd nur bis zum Anfang des grünen Bereichs zu füttern; am nächsten Tag ist es wieder hungrig. Fütterst du, bis der Pfeil in der Mitte des Zustandsbalkens steht, passiert das nicht.'],
        ['Warum Pensionspferde hungriger sind', 'Pensionspferde werden von ihren Besitzern geritten, bewegen sich also und werden hungrig. Spieler füttern sie deshalb bis zur Mitte des grünen Bereichs. Vernachlässigte Pensionspferde können dich Geld und Prestige kosten.'],
        ['Das Pferdebuch nutzen', 'Das Pferdebuch in deinem Büro listet alle Pferde auf deinem Hof. Achte auf die Spalte mit dem Waagen-Symbol (Körperzustand): Eine negative Zahl bedeutet, dass das Pferd am nächsten Tag abnimmt, wenn du nicht mehr Kraftfutter gibst.'],
        ['Heu und Koppeln', 'In der Demo berichteten Spieler, dass Pferde das Heu fressen, wenn du die Koppeln nachts schließt und morgens wieder öffnest. Andere brauchten trotzdem Kraftfutter, verlasse dich also nicht nur auf Heu.'],
        ['Leckerlis', 'Leckerlis geben etwas Gewicht und ein wenig Selbstvertrauen.']
      ],
      faq: [['Warum sind meine Pferde immer hungrig?', 'Füttere Kraftfutter bis zur Mitte des grünen Zustandsbalkens, nicht nur bis zum Anfang.'], ['Warum sind Pensionspferde hungriger als meine Pferde?', 'Ihre Besitzer reiten sie, also verbrauchen sie mehr Energie.'], ['Wie sehe ich, welches Pferd Futter braucht?', 'In der Waagen-Spalte des Pferdebuchs in deinem Büro.']],
      unknown: 'Genaue Futtermengen und die Heu-Mechanik in der Vollversion müssen geprüft werden.'
    },
    '/training/jumping-tips/': {
      title: 'Tipps zum Springen',
      description: 'Absprung-Timing für Steilsprünge, Oxer und Wassergräben, plus Sprungmarker und Auto-Sprung für schwere Turniere.',
      answer: 'Das Absprung-Timing hängt vom Hindernis und vom Tempo ab. Steilsprünge reitest du langsamer an und springst näher ab, um Höhe zu gewinnen. Bei Oxern springst du früher ab, um Schwung mitzunehmen. Der Wassergraben ist am breitesten und braucht mehr Tempo. Je schneller das Pferd, desto früher springst du ab. Ist es immer noch zu schwer, aktiviere Sprungmarker oder Auto-Sprung in den Einstellungen.',
      sections: [
        ['Timing nach Hindernis', 'Spieler teilen diese Faustregeln: Steilsprünge brauchen Höhe, also langsamer und näher abspringen; Oxer brauchen Weite, also früher abspringen; der Wassergraben ist am breitesten und braucht mehr Tempo. Ein einfacher Einstieg: Im Galopp etwa so weit vor dem Hindernis abspringen, wie es hoch ist.'],
        ['Tempo verschiebt den Absprung', 'Je schneller das Pferd, desto weiter vorher musst du abspringen. In ruhigem Galopp kannst du recht nah heranreiten, im schnellen Galopp springst du früher ab.'],
        ['Mit Sprungmarkern üben', 'In den Einstellungen gibt es optionale Sprungmarker. Laut Spielern erscheinen sie nur im Training, nicht im Turnier, helfen aber, die Absprungpunkte zu lernen. Ein ausgebauter Übungsplatz bietet mehr Übungsmöglichkeiten.'],
        ['Auto-Sprung', 'In den Barrierefreiheitseinstellungen gibt es Auto-Sprung. Tempo und Kraft musst du weiter selbst einteilen, aber nicht mehr das genaue Timing.'],
        ['Tempo im Turnier', 'Laut Spielern kosten Fehler 4 Strafpunkte, Zeitfehler 1 Punkt pro angefangenen 4 Sekunden über der Zeit. Bleib im Galopp, um die Zeit zu schaffen, aber erschöpfe das Pferd nicht zu früh. Die Kraft geht schneller zur Neige, wenn die Ausdauer des Pferdes niedrig ist.'],
        ['Timing bei Caprilli', 'Bei der Caprilli-Prüfung wechselst du die Gangart etwa dann, wenn der Fuß des Reiters über der Linie zwischen den beiden Gangart-Anweisungen ist.']
      ],
      faq: [['Wie timet man Sprünge?', 'Bei Steilsprüngen näher und langsamer, bei Oxern früher, beim Wassergraben schneller.'], ['Gibt es einen leichten Modus fürs Springen?', 'Ja, Auto-Sprung in den Barrierefreiheitseinstellungen.'], ['Funktionieren Sprungmarker im Turnier?', 'Nein, laut Spielern nur im Training.']],
      unknown: 'Strafpunkte und Timing stammen aus Spielerberichten und müssen im Spiel geprüft werden.'
    },
    '/guides/controls/': {
      title: 'Steuerung & Tastenbelegung',
      description: 'Standardtasten zum Reiten, Springen, Loben und Wegwechseln, dazu Tastenbelegung und Barrierefreiheit.',
      answer: 'Reiten in Horses of Hoofprint Bay nutzt standardmäßig WASD und die Leertaste, und alle Tasten lassen sich in den Einstellungen ändern. Für einen Tempowechsel reicht ein einzelner Tastendruck, kein Gedrückthalten. Drücke S direkt nach einem Gangartwechsel, um dein Pferd zu loben, die Leertaste, um auf Ausritten den Weg zu wechseln, und F8 für einen Fehlerbericht. Auto-Sprung und Sprungmarker helfen.',
      sections: [
        ['Standard-Reitsteuerung', 'Laut Spielern nutzen die Reitabschnitte WASD und die Leertaste. Für einen Tempowechsel drückst du die Taste nur einmal, statt sie gedrückt zu halten. Menüs und Aktionen auf dem Hof bedienst du mit der Maus.'],
        ['Nützliche Tasten', 'S (Standard) lobt das Pferd nach einem Gangartwechsel. Die Leertaste wechselt auf Ausritten den Weg, wenn das Wegsymbol erscheint. F8 öffnet den Fehlerbericht im Spiel.'],
        ['Tasten neu belegen', 'Alle Tasten lassen sich in den Einstellungen ändern. Viele legen den Sprung auf die Leertaste oder belegen die Korrekturtasten der Reitstunden neu, um Fehlklicks zu vermeiden.'],
        ['Barrierefreiheit', 'Auto-Sprung findest du in den Barrierefreiheitseinstellungen; damit entfällt das genaue Absprung-Timing. Im Training lassen sich Sprungmarker einblenden. Die FAQ des Studios verweist außerdem auf Schwierigkeitseinstellungen wie leichtere Turniere oder mehr Prestigegewinn. Laut Steam ist das Spiel ohne zeitkritische Eingaben spielbar.'],
        ['Controller und Steam Deck', 'Steam führt keine Controller-Unterstützung auf. Auf dem Steam Deck nutzen Spieler die Vorlage Tastatur + Maus zusammen mit dem Touchscreen; Details stehen auf der Plattformseite.']
      ],
      faq: [['Kann ich nur mit der Maus spielen?', 'Zum Reiten brauchst du Tasten, aber jeder Tempowechsel ist nur ein Tastendruck, und Auto-Sprung nimmt dir das Timing ab.'], ['Kann ich Tasten neu belegen?', 'Ja, in den Einstellungen.'], ['Wie lobe ich mein Pferd?', 'Drücke S direkt nach einem Gangartwechsel.']],
      unknown: 'Eine vollständige offizielle Tastenliste muss im Spiel geprüft werden.'
    },
    '/guides/money-making/': {
      title: 'Geld verdienen',
      description: 'Frühe Einnahmequellen: Pensionspferde, Pferdehandel, Turniere, Reitstunden und teure Fehler vermeiden.',
      answer: 'Am zuverlässigsten verdienst du in Horses of Hoofprint Bay anfangs mit Pensionspferden und Pferdehandel: Kauf ein günstiges Pferd beim Züchter, trainiere es ein paar Tage und verkaufe es mit Gewinn. Preisgelder und Reitstunden bringen zusätzlich Geld. Vermeide Verluste durch Tierarztkosten und ungewollt tragende Pensionsstuten.',
      sections: [
        ['Pensionspferde', 'Laut Spielern sind Pensionspferde eine der besten Einnahmequellen am Anfang. Pferde im Beritt kannst du inzwischen früher nach Hause schicken, sobald ihr Trainingsziel erreicht ist; du bekommst dann die Berittgebühr plus die Pension für die Tage, die sie da waren. Füttere Pensionspferde gut; Vernachlässigung kostet Geld und Prestige.'],
        ['Pferdehandel', 'Kauf ein günstiges Pferd beim Züchter in der Stadt, trainiere es ein paar Tage und verkaufe es wieder. Laut Spielern kann das sehr lohnend sein.'],
        ['Turniere und Reitstunden', 'Turniere bringen Preisgeld, Reitstunden auf deinen Pferden Einnahmen, kosten das Pferd aber etwas Kraft und Ausdauer.'],
        ['Teure Fehler vermeiden', 'Halte Hengste von Pensionsstuten fern: Spieler verloren etwa 500 und Prestige, als eine Pensionsstute tragend wurde. Tierarztkosten summieren sich, also halte Pferde gut gefüttert und geputzt, um Krankheiten vorzubeugen. Wachse nicht zu schnell; mehr Pferde bedeuten mehr Kosten.'],
        ['Schwierigkeitseinstellungen', 'Die Schwierigkeitseinstellungen bieten leichtere Turniere und mehr Prestigegewinn, was den Fortschritt erleichtern kann.']
      ],
      faq: [['Wie verdiene ich anfangs am schnellsten Geld?', 'Mit Pensionspferden und Pferdehandel, laut Spielern.'], ['Kann ich Pensionspferde früher nach Hause schicken?', 'Ja, Berittpferde können nach Erreichen ihres Trainingsziels nach Hause geschickt werden.'], ['Warum bin ich ständig im Minus?', 'Tierarztkosten und Strafen summieren sich. Halte die Pferde gesund und wachse langsam.']],
      unknown: 'Die Vollversion hat einen langsameren Fortschritt als die Demo; genaue Gewinnzahlen müssen im Spiel getestet werden.'
    },
    '/competitions/trailer-and-multiple-horses/': {
      title: 'Anhänger & mehrere Pferde anmelden',
      description: 'Wie du Pferde in den Anhänger lädst und mehrere Pferde am selben Tag zu Turnieren anmeldest.',
      answer: 'Du lädst Pferde nicht selbst in den Anhänger. Geh in die Stadt, wähle die Arena, einen Parcours und im Seitenmenü die startberechtigten Pferde; sie werden automatisch verladen. Mit einem größeren Anhänger kannst du mehrere Pferde und mehrere Turniere auswählen, bevor du startest.',
      sections: [
        ['Pferde werden automatisch verladen', 'Nach dem Kauf von Parkplatz und Anhänger zeigt der Stadtbildschirm eventuell 0/2 Pferde im Anhänger. Das ist normal: Pferde werden verladen, sobald du sie für ein Turnier auswählst.'],
        ['Mehrere Pferde anmelden', 'Wähle in der Stadt die Arena und dann den Parcours. Startberechtigte Pferde erscheinen in einem Seitenmenü, und du kannst mehrere auswählen. Danach kannst du ein weiteres Turnier wählen, zum Beispiel eine Caprilli-Prüfung und eine Einsteiger-Springprüfung, und jedem Pferde zuweisen, bevor es losgeht.'],
        ['Ein Durchgang pro Pferd', 'Nimmst du nur ein Pferd mit und beendest das Turnier, wirst du zurück in deinen Stall geschickt. Plane alle Starts des Tages, bevor du das erste Turnier beginnst.']
      ],
      faq: [['Wie bekomme ich ein Pferd in den Anhänger?', 'Gar nicht selbst; es wird verladen, wenn du es für ein Turnier auswählst.'], ['Warum steht dort 0/2 Pferde im Anhänger?', 'Pferde werden erst verladen, wenn du sie für ein Turnier auswählst.'], ['Kann ich an einem Tag mehrere Turniere reiten?', 'Ja, wenn du alle Parcours und Pferde vor dem Start auswählst.']],
      unknown: 'Anhängerkapazitäten und Ausbaukosten müssen im Spiel geprüft werden.'
    },
    '/guides/achievements/': {
      title: 'Erfolge-Liste',
      description: 'Alle 47 Erfolge von Horses of Hoofprint Bay, auch die 9 versteckten, und wie viele Spieler sie schon haben.',
      answer: 'Horses of Hoofprint Bay hat 47 Steam-Erfolge, davon 9 versteckte. Fast alle bekommen Move in (100 %) und Visit Some Trees (96,9 %); am seltensten, mit 0,0 % am 7. November 2026, sind unter anderem Pro Trainer (1000 Trainings), Huge Competition Successes (1000 Siege), Direct Descendant, All the Quirks in the World und Mission Complete. Die Erfolgsnamen sind hier auf Englisch angegeben.',
      sections: [
        ['Erste Schritte und Ausritte', 'Move in: Erreiche zum ersten Mal deinen Hof (100 % der Spieler). Visit Some Trees: Besuche zum ersten Mal den Wald (96,9 %). A Salty Breeze: Besuche zum ersten Mal den Strand (8,0 %). Climb a Mountain: Besuche zum ersten Mal die Berge (4,6 %). Now I’ve Seen Everything: Schließe alle Trainingsparcours und Ausritte ab (0,1 %).'],
        ['Training und Turniere', 'A little training goes a long way: 10 Trainings abschließen (93,7 %). Practice makes perfect: 100 Trainings (51,5 %). Pro Trainer: 1000 Trainings (0,0 %). Some Competition Successes: 10 Turniere gewinnen (49,3 %). Big Competition Successes: 100 Turniere gewinnen (3,0 %). Huge Competition Successes: 1000 Turniere gewinnen (0,0 %). Competition All-Star: Jedes Turnier einmal gewinnen (0,2 %).'],
        ['Zucht', 'Here I Am: Dein erstes Fohlen züchten (78,8 %). All Grown Up: Ein Fohlen erwachsen werden lassen (59,4 %). A Lot of Foals: 20 Fohlen züchten (4,0 %). A WHOLE Lot of Foals: 100 Fohlen züchten (0,1 %). Expert Broodmare: Eine Stute bringt 8 Fohlen zur Welt (1,2 %). Widespread Genes: Ein Hengst deckt oder besamt 50 Stuten (3,2 %). A Frozen Legacy: Samen einfrieren (2,4 %). No more babies: Einen Hengst kastrieren (13,5 %). Direct Descendant: Ein 100/100-Fohlen züchten, das von deinem Startpferd abstammt (0,0 %).'],
        ['Geschäft und Geld', 'Breeding for Profit: Ein selbst gezüchtetes Pferd verkaufen (50,9 %). Horse Flipper: 10 Pferde verkaufen (15,0 %). Successful Business: 50 Pferde verkaufen (0,7 %). Line go up: 10.000 Geld auf dem Konto haben (20,8 %). Making a Small Fortune: 100.000 (0,9 %). More Money than you can spend: 250.000 (0,6 %). Prestigious: 50 % Prestige erreichen (10,0 %). Highly Prestigious: 99 % Prestige erreichen (0,2 %).'],
        ['Dein Hof und Langzeitziele', 'A Forever Home: Ein Pferd zieht auf den Gnadenhof (1,8 %). It’s been a While: 100 Spieltage spielen (9,9 %). A Year in Hoofprint Bay: 365 Spieltage in einem Spielstand spielen (0,3 %). All Decked Out: Alles Sattelzeug aus dem Laden besitzen (2,2 %). All the Help you can Get: Alle Angestellten einstellen (0,4 %). A Proper Estate: Alle Gebäude auf höchster Stufe (1,1 %). Full House: Ein voll ausgebauter Stall voller Pferde (0,1 %). All the Quirks in the World: Alle Charaktereigenschaften entdecken (0,0 %). Mission Complete: Alle Aufgaben abschließen (0,0 %).'],
        ['Versteckte Erfolge (Spoiler)', 'That’s too easy...: Ein „Low“-Turnier mit einem 100/100-Pferd gewinnen (0,1 %). Well, that needs some work: In einem Turnier Letzter werden (18,7 %). Oops!: Versehentlich eine Pensionsstute decken lassen (27,3 %). The boys are fighting: Zwei Hengste kämpfen um eine Stute (16,5 %). Copy & Paste: Ein Fohlen züchten, das der Stute fast gleicht (15,4 %). A Whole Life: Ein selbst gezüchtetes Pferd geht auf deinem Hof in Rente (0,1 %). A Friendly Neighbour: Die Notfall-Futterlieferung vom Ladenbesitzer bekommen (15,1 %). Retriever of Lost Items: Alle verlorenen Gegenstände finden (2,8 %). Empty Nest: Kein eigenes Pferd auf deinem Hof haben (5,7 %).'],
        ['Beeinflussen Einstellungen die Erfolge?', 'Laut Spielern sperrt Auto-Sprung keine Erfolge. Erfolge können gesperrt werden, wenn das Spiel meint, dein Spielstand sei außerhalb des Spiels bearbeitet worden, was manche nach Abstürzen erleben; siehe die Anleitung zu Spielstand-Problemen.']
      ],
      faq: [['Wie viele Erfolge hat Horses of Hoofprint Bay?', '47 Steam-Erfolge, davon 9 versteckte.'], ['Welche Erfolge sind am schwersten?', 'Pro Trainer, Huge Competition Successes, Direct Descendant, All the Quirks in the World und Mission Complete lagen am 7. November 2026 bei 0,0 %.'], ['Sperrt Auto-Sprung die Erfolge?', 'Nein, laut Spielern.'], ['Wie bekomme ich den Erfolg Oops!?', 'Lass einen Hengst eine Pensionsstute decken. Das kostet aber eine Strafe und Prestige.']],
      unknown: 'Die weltweiten Freischaltquoten ändern sich; die Werte geben den Stand vom 7. November 2026 wieder. Aufgabenlisten und Fundorte verlorener Gegenstände müssen im Spiel geprüft werden.'
    },
    '/horses/traits-and-quirks/': {
      title: 'Eigenschaften & Eigenheiten',
      description: 'Alle 14 Eigenschaften und Eigenheiten der Pferde, was sie bewirken, welche sich ausschließen und wie du versteckte aufdeckst.',
      answer: 'Pferde in Horses of Hoofprint Bay können 14 Eigenschaften und Eigenheiten haben: Easy Keeper, Hard Keeper, Snacky, Cuddly, Neat Freak, Mud Lover, Sure Footed, Injury Prone, Good Mom, Good Inheritance, Bad Inheritance, Rebellious, Energetic und Chill. Gekaufte Pferde haben 1–3 davon. Versteckte deckst du auf, indem du den Tierarzt rufst und „Test Traits and Quirks“ wählst; laut einem Fan-Guide kostet das 200 Münzen.',
      sections: [
        ['Fütterung und Pflege', 'Easy Keeper (leichtfuttrig) braucht weniger Kraftfutter, Hard Keeper (schwerfuttrig) mehr; ein Guide misst etwa 10 Punkte Körperzustand pro Tag. Neat Freak wird seltener schmutzig, Mud Lover häufiger. Snacky gewinnt mehr Selbstvertrauen durch Leckerlis, Cuddly mehr durch Kraulen an der Lieblingsstelle.'],
        ['Gesundheit', 'Sure Footed (trittsicher) verletzt sich seltener, Injury Prone (verletzungsanfällig) häufiger, sogar bei geschlossenen Koppeln. Walkthrough Forge nennt bei offenen Koppeln eine tägliche Verletzungschance von etwa 10 % für normale Pferde, 3 % für Sure Footed (nur Schürfwunden) und 20 % für Injury Prone.'],
        ['Zucht-Eigenschaften', 'Good Mom (nur Stuten) gibt ihren Fohlen bessere Startwerte bei Selbstvertrauen, Kraft und Ausdauer; das sind aktuelle Werte, nicht das Potenzial. Good Inheritance erhöht das Potenzial eines Fohlens, Bad Inheritance senkt es; Walkthrough Forge nennt 2 Punkte und sagt, dass Bad Inheritance nie bei Wallachen vorkommt.'],
        ['Temperament beim Reiten', 'Rebellious-Pferde wechseln selbst bei vollem Selbstvertrauen eigenständig die Gangart. Energetic-Pferde tun das auch, wollen immer schneller werden und brauchen mehr Bewegung, um nicht explosiv zu werden. Chill-Pferde bremsen von selbst ab und brauchen weniger Bewegung. Ein Pferd hat höchstens eine dieser drei Eigenschaften.'],
        ['Gegensätze und Vererbung', 'Manche Eigenschaften schließen sich aus: Easy und Hard Keeper, Neat Freak und Mud Lover, Sure Footed und Injury Prone, Good und Bad Inheritance. Laut Community-Wiki kommen vererbbare Eigenschaften von Mutter oder Vater, und von einem Gegensatzpaar wird nur eine weitergegeben. Welche Eigenschaften genau vererbbar sind, unterscheidet sich je nach Quelle; das Buch „Traits and Quirks“ im Spiel ist maßgeblich.'],
        ['Eigenschaften aufdecken', 'Manche Eigenschaften siehst du schon beim Kauf unter Horse Info in der Pferdeakte. Der Tierarzttest deckt die testbaren auf, laut Walkthrough Forge Easy und Hard Keeper, Sure Footed und Injury Prone sowie Good und Bad Inheritance. Andere zeigen sich im Spiel: Snacky beim Füttern von Leckerlis, Cuddly beim Kraulen, Neat Freak oder Mud Lover nach einigen Tagen auf dem Hof, Good Mom, wenn ihr Fohlen Jährling wird, Good oder Bad Inheritance, wenn ein Fohlen über oder unter dem erwarteten Potenzial geboren wird, Energetic oder Chill nach einem Ritt über 30 Sekunden und Rebellious nach einem Ritt über 30 Sekunden mit vollem Selbstvertrauen. Wer alle entdeckt, bekommt den Erfolg All the Quirks in the World.']
      ],
      faq: [['Wie viele Eigenschaften gibt es?', '14 Eigenschaften und Eigenheiten.'], ['Wie sehe ich versteckte Eigenschaften?', 'Ruf den Tierarzt und wähle „Test Traits and Quirks“ (laut einem Guide etwa 200 Münzen), oder warte, bis sie sich im Spiel zeigen.'], ['Was ist die beste Eigenschaft für eine Zuchtstute?', 'Good Mom und Good Inheritance. Guides raten von Bad Inheritance ab.'], ['Verändern Eigenschaften Kraft oder Ausdauer?', 'Nicht direkt, laut Walkthrough Forge.']],
      unknown: 'Genaue Zahlen (Körperzustand, Verletzungschancen, Potenzialänderung, Tierarztpreis) stammen aus einem Fan-Guide und einem Community-Wiki, nicht vom Studio. Welche Eigenschaften vererbbar sind, muss im Spiel bestätigt werden.'
    },
    '/guides/prestige/': {
      title: 'Prestige-Anleitung',
      description: 'Was Prestige in Horses of Hoofprint Bay freischaltet (Ausritte, Laden-Upgrades, Pensionspferde), wie du es steigerst und wodurch du es verlierst.',
      answer: 'Prestige ist der Ruf deines Hofs. Laut der von der Community gepflegten TMQ Horse Game Database schaltet Prestige bei 10 % die erweiterten Waldausritte frei, bei 30 % die Strandausritte, bei 40 % die Bergausritte und unterwegs Laden-Upgrades. Prestige gewinnst du durch Aufgaben, Gebäudeausbau, Turniersiege und erfolgreiche Pensionsaufenthalte; du verlierst es, wenn du mit schmutzigem Pferd oder ohne passende Kleidung startest, Turniere verlierst, Pensionsaufenthalte schiefgehen oder es Tierschutzprobleme gibt.',
      sections: [
        ['Was Prestige freischaltet', 'Das Community-Wiki nennt: Bei 10 % kannst du die erweiterten Waldausritte kaufen (1.000), bei 30 % die Strandausritte (1.300), bei 40 % die Bergausritte (1.300), bei 60 % das zweite Upgrade des Sattelzeugladens mit frei färbbarem Sattelzeug. Das erste Sattelzeug-Upgrade (zum Beispiel Fliegenohren) und die Kleidungs-Upgrades liegen dazwischen, aber selbst das Wiki ist sich bei den genauen Prozentwerten unsicher. Der Geländewald-Ausritt wird anders freigeschaltet, nämlich durch einen Sieg im Gelände-Turnier der Klasse Novice.'],
        ['Prestige gewinnen', 'Prestige steigt durch abgeschlossene Aufgaben, Gebäudeausbau, verfügbares Geld, Werte und Turnierklasse deines besten Pferdes, Turniersiege und erfolgreiche Pensionsaufenthalte. Die FAQ des Studios nennt außerdem eine Schwierigkeitseinstellung für mehr Prestigegewinn.'],
        ['Prestige verlieren', 'Du verlierst Prestige, wenn du mit schmutzigem Pferd oder ohne passende Kleidung (Helm, Oberteil, Hose, Schuhe) startest, Turniere verlierst oder nicht beendest, Pensionsaufenthalte scheitern, etwa wenn eine Pensionsstute tragend wird, und bei Tierschutzproblemen wie schweren Krankheiten oder beschlagnahmten Pferden.'],
        ['Warum Prestige fürs Einkommen zählt', 'Laut Community-Wiki bestimmt Prestige, wie viele Pensionspferde dir täglich angeboten werden und wie viele Deckanfragen deine Hengste bekommen; außerdem haben die Pferde beim Züchter bei höherem Prestige mehr Potenzial.'],
        ['Laden aktualisiert sich nicht?', 'Ein Spieler berichtet, dass der Laden in einem zweiten Spielstand trotz über 25 % Prestige keine neuen Artikel bekam. Eine Antwort gibt es noch nicht. Vergleiche dein Prestige mit den Stufen oben und sende mit F8 einen Fehlerbericht, wenn neue Artikel nie erscheinen.'],
        ['Prestige-Erfolge', 'Prestigious gibt es bei 50 % Prestige (10,0 % der Spieler haben ihn), Highly Prestigious bei 99 % (0,2 %).']
      ],
      faq: [['Wann werden die Strandausritte freigeschaltet?', 'Bei 30 % Prestige, laut Community-Wiki.'], ['Wann werden die Bergausritte freigeschaltet?', 'Bei 40 % Prestige.'], ['Wie steigere ich Prestige schnell?', 'Gewinne Turniere, erledige Aufgaben, baue Gebäude aus und schließe Pensionsaufenthalte erfolgreich ab. In den Schwierigkeitseinstellungen kannst du den Prestigegewinn erhöhen.'], ['Warum habe ich Prestige verloren?', 'Häufige Gründe sind ein schmutziges Pferd oder unpassende Kleidung im Turnier, verlorene Turniere, ein gescheiterter Pensionsaufenthalt oder Tierschutzprobleme.']],
      unknown: 'Die genauen Prozentwerte für das erste Sattelzeug- und die Kleidungs-Upgrades sind selbst im Community-Wiki unsicher und können sich mit Patches ändern.'
    },
    '/guides/boarders/': {
      title: 'Pensionspferde-Anleitung',
      description: 'Teilpension, Vollpension und Beritt erklärt: Tagessätze, nötige Pflege und wie du Strafen vermeidest.',
      answer: 'Pensionspferde sind Pferde anderer Leute, die du gegen Bezahlung versorgst. Anfragen erscheinen im Ordner „Boarders“ in deinem Büro, und wie viele du bekommst, hängt von deinem Prestige ab. Das Community-Wiki nennt drei Arten: Teilpension (50 pro Tag, nur Heu und Wasser), Vollpension (90 pro Tag, dazu Putzen, Kraftfutter und medizinische Versorgung) und Beritt, bei dem du das Pferd zusätzlich auf ein Ziel trainierst. Bezahlt wird am Ende des Aufenthalts; bei Vernachlässigung gibt es weniger oder nichts.',
      sections: [
        ['Pensionspferde finden', 'Öffne den Ordner „Boarders“ in deinem Büro, um aktuelle Anfragen zu sehen. Laut Community-Wiki hängt die Zahl der täglichen Angebote von deinem Prestige ab, und Pensionspferde belegen Stallplätze wie deine eigenen Pferde.'],
        ['Die drei Pensionsarten', 'Teilpension (Part Board): Stall- und Koppelplatz, Heu, Wasser und Ausmisten, aber kein Putzen, kein Kraftfutter und keine medizinische Versorgung; 50 pro Tag. Vollpension (Full Board): Putzen, Heu und Kraftfutter, medizinische Versorgung; die Besitzer reiten das Pferd im Hintergrund; 90 pro Tag. Beritt (Schooling Board): wie Vollpension, zusätzlich musst du das Pferd auf das geforderte Selbstvertrauen, Kraft und Ausdauer trainieren; dafür gibt es eine einmalige Berittgebühr obendrauf.'],
        ['Bezahlung', 'Bezahlt wird am Ende des Aufenthalts; Vernachlässigung verringert die Zahlung oder streicht sie. Laut Spielern kannst du Berittpferde früher nach Hause schicken, sobald das Trainingsziel erreicht ist, und bekommst dann die Berittgebühr plus Pension für die Tage, die sie da waren. Erfolgreiche Aufenthalte steigern dein Prestige.'],
        ['Strafen vermeiden', 'Füttere Vollpensionspferde bis zur Mitte des grünen Zustandsbalkens, weil ihre Besitzer sie reiten und sie hungrig werden. Halte Hengste aus der Stallgruppe der Pensionspferde fern: Wird eine Pensionsstute tragend, zahlst du 500 Strafe, bekommst keine Gebühr und verlierst Prestige. Das schaltet auch den versteckten Erfolg Oops! frei.'],
        ['Jährlinge in Pension', 'Der Pensionsordner zeigt nur „yearling“ oder „adult“, nicht das genaue Alter. Ein Spieler berichtet, dass ein Pensions-Jährling während des Aufenthalts erwachsen wurde und auf die einzige freie Koppel kam, die Hengstkoppel. Halte in der passenden Gruppe einen Platz frei, bevor du Jährlinge annimmst.'],
        ['Keine Anfragen nach Stallstufe 3?', 'Ein Spieler bekommt seit dem Ausbau auf Stallstufe 3 keine neuen Pensionsanfragen. Eine Antwort gibt es noch nicht. Da die Angebote vom Prestige abhängen, prüfe, ob du kürzlich Prestige verloren hast, und sorge für freie Boxen.']
      ],
      faq: [['Wie viel zahlen Pensionspferde?', 'Laut Community-Wiki 50 pro Tag bei Teilpension und 90 pro Tag bei Vollpension, bezahlt am Ende des Aufenthalts.'], ['Warum sind meine Pensionspferde immer hungrig?', 'Vollpensionspferde werden von ihren Besitzern geritten. Füttere bis zur Mitte des grünen Balkens.'], ['Was passiert, wenn eine Pensionsstute tragend wird?', '500 Strafe, keine Gebühr und Prestigeverlust.'], ['Warum bekomme ich keine Pensionsanfragen?', 'Die Angebote hängen von Prestige und freiem Platz ab. Ein Spieler meldet keine Anfragen nach Stallstufe 3, möglicherweise ein Fehler.']],
      unknown: 'Die Gebühren stammen aus dem Community-Wiki. Die Berittgebühr und die Regeln für tägliche Anfragen müssen im Spiel geprüft werden.'
    },
    '/horses/import-and-export/': {
      title: 'Pferde importieren & exportieren',
      description: 'Pferde über den Fährhafen in der Stadt zwischen Spielständen verschieben, was du dafür bekommst und was hilft, wenn der Export hängt.',
      answer: 'Am Fährhafen in der Stadt kannst du ein Pferd aus einem Spielstand exportieren und in einen anderen importieren. Laut Spielern bekommst du beim Export denselben Preis wie beim Verkauf, und das Pferd lässt sich in einem anderen Spielstand wieder importieren. Manche berichten, dass der Exportbildschirm nach der Pferdeauswahl hängt; starte dann das Spiel neu und melde es mit F8.',
      sections: [
        ['Wo du exportierst', 'Geh in die Stadt, öffne den Hafen (die Fähre), klicke auf Exportieren und wähle ein Pferd aus deiner Liste. Laut Community-Wiki ist der Hafen der Ort, um Pferde zu und von anderen Spielständen zu exportieren und importieren.'],
        ['Was mit dem Pferd passiert', 'Das Pferd verlässt deinen Hof, und laut Spielern bekommst du denselben Preis wie bei einem normalen Verkauf. Danach kannst du es in einem anderen Spielstand importieren, etwa um ein neues Spiel mit deinem besten Pferd zu beginnen.'],
        ['Wenn der Exportbildschirm hängt', 'Ein Spieler berichtet, dass nach der Auswahl eines Pferdes der Hintergrund dunkler wurde, nichts mehr anklickbar war und das Pferd nicht gespeichert wurde. Eine Lösung gibt es noch nicht. Beende das Spiel, starte es neu, sende mit F8 einen Fehlerbericht und sichere deine Spielstände.'],
        ['Ein Lieblingspferd behalten', 'Einen Gnadenhof auf deinem eigenen Gelände gibt es nicht; Pferde im Ruhestand ziehen auf den Gnadenhof, was für den Erfolg A Forever Home zählt. Manche exportieren Lieblingspferde stattdessen als Erinnerung oder kaufen sie in einem anderen Spielstand zurück.']
      ],
      faq: [['Kann ich Pferde zwischen Spielständen verschieben?', 'Ja, über den Fährhafen in der Stadt.'], ['Bekomme ich Geld für den Export?', 'Laut Spielern denselben Preis wie beim Verkauf.'], ['Der Exportbildschirm hängt. Was tun?', 'Das ist ein gemeldeter Fehler. Starte das Spiel neu und sende einen Bericht mit F8.']],
      unknown: 'Die genauen Importschritte, Dateipfade und ob importierte Pferde alle Eigenschaften behalten, müssen im Spiel geprüft werden.'
    }
  }
};
