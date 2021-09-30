import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/actions/darkModeAction";

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleDarkMode())}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
