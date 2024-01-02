// MatchesLoader.js
import React, { useState, useEffect } from 'react';
import Standings from './Standings';
import { Container } from 'react-bootstrap';

function StandingsLoader() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    fetch("https://api-web.nhle.com/v1/standings/now")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStandingsData(result);
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
    return <Standings standingsData={standingsData} />;
  }
}

export default StandingsLoader;
