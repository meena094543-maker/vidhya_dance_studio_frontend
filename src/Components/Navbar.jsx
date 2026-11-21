
import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

import StudioLogo from "./StudioLogo";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const hideNavbar = [
    "/login",
    "/signup",
    "/forgot-password",
  ].includes(location.pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setMobileOpen(false);
  }, [location.pathname]);

  if (hideNavbar) {
    return null;
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Class Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: "#24121B",
        color: "#FFFFFF",
        pt: 2,
      }}
    >
      {/* Mobile Logo */}
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: "flex",
          px: 2.5,
          py: 2,
          textDecoration: "none",
        }}
      >
        <StudioLogo />
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      <List sx={{ px: 1, py: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color:
                  location.pathname === item.path
                    ? "#E5C47B"
                    : "#FFFFFF",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#E5C47B",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      <Box sx={{ px: 2, py: 3 }}>
        <Button
          component={RouterLink}
          to="/login"
          fullWidth
          variant="contained"
          onClick={() => setMobileOpen(false)}
          sx={{
            backgroundColor: "#E5C47B",
            color: "#24121B",
            fontWeight: 700,
            py: 1.2,
            "&:hover": {
              backgroundColor: "#F0D69A",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "#24121B",
          color: "#FFFFFF",
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72, md: 82 },
              justifyContent: "space-between",
            }}
          >
            {/* Common Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <StudioLogo />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? "#E5C47B"
                        : "#FFFFFF",
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: "none",
                    px: 1.5,
                    "&:hover": {
                      color: "#E5C47B",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}

              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  backgroundColor: "#E5C47B",
                  color: "#24121B",
                  fontWeight: 700,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F0D69A",
                  },
                }}
              >
                Login
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: "#E5C47B" }}
                aria-label="Open navigation menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "#24121B",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
