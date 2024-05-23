import { Button, TextField, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#a59e65',
    borderRadius: 0,
    '&hover': {
        backgroundColor: '#a59e65'
    }
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    borderRadius: 0,
    overflowY: 'hidden'
}))
