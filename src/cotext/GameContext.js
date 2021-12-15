import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GameContext = createContext();

export function HeaderContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  return (
    <GameContext.Provider
      value={ { questions, setQuestions } }
    >
      {children}
    </GameContext.Provider>
  );
}

HeaderContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;