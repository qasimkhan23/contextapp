import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>ToggleTheme</button>;
};

export default ToggleTheme;
