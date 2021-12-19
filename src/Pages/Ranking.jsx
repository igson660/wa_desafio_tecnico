import React from 'react';
import { Link } from 'react-router-dom';
import path from '../Paths';
import{ Container,Button } from '../styles/rankingPage';


function Ranking() {

  const restart = () => {
    localStorage.removeItem('quantityQuestions');
    localStorage.removeItem('answers');
  }

  const getScoreStorage = JSON.parse(localStorage.getItem('score'));

  return (
    <Container>
      <main>
        <h1>Your Scores</h1>
        <ul>
          {
            getScoreStorage.map((score) => (
              <li>{ score.note }</li>
              ))
          }
        </ul>
        <Link to={ path.homePage  }>
          <Button
            onClick={ restart }
          >
            Restart
          </Button>
        </Link>
      </main>
    </Container>
  );
}

export default Ranking;
