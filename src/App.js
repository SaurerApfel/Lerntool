// Startscreen, beim aufrufen der erscheint das Pop-up (showPopup)
// nachdem Spiel starten geklickt wird, wird Pop-up geschlossen und GameScreen wird angezeigt.
import React, { useState, useEffect } from 'react';
import GameScreen from './GameScreen';
import './GameScreen.css';
import './App.css';
import FinalScreen from './FinalScreen';


function App() {

const initialBackgroundImage = require('./pictures/eingang.jpeg');
const [showPopup, setShowPopup] = useState(true);
const [showFinalScreen, setShowFinalScreen] = useState(false);
const [totalPoints, setTotalPoints] = useState(0);


    const closePopup = () => {
    setShowPopup(false);
  };

  const handleGameCompletion = (points) => {
    setTotalPoints(points);
    setShowFinalScreen(true);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${initialBackgroundImage})`;
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
  }, []);
  
  

  return (
    <div className="App" style={{ backgroundColor: 'transparent' }}>
      {showPopup ? (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-content">
            <h2 id='heading'>Willkommen zum ASCII und Unicode Lernspiel</h2>
              <p id='text'>Schaffst du es alle Rätsel zu lösen um aus dem Tempel zu entkommen?
              Auf deinem Weg nach draußen musst du 10 verschiedene Räume durchqueren.
              In jedem Raum warten drei unterschiedliche Aufgaben auf dich, die du lösen musst, 
              um den Weg nach draußen zu finden.
              Jeder einzelne Raum wird durch ein Level in diesem Spiel repräsentiert.
              Mit jeder korrekten Antwort sammelst du Punkte für dein Punktekonto. Aber Vorsicht!
              Sei nicht zu schnell. Bei den Aufgaben, bei denen dir Antwortmöglichkeiten vorgegeben werden,
              können dir Punkte abgezogen werden. Das Raten von Antworten kann deinen Punktestand schnell schmelzen lassen.
              Für deinen Weg nach draußen gebe ich dir zwei Schriftrollen mit, die dir behilflich sein könnten. 
              Bist du dir bei einem Rätsel unsicher, empfehle ich dir dort reinzuschauen. Im Spiel sind sie als Erklärungen gekennzeichnet. 
              An der Leiste, die du oben sehen kannst, kannst du erkennen auf welchem Level du dich befindest und wie viele
              du noch vor dir hast. Du kannst dich in dem Tempel zwar frei bewegen und dich in den einzelnen Räumen umsehen,
              aber die letzte Tür öffnet sich nur, wenn alle anderen Türen im Tempel bereits geöffnet worden sind. Viel Erfolg!</p>
              <button className='button' onClick={closePopup}>Spiel Starten</button>
            </div>
          </div>
        </div>
      ) : (
        <header className="App-header" style={{ backgroundColor: 'transparent' }}>
          <div>
          </div>
          {showFinalScreen ? (
        <FinalScreen totalPoints={totalPoints} />
      ) : (
        <GameScreen onGameCompletion={handleGameCompletion} />
      )}
        </header>
      )}
    </div>
  );
 }
  

export default App;