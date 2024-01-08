import React from 'react';
import './ASCIIExplain.css';

const UnicodeExpl = () => {
  return (
    <div className="ascii-container">
      <p>
Die aktuelle Version von Unicode enth ̈alt ungef  ̈ahr 150.000 verschiedene Zeichen. Mit
den zur Verf  ̈ugung stehenden 32 Bit in UTF-32 h  ̈atte man theoretisch die M  ̈oglichkeit,
über 4 verschiedene Milliarden Zeichen zu codieren. Es ist klar erkennbar, dass die
Möglichkeiten von Unicode bei weitem noch nicht ausgesch ̈opft sind.
Die Darstellung eines Unicode-Zeichens erfolgt in der Regel durch die Verwendung
einer Zeichenkette, die mit einem großen ”U” beginnt, gefolgt von einem Pluszeichen
und einer vierstelligen hexadezimalen Zahl. Zum Beispiel wird das Zeichen ’A’ als
Unicode-Codepunkt als ”0041” dargestellt. In Verbindung mit den ersten beiden Teilen der Darstellung 
ergibt sich somit die Unicode-Darstellung ”U+0041” für das Zeichen ’A’.
      </p>
    </div>
  );
};

export default UnicodeExpl;