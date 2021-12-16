import React from 'react';
import PropTypes from 'prop-types';

function QuestionsCard({ alternative }) {
  const { question, correct_answer, incorrect_answers  } = alternative;
  return (
    <section>
      {
        alternative ? (
          <>
            <h2>{ question }</h2>
            <button>{ correct_answer }</button>
            {
              incorrect_answers.map((answer, index) => (
                <button key={ index }>{ answer }</button>
              ))
            }
          </>
        ) : null
      }
    </section>
  );
}

QuestionsCard.propTypes = {
  alternative: PropTypes.shape({
    correct_answer: PropTypes.string,
  }).isRequired,
};

export default QuestionsCard;
