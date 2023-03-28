
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
     background: {
        default: '#000000'
     },
    primary: {
      // main:'#',
      //  main: '#556cd6',
       main:'#000000',
    
    },
    secondary: {
      // main: '#19857b',
       main: '#000000'
    },
    error: {
      main: red.A400,
    },
  },

});

export default theme;
