import React, { useState, useEffect } from 'react';
import RoutineList from './RoutineList';

function RoutineManager() {
  const [routines, setRoutines] = useState([]);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    fetch('/routines')
      .then((res) => res.json())
      .then((data) => setRoutines(data))
      .catch((err) => console.error('Error fetching routines:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoutine = { activity, duration };

    fetch('/routines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRoutine),
    })
      .then((res) => res.json())
      .then((savedRoutine) => {
        setRoutines([...routines, savedRoutine]);
        setActivity('');
        setDuration('');
      })
      .catch((err) => console.error('Error saving routine:', err));
  };

  return (
    <div className="routine-manager">
      <h2>Add a New Routine</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Activity:
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <button type="submit">Add Routine</button>
      </form>
      <RoutineList routines={routines} />
    </div>
  );
}

export default RoutineManager;
