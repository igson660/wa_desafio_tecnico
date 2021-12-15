import { useContext } from 'react';
import { GameContext } from '../cotext/GameContext';

export default function useGamer() {
  const value = useContext(GameContext);
  return value;
}
