import { http } from 'service/axios-config';
import { IAuth, ILoginParams } from 'types/auth.type';

export const signIn = async (params: ILoginParams) => {
  const res = await http.post<IAuth>('/account/login', params);

  return res.data;
};
