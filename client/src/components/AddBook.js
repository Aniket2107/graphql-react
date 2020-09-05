import React, { Component } from "react";
import {
  getauthorsQuery,
  addBookmutation,
  getbooklist,
} from "../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";

class AddBook extends Component {
  state = {
    bookname: "",
    genre: "",
    authorId: "",
  };

  displayAuthors() {
    let data = this.props.getauthorsQuery;
    if (data.loading) {
      return <option disabled>Loading</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addBookmutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getbooklist }],
    });
  }

  render() {
    return (
      <form id="add-book">
        <div className="fields">
          <label>Book Name: </label>
          <input
            type="text"
            value={this.state.bookname}
            onChange={(e) => this.setState({ bookname: e.target.value })}
          />
        </div>

        <div className="fields">
          <label>Genre : </label>
          <input
            type="text"
            value={this.state.genre}
            onChange={(e) => this.setState({ genre: e.target.value })}
          />
        </div>

        <div className="fields">
          <label>Author: </label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
            {this.displayAuthors()}
          </select>
        </div>

        <button onClick={this.onSubmit.bind(this)}> + </button>
      </form>
    );
  }
}

export default compose(
  graphql(getauthorsQuery, { name: "getauthorsQuery" }),
  graphql(addBookmutation, { name: "addBookmutation" })
)(AddBook);
