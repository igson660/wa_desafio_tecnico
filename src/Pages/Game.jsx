import React from 'react';
import useGamer from '../hook/GameHook';
import QuestionsCard from '../components/QuestionsCard';


function Game() {
  const { questions } = useGamer();
  console.log(questions);
  return (
    <main>
      {
        questions.map((alternative, index) => (
          <QuestionsCard
          key={ index }
          alternative={ alternative }
          />
        ))
      }
    </main>
  );
}

export default Game;