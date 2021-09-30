import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/actions/darkModeAction";

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleDarkMode())}>toggle</button>;
};

export default DarkModeToggle;
