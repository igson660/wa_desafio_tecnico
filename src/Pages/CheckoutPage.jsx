import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../Paths';
import{ Container, Button } from '../styles/checkoutPage';


function CheckoutPage() {
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
  
      setNote(note)
    }

    insertNote();
  }, [note]);

  return (
    <Container>
      <main>
        <h1>{ `congratulations your score is: ${ note }` } </h1>
        <Link to={ path.homePage} >
          <Button
            onClick={ restart }
          >Restart</Button>
        </Link>
      </main>
    </Container>
  );
}

export default CheckoutPage;
