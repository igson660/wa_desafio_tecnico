import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../Paths';
import{ Container, Button } from '../styles/checkoutPage';


function Checkout() {
  const restart = () => {
    localStorage.removeItem('quantityQuestions');
    localStorage.removeItem('answers');
  }

  const [note, setNote] = useState(0);

  useEffect(() => {
    const insertNote = async () => {
      let note = 0;
      const questions = JSON.parse(localStorage.getItem('answers'));

      questions.forEach((question) => {
        if(question.selectAnswer === question.correct_answer) {
          if(question.difficulty === 'easy') {
            note += 1;
          } else if(question.difficulty === 'medium') {
            note += 2;
          } else {
            note += 3;
          }
        }
      });

      const getScoreStorage = JSON.parse(localStorage.getItem('score'));

      getScoreStorage ? (
      localStorage.setItem('score', JSON.stringify([...getScoreStorage, { note } ]))
      ) : (
        localStorage.setItem('score', JSON.stringify([ { note } ]))
      )
  
      setNote(note)
    }

    insertNote();
  }, []);

  return (
    <Container>
      <main>
        <h1>{ `congratulations your score is: ${ note }` } </h1>
        <div>
          <Link to={ path.homePage} >
            <Button onClick={ restart } > Restart </Button>
          </Link>
          <Link to={ path.rankinPage} >
            <Button> Ranking </Button>
          </Link>
        </div>
      </main>
    </Container>
  );
}

export default Checkout;
