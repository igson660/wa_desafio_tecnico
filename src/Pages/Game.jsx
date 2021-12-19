import React from 'react';
import useGamer from '../hook/GameHook';
import QuestionsCard from '../components/QuestionsCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import path from '../Paths';
import{ Container, Button } from '../styles/game';


function Game() {
  const { questions } = useGamer();
  return (
    <Container>
      <main>
        { questions ? (
          questions.map((alternative, index) => (
            <QuestionsCard
            key={ index }
            alternative={ alternative }
            />
            ))
            ) : null
          }
        <Link to={ path.checkoutPage } >
        <Button type="button">Finish</Button>
        </Link>
      </main>
    </Container>
  );
}

export default Game;