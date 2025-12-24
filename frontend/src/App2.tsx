import React, { useMemo, useState } from "react";

const App2 = () => {
  const [inputValue, setInputValue] = useState(0);
  const [counter, setCounter] = useState(0);

  let sumFrom1ToN = useMemo(() => {
    let sum: number = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    return sum;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <p>Sum is {sumFrom1ToN}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </>
  );
};

export default App2;
