
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Paper,
  Container,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


export default function Navbar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "light" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, BackgroundColor: "light" }}
            
          >
              
              <Box 
    component='img'
    sx={{
      width:'80px',
      height:'80px',
  }}
  alt=""
  src='/corelogolist.png'


/><Typography variant="h6" fontWeight='bold'>CoreList</Typography>
          </IconButton>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem 
                 selected={selectedMenuItem === "products"}
                onClick={() => {
                router.push("/products");
                setSelectedMenuItem("products");
                setSelectedMenuItem("products");
                setSelectedMenuItem("products");
}}
                >

                  Products
                  {selectedMenuItem === "products" && (
                  <ArrowDropDownIcon sx={{ ml: 1 }} />
    )}
                </MenuItem>
                <MenuItem onClick={() => router.push("./about")}>
                  About
                </MenuItem>
                
                <Link href="www.google.com"><MenuItem>Docs</MenuItem></Link>
                <MenuItem onClick={() => router.push("/")}>Blog</MenuItem>
              </Menu>
            </>
          ) : (
            <Container>
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                textColor="inherit"
                indicatorColor="secondary"
              >
                
                <Tab
                  label="Products"
                  onClick={() => router.push("/products")}
                />
                <Tab label="About" onClick={() => router.push("/about")} />
                {/* <Tab label="Docs" onClick={() => router.push("www.google.com")} /> */}
                <Link href="https://corelist.gitbook.io/corelist/"><Tab label="Docs"/></Link>
                <Tab label="Blog" onClick={() => router.push("/blog")} />
              </Tabs>
            </Container>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

          <Button
            sx={{
              borderRadius: "20px",
              color: "white",
              p:5,
              textAlign:"center",
              backgroundColor: "success"
            }}
            onClick={() => router.push("/app")}
          >
            Gotoapp
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
