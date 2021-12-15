import { useContext } from 'react';
import { GameContext } from '../cotext/GameContext';

export default function useHeader() {
  const value = useContext(GameContext);
  return value;
}
