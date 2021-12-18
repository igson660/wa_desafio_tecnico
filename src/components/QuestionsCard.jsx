import React from 'react';
import PropTypes from 'prop-types';
import shuffle from '../utils/index'
import{ Container, Button } from '../styles/questionsCard';


function QuestionsCard({ alternative }) {
  const { question, correct_answer, incorrect_answers, difficulty } = alternative;
  const answers = shuffle ([...incorrect_answers, correct_answer]);

  const questionAnswer = ({ target }) => {
    const answer = {
      question,
      selectAnswer: target.innerText,
      difficulty,
      correct_answer,
    }

    const getAnswersStorage = JSON.parse(localStorage.getItem('answers'));

    getAnswersStorage ? (
    localStorage.setItem('answers', JSON.stringify([...getAnswersStorage, answer ]))
    ) : (
    localStorage.setItem('answers', JSON.stringify([ answer ]))
    )

    target.classList.add('selected');
  }

  return (
    <Container>
      <section>
        {
          alternative ? (
            <>
            <h2>{ question }</h2>
            <div>
                {
                  answers.map((answer, index) => (
                    <Button
                    onClick={ questionAnswer }
                    type="button"
                    key={ index }
                    >
                      { answer }
                    </Button>
                  ))
                }
              </div>
            </>
          ) : null
        }
      </section>
    </Container>
  );
}

QuestionsCard.propTypes = {
  alternative: PropTypes.shape({
    correct_answer: PropTypes.string,
  }).isRequired,
};

export default QuestionsCard;

