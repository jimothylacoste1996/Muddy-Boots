import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/aboutus" },
    { label: "Our Team", path: "/ourteam" },
    { label: "Fees", path: "/fees" },
    { label: "Policies", path: "/policies" },
    { label: "Registration", path: "/registration" },
    { label: "Safeguarding", path: "/safeguarding" },
    { label: "SENCO", path: "/senco" },
    { label: "What We Do", path: "/whatwedo" },
  ];
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
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  color="inherit"
                  component={Link}
                  to={link.path}
                  sx={{
                    color: location.pathname === link.path ? "white" : "black",
                    borderBottom:
                      location.pathname === link.path
                        ? "2px solid white"
                        : "none",
                    borderRadius: 0,
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
