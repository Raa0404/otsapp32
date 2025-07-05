import React, { useState } from "react";

const App = () => {
  const [phase, setPhase] = useState(1);
  const [sol, setSol] = useState("");
  const [name, setName] = useState("");

  const handleStart = () => {
    const solInt = parseInt(sol, 10);
    if (solInt >= 8701 && solInt <= 8771) {
      setPhase(2);
    } else {
      alert("SOL ID must be between 8701 and 8771");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {phase === 1 && (
        <>
          <h1>Welcome to the OTS App</h1>
          <input placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
          <br/><br/>
          <input placeholder="Enter your SOL ID" value={sol} onChange={e => setSol(e.target.value)} />
          <br/><br/>
          <button onClick={handleStart}>Start</button>
        </>
      )}
      {phase === 2 && (
        <>
          <h2>Phase 2 - Account Search</h2>
          <button onClick={() => setPhase(1)}>Back</button>
        </>
      )}
    </div>
  );
};

export default App;
