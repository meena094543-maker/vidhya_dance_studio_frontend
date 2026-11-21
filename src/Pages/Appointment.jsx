
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";

function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    danceStyle: "",
    classType: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your appointment request has been submitted!");

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      danceStyle: "",
      classType: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#FFF9F2", pb: 8 }}>

      {/* APPOINTMENT BANNER */}
      <Box
        sx={{
          minHeight: { xs: 280, md: 360 },
          width: "100%",
          backgroundColor: "#3B1728",
          backgroundImage: `
            linear-gradient(
              rgba(35, 12, 25, 0.55),
              rgba(35, 12, 25, 0.65)
            ),
            url("https://static.wixstatic.com/media/38f875_4767e184ec2249c6acf5c680af87cc29~mv2.jpeg/v1/fill/w_1600%2Ch_1066%2Cal_c/38f875_4767e184ec2249c6acf5c680af87cc29~mv2.jpeg")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          borderBottom: "4px solid #E5C47B",
        }}
      >
        <Typography
          sx={{
            color: "#E5C47B",
            letterSpacing: 3,
            fontWeight: 700,
            fontSize: { xs: 14, md: 17 },
            mb: 1,
          }}
        >
          VIDHYA DANCE STUDIO
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: 32, md: 48 },
            fontWeight: 800,
            mb: 1,
          }}
        >
          Book Your Appointment
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: 14, md: 18 },
          }}
        >
          Take the First Step Towards Your Dance Journey
        </Typography>
      </Box>

      {/* APPOINTMENT FORM */}
      <Container maxWidth="md" sx={{ mt: { xs: 4, md: 6 } }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            borderTop: "5px solid #E5C47B",
          }}
        >
          <Box textAlign="center" mb={4}>
            <EventAvailableIcon
              sx={{ fontSize: 45, color: "#8B3A5A", mb: 1 }}
            />

            <Typography
              variant="h4"
              sx={{
                color: "#5B2039",
                fontWeight: 800,
                fontSize: { xs: 25, md: 32 },
              }}
            >
              Appointment Form
            </Typography>

            <Typography sx={{ color: "#777", mt: 1 }}>
              Fill in your details to book your dance class.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Select Dance Style"
                  name="danceStyle"
                  value={formData.danceStyle}
                  onChange={handleChange}
                >
                  <MenuItem value="Classical">Classical</MenuItem>
                  <MenuItem value="Western">Western</MenuItem>
                  <MenuItem value="Modern">Modern</MenuItem>
                  <MenuItem value="Other Dance Forms">
                    Other Dance Forms
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Class Type"
                  name="classType"
                  value={formData.classType}
                  onChange={handleChange}
                >
                  <MenuItem value="Trial Class">Trial Class</MenuItem>
                  <MenuItem value="Regular Class">Regular Class</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Preferred Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type="time"
                  label="Preferred Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message (Optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything you would like us to know..."
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#5B2039",
                    color: "#FFFFFF",
                    py: 1.6,
                    fontSize: 16,
                    fontWeight: 700,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#7A3150",
                    },
                  }}
                >
                  BOOK APPOINTMENT
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Appointment;
