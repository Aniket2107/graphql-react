import { gql } from "apollo-boost";

export const getauthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getbooklist = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
        }
      }
    }
  }
`;

export const addBookmutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
