// RoutineList.jsx
import React, { useEffect, useState } from "react";

// basic fetch setup for routines from backend

function RoutineList() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/routines")
      .then((res) => res.json())
      .then((data) => {
        setRoutines(data);
      });
  }, []);

  return (
    <div>
      <h2>Routine List</h2>
      <ul>
        {routines.map((r) => (
          <li key={r.id}>
            {r.activity} - {r.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutineList;
