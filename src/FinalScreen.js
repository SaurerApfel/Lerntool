//Abschluss-Screen mit Punktezahl
import React from 'react';
import './FinalScreen.css';

const FinalScreen = ({ totalPoints }) => {
    return (
      <div className="final-screen">
        <div className="result-container">
          <div className="blackboard">
            <h2>Herzlichen Glückwunsch!</h2>
            <p>Du hast alle Aufgaben richtig gelöst.</p>
            <p>Insgesamt hast du <span className="points">{totalPoints}</span> Punkte gesammelt</p>
          </div>
        </div>
      </div>
    );
  };

export default FinalScreen;