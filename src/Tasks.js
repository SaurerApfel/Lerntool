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
        question: 'Auf deinem Weg nach draußen musst du die Codes an den Wänden entziffern. Dazu benötigst du Kenntnisse über Codierungen. Was ist der Hauptzweck der ASCII-Codierung?',
        options: {
        a: 'Codierung von chinesischen Schriftzeichen',
        b: 'Codierung von Buchstaben, Zahlen und Sonderzeichen im lateinischen Alphabet',
        c: 'Codierung von Bilddateien',
        d: 'Codierung von Audioinformationen',
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
        question: 'Welches der Zeichen gehört nicht zum 7-Bit-AsCII-Code?',
        options: {
          a: '?', b: '@', c: '€', d: '?',
        },
        correctAnswer:"c",
      },
    {
      type: 'input',
      question: 'Deine Rechenkünste sind nun gefragt. Wie viele einzelne Zeichen kann eine Zeichencodierung mit 16-bit codieren?',
      correctAnswer:"65536",
    },
    {
        type: 'input',
        question: 'Jetzt will ich sehen, ob du auch selbst etwas an die Wand mit der Hilfe von 0en und 1en schreiben kannst. Wie lautet der 8-Bit-ASCII-Code für das Wort Tempel?',
        correctAnswer: '01010100 01100101 01101101 01110000 01100101 01101100',
      },
  ],
  //LVL4
  [
    {
      type: 'multipleChoice',
      question: 'An der Wand steht der folgende 8-Bit-ASCII-Code  : 01001000 0110010101101100 01101100 01101111 00100001. Deine Aufgabe ist es, diesen Code zu entschlüsseln.', 
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
      type: 'multipleChoice',
      question: 'Welcher 8-Bit-ASCII-Code repräsentiert das Sonderzeichen & könnte man das Zeichen auch in 7-Bit-ASCII darstellen?',
      options: {
      a: '00100110 und Ja',
      b: '11011001 und Nein', 
      c: '01001010 und Ja',
      d: '10110101 und Nein',
      },
      correctAnswer: 'a',
    },
  ],
  //LVL5
  [
    {
      type: 'multipleChoice',
      question: 'Auch in diesem Raum wird dein Wissen zu Codierungen auf die Probe gestellt. Wozu wurde Unicode in erster Linie erfunden?',
      options: {
      a: 'Codierung aller europäischer Schriftzeichen',	b: 'Codierung von Zeichen möglichst vieler Schriftsysteme weltweit', c: 'Codierung von mathematischen Formelzeichen',	d: 'Codierung der japanischen Schriftzeichen'
      },
      correctAnswer:"b",
      
    },
    {
        type: 'multipleChoice',
        question: 'Wie viele Bytes werden benötigt, um ein Zeichen im 8-Bit-ASCII-Code zu speichern?',
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
            question: 'Auf dem Schloss von dieser Tür steht das Wort "CODE". Damit das Schloss sich öffnet, wird der passende ASCII-Code benötigt.',
            options: {
              a: '1100011 1001111 1000100 1000101', b: '1000011 1001111 1000110 1000101',
              c: '1000011 1001111 1001100 1000101', d: '1000011 1001111 1000100 1000101',
            },
            correctAnswer: 'd',
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
        type: 'multipleChoice',
        question: 'Bei ASCII existieren zwei verschiedene Varianten. Aber welche Variante wird heute am häufigsten verwendet?',
        options:
        {
        a: 'UTF-8',
          b: 'UTF-16',
          c: 'UTF-32',
          d: 'UTF-64',
        },
        correctAnswer: 'a',
      }  
  ],
  //LVL7
  [
      {
        type: 'multipleChoice',
        question: 'Unicode kann teilweise  verwirrend sein. So viele Formate, so viele Möglichkeiten. Aber welche Aussage über Unicode stimmt überhaupt?',
        options:
        {
          a: 'Unicode kann nur lateinische Buchstaben darstellen',
          b: 'Jedes Zeichen im Unicode hat eine eindeutige Codierung',
          c: 'Unicode ist ausschließlich für die Darstellung von Zahlen konzipiert',
          d: 'Es gibt acht Versionen von Unicode',
        },
        correctAnswer: 'b',
      },
    {
        type: 'multipleChoice',
        question: 'Codiere das Zeichen 5 in 8-Bit-ASCII',
        options: {
          a: '01010100', b: '01000101', c: '00110101', d: '10101010',
        },
        correctAnswer: 'c',
        },
        {
            type: 'multipleChoice',
            question: 'Dekodiere die ASCII-Dezimalzahlen "87, 105, 110, 100" und setze die einzelnen Buchstaben zu einem Wort zusammen',
            options: {
              a: 'Wind', b: 'Feuer', c: 'Wasser', d: 'Erde'
            },
            correctAnswer: 'a',
          }
  ],
  //LVL8
  [
    {
        type: 'multipleChoice',
        question: 'Wo liegt der Unterschied zwischen UTF-8, UTF-16 und UTF-32?',
        options: {
          a: 'Anzahl der codierten Zeichen', b: 'kein Unterschied', c: 'Anzahl der Bytes', d: 'Ursprungsjahr',
        },
        correctAnswer: 'c',
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
        question: 'Wie lautet die Unicode-Darstellung für das Zeichen "ß"?',
        options: {
          a: 'U+00DF', b: 'U+1E9E', c: 'U+0111', d: 'U+03B2'
        },
        correctAnswer: 'a',
      },
    {
      type: 'input',
      question: 'Wie viele Bits werden benötigt, um alle möglichen Unicode-Zeichen darzustellen?',
      correctAnswer:"21",
    },
    {
      type: 'multipleChoice',
      question: 'Dekodiere diesen Unicode: "11110011 10000010 10011111"',
      options: {
        a: '€', b: '©', c: '®', d: '¥'
      },
      correctAnswer:"b",
    },
  ],
  //LVL10
  [
    {
        type: 'multipleChoice',
        question: 'Welcher Unicode-Code steht für den "Zwinkernden Smiley"?',
        options: {
          a: 'U+1F604', b: 'U+1F609', c: 'U+1F60F', d: 'U+1F60D'
        },
        correctAnswer: 'b',
    },
    {
      type: 'multipleChoice',
      question: '01001000 01100101 01101100 01101100 01101111 00101100  00100000 01110111 01101001 01100101 01101110 01100101 01110011 00101100 01110111 01101001 01100101 01100100 01100101 01110011. Welcher Satz wird durch diese UTF-8 Codierung repräsentiert?',
      options: {
        a: 'Hello, wie geht es dir?', b: 'Hallo, wie geht es dir?', c: 'Hallo, was machst du?', d: 'Hello, was machst du?'
      },
      correctAnswer:"a",
    },
    {
      type: 'multipleChoice',
      question: 'Du hast nur noch ein Rätsel vor dir. Welches der folgenden Zeichen repräsentiert einen Smiley im Unicode?',
      options: {
        a: 'U+0041',
        b: 'U+263A',
        c: 'U+0010',
        d: 'U+22B0',
      },
      correctAnswer:"b",
    },
  ]
    ];

    export default tasks;