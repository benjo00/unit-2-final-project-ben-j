import React, { useEffect, useState } from 'react';

function RoutineList() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch('/routines')
      .then((res) => res.json())
      .then((data) => {
        setRoutines(data);
      })
      .catch((error) => {
        console.error('error fetching routines', error);
      });
  }, []);

  return (
    <div>
      <h2>Routine List</h2>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            {routine.activity} - {routine.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutineList;
