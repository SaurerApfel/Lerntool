// Hauptkomponente, zuständig für den Spielablauf
import React, { useState, useEffect } from 'react';
import './GameScreen.css';
import ASCIIExpl from './ASCIIExplain';
import UnicodeExpl from './UnicodeExplain';
import TaskScroll from './TaskScroll';
import tasks from './Tasks'; 
import Modal from 'react-modal';
import FinalScreen from './FinalScreen';

const GameScreen = ({ onGameCompletion }) => {

  const levelBackgrounds = {
    0: require('./pictures/tempel.jpeg'),
    1: require('./pictures/tempel1.jpeg'),
    2: require('./pictures/tempel2.jpeg'),
    3: require('./pictures/tempel3.jpeg'),
    4: require('./pictures/tempel4.jpeg'),
    5: require('./pictures/tempel5.jpeg'),
    6: require('./pictures/tempel6.jpeg'),
    7: require('./pictures/tempel7.jpeg'),
    8: require('./pictures/tempel8.jpeg'),
    9: require('./pictures/tempel9.jpeg'),
    10: require('./pictures/tempel10.jpeg'),
  };

    const [currentLevel, setCurrentLevel] = useState(0);
    const [solution, setSolution] = useState("");
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [scoreAnimation, setScoreAnimation] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [solvedTasks, setSolvedTasks] = useState(Array.from({ length: 10 }, () => []));
    const [animationComplete, setAnimationComplete] = useState(false);
    const [asciiModalIsOpen, setAsciiModalIsOpen] = useState(false);
    const [unicodeModalIsOpen, setUnicodeModalIsOpen] = useState(false);
    const [isEvaluationInProgress, setEvaluationInProgress] = useState(false);
    const [totalPoints, setTotalPoints] = useState(0);
    const [showFinalScreen, setShowFinalScreen] = useState(false);

    
    const levelAsNumber = parseInt(currentLevel, 10);

    //Ist spiel beendet? Wenn ja mit punktzahl aufrufen, dann erscheint FinalScreen
    const handleGameCompletion = (score) => {
      onGameCompletion(score);
    };

    //Task-Bar
    const handleTaskClick = (index) => {
      setCurrentTaskIndex(index);
    };

 //Background initialisiereen

    const initializeBackgroundImage = () => {
      const initialBackgroundImage = levelBackgrounds[currentLevel];
      document.body.style.backgroundImage = `url(${initialBackgroundImage})`;
      document.body.style.backgroundSize = '100% 100%';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center center';
    };
 
    useEffect(() => {
      initializeBackgroundImage(); 
    }, []);
//Score Animation
      useEffect(() => {
        if (score !== 0) {
          setScoreAnimation(true);
          setTimeout(() => {
            setScoreAnimation(false);
          }, 1000); 
        }
      }, [score]);

      // überprüfe, ob alle Aufgaben richtig und wenn ja, beende spiel
      useEffect(() => {
        if (AllTasksSolved()) {
          handleGameCompletion(score);
        }
      }, [solvedTasks]);

  

  //ASCII-Erklärung

      const AsciiModal = ({ isOpen, closeModal }) => (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="ASCII Erklärung"
          ariaHideApp={false}
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
<div style={{ margin: 'auto', textAlign: 'center',}}>
      <ASCIIExpl />
      <div style={{ marginTop: '-70px' }}>
        <button className="ModalButton" onClick={closeModal}>
          Schließen
        </button>
      </div>
    </div>
  </Modal>
      );

      //Unicode-Erklärung
      const UnicodeModal = ({ isOpen, closeModal }) => (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Unicode Erklärung"
          ariaHideApp={false}
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
<div style={{ margin: 'auto', textAlign: 'center',}}>
      <UnicodeExpl />
      <div style={{ marginTop: '-70px' }}>
        <button className="ModalButton" onClick={closeModal}>
          Schließen
        </button>
      </div>
    </div>
  </Modal>
      );

      const openAsciiModal = () => setAsciiModalIsOpen(true);
      const closeAsciiModal = () => setAsciiModalIsOpen(false);
      const openUnicodeModal = () => setUnicodeModalIsOpen(true);
      const closeUnicodeModal = () => setUnicodeModalIsOpen(false);


// Level-Bar funktionalität

      const handleLevelClick = (level) => {
      setCurrentLevel(level);
      setCurrentTaskIndex(0);
      const body = document.querySelector('body');
      body.style.backgroundImage = `url(${levelBackgrounds[level]})`;
      setBackgroundImage(`url(${levelBackgrounds[level]})`);
      };

//Auswertungsfunktion Input-Aufgaben
      const handleSubmit = () => { 
        const num = 10 + levelAsNumber;
        const currentTask = tasks[currentLevel][currentTaskIndex];
        if (currentTask.type === 'input') {
          if (!solvedTasks[currentLevel].includes(currentTaskIndex)) {
            if (solution.trim() === currentTask.correctAnswer) {
              setScore((prevScore) => prevScore + 10 + levelAsNumber);
              setMessage(`Richtig! Du hast ${num} Punkte für diese Antwort bekommen.`);
              setSolvedTasks((prevSolvedTasks) => {
                const updatedSolvedTasks = [...prevSolvedTasks];
                updatedSolvedTasks[currentLevel] = [...updatedSolvedTasks[currentLevel], currentTaskIndex];
                if (AllTasksSolved()) {
                  handleGameCompletion(score);
                }
                return updatedSolvedTasks;
              });
              setCurrentTaskIndex((prevIndex) => {
                if (prevIndex < tasks[currentLevel].length - 1) {
                  return prevIndex + 1;
                } else {
                  setCurrentLevel((prevLevel) => prevLevel + 1);
                  return 0; 
                }
              });
            } else {
              setMessage("Leider falsch. Schaue dir noch einmal die Erklärungen an.");
              setScore((prevScore) => (prevScore >= 1  ? prevScore - 1 : 0));
            }
          } else {
            setMessage("Du hast diese Aufgabe bereits gelöst.");
          }
        }
        if (AllTasksSolved()) {
          handleGameCompletion(score);
        }
        setSolution("");
      };
    
    //überprüfen ob alle 30 Aufgaben gelöst sind
    const AllTasksSolved = () => {
      const totalTasks = tasks.flat().length;
      const totalSolvedTasks = solvedTasks.flat().length;
      return totalSolvedTasks === totalTasks;
    };

//Auswertungsfunktion Multiple-Choice
    const handleOptionClick = (selectedOption) => {
      if (!isEvaluationInProgress) {
        setEvaluationInProgress(true);
        const num = 10 + levelAsNumber;
      const optionElement = document.getElementById(selectedOption);
      if (optionElement) {
        optionElement.classList.add("glowing");
        if (!solvedTasks[currentLevel].includes(currentTaskIndex)) {
        setTimeout(() => {
          optionElement.classList.remove("glowing");
          if (selectedOption === tasks[currentLevel][currentTaskIndex].correctAnswer) {
            setScore((prevScore) => prevScore + 10 + levelAsNumber);
            setMessage(`Richtig! Du hast ${num} Punkte für diese Antwort bekommen.`);
            setCurrentTaskIndex((prevIndex) => prevIndex + 1);
            setSolvedTasks((prevSolvedTasks) => {
              const updatedSolvedTasks = [...prevSolvedTasks];
              updatedSolvedTasks[currentLevel] = [...updatedSolvedTasks[currentLevel], currentTaskIndex];
              if (AllTasksSolved()) {
                handleGameCompletion(score);
              }
              return updatedSolvedTasks;
            });
            if (currentTaskIndex + 1 === tasks[currentLevel].length) {
              if (currentLevel < 9) {
              setCurrentLevel((prevLevel) => (prevLevel === "0" ? "1" : prevLevel +1));
              setCurrentTaskIndex(0);
              }
              else {
                setCurrentLevel((prevLevel) => (prevLevel));
                setCurrentTaskIndex(2);
              }
            }
          } else {
            setMessage("Leider falsch. Schaue dir noch einmal die Erklärungen an.");
            setScore((prevScore) => Math.max(prevScore - levelAsNumber - 3, 0));
          }
          if (AllTasksSolved()) {
            handleGameCompletion(score);
          }
          setSolution("");
          setEvaluationInProgress(false);
        }, 2500); 
      }
      else {
        optionElement.classList.remove("glowing");
        setMessage("Du hast diese Aufgabe bereits gelöst.");
        setEvaluationInProgress(false);
        if (AllTasksSolved()) {
          handleGameCompletion(score);
        }
        }
      }
    }
    };


      return (
<div className="game-container">
  <div className="level-bar">
    {Array.from({ length: 10 }, (_, index) => (
      <div
        key={index}
        className={`level-indicator ${index === currentLevel ? 'current-level' : ''}`}
        onClick={() => handleLevelClick(index)}
      >
        {index + 1}
      </div>
    ))}
  </div>
  <div className="button-container">
    <button type="button" className="button" onClick={openAsciiModal}>
      ASCII Erklärung
    </button>
    <AsciiModal isOpen={asciiModalIsOpen} closeModal={closeAsciiModal} />
    <button className="button" onClick={openUnicodeModal}>
      Unicode Erklärung
    </button>
    <UnicodeModal isOpen={unicodeModalIsOpen} closeModal={closeUnicodeModal} />
  </div>
  <div className="task-container">
    <div className="task-progress">
      {Array.from({ length: tasks[currentLevel].length }, (_, index) => (
        <div
          key={index}
          className={`task-indicator ${index === currentTaskIndex ? 'current-task' : ''}`}
          onClick={() => handleTaskClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
    <div className={`score-container ${scoreAnimation ? 'score-animation' : ''}`}>
      <span className="score-text">Punktestand:</span>
      <span className="score-value">{score}</span>
    </div>
  </div>

  <div className="task-container">
      <div className="task-text">
        <TaskScroll taskText={tasks[currentLevel][currentTaskIndex].question} />
        {tasks[currentLevel][currentTaskIndex].type === 'multipleChoice' && (
          <div className="options-container">
            {Object.entries(tasks[currentLevel][currentTaskIndex].options).map(([key, value]) => (
              <div key={key} id={key} className="option" onClick={() => handleOptionClick(key)}>
                {`${key}) ${value}`}
              </div>
            ))}
          </div>
        )}
      </div>
    {tasks[currentLevel][currentTaskIndex].type === 'input' && (
      <div>
        <input
          type="text"
          className="input-field"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
        <button className="buttonSubmit" onClick={handleSubmit}>
          Antwort bestätigen
        </button>
      </div>
    )}
          {message && (
              <div className="popup-game">
                <div className="popup-game-content">
                  <h2>{message}</h2>
                  <button className="button" onClick={() => setMessage("")}>Schließen</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )
          }    
    
export default GameScreen;