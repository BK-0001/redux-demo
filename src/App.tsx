import { useReducer, useState } from "react";
import "./App.css";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
    case "incrementBy":
      return prevState + action.payload;

    default:
      break;
  }
};

function App() {
  const [count, setCount] = useState(0);

  const [count2, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          dispatch({ type: "incrementBy", payload: 3 });
        }}
      >
        count is {count} {count2}
      </button>
    </>
  );
}

export default App;
