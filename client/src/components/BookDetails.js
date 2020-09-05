import React, { Component } from "react";
import { getBookQuery } from "../queries/queries";
import { graphql } from "react-apollo";

class BookDetails extends Component {
  displayBookDetails() {
    let { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>Books by the author:</p>
          <ul id="other-books">
            {book.author.books.map((item) => {
              <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No Book selected..</div>;
    }
  }

  render() {
    // console.log(this.props);
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
