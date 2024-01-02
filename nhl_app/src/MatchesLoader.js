// MatchesLoader.js
import React, { useState, useEffect } from 'react';
import TodayMatchesCarousel from './TodayMatchesCarousel';
import { Container } from 'react-bootstrap';

function MatchesLoader() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matchesData, setMatchesData] = useState([]);

  useEffect(() => {
    fetch("https://api-web.nhle.com/v1/schedule/now")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMatchesData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return  (
      <Container id="loader-container" fluid className='d-flex justify-content-center align-items-center'>
        <div class="loader"></div>
      </Container> 
    )
  } else {
    return <TodayMatchesCarousel matchesData={matchesData} />;
  }
}

export default MatchesLoader;
