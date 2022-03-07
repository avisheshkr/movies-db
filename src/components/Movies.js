import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Movies = ({ movies, isDark }) => {
  return (
    <Container>
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} movie={movie} isDark={isDark} />;
      })}
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 5rem 0 10rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;
