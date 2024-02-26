import { useEffect, useReducer } from "react";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import reducer from "../../reducer";

const initialValue = 0;
const UseEffectData = () => {
  // const [count, setCount] = useState(0);
  const [counter, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <>
      <div>
        <img src="../img/not.jpg" />
        <span className="cart">{counter}</span>
      </div>
      <h3>React Increment Decrement Counter</h3>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INC" })}
        >
          +
        </button>

        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "DEC" })}
        >
          -
        </button>
      </div>
    </>
  );
};

export default UseEffectData;
