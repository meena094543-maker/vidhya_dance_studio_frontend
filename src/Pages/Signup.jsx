
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Container,
  Link,
} from "@mui/material";

import StudioLogo from "../Components/StudioLogo";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    danceStyle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check whether passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://vidhya-dance-studio-backend.onrender.com/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            mobile: formData.mobile,
            password: formData.password,
            danceStyle: formData.danceStyle,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Signup failed. Please try again."
        );
      }

      alert(data.message || "Account created successfully!");

      // Clear form after successful signup
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        danceStyle: "",
      });
    } catch (error) {
      console.error("Signup Error:", error);
      alert(
        error.message ||
          "Unable to connect to the server. Please try again."
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8F0E5",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            minHeight: { md: 680 },
          }}
        >
          {/* Left Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: 350, md: "auto" },
              backgroundImage:
                "linear-gradient(rgba(40,10,25,0.45), rgba(40,10,25,0.72)), url('https://dansakademi.com.tr/uploads/2021/12/cocuk-hip-hop-egitimi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              p: { xs: 3, md: 5 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#E5C47B",
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                JOIN OUR STUDIO
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Start Your Dance Journey
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                Learn different dance styles, improve your confidence
                and discover the joy of movement with Vidhya Dance Studio.
              </Typography>
            </Box>
          </Box>

          {/* Right Signup Form */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 3, sm: 5, md: 6 },
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 420 }}>
              {/* Studio Logo */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 3,
                  backgroundColor: "#3B1728",
                  py: 2,
                  borderRadius: 2,
                }}
              >
                <StudioLogo />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: "#3B1728",
                  fontWeight: 800,
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Create Your Account
              </Typography>

              <Typography
                sx={{
                  color: "#777777",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Join us and begin your dance journey
              </Typography>

              <Box component="form" onSubmit={handleSignup}>
                {/* Full Name */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Full Name
                </Typography>

                <TextField
                  fullWidth
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  sx={{ mb: 2 }}
                />

                {/* Email Address */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Email Address
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  sx={{ mb: 2 }}
                />

                {/* Mobile Number */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Mobile Number
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  inputProps={{
                    maxLength: 10,
                    pattern: "[0-9]{10}",
                  }}
                  sx={{ mb: 2 }}
                />

                {/* Password */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Password
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  inputProps={{ minLength: 6 }}
                  sx={{ mb: 2 }}
                />

                {/* Confirm Password */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Confirm Password
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  sx={{ mb: 2 }}
                />

                {/* Dance Style */}
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                  Select Dance Style
                </Typography>

                <TextField
                  select
                  fullWidth
                  required
                  name="danceStyle"
                  value={formData.danceStyle}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                >
                  <MenuItem value="Classical">Classical</MenuItem>
                  <MenuItem value="Western">Western</MenuItem>
                  <MenuItem value="Modern">Modern</MenuItem>
                  <MenuItem value="Other Dance Forms">
                    Other Dance Forms
                  </MenuItem>
                </TextField>

                {/* Create Account Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#3B1728",
                    color: "#FFFFFF",
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: 16,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#5B2039",
                    },
                  }}
                >
                  Create Account
                </Button>

                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 3,
                    color: "#666666",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    underline="hover"
                    sx={{
                      color: "#3B1728",
                      fontWeight: 700,
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
