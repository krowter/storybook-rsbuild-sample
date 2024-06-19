import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);

  let labelCount = '';

  if (count % 3 === 0) labelCount += "Fizz";
  if (count % 5 === 0) labelCount += "Buzz";
  if (labelCount === '') labelCount = count.toString();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>Label {labelCount}</span>
    </div>
  );
}
