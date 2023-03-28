import { Typography, Grid, Card, Box, IconButton,SvgIcon} from "@mui/material";
import { display, fontWeight, padding } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import discordIcon from '@mui/icons-material/discord.svg';
// import Image from "next/image";


// Custom DiscordIcon component
 function DiscordIcon(props) {
    return (
      <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="#000000" className="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>
      </SvgIcon>
    );
  }


export default function Contact() {
    const boxData = [
        {title:"Overview" , product1:"Marketplace", product2:"E-commerce", product3:"Launchpad"},
        {title:"Resources" , product1:"whitepaper", product2:"Light-Paper", product3:"Pitch-deck"},
        {title:"Company" , product1:"About", product2:"Blog", product3:"Post"},
        {title:"Support" , product1:"Report an Issue", product2:"Documentation"},
        {title:"Follow us on Social media" , product1: <TelegramIcon/>, product2: <TwitterIcon/>, product3:<DiscordIcon sx={{ fontSize: 24, color: '#7289DA' }}/>}

    ];
    return (
        <>

        <Grid container spacing={2}
         sx={{
             color:"#000000",
             fontWeight:"600px",
             fontSize:"16px",
              display:"flex",
               justifyContent: "space-between",
               padding: 10,
               backgroundColor: "white",
               mt:3
    
    }}>
        
      
         {boxData.slice(0,-1).map((data, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
             {/* <Box sx={{ display: 'column', justifyContent: 'space-between', color:"white" }}> */}
              <Typography variant="h5" component="h2" style={{ minHeight: '3em', fontWeight: 600 }}>
                {data.title}
              </Typography>
             
              <Typography variant="body2" component="p" style={{ height: '3.2em', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight:600}}>
                {data.product1}
                </Typography>
                <Typography variant="body2" component="p" style={{ height: '3.2em', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight:600 }}>
                {data.product2}
                </Typography>
                <Typography variant="body2" component="p" style={{ height: '3.2em', overflow: 'hidden', textOverflow: 'ellipsis',  fontWeight:600 }}>
                {data.product3}
                </Typography>
        </Grid>
        
      ))}
      {/* icon Grid */}
       <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="h5" component="h2" style={{ minHeight: '3em' , fontWeight:600}}>
          {boxData[boxData.length - 1].title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton color="primary" sx={{
             fontWeight:600
          }}>
            {boxData[boxData.length - 1].product1}
          </IconButton>
          <IconButton color="primary" sx={{
             fontWeight:600
          }}>
            {boxData[boxData.length - 1].product2}
          </IconButton>
          <IconButton color="primary" sx={{
             fontWeight:600
          }}>
            {boxData[boxData.length - 1].product3}
          </IconButton>
        </Box>
      </Grid>
        </Grid>
        </>
    )
}