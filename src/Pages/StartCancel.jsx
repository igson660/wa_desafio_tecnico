import React from 'react';
import { Link } from 'react-router-dom';


function StartCancel() {
  // const getQuantity = (value) => {
  //   localStorage.setItem('quanntityQuestions', JSON.stringify(value))
  // }
  return (
    <main>
      <button>Start</button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </main>
  );
}

export default StartCancel;