import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { AuthBoxStyled } from './components/styled/AuthBoxStyled';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/storehooks';
import { setUser } from '../viewmodel/authSlice';
import { useTranslation } from 'react-i18next';


interface LoginViewI {
  info?: number,
}

const LoginView: React.FC<LoginViewI> = () => {
  const dispatch = useAppDispatch();
  const navigate=useNavigate();

  const { t } = useTranslation();




  useEffect(() => {
    // console.log('From: ' + (location.state as any).from);
  }, []);

  type Inputs = {
    email: string,
    password: string,
  };

  const { handleSubmit, control, getValues } = useForm<Inputs>();
  const onsubmit = () => {
    const credentials:Inputs = getValues();
    if (credentials.email != '' &&credentials.password != '') {
      dispatch(setUser(credentials.email));
      navigate('/');
    }
  };

  return (
    <>
      <form style={{ display: 'block' }} onSubmit={handleSubmit(onsubmit)}>
        <AuthBoxStyled>
          <Controller
            name='email'
            defaultValue=''
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField variant='outlined' onChange={onChange} value={value} label={t('emailLabel')} />
            )}
          />
          <Controller
            name='password'
            defaultValue=''
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField variant='outlined' onChange={onChange} type='password' value={value} label='Password' />
            )}
          />
          <Button type='submit' variant={'contained'}>LOG IN</Button>
        </AuthBoxStyled>
      </form>
    </>
  );
};

export default LoginView;
