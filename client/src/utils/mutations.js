import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      email
      bookCount
      username
      savedBooks {
       # _id
       bookId
       authors
       image
       link
       title 
       description
      }
    }
  }
`;



export const REMOVE_BOOK = gql`
  mutation removebook($bookid: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount 
      email
      savedBooks {
       # _id
        bookId
        authors
        image
        link
        title 
        description 
      }
    }
  }
`;