import React from 'react';
import { Container, Carousel, Table } from 'react-bootstrap';

function Standings({ standingsData }) {
    const standings = standingsData.standings; 
    const standingsByDivision = {};
    standings.forEach((team) => {
        const divisionAbbrev = team.divisionName;
        if (!standingsByDivision[divisionAbbrev]) {
            standingsByDivision[divisionAbbrev] = [];
        }
        standingsByDivision[divisionAbbrev].push(team);
    });

    return (
        <Container fluid id="outer-container">
            <Carousel id="carousel" interval={null} controls={false} className="align-items-center justify-content-center">
                {Object.entries(standingsByDivision).map(([divisionAbbrev, teams]) => (
                    <Carousel.Item key={divisionAbbrev}>
                        <h2>{`${divisionAbbrev}`}</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Team</th>
                                    <th>Points</th>
                                    <th>Games</th>
                                    <th>Home Games</th>
                                    <th>Home Wins</th>
                                    <th>Away Games</th>
                                    <th>Away Wins</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                    <th>GD</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img id="standings-img" src={team.teamLogo} alt={team.teamName.default}></img>
                                            {team.teamName.default}
                                        </td>
                                        <td>{team.points}</td>
                                        <td>{team.gamesPlayed}</td>
                                        <td>{team.homeGamesPlayed}</td>
                                        <td>{team.homeWins}</td>
                                        <td>{team.roadGamesPlayed}</td>
                                        <td>{team.roadWins}</td>
                                        <td>{team.wins}</td>
                                        <td>{team.losses}</td>
                                        <td>{team.goalDifferential}</td>
                                        <td>{team.goalFor}</td>
                                        <td>{team.goalAgainst}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Standings;
