
import React from "react";

export default function RoutineList({ routines }) {
  return (
    <div>
      <h2>Routines</h2>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <strong>{routine.title}</strong>: {routine.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
