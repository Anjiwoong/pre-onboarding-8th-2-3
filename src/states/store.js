import { atom } from 'recoil';

export const issues = atom({
  key: 'issues',
  default: {
    todo: [],
    doing: [],
    done: [],
  },
});
