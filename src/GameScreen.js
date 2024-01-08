import React, { useState, useEffect } from 'react';
import './GameScreen.css';
import ASCIIExpl from './ASCIIExplain';
import UnicodeExpl from './UnicodeExplain';
import TaskScroll from './TaskScroll';
import tasks from './Tasks'; 
import Modal from 'react-modal';



function GameScreen() {

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

    const [currentLevel, setCurrentLevel] = useState("0");
    const [solution, setSolution] = useState("");
    const [showAsciiPopup, setShowAsciiPopup] = useState(false);
    const [showUnicodePopup, setShowUnicodePopup] = useState(false);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [scoreAnimation, setScoreAnimation] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [solvedTasks, setSolvedTasks] = useState(Array.from({ length: 10 }, () => []));
    const [showGame, setShowGame] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [asciiModalIsOpen, setAsciiModalIsOpen] = useState(false);
    const [unicodeModalIsOpen, setUnicodeModalIsOpen] = useState(false);
    const [resultModalIsOpen, setResultModalIsOpen] = useState(false);

    
    const levelAsNumber = parseInt(currentLevel, 10);

    const handleTaskClick = (index) => {
      setCurrentTaskIndex(index);
    };

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



      useEffect(() => {
        if (score !== 0) {
          setScoreAnimation(true);
          setTimeout(() => {
            setScoreAnimation(false);
          }, 1000); 
        }
      }, [score]);

      useEffect(() => {
        const timeoutID = setTimeout(() => {
          setShowGame(true);
        }, 1000);
        return () => clearTimeout(timeoutID);
      }, []);

      const openModal = () => {
        setModalIsOpen(true);
      }
    
      const closeModal = () => {
        setModalIsOpen(false);
      }

      const AsciiModal = ({ isOpen, closeModal }) => (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="ASCII Erklärung"
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <div>
            <button className="ModalButton" onClick={closeModal}>Schließen</button>
            <ASCIIExpl/>
          </div>
        </Modal>
      );

      const UnicodeModal = ({ isOpen, closeModal }) => (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Unicode Erklärung"
          style={{
            content: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <div>
            <button className="ModalButton" onClick={closeModal}>Schließen</button>
            <UnicodeExpl/>
          </div>
        </Modal>
      );

      const ResultModal = ({ isOpen, closeModal }) => (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Ergebnis"
        
        >
          <div>
            <h2>Herzlichen Glückwunsch!</h2>
            <p>Du hast alle Aufgaben erfolgreich gelöst!</p>
            <button onClick={closeModal}>Schließen</button>
          </div>
        </Modal>
      );

      const openAsciiModal = () => setAsciiModalIsOpen(true);
      const closeAsciiModal = () => setAsciiModalIsOpen(false);
      const openUnicodeModal = () => setUnicodeModalIsOpen(true);
      const closeUnicodeModal = () => setUnicodeModalIsOpen(false);

      const openResultModal = () => setResultModalIsOpen(true);
      const closeResultModal = () => setResultModalIsOpen(false);

      const TypewriterTaskScroll = ({ taskText }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          if (currentIndex < taskText.length) {
            const timeoutId = setTimeout(() => {
              setDisplayedText((prevText) => prevText + taskText[currentIndex]);
              setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 50);
      
            return () => clearTimeout(timeoutId);
            setAnimationComplete(true);
          }
        }, [currentIndex, taskText]);
      
        return <TaskScroll taskText={displayedText} />;
      };

      const handleLevelClick = (level) => {
      setShowGame(false);
      setCurrentLevel(level);
      setCurrentTaskIndex(0);
      setSolvedTasks((prevSolvedTasks) => {
        const updatedSolvedTasks = [...prevSolvedTasks];
        updatedSolvedTasks[level] = [];
        return updatedSolvedTasks;
      });
      setTimeout(() => {
        setShowGame(true);
      }, 1800);
      const body = document.querySelector('body');
      body.style.backgroundImage = `url(${levelBackgrounds[level]})`;
      setBackgroundImage(`url(${levelBackgrounds[level]})`);
      };


    const handleSubmit = () => {
      const currentTask = tasks[currentLevel][currentTaskIndex];
      if (currentTask.type === 'input') {
        if (!solvedTasks[currentLevel].includes(currentTaskIndex)) {
          if (solution.trim() === currentTask.correctAnswer) {
            setScore((prevScore) => prevScore + 10 + levelAsNumber);
            setMessage("Richtig! Du hast 10 Punkte für diese Antwort bekommen.");
            setSolvedTasks((prevSolvedTasks) => {
              const updatedSolvedTasks = [...prevSolvedTasks];
              updatedSolvedTasks[currentLevel] = [...updatedSolvedTasks[currentLevel], currentTaskIndex];
              return updatedSolvedTasks;
            });
    
            setCurrentTaskIndex((prevIndex) => {
              if (prevIndex < tasks[currentLevel].length - 1) {
                return prevIndex + 1;
              } else {
                const isLastLevel = currentLevel === tasks.length - 1;
                const areAllTasksSolved = AllTasksSolved();

                if (isLastLevel && areAllTasksSolved) {
                  openResultModal();
                }
                else if (isLastLevel && !areAllTasksSolved) {
                  setMessage("Richtig! Du hast 10 Punkte für diese Antwort bekommen, aber du hast noch nicht alle Aufgaben gelöst. Gehe zurück zu den Aufgaben, die du noch nicht gelöst hast.")
                }
                else {
                setCurrentLevel((prevLevel) => prevLevel + 1);
                return 0; 
              }
            }
            });
          } else {
            setMessage("Leider falsch! Schaue dir noch einmal die Erklärungen an.");
            setScore((prevScore) => (prevScore >= 5 ? prevScore - 1 : 0));
          }
        } else {
          setMessage("Du hast diese Aufgabe bereits gelöst.");
        }
      }
      setSolution("");
    };
    
    
    const AllTasksSolved = () => {
      const totalTasks = tasks.flat().length;
      const totalSolvedTasks = solvedTasks.flat().length;
      return totalSolvedTasks === totalTasks;
    };

    const handleOptionClick = (selectedOption) => {
      const optionElement = document.getElementById(selectedOption);
    
      if (optionElement) {
        optionElement.classList.add("glowing");
        if (!solvedTasks[currentLevel].includes(currentTaskIndex)) {
        setTimeout(() => {
          optionElement.classList.remove("glowing");
          if (selectedOption === tasks[currentLevel][currentTaskIndex].correctAnswer) {
            setScore((prevScore) => prevScore + 10 + levelAsNumber);
            setMessage("Richtig! Du hast 10 Punkte für diese Antwort bekommen.");
            setCurrentTaskIndex((prevIndex) => prevIndex + 1);
            setSolvedTasks((prevSolvedTasks) => {
              const updatedSolvedTasks = [...prevSolvedTasks];
              updatedSolvedTasks[currentLevel] = [...updatedSolvedTasks[currentLevel], currentTaskIndex];
              return updatedSolvedTasks;
            });
    
            if (currentTaskIndex + 1 === tasks[currentLevel].length) {
              setCurrentLevel((prevLevel) => (prevLevel === "0" ? "1" : prevLevel +1));
              setCurrentTaskIndex(0);
            }
          } else {
            setMessage("Leider falsch! Schaue dir noch einmal die Erklärungen an.");
            setScore((prevScore) => (prevScore >= 5 ? prevScore - levelAsNumber - 3 : 0));
          }
    
          setSolution("");
        }, 2500);
      }
      else {
        optionElement.classList.remove("glowing");
        setMessage("Du hast diese Aufgabe bereits gelöst.");
      }
    }
    };

      return showGame ? (
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
            <button  type="button" className="button" onClick={openAsciiModal}>
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
              <span className="score-text" >Punktestand:</span>
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
      ) : null;
          }      
export default GameScreen;