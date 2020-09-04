import React, { Component } from "react";
import { getbooklist } from "../queries/queries";
import { graphql } from "react-apollo";

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="booklist">
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getbooklist)(BookList);
