const tasks = [
    // LVL 1
    [
    {
      type: 'input',
      question: 'Deine erste Aufgabe auf dem Weg nach draußen, besteht darin, die Binärzahl 100000 in eine Dezimalzahl umzuformen.',
      correctAnswer:"32",
    },
    {
      type: 'input',
      question: 'Binäre Zahlen lassen sich nicht nur in Dezimalzahlen umrechnen. Man kann sie auch untereinander addieren. Addiere die Binärzahlen 11001 und 11011',
      correctAnswer:"110100",
    },
    {
      type: 'multipleChoice',
      question: 'Die letzte Aufgabe in diesem Raum ist eine Kombination aus den ersten zwei Aufgaben. Als erstes sollen die Binärzahlen 1101 und 1111 addiert werden und das Ergebnis aus dieser Addition in eine Dezimalzahl umgewandelt werden. Überlege dir gut, für welche Antwort du dich entscheiden möchtest! Falsche Antworten lassen dein Punktekonto schrumpfen.',
      options: {
        a: '20', b: '21', c: '22', d: '24',
      },
      correctAnswer:"d",
    },
  ],
  //LVL 2
  [
    {
        type: 'multipleChoice',
        question: 'Auf deinem Weg nach draußen musst du die Codes an den Wänden entziffern. Was ist der Hauptzweck der ASCII-Codierung?',
        options: {
        a: 'Codierung von chinesischen Schriftzeichen',
        b: 'Codierung von Buchstaben, Zahlen und Sonderzeichen im lateinischen Alphabet',
        c: 'Komprimierung von Bilddateien',
        d: 'Übertragung von Audioinformationen',
        },
        correctAnswer: 'b',
        },
    {
      type: 'input',
      question: 'Kannst du auch die Zeichen entziffern, die hier im Raum an der Wand stehen? Mal sehen, ob du die Folgen aus 0en und 1en entziffern kannst. Für welches Zeichen steht der ASCII Code 1000110?',
      correctAnswer: "F",
    },
    {
        type: 'multipleChoice',
        question: 'Welcher ASCII-Wert repräsentiert das Zeichen "A"? Tipp: Wandle die Dezimalzahlen erst in Binärzahlen um?',
        options: {
        a: '65', 
        b: '72', 
        c: '89',
        d: '97',
        },
        correctAnswer: 'a',
      },
  ],
  //LVL 3
  [
    {
        type: 'multipleChoice',
        question: 'Unicode ist ein wenig komplizierter als ASCII. In der Unicode Erklärung hast du wahrscheinlich schon gelesen, dass es UTF-8, UTF-16 und UTF-32 gibt. Aber hast du das ganze auch wirklich verstanden? Mit welchem Format lassen sich mehr einzelne Zeichen codieren?',
        options: {
          a: 'UTF-8', b: 'UTF-16', c: 'UTF-32', d: 'mit allen gleich viele',
        },
        correctAnswer:"d",
      },
    {
      type: 'input',
      question: 'Deine Rechenkünste sind nun gefragt. Wie viele einzelne Zeichen kann eine Zeichencodierung mit 16-bit codieren?',
      correctAnswer:"65536",
    },
    {
        type: 'multipleChoice',
        question: 'Welcher ASCII-Wert repräsentiert das Zeichen "A"?',
        options: {
          a: '65', b: '72', c: '89', d: '97',
        },
        correctAnswer: 'a',
      },
  ],
  //LVL4
  [
    {
      type: 'multipleChoice',
      question: 'Dieser Text wurde im 8-Bit-ASCII-Code dargestellt: 01001000 0110010101101100 01101100 01101111 00100001. Deine Aufgabe ist es, diesen Code zu entschlüsseln.',
      question: 'Welcher ASCII-Wert repräsentiert das Zeichen "A"?',
        options: {
          a: 'Hallo!', b: 'hallo!', c: 'Hallo?', d: 'Heute!',
        },
        correctAnswer: 'a',
      },
    {
      type: 'input',
      question: 'Wie du sicherlich weißt, sind Bits und Bytes nicht das gleiche. Aber trotzdem hängen sie miteinander zusammen. Aus wie vielen Bits besteht ein Byte?',
      correctAnswer:"8",
    },
    {
      type: 'input',
      question: 'Jetzt musst du zeigen, dass du bis hierhin gut aufgepasst hast und dein neu erlangtes Wissen auch anwenden kannst. Welcher ASCII-Code repräsentiert das Sonderzeichen & ?',
      correctAnswer:"38",
    },
  ],
  //LVL5
  [
    {
      type: 'input',
      question: 'Wie du sicherlich weißt, sind Bits und Bytes nicht das gleiche. Aber trotzdem hängen sie miteinander zusammen. Aus wie vielen Bits besteht ein Byte?',
      correctAnswer:"8",
    },
    {
        type: 'multipleChoice',
        question: 'Wo liegt der Unterschied zwischen UTF-8, UTF-16 und UTF-32?',
        options: {
          a: 'Anzahl der codierten Zeichen', b: 'kein Unterschied', c: 'Anzahl der Bytes',
        },
        correctAnswer: 'c',
      },      
    {
            type: 'multipleChoice',
            question: 'Welcher ASCII-Wert repräsentiert das Wort "CODE"?',
            options: {
              a: '674951101',
              b: '67846869',
              c: '67686469',
              d: '6769769799101',
            },
            correctAnswer: 'b',
    },
  ],
  //LVL6
  [
    {
        type: 'multipleChoice',
        question: 'Wie viele Bytes werden in UTF-32 pro Zeichen verwendet?',
        options: {
          a: '1', b: '2', c: '4', d: '8',
        },
        correctAnswer: 'c',
      },      
      {
        type: 'multipleChoice',
        question: 'Was ist der Hauptunterschied zwischen ASCII mit 7 Bit und ASCII mit 8 Bit?',
        options: {
          a: 'Die Anzahl der darstellbaren Zeichen', b: 'Die Verwendung von Buchstaben und Zahlen', c: 'Die Art der Codierung', d: 'Es gibt keinen Unterschied',
        },
        correctAnswer: 'a',
      },
      {
        type: 'input',
        question: 'Entschlüssle die ASCII-Codierung "101 1101 0110" in ein Wort.',
        correctAnswer: 'Mädchen',
      }  
  ],
  //LVL7
  [
    {
        type: 'multipleChoice',
        question: 'Welche der folgenden Aussagen über Unicode ist korrekt?',
        options: {
        a: 'Unicode kann nur lateinische Buchstaben darstellen',
        b: 'Jedes Zeichen im Unicode hat einen eindeutigen Codepunkt',
        c: 'Unicode ist ausschließlich für die Darstellung von Zahlen konzipiert',
        d: 'Es gibt nur eine Version von Unicode',
        },
        correctAnswer: 'b',
    },
    {
        type: 'multipleChoice',
        question: 'Welches der folgenden Zeichen repräsentiert einen Smiley im Unicode?',
        options: {
        a: 'U+0041',
        b: 'U+263A',
        c: 'U+0010',
        d: 'U+22B0',
        },
        correctAnswer: 'b',
        },
        {
            type: 'multipleChoice',
            question: 'Welches der folgenden Unicode-Formate ist heutzutage am weitesten verbreitet?',
            options: {
            a: 'UTF-8',
            b: 'UTF-16',
            c: 'UTF-32',
            d: 'UTF-64',
            },
            correctAnswer: 'a',
            }
  ],
  //LVL8
  [
    {
        type: 'multipleChoice',
        question: 'Wie viele Bytes werden benötigt, um ein ASCII-Zeichen zu speichern?',
        options: {
        a: '1 Byte',
        b: '2 Bytes',
        c: '4 Bytes',
        d: '8 Bytes',
        },
        correctAnswer: 'a',
        },
        {
        type: 'multipleChoice',
        question: 'Welche der folgenden Aussagen über die Speichergröße von Unicode-Zeichen ist korrekt?',
        options: {
        a: 'Alle Unicode-Zeichen benötigen die gleiche Menge an Speicherplatz.',
        b: 'Unicode-Zeichen können unterschiedlich viel Speicherplatz benötigen.',
        c: 'Unicode-Zeichen benötigen immer 4 Bytes Speicherplatz.',
        d: 'ASCII-Zeichen benötigen mehr Speicherplatz als Unicode-Zeichen.',
        },
        correctAnswer: 'b',
    },
    {
        type: 'multipleChoice',
        question: 'Welche der folgenden Codierungen verwendet variable Byte-Längen für unterschiedliche Zeichen?',
        options: {
          a: 'ASCII', b: 'UTF-8', c: 'UTF-16', d: 'UTF-32',
        },
        correctAnswer: 'b',
      }
  ],
  //LVL9
  [
    {
        type: 'multipleChoice',
        question: 'Was ist der Hauptunterschied zwischen ASCII mit 7 Bit und ASCII mit 8 Bit?',
        options: {
          a: 'Die Anzahl der darstellbaren Zeichen', b: 'Die Verwendung von Buchstaben und Zahlen', c: 'Die Art der Codierung', d: 'Es gibt keinen Unterschied',
        },
        correctAnswer: 'a',
      },
    {
      type: 'input',
      question: '01001000 01100101 01101100 01101100 01101111 00101100 00100000 01110111 01101001 01100101 01101110 01100101 01110011 00101100 01110111 01101001 01100101 01100100 01100101 01110011. Welcher Satz wird durch diese UTF-8 Codierung repräsentiert?',
      correctAnswer:"a",
    },
    {
      type: 'input',
      question: 'Jetzt hast du es fast geschafft. Jetzt musst du aber zeigen, dass du bis hierhin gut aufgepasst hast und dein neu erlangtes Wissen auch anwenden kannst. Welcher ASCII-Code repräsentiert das Sonderzeichen & ?',
      correctAnswer:"a",
    },
  ],
  //LVL10
  [
    {
        type: 'multipleChoice',
        question: 'Welche der folgenden Aussagen über die Speichergröße von Unicode-Zeichen ist korrekt?',
        options: {
        a: 'Alle Unicode-Zeichen benötigen die gleiche Menge an Speicherplatz.',
        b: 'Unicode-Zeichen können unterschiedlich viel Speicherplatz benötigen.',
        c: 'Unicode-Zeichen benötigen immer 4 Bytes Speicherplatz.',
        d: 'ASCII-Zeichen benötigen mehr Speicherplatz als Unicode-Zeichen.',
        },
        correctAnswer: 'b',
    },
    {
      type: 'input',
      question: 'Deine Rechenkünste sind nun gefragt. Wie viele einzelne Zeichen kann eine Zeichencodierung mit 16-bit codieren?',
      correctAnswer:"a",
    },
    {
      type: 'input',
      question: 'Jetzt hast du es fast geschafft. Jetzt musst du aber zeigen, dass du bis hierhin gut aufgepasst hast und dein neu erlangtes Wissen auch anwenden kannst. Welcher ASCII-Code repräsentiert das Sonderzeichen & ?',
      correctAnswer:"a",
    },
  ]
    ];

    export default tasks;