import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import path from '../Paths';


function Home() {
  const [load, setload ] =  useState(false);

  const getQuantity = ({ quantityQuestions }) => {
    localStorage.setItem('quantityQuestions', JSON.stringify(quantityQuestions))
    setload(true)
  };

  const schema = yup.object().shape({
    quantityQuestions: yup.number().min(2).required(),
  });

  return (
    <>
      <header>
        <h1>Choose the number of questions</h1>
      </header>
      <main>
        <Formik
          onSubmit={ getQuantity }
          validationSchema={ schema }
          initialValues={{ quantityQuestions: '' }}
        >
          {
            ({ errors }) => (
              <Form>
                <div>
                  <Field
                    id="quantityQuestions"
                    name="quantityQuestions"
                    type="number"
                    placeholder="Enter a Number"
                  />
                  {
                    errors.quantityQuestions && (
                      <span>Quantity Questions must be greater than or equal to 2</span>
                    )
                  }
                </div>
                  <button type="submit"> Next </button>
              </Form>
            )
          }
        </Formik>
        {
          load && ( <Redirect to={ path.startCancelPage } /> )
        }
      </main>
    </>
  );
}

export default Home;