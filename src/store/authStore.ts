import { IAuth } from 'types/auth.type';
import { createStore, useStore } from 'zustand';

import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface IState {
  auth: IAuth;
  login: (auth: IAuth) => void;
  logout: () => void;
}

const defaultAuth: IAuth = {
  access_token: '',
  expires_in: 0,
  refresh_token: '',
  token_type: 'Bearer',
};

const authStore = createStore<IState>()(
  devtools(
    persist(
      set => ({
        auth: defaultAuth,
        login: (auth: IAuth) => set({ auth }),
        logout: () => set({ auth: defaultAuth }),
        // increaseCount: (value: number) => set(state => ({ count: state.count + value })),
      }),
      {
        name: 'auth',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export const getAccessToken = () => authStore.getState().auth.access_token;

const useAuthStore = () => useStore(authStore, state => state);

export default useAuthStore;
