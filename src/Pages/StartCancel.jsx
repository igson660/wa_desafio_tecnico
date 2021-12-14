import React from 'react';
import { Link } from 'react-router-dom';
import getQuestions from '../services';


function StartCancel() {
  var getQuantity = localStorage.getItem('quantityQuestions');
  
  const test = async () => {
    const test = await getQuestions(JSON.parse(getQuantity))
    .then((test) => test);
    console.log(test);
  }
  return (
    <main>
      <button
      onClick={test}>Start</button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </main>
  );
}

export default StartCancel;