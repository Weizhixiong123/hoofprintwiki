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
  "title": "Einsteiger-Anleitung: die ersten Tage",
"seoTitle": "Horses of Hoofprint Bay: Einsteiger: Erste Tage und Tipps | Wiki",
  "description": "Starte mit Pferdepflege, Caprilli-Vorbereitung und einem Ausgabenplan. Nutze die aktuellen Schwierigkeits- und Geldeinstellungen.",
  "answer": "Versorge zuerst deine Stute, lies die aktiven Ziele und trainiere für eine passende Prüfung. Nach der Anpassung der Startwerte ist Caprilli der frühe Turniereinstieg. Baue Einnahmen auf, bevor du mehr Pferde hältst. Die folgende Routine ist ein Planungsvorschlag; Aufgaben und Preise deines Spielstands haben Vorrang.",
  "sections": [
    [
      "Eine tägliche Routine",
      [
        {
          "type": "steps",
          "items": [
            "Prüfe den Zustand deines Pferdes. Füttere, tränke, putze und kratze die Hufe nach Bedarf aus. Die [Pflege-Anleitung](/guides/horse-care/) erklärt die Hilfsmittel.",
            "Lies die Ziele vor einem Kauf. Wähle eine Aufgabe, die du mit deinem Pferd und den vorhandenen Anlagen erfüllen kannst.",
            "Prüfe verfügbare Trainings. Sind alle gesperrt, nutze die [Checkliste für müde oder kranke Pferde](/training/horse-too-tired-to-train/).",
            "Behalte Geld für die angezeigten täglichen Kosten. Prüfe am nächsten Tag Futter, Gesundheit, Training und Einnahmen."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-3.jpg",
          "alt": "Ziele-Fenster auf dem Hof mit Aufgabe und Geldbelohnung",
          "caption": "Prüfe hier Bedingungen und Belohnungen. Der offizielle Werbe-Screenshot zeigt die Oberfläche, keine verbindliche Aufgabenreihenfolge.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Kaufe für den aktuellen Engpass",
      [
        {
          "type": "table",
          "caption": "Frühe Ausgaben planen",
          "headers": [
            "Problem",
            "Zuerst prüfen",
            "Anleitung"
          ],
          "rows": [
            [
              "Kein Training möglich",
              "Parcours und Pferdezustand",
              "[Training](/guides/training/)"
            ],
            [
              "Kosten übersteigen Einnahmen",
              "Tragbare Einnahmequelle und Geldeinstellungen",
              "[Geld verdienen](/guides/money-making/)"
            ],
            [
              "Besseres Turnierpferd nötig",
              "Potenzial, Prestige und Preis",
              "[Pferdekauf](/guides/buy-sell-horses/)"
            ],
            [
              "Keine freie Box",
              "Erwachsenen- und Jährlingsplätze getrennt",
              "[Kapazitäten](/guides/maximum-horses/)"
            ],
            [
              "Pflege dauert zu lange",
              "Personalrollen, Löhne und Zuweisungen",
              "[Personal](/guides/staff/)"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Ein Ausbau für eine sofort nutzbare Funktion lässt sich leichter begründen als leere Boxen. Vergleiche Kaufpreis und laufende Kosten zusammen. Diese Checkliste ist keine getestete optimale Baureihenfolge."
        }
      ]
    ],
    [
      "Mit Caprilli beginnen",
      [
        {
          "type": "paragraph",
          "text": "Laut Mai-Entwicklungsbericht wurden die Startwerte gesenkt. Selbst vollständig trainierte Startpferde erreichten dadurch das erste Springturnier nicht mehr; deshalb kamen Caprilli-Prüfungen hinzu. Die Oktober-Demo bestätigt den Einstieg mit niedrigeren Werten. Tipps aus der Februar-Demo können daher auf zu schwierige Prüfungen verweisen.",
          "source": "devMay"
        },
        {
          "type": "paragraph",
          "text": "Übe Gangwechsel und niedrige Hindernisse und lies die Teilnahmebedingungen. Nutze [Turniere](/guides/competitions/) und [Steuerung](/guides/controls/). Wiederholte Meldungen ersetzen nicht die Prüfung des Potenzials."
        }
      ]
    ],
    [
      "Schwierigkeit, Geld und Spielstände",
      [
        {
          "type": "paragraph",
          "text": "Die offizielle FAQ nennt leichtere Turniere, mehr Prestigegewinn und Auto-Sprung. Seit v1.0.3 gibt es getrennte Einnahmen- und Kostenmultiplikatoren; Pferdepreise sind ausgenommen. Passe den schwierigen Teil an, bevor du neu anfängst.",
          "source": "faq"
        },
        {
          "type": "note",
          "title": "Aktuelle Erfolgsregeln",
          "text": "Seit v1.0.5 können bearbeitete und früher markierte Spielstände wieder Erfolge erhalten. Übersprungene Bedingungen musst du erneut erfüllen. Siehe [Spielstände und Erfolge](/guides/save-files-and-achievements/).",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Spielstände der Oktober-Demo werden übernommen, die der Februar-Demo nicht. Die Demo endet nach 25 Spieltagen; die Vollversion hat kein allgemeines Tageslimit. Pferdealter wird in Spieltagen angegeben, nicht in Jahren.",
          "source": "demoOctober"
        }
      ]
    ],
    [
      "Vor dem zweiten Pferd",
      [
        {
          "type": "steps",
          "items": [
            "Bestimme den Zweck: Turnier, Zucht oder Weiterverkauf. Vergleiche dafür Potenzial und Eigenschaften.",
            "Prüfe freie Boxen und [Stallgruppen](/guides/stable-groups/). Trenne Hengste von Stuten, die nicht gedeckt werden sollen, auch Pensionsstuten.",
            "Vergleiche Pflegeaufwand und Einnahmen. Halte nur so viele Pferde, wie du zuverlässig versorgen kannst."
          ]
        },
        {
          "type": "paragraph",
          "text": "Für eigenes Sattelzeug oder Hilfe gibt es [Mods](/guides/mods/) und die [offiziellen Discord-Einstiege](/community/discord/). Beides ist für den Spielstart nicht erforderlich."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Was mache ich zuerst?",
      "Versorge die Startstute, lies die Ziele und wähle ein erreichbares Training. Behalte Geld für laufende Kosten."
    ],
    [
      "Warum reicht mein austrainiertes Startpferd nicht fürs Springen?",
      "Die Startwerte wurden gesenkt und Caprilli als frühere Stufe eingeführt. Vergleiche Bedingungen und Potenzial."
    ],
    [
      "Kann ich das Spiel erleichtern?",
      "Ja. Die FAQ nennt Turnierschwierigkeit, Prestige und Auto-Sprung; v1.0.3 ergänzt Geldmultiplikatoren."
    ],
    [
      "Wird mein Demo-Spielstand übernommen?",
      "Der Oktober-Demo ja, der Februar-Demo nicht."
    ],
    [
      "Ist das ein getesteter Tages-Walkthrough?",
      "Nein. Offizielle Mechaniken werden mit einer redaktionellen Routine verbunden, ohne eine optimale Aufgabenfolge zu versprechen."
    ]
  ],
  "unknown": "Genaue Startaufgaben und eine optimale Ausgabenfolge wurden hier nicht getestet. Nutze Ziele, Preise und Anforderungen des aktuellen Spiels."
},
    '/guides/buy-sell-horses/': {
  "title": "Pferde kaufen und verkaufen: Züchter-Anleitung",
"seoTitle": "Horses of Hoofprint Bay: Pferde kaufen und verkaufen | Wiki",
  "description": "Finde den Züchter, vergleiche Preis und Potenzial und plane Stallplätze für Kauf, Training, Zucht oder Verkauf.",
  "answer": "Wähle beim Züchter in der Stadt ein Pferd, vergleiche Alter, Training und Potenzial und lies den Preis vor Buy Horse. Höheres Prestige verbessert das Angebot. Prüfe eine freie Box, laufende Kosten und den Zweck des Pferdes vor der Bestätigung.",
  "sections": [
    [
      "So kaufst du ein Pferd",
      [
        {
          "type": "steps",
          "items": [
            "Besuche den Züchter in der Stadt, sobald dein Spielstand Zugang bietet. Prüfe während der Einführung zuerst die aktiven Ziele.",
            "Wähle ein angebotenes Pferd. Vergleiche Informationen und Preis mit einem weiteren Kandidaten.",
            "Kaufe für den Zweck: Potenzial für spätere Turniere oder Zucht, Training für sofortige Arbeit, Alter und Gesundheit für den Pflegeaufwand.",
            "Prüfe [Stallplätze](/guides/maximum-horses/) und Geldreserve. Bestätige Buy Horse erst nach Kontrolle von Pferd und Preis."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-9.jpg",
          "alt": "Pferdehändler mit Porträts, Alter, Wertebalken, Preis und Buy-Horse-Schaltfläche",
          "caption": "Vergleiche das gewählte Pferd vor dem Kauf. Namen und Preise im offiziellen Werbebild sind Beispiele, kein aktueller Markt.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Erst das Pferd, dann den Preis prüfen",
      [
        {
          "type": "table",
          "caption": "Kaufkriterien nach Ziel",
          "headers": [
            "Ziel",
            "Vergleichen",
            "Häufiger Fehler"
          ],
          "rows": [
            [
              "Bald Turniere reiten",
              "Training, Potenzial, Alter und Bedingungen",
              "Billiges Pferd kann trotzdem nicht starten"
            ],
            [
              "Züchten",
              "Potenzial, sichtbare Eigenschaften, Paarung",
              "Training mit Vererbung gleichsetzen"
            ],
            [
              "Trainieren und verkaufen",
              "Kaufpreis, Trainingsraum und Unterhalt",
              "Erlös für garantierten Gewinn halten"
            ],
            [
              "Lieblingspferd behalten",
              "Platz, Zeit und langfristige Kosten",
              "Das ganze Guthaben ausgeben"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Spieler unterscheiden Potenzial und Training und berichten, dass der Tierarzt Potenzial prüfen kann. Für die Zucht empfehlen sie Potenzial statt zwingend vollständig trainierter Eltern. Siehe [Zuchtpotenzial](/horses/breeding-potential/).",
          "source": "t_breedingStats"
        }
      ]
    ],
    [
      "Warum der Züchter nur schwache Pferde anbietet",
      [
        {
          "type": "paragraph",
          "text": "Der August-Bericht verbindet Prestige mit der Qualität der angebotenen Pferde. Gebäudeausbau, Turniersiege, gute Pensionspflege und hochwertige Pferde bringen Prestige; Niederlagen und Vernachlässigung können es verringern.",
          "source": "devAugust"
        },
        {
          "type": "paragraph",
          "text": "Verbessere [Prestige](/guides/prestige/) und prüfe spätere Angebote, wenn aktuell kein Pferd passt. Ein fester Angebotswechsel ist hier nicht bestätigt. Ein ungeeignetes Pferd nur für eine freie Box zu kaufen erhöht die Kosten ohne den Engpass zu lösen."
        }
      ]
    ],
    [
      "Plätze, Transport und Gruppen trennen",
      [
        {
          "type": "paragraph",
          "text": "Dauerhafte Stallplätze, Jährlingsplätze und Transportplätze sind verschiedene Grenzen. Im Mai nannte das Studio 20 Pferde im voll ausgebauten Stall plus 13 Jährlinge und zusätzliche bezahlte Pension beim Züchter. Quellenstand und Checkliste: [Maximale Pferdezahl](/guides/maximum-horses/).",
          "source": "devMay"
        },
        {
          "type": "paragraph",
          "text": "Nutze für mehrere Pferde die [Anhänger-Anleitung](/competitions/trailer-and-multiple-horses/). Bereite vor einem Hengstkauf eine getrennte Gruppe vor: Spieler melden ungewollte Trächtigkeit ohne Zuchtstation.",
          "source": "t_pregnant"
        }
      ]
    ],
    [
      "Verkauf und Pferdehandel",
      [
        {
          "type": "paragraph",
          "text": "Spieler beschreiben den Kauf wenig trainierter Pferde, einige Trainingstage und anschließenden Verkauf als Einnahmequelle. Ziehe Kaufpreis und Unterhalt vom Erlös ab. Eine geprüfte Rangliste nach Tagesgewinn gibt es hier nicht.",
          "source": "t_coins"
        },
        {
          "type": "note",
          "title": "Pferdepreise und Geldmultiplikatoren",
          "text": "Die Ankündigung zu v1.0.3–v1.0.5 nimmt Pferdepreise von den Geldeinstellungen aus. Diese multiplizieren Kauf- und Verkaufspreise nicht direkt.",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Prüfe vor dem Verkauf Zucht- und Turnierpläne sowie den aktuellen Bestätigungsbildschirm. [Fährenexport](/horses/import-and-export/) verschiebt Pferde zwischen Spielständen und ist ein anderer Vorgang. Ein garantierter Rückkauf ist nicht geprüft. Für Unterhalt siehe [Geld verdienen](/guides/money-making/)."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wo kaufe ich Pferde?",
      "Beim Züchter in der Stadt, sobald verfügbar. Der offizielle Screenshot zeigt die Auswahl und Buy Horse."
    ],
    [
      "Warum sind angebotene Pferde schwach?",
      "Laut Studio beeinflusst Prestige die Qualität. Verbessere es und prüfe spätere Angebote."
    ],
    [
      "Ist billig automatisch gut?",
      "Nein. Vergleiche Alter, Gesundheit, Training und Potenzial mit dem Zweck."
    ],
    [
      "Ändern Geldeinstellungen Pferdepreise?",
      "Nein. Die offizielle Ankündigung nimmt sie aus."
    ],
    [
      "Ist Weiterverkauf garantierter Gewinn?",
      "Nein. Es ist eine Spielerstrategie; Kaufpreis und Unterhalt bleiben relevant."
    ]
  ],
  "unknown": "Angebotswechsel, Reservierung, vollständige Verkaufsschritte und Rückkaufregeln sind nicht geprüft. Eine Preisformel wird nicht behauptet."
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
      faq: [['Wirkt sich Putzen auf das Spiel aus?', 'Ja. Der Store verbindet die Pflegewerkzeuge ausdrücklich mit der Vermeidung bestimmter Gesundheitsprobleme.'], ['Was passiert, wenn ich meine Pferde vernachlässige?', 'Laut FAQ des Studios kann der Tierschutz vernachlässigte Pferde mitnehmen. Ein beschlagnahmtes Pferd ist damit praktisch aus dem Spiel.'], ['Wo kaufe ich mehr Heu und Futter?', 'Eine Antwort aus der Community unter der offiziellen FAQ: Geh von der Hofkarte in die Stadt, betritt den Laden (das Gebäude rechts mit dem Sattelschild) und klicke auf Heu und Futter hinter dem Verkäufer. Das ist eine Community-Antwort, keine Dokumentation des Studios.'], ['Was ist die richtige Behandlung für jede Verletzung?', 'Eine vollständige, geprüfte Behandlungstabelle gibt es hier noch nicht. Nutze die medizinischen Informationen im Spiel.'], ['Kann Personal bei der Pflege helfen?', 'Laut offiziellem Store hilft Personal bei Pflege und Training; eine vollständige Aufgabenliste wurde nicht veröffentlicht.'], ['Welche Krankheiten gibt es in Horses of Hoofprint Bay?', 'Laut Community-Wiki Schnitt- und Schürfwunden (beide können sich entzünden), Lahmheit, Satteldruck, Sehnenverletzungen, „schmutzig und krank“, Unterernährung, Hufrehe sowie Strahlfäule mit Hufabszess.'], ['Zwei Bürsten hängen an meiner Maus. Ist das ein Fehler?', 'Ja. v1.0.2 hat das gleichzeitige Auswählen zweier ziehbarer Gegenstände behoben; aktualisiere das Spiel.']],
      unknown: 'Pflegeschwellen, Verletzungswahrscheinlichkeiten, Behandlungskosten, Heilungsdauer und die genaue Grenze, ab der der Tierschutz eingreift, müssen im Spiel geprüft werden.'
    },
    '/guides/breeding/': {
  "title": "Zucht-Anleitung: Paarung, Trächtigkeit und Fohlen",
"seoTitle": "Horses of Hoofprint Bay: Zucht: Trächtigkeit und Fohlen | Wiki",
  "description": "Vergleiche Zuchtpotenzial, verhindere ungewollte Trächtigkeit und plane Plätze für die achttägige Trächtigkeit und das Fohlen.",
  "answer": "Plane die Paarung nach Aussehen, Eigenschaften oder Potenzial und bereite Plätze vor dem Decken vor. Der Publisher bestätigt acht Spieltage Trächtigkeit und vier Tage vom Fohlen zum Jährling. Das Labor zeigt mögliche Fohlen, garantiert aber keine Auswahl. Trenne Hengste von Stuten, die nicht tragend werden sollen.",
  "sections": [
    [
      "Vor dem Decken",
      [
        {
          "type": "steps",
          "items": [
            "Lege ein Hauptziel fest: Fell, Charakter oder Leistung. Vergleiche beide Eltern damit.",
            "Prüfe Potenzial und sichtbare Eigenschaften. Spieler nennen Potenzial statt Training als relevant; siehe [Potenzial und Geschlecht](/horses/breeding-potential/).",
            "Plane Pflege, Jährlingsplatz und spätere Erwachsenenbox mit der [Kapazitätscheckliste](/guides/maximum-horses/).",
            "Lies Deckoption, Bedingungen und Gebühr im Spiel. Notiere Eltern und den angezeigten Termin."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-5.jpg",
          "alt": "Stute und Fohlen am Putzplatz mit Pflege- und Fütterungswerkzeugen",
          "caption": "Plane die Versorgung beider Tiere. Das offizielle Bild zeigt ein säugendes Paar, keine Vererbungswahrscheinlichkeit.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Funktionen der Zuchtstationsstufen",
      [
        {
          "type": "table",
          "caption": "Zuchtstation",
          "headers": [
            "Stufe",
            "Funktion",
            "Quellenumfang"
          ],
          "rows": [
            [
              "1",
              "Natursprung",
              "Community-Gebäudedokumentation"
            ],
            [
              "2",
              "Frischsamen und Fohlensimulator",
              "Community; Labor auch von Steam bestätigt"
            ],
            [
              "3",
              "Samen einfrieren",
              "Community-Gebäudedokumentation"
            ]
          ],
          "source": "tmqdb"
        },
        {
          "type": "paragraph",
          "text": "Vergleiche ältere Grundkosten unter [Gebäude](/buildings/) mit dem aktuellen Bildschirm. Seit v1.0.3 können Geldeinstellungen Kosten verändern. Die Vorschau zeigt Möglichkeiten; eine garantierte Auswahl oder geprüfte Wahrscheinlichkeitsverteilung wird hier nicht angegeben."
        }
      ]
    ],
    [
      "Trächtigkeit und nächster Platzwechsel",
      [
        {
          "type": "table",
          "caption": "Zeitplan in Spieltagen",
          "headers": [
            "Phase",
            "Zeit",
            "Vorbereitung"
          ],
          "rows": [
            [
              "Trächtigkeit",
              "8 Tage; Publisher-Bestätigung",
              "Pflege und aktuelle Arbeitsbeschränkungen"
            ],
            [
              "Fohlen bei der Mutter",
              "Erste 4 Tage; Publisher-Bestätigung",
              "Tägliche Pflege und Platz für beide"
            ],
            [
              "Jährling",
              "Ab etwa Alter 4 bis erwachsen um Alter 12; Spielerberichte",
              "Paddock, danach Erwachsenenbox"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Gemeint sind Spieltage, keine echten Tage oder Jahre. [Fohlen und Jährlinge](/horses/foals-and-yearlings/) erklärt Quellen und Platzprobleme.",
          "source": "releaseFaq"
        },
        {
          "type": "paragraph",
          "text": "v1.0.2 senkt den Werteverlust bei niedrigen Werten nach dem Abfohlen auf höchstens ein Zehntel Ausdauer und maximal 5 Punkte. Der Verlust entfällt nicht. Der August-Bericht beschreibt außerdem Spaziergänge mit säugenden Stuten und Fohlen.",
          "source": "patch102"
        }
      ]
    ],
    [
      "Potenzial, Training und Fell unterscheiden",
      [
        {
          "type": "paragraph",
          "text": "Steam bestätigt vererbte Farben, weiße Muster und Eigenschaften. Laut Studio nutzt das Spiel keine realistische Farbgenetik; echte Genotypentabellen sagen diese Fohlen daher nicht zuverlässig voraus.",
          "source": "t_genotype"
        },
        {
          "type": "paragraph",
          "text": "Spieler berichten, dass Eltern nicht austrainiert sein müssen, wenn ihr Potenzial bekannt ist. Trainingsverlust bei wiederholter Trächtigkeit bedeutet nicht automatisch Potenzialverlust. Vergleiche [Fellmuster](/horses/colors-and-patterns/) und [Eigenschaften](/horses/traits-and-quirks/).",
          "source": "t_breedingStats"
        },
        {
          "type": "note",
          "title": "Kein garantiert perfektes Fohlen",
          "text": "Hier werden keine bestätigte Zahlenformel, Empfängnisraten oder Methode zur Geschlechtswahl behauptet. Notiere Eltern, Version und Ergebnisse für eigene Vergleiche."
        }
      ]
    ],
    [
      "Ungewollte Trächtigkeit verhindern",
      [
        {
          "type": "paragraph",
          "text": "Spieler melden Deckakte in derselben Gruppe ohne Zuchtstation. Auch Pensionsstuten können betroffen sein, mit Strafe und Prestigeverlust. Trennung oder Kastration sind die berichteten Gegenmaßnahmen.",
          "source": "t_pregnant"
        },
        {
          "type": "steps",
          "items": [
            "Halte Hengste in getrennten [Stallgruppen](/guides/stable-groups/).",
            "Lass Platz in der passenden Erwachsenengruppe, bevor ein Pensionsjährling erwachsen wird.",
            "Prüfe Gruppen nach Wachstum oder Rückkehr von einem anderen Ort."
          ]
        },
        {
          "type": "paragraph",
          "text": "Vergleiche Pflegeaufwand und Wartezeit bis zum Verkauf mit [anderen Einnahmen](/guides/money-making/), bevor du mehrere Stuten deckst."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wie lange dauert Trächtigkeit?",
      "Acht Spieltage laut Publisher. Das Alter zählt Spieltage, keine Jahre."
    ],
    [
      "Wann wird ein Fohlen Jährling?",
      "Vier Tage nach Geburt laut Publisher; Spieler nennen Erwachsenenalter um Tag 12."
    ],
    [
      "Müssen Eltern austrainiert sein?",
      "Laut Spielern zählt Potenzial statt aktuellem Training; der Tierarzt kann es prüfen."
    ],
    [
      "Garantiert das Labor ein Fohlen?",
      "Eine garantierte Auswahl ist nicht geprüft. Steam bestätigt die Vorschau möglicher Fohlen."
    ],
    [
      "Warum wurde eine Pensionsstute tragend?",
      "Spieler melden Deckakte in gemeinsamen Gruppen ohne Zuchtstation. Trenne Hengste und Pensionsstuten."
    ]
  ],
  "unknown": "Aktuelle Deckbedingungen, Gebühren und Empfängnisraten müssen im Spiel geprüft werden. Potenzial und Erwachsenenalter enthalten Spielerberichte; Trächtigkeit und vier Fohlentage sind vom Publisher bestätigt."
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
  "title": "Turnier-Anleitung: Caprilli, Springen und Gelände",
"seoTitle": "Horses of Hoofprint Bay: Turniere: Caprilli und Springen | Wiki",
  "description": "Bereite Caprilli, Springen und Gelände vor, plane den Anhänger und prüfe Teilnahmeprobleme und Sprungtiming.",
  "answer": "Wähle eine passende Prüfung, bereite Zustand und Ausrüstung vor und plane den Transport. Caprilli wurde für die angepassten Startpferde ergänzt; Gelände richtet sich an stärkere Pferde im späteren Spiel. Aktualisiere bei Teilnahmeproblemen: v1.0.4 nennt dafür eine Korrektur.",
  "sections": [
    [
      "Die passende Disziplin wählen",
      [
        {
          "type": "table",
          "caption": "Drei Turnierdisziplinen",
          "headers": [
            "Disziplin",
            "Üben",
            "Einordnung"
          ],
          "rows": [
            [
              "Caprilli",
              "Gangwechsel und niedrige Hindernisse",
              "Früher Einstieg nach Senkung der Startwerte"
            ],
            [
              "Springen",
              "Anreiten, Tempo und Timing",
              "Bedingungen mit Training und Potenzial vergleichen"
            ],
            [
              "Gelände",
              "Krafteinteilung und Kombinationen",
              "Vom Studio als spätere Herausforderung beschrieben"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Der Mai-Bericht erklärt Caprilli, der August-Bericht Gelände. Ein sichtbarer Parcours bedeutet nicht, dass das aktuelle Pferd qualifiziert ist. Prüfe das Meldefenster vor einer Zahlung oder neuen Zuchtplanung.",
          "source": "devMay"
        },
        {
          "type": "image",
          "src": "/assets/scene-1.jpg",
          "alt": "Pferd und Reiterin beim Sprung mit Runden-, Gang- und Zustandsanzeigen",
          "caption": "Der Turnierbildschirm zeigt Runde und Pferdeanzeigen. Lies Anforderungen im aktuellen Spiel; das Werbebild ist keine Grenzwerttabelle.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Vor der Fahrt in die Stadt",
      [
        {
          "type": "steps",
          "items": [
            "Vergleiche Anforderungen mit Training, Potenzial und Zustand. Wähle gegebenenfalls eine andere Prüfung oder [ein geeigneteres Pferd](/guides/buy-sell-horses/).",
            "Putze das Pferd und prüfe Sattelzeug und Kleidung. Schmutzige Pferde und ungeeignete Kleidung können Prestige kosten.",
            "Lade das richtige Pferd nach der [Anhänger-Anleitung](/competitions/trailer-and-multiple-horses/). Transport und Qualifikation sind getrennt.",
            "Behalte Geld für die angezeigte Gebühr. Kontrolliere Pferd und Prüfung vor Bestätigung."
          ]
        },
        {
          "type": "paragraph",
          "text": "Dies ist eine Vorbereitungsliste, keine universelle Regelübersicht. Aktuelle Gebühren und Grenzen stehen im Spiel.",
          "source": "devAugust"
        }
      ]
    ],
    [
      "Caprilli-Gangwechsel und Sprungtiming",
      [
        {
          "type": "paragraph",
          "text": "Spieler empfehlen auf Steam den Gangwechsel an der Grenze zwischen Anweisungsfeldern, mit der Reiterposition als Orientierung. Das ist ein Spielertipp, keine offizielle Wertungsformel. Übe auf einer bekannten Strecke.",
          "source": "t_caprilli"
        },
        {
          "type": "paragraph",
          "text": "Nutze [Sprungtipps](/training/jumping-tips/), [Selbstvertrauen](/training/confidence/) bei selbstständigen Gangwechseln und [Steuerung](/guides/controls/) für andere Tasten. Ändere pro Übungsrunde möglichst nur einen Faktor."
        },
        {
          "type": "paragraph",
          "text": "Die FAQ empfiehlt Auto-Sprung und leichtere Turniere. v1.0.3 korrigiert außerdem Auto-Sprung an der Ziegelmauer und das gruselige Dünenhindernis.",
          "source": "faq"
        }
      ]
    ],
    [
      "Wege im Gelände wählen",
      [
        {
          "type": "paragraph",
          "text": "Der August-Bericht beschreibt auf manchen Strecken einen kürzeren Weg mit schwereren Hindernissen oder einen längeren mit leichteren Sprüngen. Entscheide nach verbleibender Kraft. Maria gibt bei Trainingsfehlern Rückmeldung.",
          "source": "devAugust"
        },
        {
          "type": "paragraph",
          "text": "Lerne die Folge im Training, bevor du den kürzesten Weg für den besten hältst. Sauberes Anreiten kann hilfreicher sein als mehr Tempo, wenn Verweigerungen das eigentliche Problem sind."
        }
      ]
    ],
    [
      "Keine Teilnahme oder Prestigeverlust?",
      [
        {
          "type": "paragraph",
          "text": "Installiere v1.0.5 oder neuer: v1.0.4 nennt eine Korrektur verhinderter Teilnahme. Die [Checkliste](/competitions/cannot-enter/) trennt Transport, Anforderungsmeldung und eine nicht reagierende Schaltfläche.",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Siege bringen Prestige; Niederlagen, Schmutz und ungeeignete Kleidung können es senken. Siehe [Prestige](/guides/prestige/) bei schwachen Züchterangeboten. Preisgeld ist ein Teil der [Einnahmen](/guides/money-making/), kein garantierter Gewinn jeder Meldung.",
          "source": "devAugust"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Womit beginne ich?",
      "Caprilli kam als frühere Stufe nach der Anpassung der Startwerte. Lies aktuelle Bedingungen."
    ],
    [
      "Warum kann ich nicht teilnehmen?",
      "Aktualisiere zuerst; v1.0.4 nennt eine Korrektur. Prüfe dann Pferd, Transport, Zustand und Meldung."
    ],
    [
      "Darf ich Auto-Sprung nutzen?",
      "Ja. Die offizielle FAQ empfiehlt die Einstellung."
    ],
    [
      "Ist der kürzeste Geländeweg am besten?",
      "Das Studio beschreibt kürzere schwere und längere leichtere Wege, abhängig von verbleibender Kraft."
    ],
    [
      "Brauche ich ein anderes Springpferd?",
      "Möglicherweise. Laut Studio erreichte das angepasste Startpferd selbst austrainiert nicht mehr das erste Springturnier."
    ]
  ],
  "unknown": "Aktuelle Gebühren, Werteanforderungen, Wertungsgewichte und Preisgelder sind hier nicht vollständig geprüft. Forumstipps bleiben Spielerberichte."
},
    '/buildings/': {
  "title": "Gebäude & Ausbau",
  "description": "Mehr Platz für Pferde, neue Trainingsparcours und ein wachsender Stall.",
  "answer": "Gebäudeausbauten schaffen Platz für Pferde und schalten Personal, Trainingsparcours und Zuchtoptionen frei. Laut der von der Community gepflegten TMQ Horse Game Database wächst der Stall von 4 Boxen auf 8, 14 und 20, für 2.500, 10.000 und 50.000, und jede Stallstufe bringt eine weitere Stallgruppe. Die Jährlingskoppel fasst 6 Jährlinge, nach dem Ausbau 13, ohne Stallboxen zu belegen.",
  "sections": [
    [
      "Stallkapazität",
      "Stufe 1 fasst 4 Pferde und kostet 10 pro Tag. Stufe 2 fasst 8 (2.500 Baukosten, 30 pro Tag, 2 Tage). Stufe 3 fasst 14 (10.000, 80 pro Tag, 3 Tage). Stufe 4 fasst 20 (50.000, 200 pro Tag, 4 Tage). Jeder Ausbau bringt eine Stallgruppe mehr, sodass du Stuten, Wallache und Hengste trennen kannst. Ein voll ausgebauter Stall voller Pferde schaltet den Erfolg Full House frei."
    ],
    [
      "Jährlingskoppel und Weide",
      "Die Jährlingskoppel ist eine eigene Gruppe und belegt keine Stallboxen: Stufe 1 fasst 6 Jährlinge (1.500), Stufe 2 fasst 13 (10.000). Die Weide wird getrennt ausgebaut, für 200, 1.000, 5.000 und 10.000; sie erhöht die Stallkapazität nicht."
    ],
    [
      "Haupthaus und Personal",
      "Das Haupthaus schaltet Personal frei. Stufe 1: Laura (Pflegerin) und Maria (Reitlehrerin für dich). Stufe 2 (5.000): Fiete (Pfleger), Julia (gibt Reitstunden), Tara (Trainerin) und Bianca (Jährlingstrainerin). Stufe 3 (20.000): Lucas (Pfleger) sowie die Trainer Meilin und Markus."
    ],
    [
      "Zuchtstation",
      "Stufe 1 (1.500) ermöglicht Natursprung. Stufe 2 (5.000) bringt Samengewinnung (frisch) und den Fohlensimulator, der mögliche Fohlen zeigt. Stufe 3 (15.000) ermöglicht das Einfrieren von Samen."
    ],
    [
      "Reitplatz und Parkplatz",
      "Der Reitplatz ist für das Training nötig. Stufe 1 (500) bietet die Grundparcours; Stufe 2 (5.000) ergänzt Caprilli 2, Springen 3, Gelände 1, Gymnastikreihen, Rhythmustraining und zufälliges Longieren; Stufe 3 (10.000) ergänzt Springen 4. Der Parkplatz bietet Platz für deinen Anhänger: 2, 4 oder 10 Pferde für 200, 500 oder 1.500. Er begrenzt auch, wie viele Pferde du pro Tag kaufen oder verkaufen kannst."
    ],
    [
      "Futterlager",
      "Das Lager für Heu, Kraftfutter und Leckerlis wächst von 30/30/30 auf 65/70/40 und dann auf 110/150/50. Ab Stufe 3 ist es ein eigenes Gebäude."
    ],
    [
      "Den nächsten Ausbau planen",
      "Jedes Gebäude erhöht die täglichen Kosten, prüfe also vorher dein Einkommen. Willst du mehr Pferde, zählen Stall und Parkplatz am meisten; fürs Training der Reitplatz; für die Zucht Zuchtstation und Jährlingskoppel."
    ],
    [
      "Aktuelle Geldeinstellungen und Ausbauplanung",
      [
        {
          "type": "paragraph",
          "text": "Seit v1.0.3 erhöhen Reitplatzausbauten Reitstundeneinnahmen und Stallausbauten Pensionsgebühren. Geldeinstellungen können Kosten ändern; ältere Community-Preise oben sind Richtwerte. Prüfe [Einnahmen](/guides/money-making/), [Plätze](/guides/maximum-horses/) und [Personalzuweisungen](/guides/staff-not-working/) vor dem nächsten Ausbau.",
          "source": "patch105"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wie viele Pferde passen in meinen Stall?",
      "Anfangs 4, nach drei Ausbauten bis zu 20, laut Community-Wiki."
    ],
    [
      "Belegen Jährlinge Stallboxen?",
      "Nein. Sie stehen auf der Jährlingskoppel, die 6 oder 13 fasst."
    ],
    [
      "Wie schalte ich Julia und die Trainer frei?",
      "Baue das Haupthaus auf Stufe 2 aus; weitere Trainer kommen mit Stufe 3."
    ],
    [
      "Was kostet ein voll ausgebauter Stall?",
      "2.500 + 10.000 + 50.000 = 62.500, dazu höhere tägliche Kosten."
    ]
  ],
  "unknown": "Alle Kosten und Kapazitäten stammen aus dem Community-Wiki und können sich mit Patches ändern; prüfe sie im Spiel."
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
  "title": "Personal-Anleitung",
  "description": "Hilfe für eine größere Herde einstellen und Personal-Freischaltungen verstehen.",
  "answer": "Du kannst Personal einstellen, das bei Pflege und Training hilft. Laut offiziellem Store schalten höhere Ausbaustufen Bewerbungen von Personal frei.",
  "sections": [
    [
      "Hilfe für einen wachsenden Hof",
      "Das Personalsystem hilft dir, mehr Pferde zu versorgen, wenn dein Hof wächst. Lies vor der Einstellung die Stellenbeschreibung im Spiel, statt anzunehmen, dass jede Person jede Aufgabe übernimmt."
    ],
    [
      "Bewerbungen und Gebäude",
      "Der Gebäudeausbau ist mit Personalbewerbungen verknüpft. Siehst du keine Einstellungsoption, prüfe die Ausbaubeschreibungen in deinem Spiel. Die genaue Freischaltstufe ist hier nicht geprüft."
    ],
    [
      "Kosten und Bedarf vergleichen",
      "Eine hilfreiche Frage: Bei welcher wiederkehrenden Aufgabe brauchst du Hilfe? Lies Lohn und Zuständigkeiten, bevor du jemanden einstellst. Eine Lohntabelle oder Leistungsrangliste wurde hier nicht getestet."
    ],
    [
      "Reitlehrerin Julia: jeden Platz belegen",
      "Laut Spielerberichten kostet Julia 100 pro Tag und kann bis zu 8 Reitstunden am Tag geben, aber nur eine Stunde pro zugewiesenem Platz. Weist du zwei Pferde zu, gibt sie zwei Stunden. Um alle 8 Stunden zu nutzen, belege jeden Platz; dasselbe Pferd kann mehrere Plätze belegen. Ein Spieler berichtet, dass der Trainer drei Pferde pro Tag schafft."
    ],
    [
      "Trainer, die Pferde überlasten",
      "Wenn dein Trainingspersonal immer wieder Verletzungen wie Sehnenschäden verursacht, empfehlen Spieler, das Personal aufzuleveln (zu schulen). Du kannst Pferde auch nur der Person zuweisen, die sie gut trainiert."
    ],
    [
      "Was Maria macht",
      "Laut Spielern sagt Maria selten etwas: Sie gibt Reittipps, etwa dass ein Sprung im Galopp besser gelingt, wenn dir an einem Hindernis ein Fehler passiert."
    ],
    [
      "Zuweisungen vor weiteren Einstellungen prüfen",
      [
        {
          "type": "paragraph",
          "text": "Bei zu wenigen Stunden nutze die [Personalcheckliste](/guides/staff-not-working/). Vergleiche Plätze und Pferdezustand, nicht nur unterschiedliche Pferde. Seit v1.0.3 steigert Reitplatzausbau Stundeneinnahmen; prüfe [Geld und Kosten](/guides/money-making/) vor dem Lohnvergleich.",
          "source": "patch105"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Kann Personal Pferde trainieren?",
      "Laut offiziellem Store hilft Personal bei Pflege und Training."
    ],
    [
      "Warum gibt Julia nur eine Stunde pro Pferd?",
      "Jeder zugewiesene Platz ist eine Reitstunde. Laut Spielern kannst du dasselbe Pferd mehreren Plätzen zuweisen."
    ],
    [
      "Wie werden Bewerbungen freigeschaltet?",
      "Höhere Ausbaustufen werden als Quelle genannt."
    ],
    [
      "Welche Person ist die beste?",
      "Namen, Löhne und Leistung des Personals sind hier nicht geprüft."
    ]
  ],
  "unknown": "Vollständige Aufgaben, Löhne und Effizienz des Personals sind ungeprüft; die Details oben sind Spielerberichte."
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
        ['Sprachen', 'Der Steam-Store nennt 24 Sprachen für die Benutzeroberfläche: Englisch, Deutsch, Französisch, Niederländisch, Russisch, Italienisch, Spanisch (Spanien), Spanisch (Lateinamerika), Tschechisch, Finnisch, Ungarisch, Norwegisch, Polnisch, Portugiesisch (Brasilien), Portugiesisch (Portugal), Türkisch, Ukrainisch, Slowakisch, Dänisch, Koreanisch, Rumänisch, vereinfachtes Chinesisch, Japanisch und Schwedisch.'], ['Spielsprache', 'Seit der Release-Version v1.0.1 nutzt das Spiel die Sprache deines Steam-Clients als Standardsprache. Ist Steam auf Deutsch eingestellt, startet das Spiel also auf Deutsch.']
      ],
      faq: [['Läuft Horses of Hoofprint Bay auf dem Steam Deck?', 'Ja. Steam bewertet es als „Spielbar“, mit Hinweisen zu Controller und Bildschirmtastatur.'], ['Gibt es eine Mac-Version?', 'Nein. Mac wird auf Steam nicht aufgeführt, und das Studio konzentriert sich zuerst auf den PC.'], ['Kommt das Spiel für Switch oder andere Konsolen?', 'Eine Konsolenversion ist nicht angekündigt. Das Studio würde gern auf andere Plattformen gehen, hat es aber nicht versprochen.'], ['Gibt es das Spiel auf Deutsch?', 'Ja. Deutsch gehört zu den unterstützten Sprachen auf Steam.'], ['Gibt es Mehrspieler oder Koop?', 'Nein. Steam führt das Spiel nur als Einzelspieler.'], ['Unterstützt das Spiel Steam Cloud?', 'Ja, Steam Cloud ist auf der Store-Seite aufgeführt.'], ['Kann ich über GeForce Now spielen?', 'Dort ist es nicht bekannt. Prüfe die GeForce-Now-Bibliothek für den aktuellen Stand.']],
      unknown: 'Volle Controller-Unterstützung in der Vollversion muss noch geprüft werden.'
    },
    '/faq/': {
      title: 'FAQ',
      description: 'Antworten auf die häufigsten Fragen zu Horses of Hoofprint Bay, aus der offiziellen FAQ des Studios und der Community.',
      answer: 'Horses of Hoofprint Bay erschien am 4. November 2026 als fertiges Spiel für den PC, mit unbegrenzten Spieltagen und ohne geplante große Inhaltsroadmap. Pferde gehen in den Ruhestand statt zu sterben, ihr Alter wird in Spieltagen gezählt, und Spielstände der Oktober-Demo werden übernommen, die der Februar-Demo nicht.',
      sections: [
        ['Zum Spiel und zu Zukunftsplänen', 'Das Studio beschreibt den Release als fertiges Produkt. Spätere Ergänzungen sind nicht ausgeschlossen, aber es gibt bewusst keine Inhaltsroadmap. Große neue Features wie andere Pferderassen oder Disziplinen sind nicht geplant. Fehlerberichte und kleine Wünsche werden weiter beobachtet. Ob es DLCs gibt, ist offen; versprochen wird nichts. Gemeint sind neue Spielinhalte: Das seit dem Launch auf Steam erhältliche Supporter Pack ist ein Extra-DLC mit Artbook, Ausmalbildern und Discord-Rolle und fügt dem Spiel nichts hinzu.'],
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
      description: 'Was Horses of Hoofprint Bay kostet, der Launch-Rabatt, regionale Preise, das Supporter Pack, der Soundtrack und wann es erschienen ist.',
      answer: 'Horses of Hoofprint Bay erschien am 4. November 2026 auf Steam. Der Grundpreis liegt bei 26,99 €, 26,99 $ (USD), 21,99 £ oder 68 ¥ (CNY). Der Einführungsrabatt von 15 % (22,94 €) ist beendet: Am 12. November 2026 zeigte der Steam-Store in Deutschland, den USA, Großbritannien und China wieder den vollen Preis. Das Studio bestätigt regionale Preise. Das Supporter-Pack-DLC (6,99 €) und der Soundtrack (4,99 €) sind eigene, optionale Steam-Produkte.',
      sections: [
        ['Erscheinungsdatum', 'Die Vollversion erschien am 4. November 2026 auf Steam als fertiges Produkt, nicht im Early Access. Laut Spielern im Forum peilte das Studio einen Release am Nachmittag (MEZ) an. Eine kostenlose Demo gab es seit Februar 2026.'],
        ['Preise nach Region', 'Preise im Steam-Store am 6. November 2026: 26,99 € in Deutschland, 26,99 $ in den USA, 21,99 £ in Großbritannien und 68 ¥ in China. Im inzwischen beendeten Launch-Sale lagen sie 15 % darunter, etwa bei 22,94 € oder 18,69 £. Preise in deiner Region können abweichen; maßgeblich ist immer der Steam-Store.'],
        ['Regionale Preise und Rabatte', 'Auf die Frage nach regionalen Preisen antwortete das Studio, dass sie aktiv sind. Ein anderer Spieler merkt an, dass der Regionalrabatt echt ist, aber geringer als bei manchen anderen Spielen. Der Einführungsrabatt von 15 % endete am 11. November 2026; der Countdown im Steam-Store hatte 18:00 UTC (19:00 MEZ) angezeigt, und am 12. November galt wieder der volle Preis. Zu künftigen Sales gibt es noch keine Infos. Spieler verweisen außerdem auf Steam-Bundles mit anderen Pferdespielen wie Blackboard Ponies und Ranch of Rivershine, die den Preis weiter senken können, wenn du diese schon besitzt.'],
        ['Hauptspiel, Supporter Pack und Soundtrack', 'Steam verkauft drei getrennte Produkte, zum Spielen brauchst du nur das Hauptspiel. Das Supporter Pack ist ein DLC und setzt das Hauptspiel voraus; der Soundtrack ist ein eigenes Musikprodukt. Preise im Steam-Store am 10. November 2026: Hauptspiel 26,99 € / 26,99 $ / 21,99 £ / 68 ¥ (15 % Launch-Rabatt, der am 11. November endete); Supporter Pack 6,99 € / 6,99 $ / 5,69 £ / 25 ¥; Soundtrack 4,99 € / 4,99 $ / 4,19 £ / 19 ¥. Supporter Pack und Soundtrack waren nicht reduziert, und der Store bietet kein Paket aus Spiel und Supporter Pack an.'],
        ['Was im Supporter Pack steckt', 'Laut der offiziellen Steam-Seite erschien das Supporter Pack am 4. November 2026 und enthält drei Dinge: ein digitales Artbook als PDF, „The Art & Making of Horses of Hoofprint Bay“, zusammengestellt von Künstlerin Anna Glinsmann, mit über 50 Seiten Skizzen, Entwürfen und Work-in-Progress-Screenshots; ein kleines Heft mit Ausmalbildern zum Ausdrucken oder digitalen Ausmalen; und eine exklusive Rolle samt Farbe auf dem offiziellen Discord-Server. Die Store-Seite nennt keine Inhalte im Spiel, keine Pferde und keine Boni. Das Studio beschreibt es als Möglichkeit, das Team zusätzlich zum Spielkauf zu unterstützen.'],
        ['Soundtrack', 'Der Original-Soundtrack, komponiert und produziert von Michal Sinka, ist ein eigenes Steam-Produkt und erschien am 6. November 2026.']
      ],
      faq: [['Was kostet Horses of Hoofprint Bay?', '26,99 € / 26,99 $ / 21,99 £ / 68 ¥ zum vollen Preis. Der Einführungsrabatt von 15 % ist beendet.'], ['Gilt der Launch-Rabatt noch?', 'Nein. Er endete am 11. November 2026; am 12. November zeigte der Steam-Store wieder den vollen Preis.'], ['Wann ist Horses of Hoofprint Bay erschienen?', 'Am 4. November 2026 auf Steam für den PC.'], ['Gibt es regionale Preise?', 'Ja, laut Studio.'], ['Gibt es eine kostenlose Demo?', 'Ja. Die Demo ist auf die ersten 25 Spieltage begrenzt.'], ['Was ist das Supporter Pack?', 'Ein DLC für 6,99 € mit digitalem Artbook, Ausmalbildern und exklusiver Discord-Rolle. Die Store-Seite nennt keine Inhalte im Spiel.'], ['Brauche ich Supporter Pack oder Soundtrack zum Spielen?', 'Nein. Beides sind optionale Extras; nötig ist nur das Hauptspiel.']],
      unknown: 'Preise ändern sich mit Sales und Wechselkursen. Künftige Sales sind nicht angekündigt. Wie man die Discord-Rolle erhält, erklärt die Store-Seite des Supporter Packs nicht.'
    },
    '/guides/crashes-and-launch-errors/': {
      title: 'Abstürze & Startfehler',
      description: 'Lösungen und nächste Schritte, wenn Horses of Hoofprint Bay abstürzt, nicht startet oder einen schwarzen oder grauen Bildschirm zeigt.',
      answer: 'Wenn Horses of Hoofprint Bay abstürzt oder nicht startet, aktualisiere zuerst das Spiel und starte Steam neu. Bei Abstürzen bittet das Studio, im Spiel mit F8 einen Fehlerbericht zu senden oder die Logdateien an support@thoglistudios.com zu schicken. Beim Windows-Fehler „an application control policy has blocked this file (0x11C7)“ empfehlen Spieler, die Eigenschaften der .exe zu prüfen und sie als Administrator zu starten.',
      sections: [
        ['Den Absturz ans Studio melden', 'Der Rat des Studios bei Abstürzen: Sende im Spiel mit der Taste F8 einen Fehlerbericht mit mehr Infos, oder schicke deine Logdateien an support@thoglistudios.com. Die Logdateien heißen player.log und player-prev.log. Für die Demo nannte das Studio den Ordner C:\\Users\\BENUTZERNAME\\AppData\\LocalLow\\ThogliStudios\\Horses of Hoofprint Bay Demo; bei der Vollversion liegt er vermutlich in einem ähnlichen ThogliStudios-Ordner.'],
        ['„Failed to start process“ (0x11C7) unter Windows', 'Manche sehen unter Windows 11 die Meldung „failed to start process for this game: an application control policy has blocked this file (0x11C7)“. Ein Helfer aus der Community vermutet ein Berechtigungsproblem: Öffne die Eigenschaften der .exe des Spiels und starte sie als Administrator. Werden die Windows-Sicherheitsrichtlinien von deiner Firma oder Schule verwaltet, kannst du das eventuell nicht selbst ändern.'],
        ['Schwarzer oder grauer Bildschirm', 'In der Februar-Demo blieb bei Neuinstallationen von Version 0.1.8 die erste Reitstunde auf einem grauen Bildschirm hängen; laut Spielern wurde das per Update behoben. Unter Linux und auf dem Steam Deck empfehlen Spieler bei schwarzem Bildschirm eine Neuinstallation und Proton Experimental als Kompatibilitätstool.'],
        ['Abstürze beim Start eines neuen Tages', 'Spieler meldeten Abstürze beim Laden des nächsten Tages nach dem Reiten oder Training. Ein Community-Helfer schrieb am 6. November, ein kleiner Patch habe das behoben, und v1.0.2 (8. November) beseitigt weitere Fehler, durch die das Spiel hängen konnte. Aktualisiere zuerst das Spiel; stürzt es weiterhin ab, sende mit F8 einen Fehlerbericht.'], ['„Failed to load il2cpp“', 'Seit Anfang November sehen manche beim Start der Vollversion „Failed to load il2cpp“, teils mit einer Windows-Meldung, das Spiel sei nicht korrekt signiert. Eine offizielle Lösung oder Erklärung gibt es noch nicht. Aktualisiere auf die aktuelle Version (v1.0.5, Stand 14. November 2026) und nutze in Steam „Spieldateien auf Fehler überprüfen“, eine allgemeine Steam-Hilfe. Ein Spieler vermutete wegen eines anderen Spiels einen Zusammenhang mit Grafiktreibern; das ist unbestätigt und daher keine empfohlene Lösung. Melde den Fehler mit deinen Logdateien.'], ['Fehlermeldungen als Pop-up (v1.0.2)', 'v1.0.2 bringt eine Option, Fehlermeldungen als Pop-up anzuzeigen. Ist sie aktiv, siehst du eher, was schiefging, und dein Fehlerbericht wird hilfreicher.']
      ],
      faq: [['Wie melde ich einen Fehler?', 'Drücke im Spiel F8, oder schicke deine Logdateien an support@thoglistudios.com, wie vom Studio empfohlen.'], ['Wo liegen die Logdateien?', 'Im ThogliStudios-Ordner unter AppData\\LocalLow, als player.log und player-prev.log.'], ['Mein ganzer PC startet neu, wenn ich das Spiel öffne. Liegt das am Spiel?', 'Andere hatten das in der Demo nicht. Es kann an deinem Rechner liegen; ein Fehlerbericht hilft dem Studio bei der Prüfung.'], ['Was bedeutet „Failed to load il2cpp“?', 'Das Spiel kann einen Teil seiner Engine nicht laden. Eine offizielle Lösung gibt es noch nicht; aktualisiere das Spiel, überprüfe die Spieldateien in Steam und melde den Fehler.'], ['Welche Version behebt die meisten Abstürze?', 'v1.0.2 (8. November 2026) behebt mehrere Hänger und ungültige Spielstände nach Abstürzen.']],
      unknown: 'Die Ursache von „Failed to load il2cpp“ und der genaue Logordner der Vollversion sind nicht bestätigt.'
    },
    '/guides/save-files-and-achievements/': {
      "title": "Spielstand-Probleme & gesperrte Erfolge",
      "description": "Wie v1.0.5 Erfolge in alten Spielständen wieder ermöglicht, welche Bedingungen erneut erfüllt werden müssen und was bei beschädigten Dateien hilft.",
      "answer": "Aktualisiere auf v1.0.5, wenn dein Spielstand bisher das Symbol „keine Erfolge“ zeigte. Das Studio hat die Spielstand-Validierung entfernt. Alle Spielstände können wieder Steam-Erfolge erhalten, auch nach Abstürzen markierte oder außerhalb des Spiels bearbeitete. Übersprungene Erfolge werden nicht nachträglich vergeben: Du musst ihre Bedingungen erneut erfüllen. Eine nicht mehr ladbare Datei wird dadurch nicht automatisch repariert.",
      "sections": [
        [
          "Erfolge in bisher markierten Spielständen (v1.0.5)",
          "Laut offizieller Ankündigung vom 13. November 2026 (UTC) wurde die Validierung mit v1.0.5 entfernt, weil sich versehentliche Sperren nicht vollständig verhindern ließen. Auch alte Spielstände mit dem Symbol „keine Erfolge“ können wieder Erfolge erhalten. Allein wegen dieses Symbols musst du nicht neu beginnen. Erfülle die Erfolgsbedingung erneut; während der Sperre übersprungene Erfolge werden nicht nachträglich vergeben."
        ],
        [
          "Warum ältere Tipps einen Neustart empfehlen",
          "Unter v1.0.2 konnte das Studio bereits markierte Spielstände nicht wieder freischalten. Seit v1.0.5 gilt diese Einschränkung nicht mehr. Aktualisiere das Spiel, bevor du einen vorhandenen Spielstand aufgibst."
        ],
        [
          "Erfolge werden gar nicht freigeschaltet",
          "Ein anderes Problem: Manche, die am Release-Tag begannen, bekamen nur den ersten Erfolg. Ein Spieler berichtet, dass Erfolge nach einem Neustart des Spiels funktionierten. Insgesamt gibt es 47 Steam-Erfolge."
        ],
        [
          "Sicherungen und nicht ladbare Spielstände",
          "Laut Changelog von v1.0.3 wurden Sicherungen auf 50 Tage erhöht. Kopiere deinen Spielstand-Ordner vor einer Wiederherstellung oder Bearbeitung separat. Die Freigabe von Erfolgen repariert nicht zwangsläufig beschädigte oder fehlende Dateien. Versuche bei Ladeproblemen eine vorhandene Sicherung und melde den Fehler mit F8."
        ],
        [
          "Spielstände fehlen nach erneutem Demo-Start",
          "Wer nach dem Start der Vollversion alte Demo-Spielstände geladen hat, berichtet, dass der neue Spielstand der Vollversion nicht mehr im Menü erschien, obwohl die Datei noch im Ordner lag. v1.0.2 behebt eine Ursache für überschriebene Spielstände: Die Namensprüfung unterschied Groß- und Kleinschreibung, Ordnernamen aber nicht, sodass sich zwei Spielstände, deren Namen sich nur darin unterschieden, überschreiben konnten. Gib jedem Spielstand einen klar anderen Namen, lösche keine Spielstände in der Demo und behalte eine Kopie deines Spielstand-Ordners."
        ],
        [
          "Demo-Spielstände",
          "Laut FAQ des Studios werden Spielstände der Oktober-Demo in die Vollversion übernommen, die der Februar-Demo nicht."
        ]
      ],
      "faq": [
        [
          "Bekomme ich Erfolge in einem alten Spielstand zurück?",
          "Ja. Seit v1.0.5 können auch bisher markierte Spielstände wieder Erfolge erhalten. Übersprungene Bedingungen musst du erneut erfüllen."
        ],
        [
          "Brauche ich wegen gesperrter Erfolge einen neuen Spielstand?",
          "Nein. Aktualisiere auf v1.0.5 und spiele deinen vorhandenen Spielstand weiter, sofern er lädt."
        ],
        [
          "Repariert v1.0.5 beschädigte Spielstände?",
          "Die Ankündigung stellt die Möglichkeit wieder her, Erfolge zu erhalten, verspricht aber keine Reparatur nicht ladbarer Dateien. Sichere deine Daten und melde verbleibende Fehler."
        ],
        [
          "Kann ich einen Spielstand manuell importieren?",
          "Eine bestätigte Methode wurde noch nicht geteilt. Behalte eine Sicherung des Spielstand-Ordners."
        ],
        [
          "Gibt es Cloud-Spielstände?",
          "Ja, Steam Cloud ist auf der Store-Seite aufgeführt."
        ],
        [
          "Wie viele Erfolge gibt es?",
          "47."
        ]
      ],
      "unknown": "Die offizielle Ankündigung nennt keine Methode, jede beschädigte oder fehlende Datei zu reparieren. Aktualisiere das Spiel und behalte separate Sicherungen."
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
  "title": "Mods und Sattelzeug: Quellen, Installation und Hilfe",
"seoTitle": "Horses of Hoofprint Bay: Mods und Sattelzeug installieren | Wiki",
  "description": "Finde Mods, Westmore-Saddlery-Inhalte und offizielle Hilfe mit Versionsprüfungen und aktuellen Erfolgsregeln.",
  "answer": "Nutze für Mods die Originalseite des Erstellers und dessen Installationsanleitung. Der Publisher unterstützt Sattelzeug- und Kleidungsmods, verwaltet aber keine Steam-Workshop-Integration. Prüfe Texturpaket oder Gameplay-Mod sowie Demo oder Vollversion vor der Installation.",
  "sections": [
    [
      "Wo du Mods findest",
      [
        {
          "type": "table",
          "caption": "Die passende Quelle",
          "headers": [
            "Gesucht",
            "Einstieg",
            "Prüfen"
          ],
          "rows": [
            [
              "Westmore-Sattelzeug",
              "[Ersteller und Installation](/guides/westmore-saddlery/)",
              "Anforderungen des Pakets"
            ],
            [
              "Community-Hilfe",
              "[Offizieller Discord](/community/discord/)",
              "Angeheftete Hinweise und Erstellerlinks"
            ],
            [
              "Sattelzeug selbst erstellen",
              "Publisher-FAQ und Studio-Pressekit",
              "Aktuelle offizielle Anleitung"
            ],
            [
              "Bestimmte Gameplay-Mod",
              "Originalseite des Autors",
              "Loader, Abhängigkeiten und Version"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Der Publisher unterstützt Sattelzeug- und Kleidungsmods ausdrücklich und verlinkt Anleitungen in der Release-FAQ. Daraus folgt keine offizielle Freigabe oder Kompatibilität jeder Community-Mod.",
          "source": "releaseFaq"
        }
      ]
    ],
    [
      "Eine Routine mit Versionsprüfung",
      [
        {
          "type": "steps",
          "items": [
            "Lies aktuelle Beschreibung, Version und Abhängigkeiten.",
            "Schließe das Spiel und sichere Spielstände und zu ersetzende Dateien separat.",
            "Nutze Ordner und Struktur dieses Pakets. Prüfe Demo gegen Vollversion; übernimm keinen Pfad einer anderen Mod.",
            "Starte vollständig neu und suche am beschriebenen Ort, etwa im Sattelzeugladen.",
            "Teste neue Pakete einzeln, damit Fehler zugeordnet werden können."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-0.jpg",
          "alt": "Pferdepflege-Oberfläche mit Sattelzeugsteuerung neben dem Pferd",
          "caption": "Das Grundspiel bietet bereits Ausrüstungs- und Farboptionen. Neue Gegenstände und Installationsschritte hängen von der jeweiligen Mod ab.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Westmore Saddlery und fehlende Gegenstände",
      [
        {
          "type": "paragraph",
          "text": "Die [Westmore-Anleitung](/guides/westmore-saddlery/) verlinkt Nexus Mods und Patreon. Die Ascot-Seite nennt einen Demo-Ordner, unveränderte JSON- und PNG-Namen, vollständigen Neustart und den Sattelzeugladen. Diese Vorgaben gelten für dieses Paket, nicht automatisch für jede Vollversionsinstallation.",
          "source": "westmoreAscot"
        },
        {
          "type": "paragraph",
          "text": "Prüfe bei fehlenden Inhalten Version, Ordner, zusätzliche Unterordner und Dateinamen. Benötigt eine Gameplay-Mod einen Loader, ist die reine Texturinstallation keine bestätigte Methode."
        }
      ]
    ],
    [
      "Erfolge seit v1.0.5",
      [
        {
          "type": "paragraph",
          "text": "v1.0.5 entfernt die Spielstand-Validierung. Bearbeitete und bisher markierte Spielstände erhalten wieder Erfolge; übersprungene Bedingungen müssen erneut erfüllt werden. Ältere Warnungen vor automatischer Erfolgssperre sind damit überholt.",
          "source": "patch105"
        },
        {
          "type": "note",
          "title": "Kompatibilität bleibt paketabhängig",
          "text": "Die Freigabe von Erfolgen bestätigt keine Mod-Kompatibilität und repariert keine Dateien. Sichere Daten und beachte Aktualisierungen. Siehe [Spielstandprobleme](/guides/save-files-and-achievements/)."
        }
      ]
    ],
    [
      "Gezielt um Hilfe bitten",
      [
        {
          "type": "paragraph",
          "text": "Nenne Ersteller, Paket- und Spielversion, Installationsordner und Symptom. [Discord-Hilfe](/community/discord/) erklärt Einladungsprobleme. Für Grundspielfehler nutze F8 oder die Hinweise unter [Abstürze](/guides/crashes-and-launch-errors/)."
        },
        {
          "type": "paragraph",
          "text": "Diese Wiki hostet keine fremden Dateien. Eine Mod ist zum Spielen nicht erforderlich; Downloadbedingungen und Preise stehen beim Ersteller."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Gibt es einen Steam Workshop?",
      "Der Publisher verwaltet keine Steam-Workshop-Integration. Nutze Erstellerseiten."
    ],
    [
      "Wo finde ich Westmore Saddlery?",
      "Auf Nexus Mods und Patreon, verlinkt in der eigenen Anleitung."
    ],
    [
      "Gelten Demo-Schritte für die Vollversion?",
      "Nicht automatisch. Nutze passende Versions- und Paketanweisungen."
    ],
    [
      "Sperren Mods Erfolge?",
      "v1.0.5 erlaubt Erfolge in bearbeiteten Spielständen. Mod-Kompatibilität ist eine andere Frage."
    ],
    [
      "Wo gibt es Hilfe?",
      "Beim Ersteller oder in den aktuellen Mod-Kanälen des offiziellen Discord."
    ]
  ],
  "unknown": "Einzelne Pakete, Loader und Versionen wurden hier nicht installiert oder vermessen. Beachte aktuelle Kompatibilitätshinweise der Ersteller."
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
  "title": "Fohlen & Jährlinge",
  "description": "Wann Fohlen und Jährlinge erwachsen werden, was ohne Stallplatz passiert und wie die Trächtigkeit die Stute beeinflusst.",
  "answer": "Laut Spielern bleibt ein Fohlen 4 Tage bei seiner Mutter im Stall, kommt dann auf die Jährlingskoppel und wird um Tag 12 zum jungen Erwachsenen. Wird ein Jährling erwachsen, während dein Stall voll ist, wird er weggeschickt; du findest ihn im Verkaufsstall in der Stadt wieder. Die Jährlingskoppel fasst laut Community-Wiki 6 Jährlinge, nach dem Ausbau 13.",
  "sections": [
    [
      "Wie lange Fohlen zum Wachsen brauchen",
      "Das Alter der Pferde wird in Spieltagen gezählt. Laut Spielern verbringt ein Fohlen die ersten 4 Tage bei der Mutter im Stall und lebt dann bis etwa Tag 12 auf der Jährlingskoppel, wo es zum jungen Erwachsenen wird. Ein Demo-Spieler verfolgte ein Fohlen von der Geburt an Tag 13 bis zum Erwachsensein an Tag 25, was dazu passt. Auf der Koppel kannst du Jährlinge versorgen und trainieren."
    ],
    [
      "Platz schaffen, bevor ein Jährling erwachsen wird",
      "Wird ein Jährling auf der Jährlingskoppel erwachsen und es ist kein Platz im Stall frei, wird er weggeschickt. Laut Spielern kannst du ihn im Verkaufsstall in der Stadt zurückholen, sobald du Platz geschaffen hast."
    ],
    [
      "Trächtigkeit und Säugen kosten die Stute Training",
      "Stuten gewinnen in der späten Trächtigkeit und während der Säugezeit keine Werte, und Pferde verlieren Werte, wenn sie nicht trainiert werden. Nach Rückmeldungen der Spieler hat v1.0.2 den Verlust bei Pferden mit niedrigen Werten deutlich verringert: höchstens ein Zehntel der Ausdauer und nie mehr als 5 Punkte. Sobald das Fohlen ein Jährling ist, braucht die Stute trotzdem etwas Training. v1.0.2 korrigierte außerdem die falsche Parcoursliste für ein älteres Pferd mit Fohlen."
    ],
    [
      "Zuchtmöglichkeiten",
      "Neben dem Decken einer Stute beschreiben Spieler, dass man in der Zuchtstation Samen gewinnen und frisch verwenden oder einfrieren kann."
    ],
    [
      "Einen Jährling auf die Koppel bringen",
      "Wurde ein Fohlen zum Jährling, bevor du die Jährlingskoppel gebaut hattest, bleibt es eventuell im Stall, und Ziehen auf die Koppel funktioniert nicht. Ein Spieler löste das, indem er den Jährling auswählte, „Manage“ öffnete und ihn über die Stallgruppen verschob. Die Koppel fasst auf Stufe 1 sechs und auf Stufe 2 dreizehn Jährlinge."
    ],
    [
      "Zeitplan von Trächtigkeit bis Erwachsenenalter",
      [
        {
          "type": "table",
          "caption": "Plätze vor dem Wechsel planen",
          "headers": [
            "Phase",
            "Spieltage",
            "Beleg"
          ],
          "rows": [
            [
              "Trächtigkeit",
              "8 Tage",
              "Publisher-FAQ"
            ],
            [
              "Fohlen bei der Mutter",
              "4 Tage nach Geburt",
              "Publisher-FAQ"
            ],
            [
              "Erwachsen",
              "Um Alter 12 nach Geburt",
              "Steam-Spielerberichte"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Die acht Trächtigkeitstage liegen vor dem eigenen Alter des Fohlens. Plane erst den Paddock, dann eine Erwachsenenbox. [Kapazitäten](/guides/maximum-horses/) unterscheidet die Plätze; [Zucht](/guides/breeding/) erklärt Paarungen.",
          "source": "releaseFaq"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wann werden Jährlinge erwachsen?",
      "Laut Spielern um Tag 12 nach der Geburt: 4 Tage bei der Mutter, dann auf der Jährlingskoppel."
    ],
    [
      "Mein Jährling ist verschwunden. Wo ist er?",
      "Wahrscheinlich im Verkaufsstall in der Stadt, falls dein Stall voll war, als er erwachsen wurde."
    ],
    [
      "Warum hat meine Stute Kraft verloren?",
      "Stuten gewinnen in der späten Trächtigkeit und beim Säugen keine Werte. Seit v1.0.2 ist der Verlust auf ein Zehntel der Ausdauer und höchstens 5 Punkte begrenzt."
    ]
  ],
  "unknown": "Der Publisher bestätigt acht Tage Trächtigkeit und vier Fohlentage. Erwachsenenalter um 12 und Wiederherstellungshinweise enthalten Spielerberichte."
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
        ['Warum Pferde Kraft und Ausdauer verlieren', 'Werte sinken, wenn ein Pferd nicht regelmäßig trainiert wird, selbst wenn es Turniere geht, ähnlich wie echte Fitness. Reitstunden mit unerfahrenen Reitern kosten ebenfalls etwas Kraft und Ausdauer, und Stuten verlieren in der späten Trächtigkeit und beim Säugen Trainingsstand. Patch v1.0.2 hat den Verlust bei Pferden mit niedrigen Werten verringert: höchstens ein Zehntel der Ausdauer und nie mehr als 5 Punkte.'],
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
        ['Leckerlis', 'Leckerlis geben etwas Gewicht und ein wenig Selbstvertrauen.'], ['Heuraufen (v1.0.2)', 'Manche Spieler dachten, ihr Heu gehe verloren. v1.0.2 zeigt den Füllstand der Heuraufen deutlicher, sodass du besser siehst, wie viel Heu noch da ist.']
      ],
      faq: [['Warum sind meine Pferde immer hungrig?', 'Füttere Kraftfutter bis zur Mitte des grünen Zustandsbalkens, nicht nur bis zum Anfang.'], ['Warum sind Pensionspferde hungriger als meine Pferde?', 'Ihre Besitzer reiten sie, also verbrauchen sie mehr Energie.'], ['Wie sehe ich, welches Pferd Futter braucht?', 'In der Waagen-Spalte des Pferdebuchs in deinem Büro.']],
      unknown: 'Genaue Futtermengen und die Heu-Mechanik in der Vollversion müssen geprüft werden.'
    },
    '/training/jumping-tips/': {
  "title": "Tipps zum Springen",
  "description": "Absprung-Timing für Steilsprünge, Oxer und Wassergräben, plus Sprungmarker und Auto-Sprung für schwere Turniere.",
  "answer": "Das Absprung-Timing hängt vom Hindernis und vom Tempo ab. Steilsprünge reitest du langsamer an und springst näher ab, um Höhe zu gewinnen. Bei Oxern springst du früher ab, um Schwung mitzunehmen. Der Wassergraben ist am breitesten und braucht mehr Tempo. Je schneller das Pferd, desto früher springst du ab. Ist es immer noch zu schwer, aktiviere Sprungmarker oder Auto-Sprung in den Einstellungen.",
  "sections": [
    [
      "Timing nach Hindernis",
      "Spieler teilen diese Faustregeln: Steilsprünge brauchen Höhe, also langsamer und näher abspringen; Oxer brauchen Weite, also früher abspringen; der Wassergraben ist am breitesten und braucht mehr Tempo. Ein einfacher Einstieg: Im Galopp etwa so weit vor dem Hindernis abspringen, wie es hoch ist."
    ],
    [
      "Tempo verschiebt den Absprung",
      "Je schneller das Pferd, desto weiter vorher musst du abspringen. In ruhigem Galopp kannst du recht nah heranreiten, im schnellen Galopp springst du früher ab."
    ],
    [
      "Mit Sprungmarkern üben",
      "In den Einstellungen gibt es optionale Sprungmarker. Laut Spielern erscheinen sie nur im Training, nicht im Turnier, helfen aber, die Absprungpunkte zu lernen. Ein ausgebauter Übungsplatz bietet mehr Übungsmöglichkeiten."
    ],
    [
      "Auto-Sprung",
      "In den Barrierefreiheitseinstellungen gibt es Auto-Sprung. Tempo und Kraft musst du weiter selbst einteilen, aber nicht mehr das genaue Timing."
    ],
    [
      "Tempo im Turnier",
      "Laut Spielern kosten Fehler 4 Strafpunkte, Zeitfehler 1 Punkt pro angefangenen 4 Sekunden über der Zeit. Bleib im Galopp, um die Zeit zu schaffen, aber erschöpfe das Pferd nicht zu früh. Die Kraft geht schneller zur Neige, wenn die Ausdauer des Pferdes niedrig ist."
    ],
    [
      "Timing bei Caprilli",
      "Bei der Caprilli-Prüfung wechselst du die Gangart etwa dann, wenn der Fuß des Reiters über der Linie zwischen den beiden Gangart-Anweisungen ist."
    ],
    [
      "Vor bekannten Hindernisproblemen aktualisieren",
      [
        {
          "type": "paragraph",
          "text": "v1.0.3 korrigiert Auto-Sprung an der Ziegelmauer und das Dünenhindernis; v1.0.4 behebt verhinderte Teilnahme. Aktualisiere vor weiteren Timingversuchen. [Keine Teilnahme](/competitions/cannot-enter/) hilft bei Meldungen; [Turniervorbereitung](/guides/competitions/) bei Training und Transport.",
          "source": "patch105"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wie timet man Sprünge?",
      "Bei Steilsprüngen näher und langsamer, bei Oxern früher, beim Wassergraben schneller."
    ],
    [
      "Gibt es einen leichten Modus fürs Springen?",
      "Ja, Auto-Sprung in den Barrierefreiheitseinstellungen."
    ],
    [
      "Funktionieren Sprungmarker im Turnier?",
      "Nein, laut Spielern nur im Training."
    ]
  ],
  "unknown": "Strafpunkte und Timing stammen aus Spielerberichten und müssen im Spiel geprüft werden."
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
  "title": "Geld verdienen: Einnahmen, Kosten und Einstellungen",
"seoTitle": "Horses of Hoofprint Bay: Geld verdienen und Kosten planen | Wiki",
  "description": "Vergleiche Pension, Reitstunden, Turniere und Pferdeverkauf. Plane Kosten und nutze Geldmultiplikatoren statt alter Tricks.",
  "answer": "Baue tragbare Einnahmen auf: Spieler empfehlen Pensionspferde und trainierte Verkaufspferde, ergänzt durch Reitstunden und Turnierpreise. Seit v1.0.3 lassen sich Einnahmen und Kosten einstellen. Reitplatzausbau erhöht Reitstundeneinnahmen, Stallausbau Pensionsgebühren. Pferdepreise bleiben von Multiplikatoren ausgenommen.",
  "sections": [
    [
      "Einnahmen vor dem Ausbau vergleichen",
      [
        {
          "type": "table",
          "caption": "Einnahmequellen und Aufwand",
          "headers": [
            "Einnahme",
            "Voraussetzung",
            "Was den Ertrag senkt"
          ],
          "rows": [
            [
              "[Pension](/guides/boarders/)",
              "Auftrag, Platz und Pflege",
              "Vernachlässigung, Aufwand, Trächtigkeit"
            ],
            [
              "[Trainieren und verkaufen](/guides/buy-sell-horses/)",
              "Kaufgeld, Zeit und Box",
              "Kaufpreis und Unterhalt"
            ],
            [
              "[Reitstunden](/training/riding-lesson-corrections/)",
              "Pferd und eigene Arbeit oder Personal",
              "Lohn und Trainingsverlust"
            ],
            [
              "[Turniere](/guides/competitions/)",
              "Qualifiziertes Pferd und Transport",
              "Gebühren und erfolglose Starts"
            ],
            [
              "[Zucht](/guides/breeding/)",
              "Anlagen, Pferde und Zeit",
              "Unterhalt und unsicherer Verkauf"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Spieler empfehlen Pension und Pferdehandel im Steam-Geldthread. Vergleiche diese Strategien in deinem Spiel; der höchste Stundenprofit ist damit nicht bewiesen.",
          "source": "t_coins"
        }
      ]
    ],
    [
      "Ein tragbarer Plan für den Anfang",
      [
        {
          "type": "steps",
          "items": [
            "Lies Ziele und tägliche Kosten. Notiere das Guthaben vor neuen Verpflichtungen.",
            "Wähle eine bereits mögliche Einnahmequelle. Pension braucht Pflegekapazität, Verkaufspferde brauchen Zeit und Plätze.",
            "Prüfe Einnahmen und Ausgaben am nächsten Tag. Stabilisiere die Routine vor weiteren Pferden oder Angestellten.",
            "Baue die tatsächlich genutzte Anlage aus: Reitplatz für Reitstunden, Stall für Pensionsgebühren."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-6.jpg",
          "alt": "Büroordner für Pferde, Pension, Personal, medizinische Berichte, Statistik und Gebäude",
          "caption": "Prüfe Aufträge, Unterlagen und Gebäudekosten vor dem Ausbau. Das offizielle Bild ist keine getestete Einnahmeprognose.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Geldeinstellungen und Gebäudeeinnahmen",
      [
        {
          "type": "paragraph",
          "text": "v1.0.3 bringt getrennte Multiplikatoren für Einnahmen und Kosten. Pferdepreise sind ausdrücklich ausgenommen, weil Pferde gekauft und verkauft werden können. Niedrigere Kosten verbilligen ein Pferd nicht direkt.",
          "source": "patch105"
        },
        {
          "type": "table",
          "caption": "Bestätigte Wirtschaftsänderungen",
          "headers": [
            "Änderung",
            "Wirkung"
          ],
          "rows": [
            [
              "Einnahmen- und Kostenmultiplikator",
              "Fortschritt ans gewünschte Tempo anpassen"
            ],
            [
              "Reitplatzausbau",
              "Mehr Einnahmen aus Reitstunden"
            ],
            [
              "Stallausbau",
              "Höhere Pensionsgebühren"
            ],
            [
              "Verkauf mit Kostenmultiplikator seit v1.0.4",
              "Alter Endlosgeld-Trick mit Sattelzeug geschlossen"
            ]
          ],
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Genaue Reglerbereiche und Amortisationszeiten nennt die Ankündigung nicht. Vergleiche [Gebäudekosten](/buildings/) mit aktuellen Gebühren; ältere Bilder können vor diesen Einstellungen entstanden sein."
        }
      ]
    ],
    [
      "Wann das Geld ankommt",
      [
        {
          "type": "paragraph",
          "text": "Laut Community wird Pension am Aufenthaltsende bezahlt. Spieler melden frühe Abreise nach erreichtem Berittziel mit Pension für die tatsächlichen Tage plus Berittgebühr. Gib eine erwartete Zahlung nicht wie bereits vorhandenes Geld aus.",
          "source": "t_sendHome"
        },
        {
          "type": "paragraph",
          "text": "Reitstunden erzeugen auch Nachtrainingsarbeit. Gibt Julia zu wenige, prüfe jeden Zuweisungsplatz. Nutze die [Personalcheckliste](/guides/staff-not-working/), bevor du Lohn und erwartete Einnahmen vergleichst.",
          "source": "t_julia"
        }
      ]
    ],
    [
      "Ausgaben vor dem nächsten Kauf prüfen",
      [
        {
          "type": "table",
          "caption": "Kostenüberblick",
          "headers": [
            "Ausgabe",
            "Prüfen"
          ],
          "rows": [
            [
              "Gebäude",
              "Kauf und Unterhalt; leere Boxen verdienen nichts"
            ],
            [
              "Personal",
              "Aktueller Lohn und tatsächliche Zuweisungen"
            ],
            [
              "Futter und Medizin",
              "Vorrat und Geld für vorhandene Pferde"
            ],
            [
              "Pensionsstrafen",
              "Hengste trennen und zuverlässig pflegen"
            ],
            [
              "Verkaufspferde",
              "Kaufpreis, Haltedauer und Unterhalt"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Spieler nennen 500 Strafe und Prestigeverlust bei einer tragenden Pensionsstute. Das ist ein datiertes Beispiel, kein garantierter Betrag für jede Geldeinstellung. Nutze getrennte [Stallgruppen](/guides/stable-groups/).",
          "source": "t_pregnant"
        },
        {
          "type": "note",
          "title": "Wenn der Fortschritt zu langsam ist",
          "text": "Nutze aktuelle Geldeinstellungen statt alter Tricks. v1.0.5 erlaubt Erfolge für alle Spielstände; übersprungene Bedingungen müssen erneut erfüllt werden.",
          "source": "patch105"
        }
      ]
    ]
  ],
  "faq": [
    [
      "Was bringt anfangs am schnellsten Geld?",
      "Spieler empfehlen Pension und den Weiterverkauf trainierter Pferde. Ein kontrollierter aktueller Vergleich fehlt."
    ],
    [
      "Zahlt Pension täglich?",
      "Laut Community sammelt sich die Gebühr über den Aufenthalt und wird am Ende bezahlt."
    ],
    [
      "Warum verdient Julia weniger als erwartet?",
      "Prüfe jeden Platz und den Pferdezustand. Eine Zuweisung füllt nicht automatisch alle Reitstundenplätze."
    ],
    [
      "Ändern Einstellungen Pferdepreise?",
      "Nein. Die Ankündigung nimmt sie von Geldmultiplikatoren aus."
    ],
    [
      "Gibt Sattelzeugverkauf unendlich Geld?",
      "v1.0.4 schließt den Trick durch Anwendung des Kostenmultiplikators beim Verkauf."
    ]
  ],
  "unknown": "Einnahmen und Gewinne hängen vom aktuellen Spiel und den Einstellungen ab. Ungeprüfte Stundenprofite und Amortisationszahlen werden nicht angegeben."
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
      "title": "Erfolge-Liste",
      "description": "Alle 47 Erfolge von Horses of Hoofprint Bay, auch die 9 versteckten, und wie viele Spieler sie schon haben.",
      "answer": "Horses of Hoofprint Bay hat 47 Steam-Erfolge, davon 9 versteckte. Fast alle bekommen Move in (100 %) und Visit Some Trees (96,9 %); am seltensten, mit 0,0 % am 7. November 2026, sind unter anderem Pro Trainer (1000 Trainings), Huge Competition Successes (1000 Siege), Direct Descendant, All the Quirks in the World und Mission Complete. Die Erfolgsnamen sind hier auf Englisch angegeben.",
      "sections": [
        [
          "Erste Schritte und Ausritte",
          "Move in: Erreiche zum ersten Mal deinen Hof (100 % der Spieler). Visit Some Trees: Besuche zum ersten Mal den Wald (96,9 %). A Salty Breeze: Besuche zum ersten Mal den Strand (8,0 %). Climb a Mountain: Besuche zum ersten Mal die Berge (4,6 %). Now I’ve Seen Everything: Schließe alle Trainingsparcours und Ausritte ab (0,1 %)."
        ],
        [
          "Training und Turniere",
          "A little training goes a long way: 10 Trainings abschließen (93,7 %). Practice makes perfect: 100 Trainings (51,5 %). Pro Trainer: 1000 Trainings (0,0 %). Some Competition Successes: 10 Turniere gewinnen (49,3 %). Big Competition Successes: 100 Turniere gewinnen (3,0 %). Huge Competition Successes: 1000 Turniere gewinnen (0,0 %). Competition All-Star: Jedes Turnier einmal gewinnen (0,2 %)."
        ],
        [
          "Zucht",
          "Here I Am: Dein erstes Fohlen züchten (78,8 %). All Grown Up: Ein Fohlen erwachsen werden lassen (59,4 %). A Lot of Foals: 20 Fohlen züchten (4,0 %). A WHOLE Lot of Foals: 100 Fohlen züchten (0,1 %). Expert Broodmare: Eine Stute bringt 8 Fohlen zur Welt (1,2 %). Widespread Genes: Ein Hengst deckt oder besamt 50 Stuten (3,2 %). A Frozen Legacy: Samen einfrieren (2,4 %). No more babies: Einen Hengst kastrieren (13,5 %). Direct Descendant: Ein 100/100-Fohlen züchten, das von deinem Startpferd abstammt (0,0 %)."
        ],
        [
          "Geschäft und Geld",
          "Breeding for Profit: Ein selbst gezüchtetes Pferd verkaufen (50,9 %). Horse Flipper: 10 Pferde verkaufen (15,0 %). Successful Business: 50 Pferde verkaufen (0,7 %). Line go up: 10.000 Geld auf dem Konto haben (20,8 %). Making a Small Fortune: 100.000 (0,9 %). More Money than you can spend: 250.000 (0,6 %). Prestigious: 50 % Prestige erreichen (10,0 %). Highly Prestigious: 99 % Prestige erreichen (0,2 %)."
        ],
        [
          "Dein Hof und Langzeitziele",
          "A Forever Home: Ein Pferd zieht auf den Gnadenhof (1,8 %). It’s been a While: 100 Spieltage spielen (9,9 %). A Year in Hoofprint Bay: 365 Spieltage in einem Spielstand spielen (0,3 %). All Decked Out: Alles Sattelzeug aus dem Laden besitzen (2,2 %). All the Help you can Get: Alle Angestellten einstellen (0,4 %). A Proper Estate: Alle Gebäude auf höchster Stufe (1,1 %). Full House: Ein voll ausgebauter Stall voller Pferde (0,1 %). All the Quirks in the World: Alle Charaktereigenschaften entdecken (0,0 %). Mission Complete: Alle Aufgaben abschließen (0,0 %)."
        ],
        [
          "Versteckte Erfolge (Spoiler)",
          "That’s too easy...: Ein „Low“-Turnier mit einem 100/100-Pferd gewinnen (0,1 %). Well, that needs some work: In einem Turnier Letzter werden (18,7 %). Oops!: Versehentlich eine Pensionsstute decken lassen (27,3 %). The boys are fighting: Zwei Hengste kämpfen um eine Stute (16,5 %). Copy & Paste: Ein Fohlen züchten, das der Stute fast gleicht (15,4 %). A Whole Life: Ein selbst gezüchtetes Pferd geht auf deinem Hof in Rente (0,1 %). A Friendly Neighbour: Die Notfall-Futterlieferung vom Ladenbesitzer bekommen (15,1 %). Retriever of Lost Items: Alle verlorenen Gegenstände finden (2,8 %). Empty Nest: Kein eigenes Pferd auf deinem Hof haben (5,7 %)."
        ],
        [
          "Beeinflussen Einstellungen die Erfolge?",
          "Laut Spielern sperrt Auto-Sprung keine Erfolge. Seit v1.0.5 ist die Spielstand-Validierung vollständig entfernt: Alle Spielstände können Erfolge erhalten, auch bearbeitete und nach Abstürzen markierte. Übersprungene Bedingungen musst du erneut erfüllen; Erfolge werden nicht nachträglich vergeben. Siehe [Spielstand-Probleme und Erfolge](/guides/save-files-and-achievements/)."
        ]
      ],
      "faq": [
        [
          "Wie viele Erfolge hat Horses of Hoofprint Bay?",
          "47 Steam-Erfolge, davon 9 versteckte."
        ],
        [
          "Welche Erfolge sind am schwersten?",
          "Pro Trainer, Huge Competition Successes, Direct Descendant, All the Quirks in the World und Mission Complete lagen am 7. November 2026 bei 0,0 %."
        ],
        [
          "Sperrt Auto-Sprung die Erfolge?",
          "Nein, laut Spielern."
        ],
        [
          "Wie bekomme ich den Erfolg Oops!?",
          "Lass einen Hengst eine Pensionsstute decken. Das kostet aber eine Strafe und Prestige."
        ],
        [
          "Können bearbeitete oder bisher markierte Spielstände Erfolge erhalten?",
          "Ja, seit v1.0.5. Übersprungene Erfolgsbedingungen musst du erneut erfüllen."
        ]
      ],
      "unknown": "Die weltweiten Freischaltquoten ändern sich; die Werte geben den Stand vom 7. November 2026 wieder. Aufgabenlisten und Fundorte verlorener Gegenstände müssen im Spiel geprüft werden."
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
      "title": "Pensionspferde-Anleitung",
      "description": "Teilpension, Vollpension und Beritt erklärt: Tagessätze, nötige Pflege und wie du Strafen vermeidest.",
      "answer": "Pensionspferde sind Pferde anderer Leute, die du gegen Bezahlung versorgst. Anfragen stehen im Ordner „Boarders“ im Büro; ihre Zahl hängt vom Prestige ab. Teilpension, Vollpension und Beritt verlangen unterschiedliche Pflege. Seit v1.0.3 steigen die Gebühren mit dem Stallausbau. Bezahlt wird am Ende; Vernachlässigung verringert oder streicht die Zahlung.",
      "sections": [
        [
          "Pensionspferde finden",
          "Öffne den Ordner „Boarders“ in deinem Büro, um aktuelle Anfragen zu sehen. Laut Community-Wiki hängt die Zahl der täglichen Angebote von deinem Prestige ab, und Pensionspferde belegen Stallplätze wie deine eigenen Pferde."
        ],
        [
          "Die drei Pensionsarten",
          "Teilpension (Part Board): Stall- und Koppelplatz, Heu, Wasser und Ausmisten, aber kein Putzen, kein Kraftfutter und keine medizinische Versorgung; 50 pro Tag. Vollpension (Full Board): Putzen, Heu und Kraftfutter, medizinische Versorgung; die Besitzer reiten das Pferd im Hintergrund; 90 pro Tag. Beritt (Schooling Board): wie Vollpension, zusätzlich musst du das Pferd auf das geforderte Selbstvertrauen, Kraft und Ausdauer trainieren; dafür gibt es eine einmalige Berittgebühr obendrauf. Seit v1.0.3 erhöhen Stallausbauten die Pensionsgebühren. Die älteren Community-Angaben von 50 pro Tag für Teilpension und 90 für Vollpension sind Richtwerte, keine garantierten Beträge für jede Stallstufe oder Geldeinstellung. Prüfe das aktuelle Angebot in deinem Spiel."
        ],
        [
          "Bezahlung",
          "Bezahlt wird am Ende des Aufenthalts; Vernachlässigung verringert die Zahlung oder streicht sie. Laut Spielern kannst du Berittpferde früher nach Hause schicken, sobald das Trainingsziel erreicht ist, und bekommst dann die Berittgebühr plus Pension für die Tage, die sie da waren. Erfolgreiche Aufenthalte steigern dein Prestige."
        ],
        [
          "Strafen vermeiden",
          "Füttere Vollpensionspferde bis zur Mitte des grünen Zustandsbalkens, weil ihre Besitzer sie reiten und sie hungrig werden. Halte Hengste aus der Stallgruppe der Pensionspferde fern: Wird eine Pensionsstute tragend, zahlst du 500 Strafe, bekommst keine Gebühr und verlierst Prestige. Das schaltet auch den versteckten Erfolg Oops! frei."
        ],
        [
          "Jährlinge in Pension",
          "Der Pensionsordner zeigt nur „yearling“ oder „adult“, nicht das genaue Alter. Ein Spieler berichtet, dass ein Pensions-Jährling während des Aufenthalts erwachsen wurde und auf die einzige freie Koppel kam, die Hengstkoppel. Halte in der passenden Gruppe einen Platz frei, bevor du Jährlinge annimmst."
        ],
        [
          "Keine Anfragen nach Stallstufe 3?",
          "Ein Spieler bekommt seit dem Ausbau auf Stallstufe 3 keine neuen Pensionsanfragen. Eine Antwort gibt es noch nicht. Da die Angebote vom Prestige abhängen, prüfe, ob du kürzlich Prestige verloren hast, und sorge für freie Boxen."
        ]
      ],
      "faq": [
        [
          "Wie viel zahlen Pensionspferde?",
          "Seit v1.0.3 erhöhen Stallausbauten die Pensionsgebühren. Die älteren Community-Angaben von 50 pro Tag für Teilpension und 90 für Vollpension sind Richtwerte, keine garantierten Beträge für jede Stallstufe oder Geldeinstellung. Prüfe das aktuelle Angebot in deinem Spiel."
        ],
        [
          "Warum sind meine Pensionspferde immer hungrig?",
          "Vollpensionspferde werden von ihren Besitzern geritten. Füttere bis zur Mitte des grünen Balkens."
        ],
        [
          "Was passiert, wenn eine Pensionsstute tragend wird?",
          "500 Strafe, keine Gebühr und Prestigeverlust."
        ],
        [
          "Warum bekomme ich keine Pensionsanfragen?",
          "Die Angebote hängen von Prestige und freiem Platz ab. Ein Spieler meldet keine Anfragen nach Stallstufe 3, möglicherweise ein Fehler."
        ]
      ],
      "unknown": "Die älteren Gebühren stammen aus dem Community-Wiki. Der offizielle Changelog bestätigt höhere Gebühren durch Stallausbau, nennt aber keine Tabelle je Stufe oder genaue Multiplikatorformel."
    },
    '/horses/import-and-export/': {
      title: 'Pferde importieren & exportieren',
      description: 'Pferde über den Fährhafen in der Stadt zwischen Spielständen verschieben, was du dafür bekommst und was hilft, wenn der Export hängt.',
      answer: 'Am Fährhafen in der Stadt kannst du ein Pferd aus einem Spielstand exportieren und in einen anderen importieren. Laut Spielern bekommst du beim Export denselben Preis wie beim Verkauf, und das Pferd lässt sich in einem anderen Spielstand wieder importieren. Manche berichten, dass der Exportbildschirm nach der Pferdeauswahl hängt; starte dann das Spiel neu und melde es mit F8.',
      sections: [
        ['Wo du exportierst', 'Geh in die Stadt, öffne den Hafen (die Fähre), klicke auf Exportieren und wähle ein Pferd aus deiner Liste. Laut Community-Wiki ist der Hafen der Ort, um Pferde zu und von anderen Spielständen zu exportieren und importieren.'],
        ['Was mit dem Pferd passiert', 'Das Pferd verlässt deinen Hof, und laut Spielern bekommst du denselben Preis wie bei einem normalen Verkauf. Danach kannst du es in einem anderen Spielstand importieren, etwa um ein neues Spiel mit deinem besten Pferd zu beginnen.'],
        ['Wenn der Exportbildschirm hängt', 'Ein Spieler berichtet, dass nach der Auswahl eines Pferdes der Hintergrund dunkler wurde, nichts mehr anklickbar war und das Pferd nicht gespeichert wurde. Dieser Hänger ist noch nicht als behoben aufgeführt. v1.0.2 hat aber zwei verwandte Fehler behoben: Ein Pferd ließ sich mehrfach exportieren, und importierte Pferde mit medizinischen Problemen bekamen ein falsches Startdatum, sodass das Problem eventuell nie heilte. Aktualisiere das Spiel, starte es bei einem Hänger neu, sende mit F8 einen Fehlerbericht und sichere deine Spielstände.'],
        ['Ein Lieblingspferd behalten', 'Einen Gnadenhof auf deinem eigenen Gelände gibt es nicht; Pferde im Ruhestand ziehen auf den Gnadenhof, was für den Erfolg A Forever Home zählt. Manche exportieren Lieblingspferde stattdessen als Erinnerung oder kaufen sie in einem anderen Spielstand zurück.']
      ],
      faq: [['Kann ich Pferde zwischen Spielständen verschieben?', 'Ja, über den Fährhafen in der Stadt.'], ['Bekomme ich Geld für den Export?', 'Laut Spielern denselben Preis wie beim Verkauf.'], ['Der Exportbildschirm hängt. Was tun?', 'Das ist ein gemeldeter Fehler. Starte das Spiel neu und sende einen Bericht mit F8.']],
      unknown: 'Die genauen Importschritte, Dateipfade und ob importierte Pferde alle Eigenschaften behalten, müssen im Spiel geprüft werden.'
    },
    '/guides/patch-notes/': {
      "title": "Patch-Notes & Updates",
      "description": "Patch-Notes bis v1.0.5: Geldmultiplikatoren, Erfolge in alten Spielständen, Sicherungen für 50 Tage und behobene Turnierprobleme.",
      "answer": "Die neueste Version in der am 14. November 2026 geprüften offiziellen Ankündigung ist v1.0.5. Der Beitrag vom 13. November um 19:32 UTC fasst v1.0.3 bis v1.0.5 zusammen: einstellbare Einnahmen und Kosten, mehr Einnahmen nach Gebäudeausbauten, zusätzliche Sicherungen, Turnierkorrekturen und Erfolge für alle Spielstände.",
      "sections": [
        [
          "v1.0.5: Erfolge in allen Spielständen",
          "Die Spielstand-Validierung wurde entfernt. Alle Spielstände können Steam-Erfolge erhalten, auch bearbeitete und nach Abstürzen markierte. Übersprungene Erfolge musst du erneut abschließen; sie werden nicht nachträglich vergeben. Der frühere Rat, allein wegen gesperrter Erfolge neu anzufangen, gilt damit nicht mehr. Außerdem sind die Münzsymbole wieder normal. Siehe [Spielstand-Probleme und Erfolge](/guides/save-files-and-achievements/)."
        ],
        [
          "v1.0.4: Turniere, Verkauf von Sattelzeug und Grafik",
          "Die verhinderte Teilnahme an Turnieren wurde behoben. Der Verkauf von Sattelzeug berücksichtigt jetzt den Kostenmultiplikator, damit An- und Verkauf von Sattelzeug oder Kleidung kein unendliches Geld erzeugt. Außerdem wurden ein überflüssiges Minuszeichen bei den Deckkosten sowie Grafikfehler in den Bergen, am Strand und in der Hofübersicht korrigiert."
        ],
        [
          "v1.0.3: Geldeinstellungen, Einnahmen und Sicherungen",
          "Neu sind getrennte Multiplikatoren für Einnahmen und Kosten. Pferdepreise bleiben davon ausgenommen, weil Pferde gekauft und verkauft werden können. Ein Ausbau des Reitplatzes erhöht die Einnahmen aus Reitstunden, ein Stallausbau die Pensionsgebühren. Sicherungen wurden auf 50 Tage erhöht. Weitere Änderungen: Spielstandauswahl bei kürzlich gesperrten Erfolgen, keine gespeicherten Parcoursstatistiken mehr, Unity Analytics entfernt, wiederholtes Schnauben beim Zoomen behoben, Auto-Sprung an der Ziegelmauer korrigiert sowie das gruselige Hindernis und die Stegposition in den Dünen repariert. Siehe [Geld verdienen](/guides/money-making/)."
        ],
        [
          "v1.0.2 (8. November 2026 UTC): Spielstände und Erfolge",
          "Dieser ältere Patch verbesserte die Behandlung von Dateifehlern, legte Validierungsdateien für Sicherungen an und verringerte versehentliche Sperren nach Abstürzen. Bereits markierte Spielstände blieben damals gesperrt. Seit v1.0.5 ist diese Einschränkung durch das Entfernen der Validierung aufgehoben."
        ],
        [
          "v1.0.2: Änderungen am Spiel",
          "Pferde mit niedrigen Werten verlieren jetzt weniger: höchstens ein Zehntel der Ausdauer und nie mehr als 5 Punkte. Das Studio reagierte damit auf Rückmeldungen zu Stuten, die beim Abfohlen Werte verlieren. Ein Klick auf Kleidung hängt sie jetzt an die Maus, statt sie sofort anzuziehen; die Heuraufen zeigen ihren Füllstand deutlicher, damit Heu nicht mehr „verloren“ wirkt; der Sound wurde neu abgemischt. Eine neue Option kann Fehlermeldungen als Pop-up anzeigen."
        ],
        [
          "v1.0.2: Fehlerbehebungen",
          "Behoben: zwei ziehbare Gegenstände gleichzeitig auswählen (Bürste, Futter, Medizin, Sattelzeug, Kleidung, Hofwerkzeug oder Pferd); Esc verlässt den Kleiderschrank nicht nach dem Öffnen der Regale; ein Pferd lässt sich mehrfach exportieren; falsche verfügbare Parcours für ein älteres Pferd mit Fohlen; die frei färbbare Turnierjacke ist zu früh verfügbar; ein aufgenommenes Hofpferd fällt beim Herauszoomen nicht herunter; importierte Pferde mit medizinischen Problemen bekommen ein falsches Startdatum, sodass das Problem eventuell nie heilt; Spielstände werden überschrieben, weil die Namensprüfung Groß- und Kleinschreibung unterscheidet, Ordnernamen aber nicht."
        ],
        [
          "v1.0.1 (Release) und v1.0.0",
          "v1.0.1 ist die Release-Version vom 4. November 2026. Sie nutzt die Sprache des Steam-Clients als Standardsprache im Spiel und aktualisiert die Credits. v1.0.0 passte die Größe des Sattelzeugs im Pflegebildschirm an die Reitansicht an."
        ],
        [
          "Früherer Hotfix",
          "Vor v1.0.2 berichtete ein Community-Helfer am 6. November von einem kleinen Patch gegen Abstürze beim Laden eines neuen Tages. Er erscheint nicht als eigener Eintrag im offiziellen Changelog."
        ],
        [
          "Zukünftige Updates",
          "Das Spiel erschien als fertiges Produkt ohne Inhaltsroadmap. Das Studio will weiter Fehler beheben und das Spiel so stabil wie möglich halten, verspricht aber keine neuen Funktionen oder Inhalte."
        ]
      ],
      "faq": [
        [
          "Was ist die neueste Version von Horses of Hoofprint Bay?",
          "v1.0.5 ist die neueste Version in der am 14. November 2026 geprüften offiziellen Ankündigung."
        ],
        [
          "Können alte Spielstände wieder Erfolge erhalten?",
          "Ja. v1.0.5 entfernt die Validierung auch für markierte und bearbeitete Spielstände. Übersprungene Erfolgsbedingungen musst du erneut erfüllen."
        ],
        [
          "Kann ich Einnahmen und Kosten einstellen?",
          "Ja. v1.0.3 bietet getrennte Geldmultiplikatoren. Pferdepreise sind davon ausgenommen."
        ],
        [
          "Welcher Patch behebt die verhinderte Turnierteilnahme?",
          "Der Changelog von v1.0.4 nennt diese Korrektur. Aktualisiere auf v1.0.5 oder neuer."
        ],
        [
          "Verlieren Stuten nach dem Abfohlen noch Werte?",
          "Weniger als vorher: v1.0.2 begrenzt den Verlust auf ein Zehntel der Ausdauer und höchstens 5 Punkte."
        ],
        [
          "Kommen weitere Updates?",
          "Fehlerbehebungen ja, neue Inhalte sind nicht versprochen."
        ]
      ],
      "unknown": "Am 14. November 2026 mit der offiziellen Ankündigung abgeglichen. Der Beitrag fasst v1.0.3, v1.0.4 und v1.0.5 zusammen, ohne getrennte Veröffentlichungszeiten zu nennen. Multiplikatorbereiche und genaue Einnahmeformeln müssen im Spiel geprüft werden."
    },
    '/community/discord/': {
  "title": "Offizieller Discord: Beitritt und Einladungsprobleme",
"seoTitle": "Horses of Hoofprint Bay: Discord: Beitritt und Einladungen | Wiki",
  "description": "Finde offizielle Discord-Einstiege, prüfe abgelaufene Einladungen und erhalte Hinweise zu Mod-Hilfe und Fehlerberichten.",
  "answer": "Nutze den Discord-Eintrag im Hauptmenü oder den Link von Thogli Studios. Wirkt die Einladung abgelaufen, versuche den offiziellen Einstieg später erneut: Laut Publisher kann ungewöhnliche Beitrittsaktivität vorübergehend neue Mitglieder blockieren. Diese Wiki verwaltet den Server nicht.",
  "sections": [
    [
      "Die offizielle Einladung finden",
      [
        {
          "type": "paragraph",
          "text": "Öffne das Hauptmenü oder [Thogli Studios](https://thoglistudios.com/) und verwende den aktuellen Discord-Eintrag. Die Entwicklerantwort auf Steam verweist auf die Studiowebsite. Das ist verlässlicher als eine alte kopierte Einladung.",
          "source": "t_discordDev"
        },
        {
          "type": "steps",
          "items": [
            "Nutze die aktuelle Einladung im Spiel oder auf der Studiowebsite.",
            "Öffne sie mit dem gewünschten Discord-Konto.",
            "Lies Regeln und sichtbare Einführungsschritte. Kanalzugang hängt vom aktuellen Server ab."
          ]
        },
        {
          "type": "paragraph",
          "text": "Wir veröffentlichen keine Ersatzcodes und haben den Beitritt mit deinem Konto nicht getestet. Frage bei geänderten Einstiegen beim Studio nach."
        }
      ]
    ],
    [
      "Einladung ungültig oder abgelaufen",
      [
        {
          "type": "paragraph",
          "text": "Publisher Alice erklärt in einem November-Thread: Die Einladungen sollten nicht ablaufen, doch ungewöhnliche Beitrittsaktivität verursachte zeitweise Sperren bis zur manuellen Klärung. Das ist eine dokumentierte Möglichkeit, keine Diagnose jedes Fehlers.",
          "source": "discordJoin"
        },
        {
          "type": "table",
          "caption": "Einladungsprüfung",
          "headers": [
            "Symptom",
            "Nächster Schritt"
          ],
          "rows": [
            [
              "Offizieller Link wirkt abgelaufen",
              "Aktuellen Einstieg später erneut öffnen und Studiohinweise prüfen"
            ],
            [
              "Browser öffnet App nicht",
              "Dieselbe offizielle Einladung in Discord versuchen; Steam nennt diesen Umweg"
            ],
            [
              "Kanal nicht sichtbar",
              "Einführung und aktuelle Serveranweisungen lesen"
            ],
            [
              "Weiter kein Zugang",
              "Dem Studio genaue Meldung und offiziellen Einstieg nennen"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Eine sofortige Lösung oder feste Wartezeit ist nicht bestätigt. Veröffentliche keine privaten Kontodaten."
        }
      ]
    ],
    [
      "Mods und Fehlerberichte",
      [
        {
          "type": "paragraph",
          "text": "Spieler nennen einen Mod-Kanal. Lies angeheftete Hinweise und Erstelleranleitungen. [Mods](/guides/mods/) unterscheidet Texturpakete und Mods mit Zusatzsoftware; [Westmore Saddlery](/guides/westmore-saddlery/) verlinkt Originalseiten."
        },
        {
          "type": "paragraph",
          "text": "Das Studio empfiehlt bei Spielfehlern auch F8 oder Logdateien an support@thoglistudios.com. Nenne Version, Symptom und installierte Mods. Dafür ist kein Discord-Beitritt nötig.",
          "source": "t_crashes"
        },
        {
          "type": "note",
          "title": "Unabhängige Anleitung",
          "text": "Diese Wiki kann keinen Zugang freigeben oder Discord-Sperren entfernen. Kontaktiere Studio oder Ersteller für konto- oder dateispezifische Hilfe."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Wo ist der offizielle Discord?",
      "Im Hauptmenü oder über den aktuellen Eintrag auf der Thogli-Studios-Website."
    ],
    [
      "Warum wirkt die Einladung abgelaufen?",
      "Der Publisher dokumentiert temporäre Sperren durch ungewöhnliche Beitrittsaktivität. Andere Ursachen sind möglich."
    ],
    [
      "Gibt diese Wiki einen anderen Code?",
      "Nein. Wir verwalten den Server nicht."
    ],
    [
      "Brauche ich Discord für Fehlerberichte?",
      "Nein. F8 und E-Mail an den Studio-Support sind weitere Wege."
    ]
  ],
  "unknown": "Aktueller Beitritt, Kontoberechtigung und Kanalzugang sind nicht getestet. Die Publisher-Antwort beschreibt einen früheren Vorfall."
},
    '/guides/westmore-saddlery/': {
  "title": "Westmore Saddlery: Downloads und Installation",
"seoTitle": "Horses of Hoofprint Bay: Westmore Saddlery installieren | Wiki",
  "description": "Finde Originalseiten für Sattelzeug, wähle Demo- oder Vollversionsanweisungen und prüfe fehlende Gegenstände.",
  "answer": "Westmore Saddlery erstellt unabhängige Zusatzinhalte. Nexus-Mods-Profil und Patreon bieten Kollektionen und Anleitungen. Prüfe die Version: Die Ascot-Seite nennt ausdrücklich einen Demo-Ordner, der nicht automatisch für die Vollversion passt.",
  "sections": [
    [
      "Originale Downloadseiten",
      [
        {
          "type": "paragraph",
          "text": "Beginne bei [Westmore auf Nexus Mods](https://www.nexusmods.com/profile/WestmoreSaddlery?gameId=10086) oder [Patreon](https://www.patreon.com/WestmoreSaddlery). Das Profil beschreibt handgezeichnetes Sattelzeug und verlinkt Hilfe. Dateien bleiben beim Ersteller.",
          "source": "westmore"
        },
        {
          "type": "table",
          "caption": "Einstiege",
          "headers": [
            "Seite",
            "Zweck"
          ],
          "rows": [
            [
              "[Erstellerprofil](https://www.nexusmods.com/profile/WestmoreSaddlery?gameId=10086)",
              "Ersteller und Kollektionen prüfen"
            ],
            [
              "[Ascot-Kollektion](https://www.nexusmods.com/horsesofhoofprintbay/mods/1)",
              "Anforderungen und Installation dieses Pakets"
            ],
            [
              "[Patreon](https://www.patreon.com/WestmoreSaddlery)",
              "Aktualisierungen und bebilderte Anleitung"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Westmore ist nicht der Spielentwickler. Verfügbarkeit, Preis und Kompatibilität können sich ändern; lies den aktuellen Paketbeitrag."
        }
      ]
    ],
    [
      "Für die richtige Version installieren",
      [
        {
          "type": "steps",
          "items": [
            "Lies die Anforderungen und prüfe Demo oder Vollversion.",
            "Sichere Spielstände und zu ersetzende Dateien, dann schließe das Spiel.",
            "Bei Ascot: ZIP entpacken und Inhalt von PUT IN FILES in den angegebenen Mods/Tack-Ordner kopieren. JSON- und PNG-Namen unverändert lassen.",
            "Vollständig neu starten und nach Paketanweisung im Sattelzeugladen prüfen."
          ]
        },
        {
          "type": "note",
          "title": "Spielstandordner nicht verwechseln",
          "text": "Ascot nennt Saves~/Mods/Tack der Demo und verlangt einen vorhandenen Spielstand für die Ordner. Nutze für die Vollversion aktuelle Erstelleranweisungen statt eines geratenen Pfads.",
          "source": "westmoreAscot"
        },
        {
          "type": "paragraph",
          "text": "Andere Pakete können andere Anforderungen haben. Eine Gameplay-Mod mit Loader wird nicht automatisch wie eine Textur installiert."
        }
      ]
    ],
    [
      "Neues Sattelzeug fehlt",
      [
        {
          "type": "table",
          "caption": "Installationschecks",
          "headers": [
            "Prüfen",
            "Grund"
          ],
          "rows": [
            [
              "Version und Ordner",
              "Demo und Vollversion haben andere Speicherorte"
            ],
            [
              "Entpackter Inhalt",
              "Zusätzliche äußere Ordner können Dateien verstecken"
            ],
            [
              "Dateinamen",
              "JSON und PNG laut Ersteller nicht umbenennen"
            ],
            [
              "Vollständiger Neustart",
              "In Ascot ausdrücklich verlangt"
            ],
            [
              "Suchort",
              "Dieses Paket ergänzt Gegenstände im Sattelzeugladen"
            ]
          ],
          "source": "westmoreAscot"
        },
        {
          "type": "paragraph",
          "text": "Nenne bei Problemen Paket, Version, Ordner und Symptom. [Discord-Einstiege](/community/discord/) erklären Community-Hilfe. Veröffentliche keine vollständigen Spielstände oder privaten Kontodaten."
        }
      ]
    ],
    [
      "Erfolge und Kompatibilität",
      [
        {
          "type": "paragraph",
          "text": "v1.0.5 erlaubt Erfolge in bearbeiteten und früher markierten Spielständen. Das garantiert keine funktionierenden Fremddateien. Siehe [Spielstände und Erfolge](/guides/save-files-and-achievements/).",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "[Mods](/guides/mods/) erklärt Unterschiede zwischen Sattelzeug, Kleidung, Fell und Gameplay-Mods. Behalte die jeweilige Anleitung beim Download."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Ist das offizieller DLC?",
      "Nein. Westmore Saddlery ist ein unabhängiges Fanprojekt."
    ],
    [
      "Wo sind die Downloads?",
      "Auf Nexus Mods und Patreon beim Ersteller; öffne den aktuellen Paketbeitrag."
    ],
    [
      "Warum fehlt es in der Vollversion?",
      "Prüfe zuerst, ob du Demo-Schritte verwendet hast. Nutze die passende Anleitung."
    ],
    [
      "Dateien umbenennen?",
      "Ascot verlangt unveränderte JSON- und PNG-Namen."
    ],
    [
      "Hostet diese Wiki die Pakete?",
      "Nein. Dateien bleiben auf den Originalseiten."
    ]
  ],
  "unknown": "Pakete wurden hier nicht mit v1.0.5 installiert oder getestet. Prüfe aktuelle Kompatibilität, Preise und Ordner beim Ersteller."
},
    '/guides/maximum-horses/': {
  "title": "Maximale Pferdezahl und voller Stall",
  "description": "Unterscheide Stall-, Jährlings- und Transportplätze und plane rechtzeitig für erwachsen werdende Fohlen.",
  "answer": "Der Mai-Bericht nennt 20 Pferde im voll ausgebauten Stall plus 13 Jährlinge im eigenen Paddock und zusätzliche bezahlte Pension beim Züchter. Erwachsenenplätze, Jährlingsplätze und Anhänger sind verschiedene Grenzen. Prüfe aktuelle Ausbauten und halte vor dem Erwachsenwerden einen Platz frei.",
  "sections": [
    [
      "Welche Grenze ist erreicht?",
      [
        {
          "type": "table",
          "caption": "Plätze und Transport",
          "headers": [
            "Ort",
            "Veröffentlichte Kapazität",
            "Umfang"
          ],
          "rows": [
            [
              "Voll ausgebauter Stall",
              "20 Pferde",
              "Studioangabe vom Mai, Änderungen möglich"
            ],
            [
              "Ausgebauter Jährlingspaddock",
              "13 Jährlinge",
              "Getrennt von Erwachsenenboxen"
            ],
            [
              "Pension beim Züchter",
              "So viele wie bezahlbar",
              "Laufende Gebühren"
            ],
            [
              "Anhänger",
              "Aktuellen Parkplatz-Ausbau lesen",
              "Transport, kein dauerhafter Platz"
            ]
          ],
          "source": "devMay"
        },
        {
          "type": "paragraph",
          "text": "Ein freier Anhängerplatz schafft keine Box. Ein Jährlingsplatz eignet sich nicht für jedes erwachsene Pferd. Prüfe das passende Gebäude statt automatisch den Stall auszubauen."
        }
      ]
    ],
    [
      "Vor Kauf oder Zucht",
      [
        {
          "type": "steps",
          "items": [
            "Zähle Erwachsene, Pensionspferde und freie Boxen.",
            "Prüfe Trächtigkeiten und [Fohlenwachstum](/horses/foals-and-yearlings/) für kommende Wechsel.",
            "Prüfe die richtige [Stallgruppe](/guides/stable-groups/). Trenne Hengste von nicht zur Zucht bestimmten Stuten.",
            "Vergleiche Ausbau, Verkauf, [Export](/horses/import-and-export/) oder Pension einschließlich Unterhalt."
          ]
        },
        {
          "type": "image",
          "src": "/assets/scene-11.jpg",
          "alt": "Pferdeübersicht mit Alter, Zustand und Stallgruppenspalte",
          "caption": "Prüfe Alter und Gruppen vor dem Platzwechsel. Pferde und Zahlen im offiziellen Bild sind Beispiele.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Jährling wird erwachsen und der Stall ist voll",
      [
        {
          "type": "paragraph",
          "text": "Spieler berichten, dass erwachsene Jährlinge ohne Platz weggeschickt werden können. Andere empfehlen nach Freimachen einer Box den Verkaufsstall in der Stadt zu prüfen. Das ist ein Bericht, keine Wiederherstellungsgarantie.",
          "source": "t_boardedBack"
        },
        {
          "type": "paragraph",
          "text": "Prüfe Übersicht und letzte Meldungen vor weiteren Tagen oder Ersatzkäufen. Sichere bei Unklarheiten den Spielstand und melde mit F8. [Fohlen und Jährlinge](/horses/foals-and-yearlings/) beschreibt auch das Verschieben über die Verwaltung."
        }
      ]
    ],
    [
      "Ausbau und Unterhalt abwägen",
      [
        {
          "type": "paragraph",
          "text": "[Gebäude](/buildings/) nennt ältere Community-Stufen mit 4, 8, 14 und 20 Boxen. Vergleiche den aktuellen Bildschirm. Seit v1.0.3 steigert Stallausbau auch Pensionsgebühren; Geldeinstellungen können Kosten ändern.",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Mehr Boxen helfen bei echtem Platzmangel. Fehlt Pflegezeit oder Geld, prüfe zuerst [Personal](/guides/staff/) und [Einnahmen](/guides/money-making/). Dies ist Planungshilfe, keine optimale Ausbaureihenfolge."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Mehr als 20 Pferde möglich?",
      "Laut Studio über zusätzliche bezahlte Pension beim Züchter."
    ],
    [
      "Brauchen Jährlinge Erwachsenenboxen?",
      "Laut Community erst beim Erwachsenwerden; vorher leben sie im eigenen Paddock."
    ],
    [
      "Erhöht der Anhänger die Stallkapazität?",
      "Nein. Transport und Unterbringung sind getrennt."
    ],
    [
      "Wo ist mein erwachsener Jährling?",
      "Spieler empfehlen bei vorher vollem Stall den Verkaufsstall zu prüfen. Keine Garantie."
    ]
  ],
  "unknown": "Kapazitäten waren als veränderlich gekennzeichnet. Prüfe aktuelle Grenzen und Gebühren; Wiederherstellungshinweise sind Spielerberichte."
},
    '/guides/staff-not-working/': {
  "title": "Personal arbeitet nicht? Zuweisungen und Julia",
"seoTitle": "Horses of Hoofprint Bay: Personalprobleme und Julia | Wiki",
  "description": "Prüfe Rollen, Julias Reitstundenplätze und Pferdezustand, bevor du mehr Personal einstellst oder neu beginnst.",
  "answer": "Prüfe Rolle und jeden Zuweisungsplatz. Laut Spielern gibt Julia eine Stunde pro belegtem Platz: Zwei einmal zugewiesene Pferde füllen nicht automatisch acht Stunden. Dasselbe Pferd kann mehrere Plätze belegen. Vergleiche Zustand und Trainingsverlust mit den Löhnen.",
  "sections": [
    [
      "Die tatsächliche Rolle prüfen",
      [
        {
          "type": "paragraph",
          "text": "Steam bestätigt Pflege- und Trainingspersonal sowie Bewerbungen durch Gebäudeausbau. Marias Reitfeedback und Julias Schülerstunden sind verschiedene Aufgaben. Lies die Rolle im aktuellen Personalbildschirm.",
          "source": "steam"
        },
        {
          "type": "image",
          "src": "/assets/scene-6.jpg",
          "alt": "Büro mit Personalordner zwischen Pension und medizinischem Bericht",
          "caption": "Über Staff öffnest du Personal und Zuweisungen. Das Bild zeigt den Einstieg, nicht den gesamten Zuweisungsbildschirm.",
          "width": 1920,
          "height": 1080,
          "source": "steam"
        }
      ]
    ],
    [
      "Julia gibt nur eine Stunde pro Pferd",
      [
        {
          "type": "paragraph",
          "text": "Im Steam-Thread erwartete ein Spieler bei zwei zugewiesenen Pferden acht automatisch verteilte Stunden. Eine Antwort erklärt: Jeden Platz belegen; dasselbe Pferd kann mehrfach zugewiesen werden.",
          "source": "t_julia"
        },
        {
          "type": "steps",
          "items": [
            "Zähle belegte Plätze, nicht nur verschiedene Pferde.",
            "Weise jedem gewünschten Platz innerhalb der angezeigten Grenzen ein Pferd zu.",
            "Prüfe am nächsten Tag Stunden, Einnahmen und Pferdezustand.",
            "Notiere bei abgelehnter Zuweisung Meldung und Version."
          ]
        },
        {
          "type": "note",
          "title": "Aktuelle Löhne und Grenzen nutzen",
          "text": "Der ursprüngliche Beitrag nennt 100 pro Tag und acht Stunden. Das sind datierte Spielerwerte, keine Garantie für alle Einstellungen."
        }
      ]
    ],
    [
      "Symptom eingrenzen",
      [
        {
          "type": "table",
          "caption": "Personalchecks",
          "headers": [
            "Symptom",
            "Prüfen",
            "Anleitung"
          ],
          "rows": [
            [
              "Zu wenige Stunden",
              "Plätze und Pferdezustand",
              "[Reitstunden](/training/riding-lesson-corrections/)"
            ],
            [
              "Trainer kann Pferd nicht nutzen",
              "Gesundheit und verfügbare Arbeit",
              "[Training gesperrt](/training/horse-too-tired-to-train/)"
            ],
            [
              "Maria sagt wenig",
              "Reitfeedback statt automatischer Stunden",
              "[Personalrollen](/guides/staff/)"
            ],
            [
              "Einnahmen steigen nicht wie erwartet",
              "Reitplatz beeinflusst Stunden, Stall Pension",
              "[Geld](/guides/money-making/)"
            ]
          ]
        }
      ]
    ],
    [
      "Trainingsverlust und verbleibende Fehler",
      [
        {
          "type": "paragraph",
          "text": "Spieler berichten von etwas Kraft- und Ausdauerverlust bei Schulpferden. Mehr Stunden schaffen auch Nachtrainingsarbeit. Prüfe den Zustand nach einem Tag vor der Maximierung aller Plätze.",
          "source": "t_lessonStats"
        },
        {
          "type": "paragraph",
          "text": "Aktualisiere, sichere den Spielstand und melde reproduzierbare Fehler mit F8. Nenne Personal, Zuweisungen, Zustand und Tagesergebnis. Kein geprüfter Patch verspricht alle Personalfehler zu lösen; ein neuer Spielstand ist nicht der erste Prüfschritt."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Warum nur zwei Stunden?",
      "Laut Spielern zählt jeder belegte Platz; es gibt keine automatische Verteilung auf alle Plätze."
    ],
    [
      "Dasselbe Pferd mehrfach?",
      "Ja, laut Steam-Antwort. Beobachte Zustand und Training."
    ],
    [
      "Gibt Maria Schülerstunden?",
      "Sie gibt beim eigenen Training Reitfeedback, anders als Julia."
    ],
    [
      "Neu beginnen?",
      "Prüfe zuerst Rollen, Zuweisungen und Zustand. Aktualisiere und melde einen nachvollziehbaren Fehler."
    ]
  ],
  "unknown": "Zuweisungen basieren auf Spielerberichten. Aktuelle Löhne, Grenzen und alle Personalfehler wurden nicht unabhängig getestet."
},
    '/competitions/cannot-enter/': {
  "title": "Keine Turnierteilnahme: Checks und Patch",
"seoTitle": "Horses of Hoofprint Bay: Keine Turnierteilnahme: Hilfe | Wiki",
  "description": "Prüfe v1.0.4, Transport, ausgewähltes Pferd, Zustand und Teilnahmebedingungen vor dem nächsten Versuch.",
  "answer": "Aktualisiere zuerst: v1.0.4 nennt eine Korrektur verhinderter Turnierteilnahme. Prüfe dann Transport, Pferd, Zustand und genaue Meldung. Ein Startpferd mit zu wenig Potenzial braucht gegebenenfalls Caprilli oder einen Ersatz statt einer Fehlerumgehung.",
  "sections": [
    [
      "Zuerst die Korrektur installieren",
      [
        {
          "type": "paragraph",
          "text": "Die Ankündigung vom 13. November 2026 UTC fasst v1.0.3–v1.0.5 zusammen und nennt den Teilnahmefehler unter v1.0.4. Installiere v1.0.5 oder neuer, starte neu und vergleiche dasselbe Pferd und dieselbe Prüfung.",
          "source": "patch105"
        },
        {
          "type": "paragraph",
          "text": "Die Ankündigung erklärt nicht jede Ursache. Nicht jede blockierte Meldung ist ein Fehler; fahre bei Problemen mit den folgenden Checks fort."
        }
      ]
    ],
    [
      "Symptom zuordnen",
      [
        {
          "type": "table",
          "caption": "Teilnahmeprobleme",
          "headers": [
            "Beobachtung",
            "Nächster Check"
          ],
          "rows": [
            [
              "Pferd fehlt in der Stadt",
              "Auswahl und [Anhänger](/competitions/trailer-and-multiple-horses/)"
            ],
            [
              "Anforderungsmeldung",
              "Genauer Text gegen Werte, Gesundheit und Arbeit"
            ],
            [
              "Austrainiertes Startpferd reicht nicht",
              "Passendes Caprilli; siehe [Fortschritt](/guides/competitions/)"
            ],
            [
              "Schaltfläche reagiert nicht",
              "Update, Neustart, Version und Meldung notieren"
            ],
            [
              "Teilnahme klappt, Ergebnis schlecht",
              "[Springen](/training/jumping-tips/) und [Selbstvertrauen](/training/confidence/) üben"
            ]
          ]
        }
      ]
    ],
    [
      "Wiederholbare Checkliste",
      [
        {
          "type": "steps",
          "items": [
            "Lies Prüfung und alle Anforderungen; bewahre den genauen Text für Nachfragen auf.",
            "Prüfe, welches Pferd mitgefahren ist. Transport und Qualifikation sind getrennt.",
            "Prüfe Zustand und Arbeit. Nutze [gesperrtes Training](/training/horse-too-tired-to-train/) bei fehlenden Optionen.",
            "Wähle passend zu Training und Potenzial, versuche die Meldung und notiere das Ergebnis."
          ]
        },
        {
          "type": "paragraph",
          "text": "Dies ist eine Diagnosehilfe, keine universelle Liste aller Regeln. Eine vollständige aktuelle Grenzwerttabelle liegt hier nicht vor."
        }
      ]
    ],
    [
      "Die Startwerte können die Ursache sein",
      [
        {
          "type": "paragraph",
          "text": "Caprilli wurde ergänzt, weil angepasste Startpferde selbst austrainiert nicht mehr das erste Springturnier erreichten. Ältere Februar-Demo-Tipps können daher unpassend sein.",
          "source": "devMay"
        },
        {
          "type": "paragraph",
          "text": "Ist das Potenzial ausgeschöpft, hilft mehr Wiederholung möglicherweise nicht. Vergleiche [Kauf](/guides/buy-sell-horses/) und [Zucht](/guides/breeding/) oder nutze Schwierigkeitseinstellungen. Bleibt ein passendes Pferd nach dem Update blockiert, melde mit F8 samt Version und Meldung."
        }
      ]
    ]
  ],
  "faq": [
    [
      "Welcher Patch behebt den Fehler?",
      "v1.0.4 nennt die Korrektur. Installiere v1.0.5 oder neuer."
    ],
    [
      "Ist jede Sperre ein Bug?",
      "Nein. Prüfe Transport, Pferd und Bedingungen."
    ],
    [
      "Warum reicht das Startpferd nicht?",
      "Die Startwerte wurden gesenkt und Caprilli als frühere Stufe ergänzt."
    ],
    [
      "Was gehört in den Bericht?",
      "Version, Pferd, Prüfung, genaue Meldung und Verhalten beim Versuch."
    ]
  ],
  "unknown": "Der Patch nennt nicht jede Bedingung oder Ursache. Aktuelle Gebühren und Grenzen müssen im Spiel geprüft werden."
}
  }
};
