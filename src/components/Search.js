import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Search = ({ getMovies, movieName, setMovieName }) => {
  return (
    <Container>
      <form onSubmit={getMovies}>
        <label htmlFor="Search"></label>
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button type="submit" value="Submit">
          <BsSearch />
        </button>
      </form>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  padding-top: 4rem;

  form {
    width: 100%;
    display: flex;
    justify-content: center;

    input[type="text"] {
      flex: 2;
    }

    button {
      background-color: var(--primary-color);
      color: #fff;
      border: none;
      padding: 1rem 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      font-size: 2rem;
      font-family: inherit;
      transition: var(--main-transition);

      &:hover {
        background-color: #000;
      }
    }
  }
`;
