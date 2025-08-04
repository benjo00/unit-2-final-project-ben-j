import React, { useState, useEffect, useRef } from 'react';
import RoutineList from './RoutineList';

// routine manager controls form and routines list
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [routines, setRoutines] = useState([]);

  const activityInputRef = useRef(null);

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

    const newRoutine = { activity, duration };

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
        setRoutines([...routines, data]);
        setActivity('');
        setDuration('');
        if (activityInputRef.current) {
          activityInputRef.current.focus(); // auto focus
        }
      })
      .catch((err) => {
        console.error('error posting routine', err);
      });
  };

  return (
    <div className="routine-manager">
      <form onSubmit={handleSubmit}>
        <label>Activity:</label>
        <input
          type="text"
          value={activity}
          ref={activityInputRef}
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
