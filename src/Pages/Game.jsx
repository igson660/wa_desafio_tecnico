import React from 'react';
import useGamer from '../hook/GameHook';
import QuestionsCard from '../components/QuestionsCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import path from '../Paths';

function Game() {
  const { questions } = useGamer();
  return (
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
      <button type="button">Finish</button>
      </Link>
    </main>
  );
}

export default Game;