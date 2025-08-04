import React from 'react';

// utility function to group routines by category
function groupByCategory(routines) {
  const groups = {};
  routines.forEach((routine) => {
    const cat = routine.category || 'Uncategorized';
    if (!groups[cat]) {
      groups[cat] = [];
    }
    groups[cat].push(routine);
  });
  return groups;
}

// shows routines grouped by category
function RoutineList({ routines }) {
  const grouped = groupByCategory(routines);

  return (
    <div className="routine-list">
      <h2>Your Routines</h2>
      {Object.keys(grouped).length === 0 ? (
        <p>No routines added yet.</p>
      ) : (
        Object.entries(grouped).map(([category, routinesInCategory]) => (
          <div key={category}>
            <div className="routine-category">{category}</div>
            <ul>
              {routinesInCategory.map((routine) => (
                <li key={routine.id}>
                  {routine.activity} - {routine.duration}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default RoutineList;
