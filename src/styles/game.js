import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 30%;
  height: 40px;
  background: transparent;
  border-radius: 3px;
  border: 4px solid #6959CD;
  color: #6959CD;
  margin-left: 33%;
  margin-top: 20px;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #6959CD;
    color: white;
  `}
`;

export const Container = styled.div`
  background-color: #F0F8FF;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  main {
    margin: 10px;
    background-color: #FAF0E6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;