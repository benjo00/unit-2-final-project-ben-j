import React, { useState } from 'react';

// routine manager component for adding routines
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <div className="routine-manager">
      <h2>Add a New Routine</h2>
      <form>
        <label>Activity:</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <label>Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        {}
      </form>
    </div>
  );
}

export default RoutineManager;
