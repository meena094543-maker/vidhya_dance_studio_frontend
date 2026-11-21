
import React from "react";
import {
    Box,
    Typography,
    Button,
    Container,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function About() {
    return (
        <Box sx={{ overflow: "hidden", backgroundColor: "#FFFFFF" }}>

            {/* 1. ABOUT PAGE BANNER */}
            <Box
                sx={{
                    minHeight: { xs: "55vh", md: "65vh" },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundImage:
                        "linear-gradient(rgba(36,18,27,0.65), rgba(36,18,27,0.82)), url('https://martfdn.org/uploads/gibney.w1440.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    px: 3,
                }}
            >
                <Box sx={{ position: "relative", zIndex: 1, maxWidth: 850 }}>

                    <Typography
                        sx={{
                            color: "#E5C47B",
                            letterSpacing: 5,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        OUR WORLD OF DANCE
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontSize: { xs: "2.5rem", md: "4.5rem" },
                            mb: 2,
                        }}
                    >
                        About Vidhya Dance Studio
                    </Typography>

                    <Typography
                        sx={{
                            color: "#F5EDE5",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            letterSpacing: 1,
                            lineHeight: 1.8,
                        }}
                    >
                        A Space to Learn, Train & Express Through Dance
                    </Typography>

                    <Box
                        sx={{
                            width: 65,
                            height: 3,
                            backgroundColor: "#E5C47B",
                            mx: "auto",
                            mt: 3,
                        }}
                    />

                </Box>
            </Box>


            {/* 2. OUR STORY */}
            <Container maxWidth="lg" sx={{ py: { xs: 7, md: 12 } }}>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.9fr 1.1fr",
                        },
                        gap: { xs: 4, md: 8 },
                        alignItems: "center",
                    }}
                >

                    {/* LEFT - STORY CONTENT */}
                    <Box>

                        <Typography
                            sx={{
                                color: "#A47A35",
                                letterSpacing: 3,
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            GET TO KNOW US
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", md: "2.8rem" },
                                mb: 3,
                                lineHeight: 1.2,
                            }}
                        >
                            Our Story
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Vidhya Dance Studio is a space created
                            for people who love dance and want to
                            explore the art of movement.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Dance is a beautiful way to express
                            emotions, discover creativity and connect
                            with music. Every style has its own
                            character, rhythm and expression.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                            }}
                        >
                            From traditional classical movements
                            to energetic Western styles and creative
                            modern dance, Vidhya Dance Studio
                            introduces different ways to experience
                            the world of dance.
                        </Typography>

                    </Box>


                    {/* RIGHT - DANCE IMAGE ARRANGEMENT */}
                    <Box
                        sx={{
                            position: "relative",
                            minHeight: { xs: 350, md: 480 },
                            display: "grid",
                            gridTemplateColumns: "1.1fr 0.9fr",
                            gap: 1.5,
                        }}
                    >

                        <Box
                            component="img"
                            src="https://www.srinaatyaanjali.com/hero-dancer.jpeg"
                            alt="Classical Bharatanatyam dance"
                            sx={{
                                width: "100%",
                                height: "100%",
                                minHeight: 350,
                                objectFit: "cover",
                                borderRadius: "120px 0 0 0",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                                pt: 5,
                                pb: 5,
                            }}
                        >

                            <Box
                                component="img"
                                src="https://contents.mediadecathlon.com/s1280454/k%24db8f3ed9938da128479ad6ddb57d4ac6/1920x0/1173pt660/2346xcr1320/dziewczyny-tanczace-hip-hop-na-sali.jpg?format=auto"
                                alt="Western dance"
                                sx={{
                                    width: "100%",
                                    height: "50%",
                                    objectFit: "cover",
                                    borderRadius: "0 65px 0 0",
                                }}
                            />

                            <Box
                                component="img"
                                src="https://martfdn.org/uploads/gibney.w1440.jpg"
                                alt="Modern contemporary dance"
                                sx={{
                                    width: "100%",
                                    height: "50%",
                                    objectFit: "cover",
                                    borderRadius: "0 0 65px 0",
                                }}
                            />

                        </Box>
                    </Box>

                </Box>
            </Container>


            {/* 3. VISION AND MISSION */}
            <Box
                sx={{
                    backgroundColor: "#F8F0E5",
                    py: { xs: 7, md: 10 },
                }}
            >
                <Container maxWidth="lg">

                    <Box sx={{ textAlign: "center", mb: 7 }}>

                        <Typography
                            sx={{
                                color: "#A47A35",
                                letterSpacing: 3,
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            WHAT GUIDES US
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", md: "2.8rem" },
                            }}
                        >
                            Our Vision & Mission
                        </Typography>

                    </Box>


                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                            },
                            gap: { xs: 5, md: 8 },
                        }}
                    >

                        {/* VISION */}
                        <Box
                            sx={{
                                borderLeft: "4px solid #A47A35",
                                pl: { xs: 3, md: 5 },
                                py: 2,
                            }}
                        >

                            <MusicNoteIcon
                                sx={{
                                    color: "#A47A35",
                                    fontSize: 42,
                                    mb: 2,
                                }}
                            />

                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    mb: 2,
                                }}
                            >
                                Our Vision
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666666",
                                    lineHeight: 2,
                                    fontSize: "1.05rem",
                                    maxWidth: 480,
                                }}
                            >
                                To create an inspiring dance environment
                                where people can discover their talents,
                                explore different dance styles and
                                express themselves with confidence.
                            </Typography>

                        </Box>


                        {/* MISSION */}
                        <Box
                            sx={{
                                borderLeft: "4px solid #3B1728",
                                pl: { xs: 3, md: 5 },
                                py: 2,
                            }}
                        >

                            <AutoAwesomeIcon
                                sx={{
                                    color: "#A47A35",
                                    fontSize: 42,
                                    mb: 2,
                                }}
                            />

                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#3B1728",
                                    fontWeight: "bold",
                                    mb: 2,
                                }}
                            >
                                Our Mission
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666666",
                                    lineHeight: 2,
                                    fontSize: "1.05rem",
                                    maxWidth: 480,
                                }}
                            >
                                To encourage the love of dance by
                                introducing different forms of movement
                                and creating opportunities for learning,
                                creativity and self-expression.
                            </Typography>

                        </Box>

                    </Box>
                </Container>
            </Box>


            {/* 4. DANCE STYLES */}
            <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 } }}>

                <Box sx={{ mb: 6 }}>

                    <Typography
                        sx={{
                            color: "#A47A35",
                            letterSpacing: 3,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        DISCOVER DIFFERENT STYLES
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            color: "#3B1728",
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", md: "2.8rem" },
                            mb: 2,
                        }}
                    >
                        Explore the World of Dance
                    </Typography>

                    <Typography
                        sx={{
                            color: "#777777",
                            lineHeight: 1.8,
                            maxWidth: 650,
                        }}
                    >
                        Each dance form brings a different rhythm,
                        technique and expression. Discover the
                        styles that inspire you.
                    </Typography>

                </Box>


                {/* CLASSICAL */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        alignItems: "center",
                        gap: 4,
                        mb: 8,
                    }}
                >

                    <Box
                        component="img"
                        src="https://www.srinaatyaanjali.com/hero-dancer.jpeg"
                        alt="Classical dance"
                        sx={{
                            width: "100%",
                            height: { xs: 260, md: 350 },
                            objectFit: "cover",
                        }}
                    />

                    <Box sx={{ px: { xs: 1, md: 4 } }}>

                        <Typography
                            sx={{
                                color: "#A47A35",
                                fontWeight: "bold",
                                letterSpacing: 3,
                                mb: 2,
                            }}
                        >
                            01 / TRADITION
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            Classical Dance
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Classical dance celebrates tradition,
                            culture, rhythm and storytelling through
                            graceful movements and expressive gestures.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                            }}
                        >
                            Bharatanatyam • Kathak • Kuchipudi
                            • Mohiniyattam
                        </Typography>

                    </Box>
                </Box>


                {/* WESTERN */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        alignItems: "center",
                        gap: 4,
                        mb: 8,
                    }}
                >

                    <Box
                        sx={{
                            order: { xs: 2, md: 1 },
                            px: { xs: 1, md: 4 },
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#A47A35",
                                fontWeight: "bold",
                                letterSpacing: 3,
                                mb: 2,
                            }}
                        >
                            02 / ENERGY
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            Western Dance
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Western dance brings together energetic
                            movements, musical rhythm and creative
                            expression through different styles.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                            }}
                        >
                            Hip Hop • Freestyle • Jazz • Contemporary
                        </Typography>

                    </Box>

                    <Box
                        component="img"
                        src="https://contents.mediadecathlon.com/s1280454/k%24db8f3ed9938da128479ad6ddb57d4ac6/1920x0/1173pt660/2346xcr1320/dziewczyny-tanczace-hip-hop-na-sali.jpg?format=auto"
                        alt="Western dance"
                        sx={{
                            order: { xs: 1, md: 2 },
                            width: "100%",
                            height: { xs: 260, md: 350 },
                            objectFit: "cover",
                        }}
                    />

                </Box>


                {/* MODERN */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        alignItems: "center",
                        gap: 4,
                        mb: 8,
                    }}
                >

                    <Box
                        component="img"
                        src="https://martfdn.org/uploads/gibney.w1440.jpg"
                        alt="Modern contemporary dance"
                        sx={{
                            width: "100%",
                            height: { xs: 260, md: 350 },
                            objectFit: "cover",
                        }}
                    />

                    <Box sx={{ px: { xs: 1, md: 4 } }}>

                        <Typography
                            sx={{
                                color: "#A47A35",
                                fontWeight: "bold",
                                letterSpacing: 3,
                                mb: 2,
                            }}
                        >
                            03 / CREATIVITY
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            Modern Dance
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Modern dance focuses on freedom of
                            movement, body expression and creative
                            ways of interpreting music.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                            }}
                        >
                            Modern Contemporary • Creative Dance
                        </Typography>

                    </Box>
                </Box>


                {/* OTHER DANCE FORMS */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        alignItems: "center",
                        gap: 4,
                    }}
                >

                    <Box
                        sx={{
                            order: { xs: 2, md: 1 },
                            px: { xs: 1, md: 4 },
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#A47A35",
                                fontWeight: "bold",
                                letterSpacing: 3,
                                mb: 2,
                            }}
                        >
                            04 / EXPRESSION
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            Other Dance Forms
                        </Typography>

                        <Typography
                            sx={{
                                color: "#666666",
                                lineHeight: 2,
                                mb: 2,
                            }}
                        >
                            Explore additional dance styles that
                            bring different cultural influences,
                            movements and artistic expressions.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#3B1728",
                                fontWeight: "bold",
                            }}
                        >
                            Belly Dance and More
                        </Typography>

                    </Box>

                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1000"
                        alt="Dance performance"
                        sx={{
                            order: { xs: 1, md: 2 },
                            width: "100%",
                            height: { xs: 260, md: 350 },
                            objectFit: "cover",
                        }}
                    />

                </Box>

            </Container>


            {/* 5. WHY CHOOSE VIDHYA DANCE ACADEMY */}
            <Box
                sx={{
                    backgroundColor: "#24121B",
                    color: "#FFFFFF",
                    py: { xs: 7, md: 11 },
                }}
            >
                <Container maxWidth="lg">

                    <Typography
                        sx={{
                            color: "#E5C47B",
                            letterSpacing: 3,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        THE REASONS TO BEGIN
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", md: "2.8rem" },
                            mb: 6,
                        }}
                    >
                        Why Choose Vidhya Dance Academy?
                    </Typography>


                    {[
                        {
                            number: "01",
                            title: "Explore Multiple Dance Styles",
                            description: "Discover classical, western, modern and other dance forms in one place.",
                        },
                        {
                            number: "02",
                            title: "Creative Expression",
                            description: "Use movement and music to express your personality and creativity.",
                        },
                        {
                            number: "03",
                            title: "Build Confidence",
                            description: "Develop confidence by exploring new movements and dance experiences.",
                        },
                        {
                            number: "04",
                            title: "Enjoy Learning",
                            description: "Make dance a joyful activity through rhythm, practice and expression.",
                        },
                        {
                            number: "05",
                            title: "Discover Your Passion",
                            description: "Find the dance style that inspires you and enjoy your own dance journey.",
                        },
                    ].map((item) => (
                        <Box
                            key={item.number}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "55px 1fr",
                                    md: "100px 1fr 1.2fr",
                                },
                                gap: { xs: 2, md: 4 },
                                alignItems: "center",
                                py: 3.5,
                                borderBottom: "1px solid rgba(229,196,123,0.3)",
                            }}
                        >

                            <Typography
                                sx={{
                                    color: "#E5C47B",
                                    fontSize: { xs: "1.2rem", md: "1.6rem" },
                                    fontWeight: "bold",
                                }}
                            >
                                {item.number}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#FFFFFF",
                                    fontWeight: "bold",
                                    fontSize: { xs: "1rem", md: "1.3rem" },
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#C9BBC2",
                                    lineHeight: 1.8,
                                    gridColumn: { xs: "2", md: "auto" },
                                }}
                            >
                                {item.description}
                            </Typography>

                        </Box>
                    ))}

                </Container>
            </Box>


            {/* 6. FINAL CALL TO ACTION */}
            <Box
                sx={{
                    backgroundColor: "#F8F0E5",
                    textAlign: "center",
                    py: { xs: 7, md: 9 },
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
                    YOUR DANCE JOURNEY STARTS HERE
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
                    Let Movement Inspire You
                </Typography>

                <Typography
                    sx={{
                        color: "#666666",
                        maxWidth: 600,
                        mx: "auto",
                        lineHeight: 1.8,
                        mb: 4,
                    }}
                >
                    Explore different dance styles and discover
                    the joy of expressing yourself through dance.
                </Typography>

                <Button
                    variant="contained"
                    href="/departments"
                    sx={{
                        backgroundColor: "#3B1728",
                        color: "#FFFFFF",
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#57243A",
                        },
                    }}
                >
                    Explore Departments
                </Button>

            </Box>

        </Box>
    );
}

export default About;
