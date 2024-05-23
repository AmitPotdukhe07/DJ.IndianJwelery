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
    // Define styles for different breakpoints
    [theme.breakpoints.up('xs')]: {
        // Extra small devices (portrait phones, less than 576px)
        maxWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        // Small devices (landscape phones, 576px and up)
        maxWidth: '540px',
    },
    [theme.breakpoints.up('md')]: {
        // Medium devices (tablets, 768px and up)
        maxWidth: '720px',
    },
    [theme.breakpoints.up('lg')]: {
        // Large devices (desktops, 992px and up)
        maxWidth: '960px',
    },
    [theme.breakpoints.up('xl')]: {
        // Extra large devices (large desktops, 1200px and up)
        maxWidth: '1140px',
    },
}));
