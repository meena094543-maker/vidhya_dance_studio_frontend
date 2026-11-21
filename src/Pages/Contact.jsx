
import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccess("Thank you! Your enquiry has been submitted successfully.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    const studioAddress = "Coimbatore, Tamil Nadu, India";
    const studioPhone = "+91 98765 43210";
    const studioEmail = "info@vidhyadancestudio.com";

    const mapLink =
        "https://www.google.com/maps/search/?api=1&query=Coimbatore%2C+Tamil+Nadu%2C+India";

    return (
        <Box sx={{ backgroundColor: "#F8F0E5", minHeight: "100vh" }}>

            {/* HERO SECTION */}
            <Box
                sx={{
                    background: "linear-gradient(rgba(35,12,24,0.75), rgba(35,12,24,0.75)), url('https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1800') center/cover",
                    py: { xs: 8, md: 12 },
                    textAlign: "center"
                }}
            >
                <Typography
                    sx={{
                        color: "#E5C47B",
                        letterSpacing: "4px",
                        fontSize: "13px",
                        mb: 2
                    }}
                >
                    VIDHYA DANCE STUDIO
                </Typography>

                <Typography
                    sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "36px", md: "50px" },
                        fontWeight: 700,
                        fontFamily: "Georgia, serif"
                    }}
                >
                    Contact Us
                </Typography>

                <Typography
                    sx={{
                        color: "#F8F0E5",
                        mt: 2,
                        fontSize: "15px"
                    }}
                >
                    Let's Connect Through the Joy of Dance
                </Typography>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>

                {/* INTRODUCTION */}
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography
                        sx={{
                            color: "#A17B43",
                            letterSpacing: "3px",
                            fontSize: "12px",
                            fontWeight: 600
                        }}
                    >
                        GET IN TOUCH
                    </Typography>

                    <Typography
                        sx={{
                            color: "#3B1728",
                            fontSize: { xs: "27px", md: "34px" },
                            fontWeight: 700,
                            fontFamily: "Georgia, serif",
                            mt: 1
                        }}
                    >
                        We'd Love to Hear From You
                    </Typography>

                    <Typography
                        sx={{
                            color: "#777777",
                            maxWidth: "650px",
                            mx: "auto",
                            mt: 2,
                            lineHeight: 1.9,
                            fontSize: "14px"
                        }}
                    >
                        Have questions about our dance classes, schedules or
                        admissions? Contact us and our team will be happy to help.
                    </Typography>
                </Box>

                {/* CONTACT DETAILS AND FORM */}
                <Grid container spacing={4}>

                    {/* LEFT CONTACT DETAILS */}
                    <Grid item xs={12} md={5}>

                        <Box
                            sx={{
                                backgroundColor: "#3B1728",
                                color: "#F8F0E5",
                                p: { xs: 3, md: 4 },
                                borderRadius: "10px",
                                height: "100%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#E5C47B",
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    fontFamily: "Georgia, serif",
                                    mb: 1
                                }}
                            >
                                Contact Information
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#D9C8C9",
                                    fontSize: "13px",
                                    lineHeight: 1.8,
                                    mb: 4
                                }}
                            >
                                Reach out to us for class enquiries,
                                admissions and further information.
                            </Typography>

                            {/* LOCATION */}
                            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                                <LocationOnOutlinedIcon
                                    sx={{ color: "#E5C47B", fontSize: 27 }}
                                />

                                <Box>
                                    <Typography fontWeight={600}>
                                        Our Location
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#D9C8C9",
                                            fontSize: "13px",
                                            mt: 0.5
                                        }}
                                    >
                                        {studioAddress}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* PHONE */}
                            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                                <PhoneOutlinedIcon
                                    sx={{ color: "#E5C47B", fontSize: 25 }}
                                />

                                <Box>
                                    <Typography fontWeight={600}>
                                        Phone Number
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#D9C8C9",
                                            fontSize: "13px",
                                            mt: 0.5
                                        }}
                                    >
                                        {studioPhone}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* EMAIL */}
                            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                                <EmailOutlinedIcon
                                    sx={{ color: "#E5C47B", fontSize: 25 }}
                                />

                                <Box>
                                    <Typography fontWeight={600}>
                                        Email Address
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#D9C8C9",
                                            fontSize: "13px",
                                            mt: 0.5
                                        }}
                                    >
                                        {studioEmail}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* WORKING HOURS */}
                            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                                <AccessTimeOutlinedIcon
                                    sx={{ color: "#E5C47B", fontSize: 25 }}
                                />

                                <Box>
                                    <Typography fontWeight={600}>
                                        Working Hours
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#D9C8C9",
                                            fontSize: "13px",
                                            mt: 0.5,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Monday – Saturday
                                        <br />
                                        9:00 AM – 7:00 PM
                                    </Typography>
                                </Box>
                            </Box>

                            {/* DIRECTIONS BUTTON */}
                            <Button
                                component="a"
                                href={mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                                startIcon={<DirectionsOutlinedIcon />}
                                sx={{
                                    backgroundColor: "#E5C47B",
                                    color: "#3B1728",
                                    py: 1.4,
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#D2AE62"
                                    }
                                }}
                            >
                                Get Directions
                            </Button>

                        </Box>
                    </Grid>

                    {/* RIGHT ENQUIRY FORM */}
                    <Grid item xs={12} md={7}>

                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: "10px",
                                height: "100%",
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #EFE5D6"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#3B1728",
                                    fontSize: "25px",
                                    fontWeight: 700,
                                    fontFamily: "Georgia, serif",
                                    mb: 1
                                }}
                            >
                                Send Us an Enquiry
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#888888",
                                    fontSize: "13px",
                                    mb: 3
                                }}
                            >
                                Fill in the form below and we'll get back to you.
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                            >

                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Mobile Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            multiline
                                            rows={5}
                                            required
                                        />
                                    </Grid>

                                </Grid>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mt: 3,
                                        py: 1.5,
                                        backgroundColor: "#3B1728",
                                        color: "#E5C47B",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "#542238"
                                        }
                                    }}
                                >
                                    Submit Enquiry
                                </Button>

                                {success && (
                                    <Typography
                                        sx={{
                                            color: "green",
                                            fontSize: "13px",
                                            mt: 2,
                                            textAlign: "center"
                                        }}
                                    >
                                        {success}
                                    </Typography>
                                )}

                            </Box>
                        </Paper>
                    </Grid>

                </Grid>

                {/* GOOGLE MAP */}
                <Box sx={{ mt: 7 }}>
                    <Typography
                        sx={{
                            color: "#3B1728",
                            fontSize: "28px",
                            fontWeight: 700,
                            fontFamily: "Georgia, serif",
                            textAlign: "center",
                            mb: 1
                        }}
                    >
                        Find Our Location
                    </Typography>

                    <Typography
                        sx={{
                            color: "#777777",
                            fontSize: "14px",
                            textAlign: "center",
                            mb: 3
                        }}
                    >
                        Visit Vidhya Dance Studio in Coimbatore.
                    </Typography>

                    <Box
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            border: "3px solid #E5C47B",
                            height: { xs: "300px", md: "400px" }
                        }}
                    >
                        <iframe
                            title="Vidhya Dance Studio Coimbatore Location"
                            src="https://maps.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Box>

                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Button
                            component="a"
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "#A17B43",
                                fontWeight: 700,
                                textTransform: "none"
                            }}
                        >
                            Open Google Maps →
                        </Button>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}

export default Contact;
