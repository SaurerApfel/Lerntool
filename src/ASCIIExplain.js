import React from 'react';
import './ASCIIExplain.css';

const ASCIIExpl = () => {
  return (
    <div className="ascii-container">
      <p>
ASCII steht für "American Standard Code for Information Interchange" und ist eine Zeichencodierung. 
Es handelt sich bei dieser Codierung um einen international anerkannten Standard, der heutzutage weit verbreitet ist. 
Man unterscheidet zwischen dem normalen ASCII-Code und dem erweiterten ASCII-Code. 
Diese beiden unterscheiden sich in der Anzahl der Zeichen, die codiert werden können und somit auch in der Anzahl der Bits, die für die Codierung benötigt werden. 
Die 128 Zeichen des normalen ASCII-Codes können in 7-Bit codiert werden, während die 256 Zeichen des erweiterten ASCII-Codes in 8-Bit codiert werden.
Die Zeichen, die mit dem normalen ASCII codiert werden können, entsprechen grundsätzlich den Zeichen einer englischen Tastatur.
Diese Gegebenheit hat auch zu der Verbreitung von ASCII beigetragen, da die meisten Tastaturen denselben Zeichenvorrat bedienen.  

Die Zeichencodierung mit ASCII funktioniert auf folgende Art und Weise:
Es gibt eine durchnummerierte Zeichentabelle, die die 128 Zeichen enthält, die codiert werden können. 
Die Einträge sind von 0 bis 127 durchnummeriert. Das bedeutet, dass jedem Zeichen in diesem Bereich eine Zahl zugeordnet ist. 
Zum Beispiel ist das Zeichen 'A' in ASCII mit der Zahl 65 codiert.
      </p>
    </div>
  );
};

export default ASCIIExpl;