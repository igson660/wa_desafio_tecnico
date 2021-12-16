import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getQuestions from '../services';
import useGamer from '../hook/GameHook';
import path from '../Paths';


function StartCancel() {
  const { setQuestions } = useGamer();

  useEffect(() => {
    const insertQuestions = async () => {
      const getQuantity = localStorage.getItem('quantityQuestions');
      const questions = await getQuestions(JSON.parse(getQuantity))
      .then((questions) => questions);
  
      setQuestions(questions)
    }

    insertQuestions();
  }, [setQuestions]);

  return (
    <main>
      <Link to={ path.gamePage  }>
        <button>
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
