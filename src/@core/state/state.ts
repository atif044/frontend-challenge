import { atom, } from 'recoil';
import { todoData } from '../interfaces';  
export const todoListState = atom<todoData[]>({
  key: 'todoListState',
  default: [], 
});

