import React from 'react';
import { Link } from 'react-router-dom';
import useGamer from '../hook/GameHook';
import path from '../Paths';


function CheckoutPage() {
  const { questions } = useGamer();

  return (
    <main>
      <h1>congratulations your grade is </h1>
      <Link to={ path.homePage} >
        <button>Restart</button>
      </Link>
    </main>
  );
}

export default CheckoutPage;
