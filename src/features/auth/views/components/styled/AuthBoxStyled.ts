import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';


export const AuthBoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  gap: '20px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '400px',
  //use  breakpoints for responsive sometimes add a new if it's necessary
  [theme.breakpoints.up('lg')]: {
    width:'700px'
  },
}));
