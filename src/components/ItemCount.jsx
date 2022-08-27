import React, { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount(count + 1);
    count===10? setCount(0):setCount(count + 1)  
  };
  const decrementCounter = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }

  };

  return (
    <div>
 
      <h3 >Contador actual :{count}  </h3>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default ItemCount;
