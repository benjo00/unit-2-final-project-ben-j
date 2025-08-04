import React, { useState } from 'react';

// routine manager component with category selection
function RoutineManager() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // log data
    console.log('submitted:', { activity, duration, category });
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
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Mindfulness">Mindfulness</option>
          <option value="Exercise">Exercise</option>
          <option value="Rest">Rest</option>
        </select>

        <button type="submit">Add Routine</button>
      </form>
    </div>
  );
}

export default RoutineManager;
