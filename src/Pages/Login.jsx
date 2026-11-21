
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import StudioLogo from "../Components/StudioLogo";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
            minHeight: { md: 620 },
          }}
        >
          {/* Left Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: 350, md: "auto" },
              backgroundImage:
                "linear-gradient(rgba(40,10,25,0.48), rgba(40,10,25,0.72)), url('https://images-pw.pixieset.com/elementfield/0K45zPk/DakshaDancePictures-82-17251a6f-1000.jpg')",
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
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                WELCOME TO
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: 30, md: 40 },
                }}
              >
                Discover the Beauty of Dance
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 420,
                }}
              >
                Explore your passion, learn new skills and express yourself
                through the beautiful art of dance.
              </Typography>
            </Box>
          </Box>

          {/* Right Login Form */}
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
                  mb: 4,
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
                Welcome Back!
              </Typography>

              <Typography
                sx={{
                  color: "#777777",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                Login to continue your dance journey
              </Typography>

              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                {/* Email Address */}
                <Typography
                  sx={{ color: "#3B1728", fontWeight: 600, mb: 1 }}
                >
                  Email Address
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Enter your email address"
                  type="email"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />

                {/* Password */}
                <Typography
                  sx={{ color: "#3B1728", fontWeight: 600, mb: 1 }}
                >
                  Password
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  sx={{ mb: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Forgot Password */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mb: 3,
                  }}
                >
                  <Link
                    href="/forgot-password"
                    underline="hover"
                    sx={{
                      color: "#A47A35",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Box>

                {/* Login Button */}
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
                  Login
                </Button>

                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 4,
                    color: "#666666",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    underline="hover"
                    sx={{
                      color: "#A47A35",
                      fontWeight: 700,
                    }}
                  >
                    Sign Up
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

export default Login;
