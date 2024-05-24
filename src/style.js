import { Button, TextField, styled } from '@mui/material';
import { Container, width } from '@mui/system';

export const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#a59e65',
    borderRadius: 0,
    '&hover': {
        backgroundColor: '#a59e65'
    }
}))

export const StyledButton1 = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#a59e65',
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center',
    borderRadius: 0,
    '&hover': {
        backgroundColor: '#a59e65'
    },
    [theme.breakpoints.down('md')]: {
        width: '95vw'
    },
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    borderRadius: 0,
    overflowY: 'hidden'
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
    padding: '16px',
    [theme.breakpoints.up('xs')]: {
        maxWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: '540px',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '720px',
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '960px',
    },
    [theme.breakpoints.up('xl')]: {
        maxWidth: '1140px',
    },
}));
