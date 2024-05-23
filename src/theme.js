import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#999",
            light: "#999"
        },
        secondary: {
            main: "#000"
        },
        headerColor: {
            main: "#1a1a1a"
        },
        btn: {
            main: '#a59e65'
        }
    },
    typography: {
        fontFamily: [
            'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
        ].join(','),
    },

})

