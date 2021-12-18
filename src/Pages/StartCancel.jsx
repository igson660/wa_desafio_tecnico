import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getQuestions from '../services';
import useGamer from '../hook/GameHook';
import path from '../Paths';
import{ Container,Button } from '../styles/startCancel'


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
    <Container>
      <main>
        <Link to={ path.gamePage  }>
          <Button> Start </Button>
        </Link>
        <Link to={ path.homePage }>
          <Button> Cancel </Button>
        </Link>
      </main>
    </Container>
  );
}

export default StartCancel;
