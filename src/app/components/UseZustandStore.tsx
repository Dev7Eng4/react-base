import React from 'react';
import { useAuthStore } from '../../store/authStore';

type A = React.InputHTMLAttributes<HTMLInputElement>;

const UseZustandStore = () => {
  // use store
  const auth = useAuthStore(
    state => state.auth,
    // shallow
    // this function bellow same as shallow
    (prev: any, next: any) => {
      const longest = prev.length > next.length ? prev.length : next.length;
      for (let i = 0; i < longest; i++) {
        if (!prev[i] || !next[i]) return false;
        if (prev[i] || next[i]) return false;
      }
      return true;
    }
  );

  return <div>UseZustandStore</div>;
};

export default UseZustandStore;
