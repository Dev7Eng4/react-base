export interface ILoginParams {
  email: string;
  password: string;
}

export interface IAuth {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}
