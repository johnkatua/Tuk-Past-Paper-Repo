import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/paper/paperSlice";

const Paper = () => {
  const { value } = useSelector(state => state.paper);
  const dispatch = useDispatch();
  return (
    <div className="paper--container">
      Paper
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <span>
        {value}
      </span>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Paper;
