import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;

const MovieCard = ({ movie, onClick }) => (
  <Card onClick={() => onClick(movie.id)}>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
  </Card>
);

export default MovieCard;
