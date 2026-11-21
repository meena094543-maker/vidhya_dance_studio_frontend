
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import StudioLogo from "../Components/StudioLogo";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage("Please fill in all the fields.");
    } else if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      setMessage(
        "Your password reset request has been submitted. Backend functionality will be connected later."
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
            minHeight: { md: 600 },
          }}
        >
          {/* Left Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: 350, md: "auto" },
              backgroundImage:
                "linear-gradient(rgba(40,10,25,0.45), rgba(40,10,25,0.72)), url('https://i.pinimg.com/originals/8e/07/60/8e0760864b42baef8cf8b974b4065811.jpg')",
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
                VIDHYA DANCE STUDIO
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
                Keep Dancing!
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 420,
                }}
              >
                Every step tells a story. Continue learning, expressing and
                enjoying the beautiful world of dance with Vidhya Dance Studio.
              </Typography>
            </Box>
          </Box>

          {/* Right Forgot Password Form */}
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
                  mb: 2,
                }}
              >
                Forgot Password?
              </Typography>

              <Typography
                sx={{
                  color: "#777777",
                  textAlign: "center",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Enter your email address and create your new password.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                {/* Email */}
                <Typography sx={{ color: "#3B1728", fontWeight: 600, mb: 1 }}>
                  Email Address
                </Typography>

                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  sx={{ mb: 2 }}
                />

                {/* New Password */}
                <Typography sx={{ color: "#3B1728", fontWeight: 600, mb: 1 }}>
                  New Password
                </Typography>

                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Confirm Password */}
                <Typography sx={{ color: "#3B1728", fontWeight: 600, mb: 1 }}>
                  Confirm New Password
                </Typography>

                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setMessage("");
                  }}
                  sx={{ mb: 3 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

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
                    "&:hover": { backgroundColor: "#5B2039" },
                  }}
                >
                  Reset Password
                </Button>

                {message && (
                  <Typography
                    sx={{
                      mt: 2,
                      color: "#A47A35",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    {message}
                  </Typography>
                )}

                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 3,
                    color: "#666666",
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      color: "#A47A35",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Back to Login
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

export default ForgotPassword;
