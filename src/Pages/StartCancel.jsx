import React from 'react';
import { Link } from 'react-router-dom';
import getQuestions from '../services';
import useGamer from '../hook/GameHook';
import path from '../Paths';


function StartCancel() {
  const { setQuestions } = useGamer();
  
  const insertQuestions = async () => {
    const getQuantity = localStorage.getItem('quantityQuestions');
    await getQuestions(JSON.parse(getQuantity))
    .then((questions) => setQuestions(questions));
  }
  return (
    <main>
      <Link to={ path.gamePage  }>
        <button
          onClick={ insertQuestions }
        >
          Start
        </button>
      </Link>
      <Link to={ path.homePage }>
        <button>Cancel</button>
      </Link>
    </main>
  );
}

export default StartCancel;