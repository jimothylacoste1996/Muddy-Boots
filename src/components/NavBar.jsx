import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              overflow: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Muddy Boots
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/home">
                Home
              </Button>

              <Button color="inherit" component={Link} to="/contactus">
                Contact Us
              </Button>
              <Button color="inherit" component={Link} to="/fees">
                Fees
              </Button>
              <Button color="inherit" component={Link} to="/policies">
                Policies
              </Button>
              <Button color="inherit" component={Link} to="/registration">
                Registration
              </Button>
              <Button color="inherit" component={Link} to="/safeguarding">
                Safeguarding
              </Button>
              <Button color="inherit" component={Link} to="/senco">
                SENCO
              </Button>
              <Button color="inherit" component={Link} to="/whatwedo">
                What We Do
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
