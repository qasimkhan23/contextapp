import React from "react";
class BookList extends React.Component {
  state = {};
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>the lord of the ring</li>
          <li>game of thrones</li>
          <li>harry potter</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
