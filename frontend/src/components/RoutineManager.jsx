import React, { useState, useEffect } from 'react';
import RoutineList from './RoutineList';

// routine manager controls form and routines list
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [routines, setRoutines] = useState([]);

  // fetch all routines on mount
  useEffect(() => {
    fetch('/routines')
      .then((res) => res.json())
      .then((data) => setRoutines(data))
      .catch((err) => {
        console.error('error fetching routines', err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedActivity = activity.trim();
    const trimmedDuration = duration.trim();

    if (!trimmedActivity || !trimmedDuration) {
      alert('Please fill in both fields');
      return;
    }

    const newRoutine = {
      activity: trimmedActivity,
      duration: trimmedDuration
    };

    fetch('/routines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRoutine),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add routine');
        }
        return res.json();
      })
      .then((data) => {
        console.log('added:', data);
        setRoutines([...routines, data]); // update list
        setActivity('');
        setDuration('');
      })
      .catch((err) => {
        console.error('error posting routine', err);
      });
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

      <RoutineList routines={routines} />
    </div>
  );
}

export default RoutineManager;
