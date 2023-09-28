import React from "react";
import { increment, decrement } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Count() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>SUMAR</button>
      <button onClick={() => dispatch(decrement())}>RESTAR</button>
    </div>
  );
}
