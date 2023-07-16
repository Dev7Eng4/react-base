import React from 'react';

import { IUser } from 'types/user.type';

import { http } from '../axios-config';

export const getCurrentUserInfo = async (
  updateProgress: React.Dispatch<React.SetStateAction<number>>,
) => {
  const res = await http.get<IUser>('/users/current-user', {
    onDownloadProgress(progressEvent) {
      if (progressEvent.total) {
        const progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
        updateProgress(progress);
      }
    },
  });

  return res.data;
};

export const fetchUsers = async () => {
  const res = await http.get<IUser>('/users');

  return res;
};

export const createUser = async (payload: any) => {
  const res = await http.post('/users', payload);

  return res.data;
};
