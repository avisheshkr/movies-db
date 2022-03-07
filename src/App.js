import React, { useState } from "react";
import styled from "styled-components";
import Movies from "./components/Movies";
import Search from "./components/Search";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { apiKey } from "./APIkey";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [showError, setShowError] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const APIurl = `http://www.omdbapi.com/?apikey=${apiKey}`;

  const getMovies = async (e) => {
    e.preventDefault();

    const res = await fetch(`${APIurl}&s=${movieName}`);
    const data = await res.json();
    const newMovies = data.Search;

    if (!newMovies) {
      setShowError(true);
      setTimeout(() => setShowError(false), 10000);
    } else {
      setShowError(false);
      setMovies(newMovies);
    }

    setMovieName("");
  };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <Container isDark={isDark}>
      <button onClick={() => setIsDark(!isDark)} isDark={isDark}>
        {isDark ? (
          <MdDarkMode style={{ fontSize: "4rem" }} />
        ) : (
          <MdOutlineDarkMode style={{ fontSize: "4rem" }} />
        )}
      </button>
      <h1 isDark={isDark}>Movies-DB</h1>
      <Search
        getMovies={getMovies}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      {showError ? (
        <p>
          <span>Error</span>{" "}
          <span isDark={isDark}>
            : Movie name you entered is not found. Enter another movie name.
          </span>
        </p>
      ) : null}
      {movies.length > 0 ? (
        <Movies movies={movies} isDark={isDark} />
      ) : (
        <h2 isDark={isDark}>No movies found</h2>
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  transition: 2s;
  background-color: ${(props) => (props.isDark ? "rgb(36, 36, 36)" : "#fff")};

  h1 {
    text-align: center;
    transition: 2s;
    color: ${(props) => (props.isDark ? "#fff" : "#000")};
  }

  button {
    background-color: ${(props) =>
      props.isDark ? "var(--primary-color)" : "#000"};
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 2s;
  }

  p {
    padding-top: 2rem;
    text-align: center;

    span:first-child {
      color: red;
      font-size: 2rem;
    }

    span:nth-child(2) {
      transition: 2s;
      color: ${(props) => (props.isDark ? "#fff" : "#000")};
    }
  }

  h2 {
    font-size: 5rem;
    text-align: center;
    padding-top: 5rem;
    transition: 2s;
    color: ${(props) => (props.isDark ? "#fff" : "#000")};
  }
`;
