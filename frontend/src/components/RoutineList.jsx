import React from 'react';

// display grouped routines by category
function RoutineList({ routines }) {
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
        Object.entries(grouped).map(([category, routinesInCat]) => (
          <div key={category}>
            <h3 className="routine-category">{category}</h3>
            <ul>
              {routinesInCat.map((routine) => (
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
