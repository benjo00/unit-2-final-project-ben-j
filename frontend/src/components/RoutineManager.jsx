import React, { useState } from 'react';

// routine manager component for adding routines
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // object to send to backend
    const newRoutine = { activity, duration, category };

    fetch('/routines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRoutine)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add routine');
        }
        return res.json();
      })
      .then((data) => {
        console.log('added:', data);
        // reset form fields
        setActivity('');
        setDuration('');
        setCategory('');
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

        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add Routine</button>
      </form>
    </div>
  );
}

export default RoutineManager;
