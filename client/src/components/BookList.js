import React, { Component } from "react";
import { getbooklist } from "../queries/queries";
import { graphql } from "react-apollo";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selected: null,
  };

  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => this.setState({ selected: book.id })}
          >
            {book.name}
          </li>
        );
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="booklist">
        <ul>{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getbooklist)(BookList);
