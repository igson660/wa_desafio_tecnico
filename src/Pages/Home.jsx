import React from 'react';
import quantitySelectors from '../utils/index';
import { Link } from 'react-router-dom';


function Home() {
  const getQuantity = (value) => {
    localStorage.setItem('quanntityQuestions', JSON.stringify(value))
  }

  return (
    <>
      <header>
        <h1>choose the number of questions</h1>
      </header>
      <main>
        { quantitySelectors.map((selector, index ) => (
            <Link to="/start">
              <button
                key={ index }
                onClick={ ({ target }) => getQuantity(target.outerText)}
                >
                { selector }
              </button>
            </Link> 
          ))
        }
      </main>
    </>
  );
}

export default Home;