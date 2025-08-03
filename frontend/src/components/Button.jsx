function Button({ onClick, label }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

// reusable button component per project requirment to have it be used as a child in home.jsx

export default Button;
