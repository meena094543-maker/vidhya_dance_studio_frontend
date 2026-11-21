
import React from "react";
import {
    Box,
    Typography,
    Button,
    Container,
    TextField,
    MenuItem,
    Link,
} from "@mui/material";

function Homepage() {
    return (
        <Box sx={{ overflow: "hidden" }}>

            {/* 1. HERO BANNER - UNCHANGED */}
            <Box
                id="home"
                sx={{
                    minHeight: { xs: "70vh", md: "85vh" },
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    background: "linear-gradient(110deg, #24121B 0%, #3B1728 50%, #24121B 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3, md: 10 },
                }}
            >
                {/* LEFT SIDE - CLASSICAL DANCE IMAGE */}
                <Box
                    component="img"
                    src="https://www.srinaatyaanjali.com/hero-dancer.jpeg"
                    alt="Bharatanatyam dancer in a classical pose"
                    sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: { xs: "48%", md: "38%" },
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: 0.88,
                        maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                    }}
                />

                {/* RIGHT SIDE - WESTERN / HIP-HOP DANCE IMAGE */}
                <Box
                    component="img"
                    src="https://steezy.imgix.net/class-thumbnails/the-future-kingz-dirty-basic.jpg?w=720"
                    alt="Group performing Western hip-hop dance"
                    sx={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        width: { xs: "48%", md: "38%" },
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: 0.82,
                        maskImage: "linear-gradient(to left, black 65%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to left, black 65%, transparent 100%)",
                    }}
                />

                {/* DARK OVERLAY */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, rgba(36,18,27,0.25), rgba(36,18,27,0.78) 35%, rgba(36,18,27,0.78) 65%, rgba(36,18,27,0.25))",
                    }}
                />

                {/* GOLDEN SPOTLIGHT */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse at center, rgba(229,196,123,0.16) 0%, transparent 58%)",
                        pointerEvents: "none",
                    }}
                />

                {/* CENTER BANNER CONTENT */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: 850,
                        mx: "auto",
                        textAlign: "center",
                        py: 5,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#E5C47B",
                            letterSpacing: 5,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        VIDHYA DANCE STUDIO
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2.3rem", md: "4.5rem" },
                            lineHeight: 1.15,
                            mb: 3,
                            textShadow: "0 3px 18px rgba(0,0,0,0.45)",
                        }}
                    >
                        Discover the Art of Dance
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            letterSpacing: 1,
                            mb: 4,
                            color: "#F5EDE5",
                        }}
                    >
                        Express Yourself Through Every Move
                    </Typography>

                    <Button
                        variant="contained"
                        href="/departments"
                        sx={{
                            backgroundColor: "#E5C47B",
                            color: "#3B1728",
                            px: 4,
                            py: 1.5,
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "#D4AE5F",
                            },
                        }}
                    >
                        Explore Departments
                    </Button>
                </Box>
            </Box>

            {/* 2. ABOUT SECTION */}
            <Container
                id="about"
                maxWidth="lg"
                sx={{ py: { xs: 7, md: 12 } }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 4, md: 7 },
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* LEFT SIDE - DANCE IMAGE COLLAGE */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gridTemplateRows: "190px 190px",
                            gap: 1.5,
                        }}
                    >
                        {/* CLASSICAL DANCE IMAGE - SELECTED SECOND IMAGE */}
                        <Box
                            component="img"
                            src="https://cdn-images-1.medium.com/v2/resize:fit:2600/1*a7iR2P0fLXUS559adnaigQ.jpeg"
                            alt="Bharatanatyam dancer performing in traditional costume"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                gridRow: "1 / 3",
                                borderRadius: 2,
                            }}
                        />

                        {/* WESTERN GROUP DANCE IMAGE - UNCHANGED */}
                        <Box
                            component="img"
                            src="https://skoolofhiphop.in/webAssets/img/aboutdance.png"
                            alt="Group of dancers performing Western hip-hop"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: 2,
                            }}
                        />

                        {/* CONTEMPORARY IMAGE - UNCHANGED */}
                        <Box
                            component="img"
                            src="https://martfdn.org/uploads/gibney.w1440.jpg"
                            alt="Contemporary dance performance"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: 2,
                            }}
                        />
                    </Box>

                    {/* RIGHT SIDE - ABOUT CONTENT */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                color: "#A47A35",
                                letterSpacing: 3,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                mb: 2,
                            }}
                        >
                            ABOUT OUR STUDIO
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", md: "2.8rem" },
                                lineHeight: 1.2,
                                mb: 3,
                            }}
                        >
                            Where Passion Meets Movement
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                fontSize: "1rem",
                                mb: 3,
                            }}
                        >
                            Vidhya Dance Studio is a place to explore
                            the beauty of dance, express creativity,
                            and discover different dance styles.

                            From traditional classical dance to energetic
                            western and contemporary movements, explore
                            the joy of dance in your own way.
                        </Typography>

                        <Button
                            variant="outlined"
                            href="/about"
                            sx={{
                                color: "#3B1728",
                                borderColor: "#3B1728",
                                px: 4,
                                py: 1.3,
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#3B1728",
                                    color: "#FFFFFF",
                                    borderColor: "#3B1728",
                                },
                            }}
                        >
                            More About Us
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* 3. QUICK ENQUIRY SECTION - UNCHANGED */}
            <Box
                id="enquiry"
                sx={{
                    backgroundColor: "#F8F0E5",
                    py: { xs: 7, md: 10 },
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 8 },
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        {/* LEFT SIDE CONTENT */}
                        <Box sx={{ flex: 1, width: "100%" }}>
                            <Typography
                                sx={{
                                    color: "#A47A35",
                                    letterSpacing: 3,
                                    fontWeight: "bold",
                                    mb: 2,
                                }}
                            >
                                BE A PART OF OUR STUDIO
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", md: "2.8rem" },
                                    lineHeight: 1.2,
                                    mb: 3,
                                }}
                            >
                                Join Vidhya Dance Studio Today
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666666",
                                    lineHeight: 1.9,
                                    mb: 4,
                                }}
                            >
                                Step into a world of rhythm, creativity
                                and expression. Join our dance community
                                and discover the style that moves you.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    mb: 1,
                                }}
                            >
                                Phone
                            </Typography>

                            <Link
                                href="tel:+919876543210"
                                underline="none"
                                sx={{
                                    color: "#666666",
                                    display: "inline-block",
                                    mb: 3,
                                    "&:hover": {
                                        color: "#A17A35",
                                    },
                                }}
                            >
                                +91 98765 43210
                            </Link>

                            <Typography
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    mb: 1,
                                }}
                            >
                                Email
                            </Typography>

                            <Link
                                href="mailto:info@vidhyadancestudio.com"
                                underline="none"
                                sx={{
                                    color: "#666666",
                                    "&:hover": {
                                        color: "#A17A35",
                                    },
                                }}
                            >
                                info@vidhyadancestudio.com
                            </Link>
                        </Box>

                        {/* RIGHT SIDE - ENQUIRY FORM */}
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: 460,
                                backgroundColor: "#FFFFFF",
                                p: { xs: 3, md: 4 },
                                borderRadius: 2,
                                boxShadow: "0 10px 35px rgba(59,23,40,0.09)",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    mb: 1,
                                }}
                            >
                                Join Our Dance Community
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#777777",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.7,
                                    mb: 3,
                                }}
                            >
                                Let your passion find its rhythm.
                                Send us your details to get started.
                            </Typography>

                            <Box
                                component="form"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    label="Full Name"
                                    size="small"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    label="Mobile Number"
                                    type="tel"
                                    size="small"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    label="Email Address"
                                    type="email"
                                    size="small"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    select
                                    label="Interested Dance Style"
                                    defaultValue=""
                                    size="small"
                                    fullWidth
                                >
                                    <MenuItem value="Classical">
                                        Classical
                                    </MenuItem>

                                    <MenuItem value="Western">
                                        Western
                                    </MenuItem>

                                    <MenuItem value="Modern">
                                        Modern
                                    </MenuItem>

                                    <MenuItem value="Other">
                                        Other Dance Forms
                                    </MenuItem>
                                </TextField>

                                <TextField
                                    label="Your Message"
                                    multiline
                                    rows={2}
                                    size="small"
                                    fullWidth
                                />

                                <Button
                                    type="button"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#3B1728",
                                        color: "#FFFFFF",
                                        py: 1.3,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#57243A",
                                        },
                                    }}
                                >
                                    Submit Enquiry
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* 4. FOOTER CALL TO ACTION - MATCH ABOUT BACKGROUND */}
            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#3B1728",
                    textAlign: "center",
                    py: 7,
                    px: 3,
                }}
            >
                <Typography
                    sx={{
                        color: "#A47A35",
                        letterSpacing: 3,
                        fontWeight: "bold",
                        mb: 2,
                    }}
                >
                    YOUR JOURNEY STARTS HERE
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        color: "#3B1728",
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "3rem" },
                        mb: 2,
                    }}
                >
                    Let's Begin Your Dance Journey
                </Typography>

                <Typography
                    sx={{
                        color: "#666666",
                        maxWidth: 600,
                        mx: "auto",
                        lineHeight: 1.8,
                        mb: 3,
                    }}
                >
                    Discover your rhythm, express your passion
                    and make every movement meaningful.
                </Typography>

                <Button
                    variant="contained"
                    href="/signup"
                    sx={{
                        backgroundColor: "#3B1728",
                        color: "#FFFFFF",
                        px: 4,
                        py: 1.4,
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#57243A",
                        },
                    }}
                >
                    Join Us Today
                </Button>
            </Box>

            {/* COMMON FOOTER IS ADDED THROUGH App.js */}

        </Box>
    );
}

export default Homepage;
