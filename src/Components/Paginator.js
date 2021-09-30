import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../redux/actions/pageAction";

const Paginator = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "1.5em" }}>
      {page > 1 && (
        <button onClick={() => dispatch(prevPage())}>prev page</button>
      )}
      <button onClick={() => dispatch(nextPage())}>next page</button>
    </div>
  );
};

export default Paginator;
