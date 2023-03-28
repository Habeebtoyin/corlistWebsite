import {Typography, Box, Container, Grid} from "@mui/material";
import React, {Fragment} from "react";
export default function Footer() {
    return (
        <>
        <Fragment>
         
            <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
              
        }}
      >
        <Container maxWidth="sm" 
        sx={{
          

        }}>
          <Typography variant="body1" sx={{
            fontWeight:"bold",
            textAlign:"justify"
          }}>
            Corelist@All right reserved 2023.
          </Typography>
        
        </Container>
      </Box>
            
           
    
      </Fragment>
    

     

    
      </>
    );
  }