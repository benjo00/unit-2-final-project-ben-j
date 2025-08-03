import React from 'react';

// shows routines, data passed from parent
function RoutineList({ routines }) {
  return (
    <div className="routine-list">
      <h2>Your Routines</h2>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            {routine.activity} - {routine.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutineList;
