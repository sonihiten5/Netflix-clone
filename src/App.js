import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner  from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row title="Netflix Originals"
      isLargeRow
       fetchUrl={request.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
