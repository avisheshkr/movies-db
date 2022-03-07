import React from "react";
import styled from "styled-components";

const Movie = ({ movie, isDark }) => {
  const { Title, Poster, Year } = movie;
  return (
    <Container isDark={isDark}>
      <img
        src={Poster === "N/A" ? "https://via.placeholder.com/400" : Poster}
        alt=""
      />
      <div>
        <h3>{Year}</h3>
        <TitleText isDark={isDark}>{Title}</TitleText>
      </div>
    </Container>
  );
};

export default Movie;

const Container = styled.div`
  transition: 2s;
  box-shadow: ${(props) =>
    props.isDark
      ? "0 5px 20px 5px rgba(255, 255, 255, 0.2)"
      : "0 5px 20px 5px rgba(230, 70, 26, 0.3)"};
  width: 25rem;
  border-radius: 10px;
  overflow: hidden;
  transition: var(--main-transition);

  &:hover {
    transform: translateY(-3%);
  }

  img {
    max-width: 100%;
    height: 30rem;
  }

  div {
    padding: 1rem 2rem;

    h3 {
      color: var(--primary-color);
    }
  }
`;

const TitleText = styled.div`
  transition: 2s;
  color: ${(props) => (props.isDark ? "#fff" : "#000")};
  padding: 0 0 1rem 0 !important;
`;
