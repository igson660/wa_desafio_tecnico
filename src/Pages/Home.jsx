import React from 'react';
import quantitySelectors from '../utils/index'

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
            <button
            key={ index }
              onClick={ ({ target }) => getQuantity(target.outerText)}
            >{ selector }</button>
          ))
        }
      </main>
    </>
  );
}

export default Home;