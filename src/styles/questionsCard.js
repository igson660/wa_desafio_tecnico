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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  section {
    width: 96%;
    margin: 7px;
    background-color: #FAF0E6;
    border: 3px solid #A020F0;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  h2 {
    margin: 5px;
    color: #00008B;
    font-size: 17pt;
    letter-spacing: 3px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .selected {
  background-color: #7FFF00	;
}

`;
