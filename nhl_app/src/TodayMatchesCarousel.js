// TodayMatchesCarousel.js
import React from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';

function TodayMatchesCarousel({ matchesData }) {
  const gameDay = matchesData.gameWeek[0]; // Assuming only one gameDay for simplicity

  const getTeamBackgroundColor = (teamAbbrev) => {
    let teamColor = undefined;
    console.log(teamAbbrev)
    if (teamAbbrev === 'SJS'){
      teamColor = '#006D75';
    }
    else if(teamAbbrev === 'BOS'){
      teamColor = '#000000';
    }
    else if(teamAbbrev === 'BUF'){
      teamColor = '#003087';
    }
    else if(teamAbbrev === 'DET'){
      teamColor = '#ce1126';
    }
  
    else if(teamAbbrev === 'MTL'){
      teamColor = '#AF1E2D';
    }
  
    else if(teamAbbrev === 'OTT'){
      teamColor = '#000000';
    }
  
    else if(teamAbbrev === 'TBL'){
      teamColor = '#002868';
    }
  
    else if(teamAbbrev === 'TOR'){
      teamColor = '#00205b';
    }
  
    else if(teamAbbrev === 'FLA'){
      teamColor = '#041E42';
    }
  
    else if(teamAbbrev === 'CAR'){
      teamColor = '#CE1126';
    }
  
    else if(teamAbbrev === 'CBJ'){
      teamColor = '#002654';
    }
  
    else if(teamAbbrev === 'NJD'){
      teamColor = '#CE1126';
    }
  
    else if(teamAbbrev === 'NYI'){
      teamColor = '#00539b';
    }
  
    else if(teamAbbrev === 'NYR'){
      teamColor = '#0038A8';
    }
  
    else if(teamAbbrev === 'PHI'){
      teamColor = '#F74902';
    }
  
    else if(teamAbbrev === 'PIT'){
      teamColor = '#000000';
    }
  
    else if(teamAbbrev === 'WSH'){
      teamColor = '#041E42';
    }
  
    else if(teamAbbrev === 'ANA'){
      teamColor = '#F47A38';
    }
  
    else if(teamAbbrev === 'CGY'){
      teamColor = '#D2001C ';
    }
  
    else if(teamAbbrev === 'EDM'){
      teamColor = '#041E42';
    }
  
    else if(teamAbbrev === 'LAK'){
      teamColor = '#111111';
    }
  
    else if(teamAbbrev === 'SEA'){
      teamColor = '#001628';
    }

    else if(teamAbbrev === 'VAN'){
      teamColor = '#000000';
    }
  
    else if(teamAbbrev === 'VGK'){
      teamColor = '#00205B';
    }
  
    else if(teamAbbrev === 'ARI'){
      teamColor = '#8C2633';
    }
  
    else if(teamAbbrev === 'CHI'){
      teamColor = '#CF0A2C';
    }
    else if(teamAbbrev === 'COL'){
      teamColor = '#6F263D';
    }
  
    else if(teamAbbrev === 'DAL'){
      teamColor = '#006847';
    }
    else if(teamAbbrev === 'MIN'){
      teamColor = '#154734';
    }
  
    else if(teamAbbrev === 'NSH'){
      teamColor = '#FFB81C';
    }
    else if(teamAbbrev === 'STL'){
      teamColor = '#002F87';
    }
  
    else if(teamAbbrev === 'WPG'){
      teamColor = '#041E42';
    }
  
  

    
  
    return teamColor;
  };

  return (
    <Container fluid id="outer-container">
        <Carousel id="carousel" interval={null} className="align-items-center justify-content-center" >
          {gameDay.games.map((game, gameIndex) => (
            <Carousel.Item key={gameIndex} >
                <Row  className="vh-100 align-items-center justify-content-center" >
                  <Col className='align-items-center justify-content-end d-flex' style={{ backgroundColor: getTeamBackgroundColor(game.awayTeam.abbrev) }}>
                    <figure>
                      <img src={game.awayTeam.logo} alt="away team logo"></img>
                      <figcaption>{game.awayTeam.abbrev}</figcaption>
                    </figure>
                  </Col>
                  <Col 
                    id="middlecol" 
                    className='align-items-center justify-content-center d-flex flex-row' 
                    style={{
                      background: `linear-gradient(to right, ${getTeamBackgroundColor(game.awayTeam.abbrev)}, 
                      ${getTeamBackgroundColor(game.homeTeam.abbrev)})`
                    }}
                  >
                    <Col className='align-items-center justify-content-center d-flex flex-column'>
                      <h1>{game.awayTeam.score}</h1>
                    </Col>
                    <Col className='align-items-center justify-content-center d-flex flex-column'>
                      <h1>VS</h1> 
                      <p>{game.gameState}</p>
                      <p>{game.startTimeUTC}</p>
                    </Col>
                    <Col className='align-items-center justify-content-center d-flex flex-column'>
                      <h1>{game.awayTeam.score}</h1>
                    </Col >                
                  </Col>
                  <Col className='align-items-center justify-content-start d-flex ' style={{ backgroundColor: getTeamBackgroundColor(game.homeTeam.abbrev) }}> 
                    <figure>
                      <img src={game.homeTeam.logo} alt="home team logo"></img>
                      <figcaption>{game.homeTeam.abbrev}</figcaption>
                    </figure>
                  </Col>
                </Row>               
            </Carousel.Item>
          ))}
        </Carousel>
    </Container>
  );
}

export default TodayMatchesCarousel;
