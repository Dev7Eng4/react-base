import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { VALIDATE_REQUIRE } from 'constant';
import { translations } from 'locales/translations';
import { signIn } from 'service/api/auth.api';
import useAuthStore from 'store/authStore';
import { IAuth, ILoginParams } from 'types/auth.type';

const loginSchema = yup
  .object({
    email: yup.string().required(VALIDATE_REQUIRE).email(),
    password: yup.string().required(VALIDATE_REQUIRE),
  })
  .required();

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    formState: { errors, isDirty },
    control,
    handleSubmit,
  } = useForm<ILoginParams>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });
  const { mutate, isLoading, error } = useMutation({
    mutationFn: (params: ILoginParams) => signIn(params),
  });

  console.log('err', error);

  const { login } = useAuthStore();

  // currying
  const onChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    // setFormState(prev => ({ ...prev, [name]: e.target.value }));
  };

  const onSubmit = handleSubmit(data => {
    mutate(data, {
      onSuccess: (data: IAuth) => {
        login(data);
        navigate('/');
      },
    });
  });

  return (
    <Stack direction={'row'} minHeight={'100vh'}>
      <Stack width={'50%'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'350px'}>
          <Typography variant="h3">Hello Again!</Typography>
          <Typography
            sx={{
              my: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam
          </Typography>

          <form onSubmit={onSubmit}>
            <Stack gap={4}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField label={t(translations.common.email)} variant="outlined" {...field} />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    label={t(translations.common.password)}
                    variant="outlined"
                    type="password"
                    {...field}
                  />
                )}
              />

              <LoadingButton loading={isLoading} type="submit">
                Login
              </LoadingButton>
            </Stack>
          </form>
        </Box>
      </Stack>

      <Box
        width={'50%'}
        sx={{
          bgcolor: 'blue',
        }}
      />
    </Stack>
  );
};

export default LoginPage;
