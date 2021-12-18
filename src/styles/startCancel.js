import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #F0F8FF;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  #main-div {
    background-color: #FAF0E6;
    border: 3px solid #A020F0;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }


  h1 {
    margin: 5px;
    color: #00008B;
    font-size: 17pt;
    letter-spacing: 3px;
  }

  input {
    height: 30px;
    width: 70%;
    border: 4px solid #6959CD;
    border-radius: 3px;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
  }

  span {
    font-size: 10pt;
    color: red;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #form-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;
