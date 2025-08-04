import React from 'react';

// group routines by category and display them
function RoutineList({ routines }) {
  // categorize the routines
  const grouped = routines.reduce((acc, routine) => {
    const cat = routine.category || 'Uncategorized';
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(routine);
    return acc;
  }, {});

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
