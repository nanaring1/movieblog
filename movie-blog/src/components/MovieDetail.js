import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

const MovieDetail = ({ movie, onBack }) => (
  <Detail>
    <button onClick={onBack}>Back to List</button>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
  </Detail>
);

export default MovieDetail;
