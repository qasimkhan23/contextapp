import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          the lord of the ring
        </li>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          game of thrones
        </li>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          harry potter
        </li>
      </ul>
    </div>
  );
};

export default BookList;
