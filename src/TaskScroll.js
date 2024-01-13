// Tafel auf der die Aufgabe angezeigt wird
import React from 'react';

const TaskScroll = ({ taskText }) => {
  return (
    <div className="roll-container">
      <div className="roll-content">
        <p>{taskText}</p>
      </div>
    </div>
  );
};

export default TaskScroll;