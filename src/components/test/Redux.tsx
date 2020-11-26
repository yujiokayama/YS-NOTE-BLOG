import React, { useEffect, useState, useRef } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "~/store/rootReducer";
import { incrementCounter, decrementCounter } from "~/store/modules/Counter";

const Redux: React.FC = () => {

  const { count } = useSelector((state: RootState) => state.Counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter(1));
  const decrement = () => dispatch(decrementCounter(1));

  return (
    <>
      <h1>redux</h1>
      {count}
      <button onClick={increment}>プラス</button>
      <button onClick={decrement}>マイナス</button>
    </>
  );
};

export default Redux;
