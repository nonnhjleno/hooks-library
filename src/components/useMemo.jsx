import React, { useState, useMemo } from 'react';

function SumCalculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sum = useMemo(() => {
    console.log('Sum calculated');
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={e => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={e => setNumber2(Number(e.target.value))}
      />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;
