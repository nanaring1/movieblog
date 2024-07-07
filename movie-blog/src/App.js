import React, { useState } from 'react';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import styled from 'styled-components';

const movies = [
  { id: 1, title: '개미들의 왕', description: '소인들의 반란' },
  { id: 2, title: '배드민턴 대마왕', description: '재미있는 모험.' },
  // 더 많은 영화 데이터 추가
];

const Container = styled.div`
  padding: 1rem;
`;

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (id) => {
    const movie = movies.find(m => m.id === id);
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <Header />
      <Container>
        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onBack={handleBackClick} />
        ) : (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={handleCardClick} />
          ))
        )}
      </Container>
    </>
  );
};

export default App;
