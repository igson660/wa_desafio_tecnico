import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 4px solid #6959CD;
  color: #6959CD;
  margin: 0.5em 1em;
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
    background-color: #FAF0E6;
    border: 3px solid #A020F0;
    padding: 20px;
  }
`;
