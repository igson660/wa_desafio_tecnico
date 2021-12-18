import React from 'react';
import { Link } from 'react-router-dom';
import path from '../Paths';
import{ Container, Button } from '../styles/checkoutPage';


function CheckoutPage() {

  return (
    <Container>
      <main>
        <h1>Congratulations your grade is </h1>
        <Link to={ path.homePage} >
          <Button>Restart</Button>
        </Link>
      </main>
    </Container>
  );
}

export default CheckoutPage;
