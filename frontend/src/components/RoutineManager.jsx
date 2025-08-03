import React, { useState } from 'react';

// routine manager component for adding routines
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // logging
    console.log('submitted:', activity, duration);
  };

  return (
    <div className="routine-manager">
      <h2>Add a New Routine</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Routine</button>
      </form>
    </div>
  );
}

export default RoutineManager;
