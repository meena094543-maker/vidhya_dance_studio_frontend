
import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Link as RouterLink } from "react-router-dom";

import StudioLogo from "./StudioLogo";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dance Departments", path: "/departments" },
    { name: "Contact Us", path: "/contact" },
    { name: "Class Schedule", path: "/schedule" },
  ];

  const informationLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ];

  const danceClasses = [
    "Classical Dance",
    "Western Dance",
    "Modern Dance",
    "Other Dance Forms",
  ];

  const linkStyle = {
    color: "#F5E8E8",
    textDecoration: "none",
    fontSize: 14,
    display: "block",
    mb: 1.5,
    transition: "0.3s",
    "&:hover": {
      color: "#E5C47B",
      pl: 0.5,
    },
  };

  const headingStyle = {
    color: "#E5C47B",
    fontSize: 17,
    fontWeight: 700,
    mb: 3,
    letterSpacing: 0.5,
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#24121B",
        color: "#FFFFFF",
        mt: 0,
        pt: 7,
        pb: 2,
      }}
    >
      <Container maxWidth="xl">

        <Grid container spacing={5}>

          {/* About Section */}
          <Grid item xs={12} sm={6} md={2.5}>

            {/* Common Header and Footer Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "inline-flex",
                textDecoration: "none",
                mb: 2.5,
              }}
            >
              <StudioLogo />
            </Box>

            <Typography
              sx={{
                color: "#F5E8E8",
                fontSize: 14,
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              Vidhya Dance Studio is a place to learn,
              express and celebrate the art of dance.
              Explore different dance styles and
              discover your passion for movement.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#E5C47B",
                  border: "1px solid rgba(229,196,123,0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(229,196,123,0.15)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                aria-label="Facebook"
                sx={{
                  color: "#E5C47B",
                  border: "1px solid rgba(229,196,123,0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(229,196,123,0.15)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                aria-label="YouTube"
                sx={{
                  color: "#E5C47B",
                  border: "1px solid rgba(229,196,123,0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(229,196,123,0.15)",
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={headingStyle}>
              Contact Us
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
              <LocationOnIcon sx={{ color: "#E5C47B", mt: 0.3 }} />

              <Typography sx={{ ...linkStyle, mb: 0, lineHeight: 1.8 }}>
                Coimbatore,
                <br />
                Tamil Nadu, India
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
              <PhoneIcon sx={{ color: "#E5C47B" }} />

              <Link href="tel:+919876543210" sx={linkStyle}>
                +91 98765 43210
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              <EmailIcon sx={{ color: "#E5C47B" }} />

              <Link
                href="mailto:info@vidhyadancestudio.com"
                sx={{
                  ...linkStyle,
                  wordBreak: "break-word",
                }}
              >
                info@vidhyadancestudio.com
              </Link>
            </Box>
          </Grid>

          {/* Our Classes */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={headingStyle}>
              Our Classes
            </Typography>

            {danceClasses.map((dance) => (
              <Typography
                key={dance}
                sx={{
                  ...linkStyle,
                  cursor: "default",
                }}
              >
                {dance}
              </Typography>
            ))}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={headingStyle}>
              Quick Links
            </Typography>

            {quickLinks.map((item) => (
              <Link
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={linkStyle}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* Information */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={headingStyle}>
              Information
            </Typography>

            {informationLinks.map((item) => (
              <Link
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={linkStyle}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.2)",
            my: 4,
          }}
        />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.5,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#F5E8E8",
              fontSize: 13,
            }}
          >
            © {new Date().getFullYear()} Vidhya Dance Studio.
            All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              color: "#E5C47B",
              fontSize: 13,
              letterSpacing: 0.5,
            }}
          >
            Dance • Express • Inspire
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default Footer;
