import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const store = (set: any) => ({
  auth: {
    access_token: '',
    token_type: 'Bearer',
  },
});

export const useAuthStore = create(
  persist(devtools(store), {
    name: 'authStore',
  })
);
