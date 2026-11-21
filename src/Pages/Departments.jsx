
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const departments = [
  {
    number: "01",
    title: "Classical Dance",
    subtitle: "Tradition • Grace • Expression",
    description:
      "Discover the beauty of Indian classical dance through expressive movements, rhythm, hand gestures and traditional techniques.",
    styles: [
      "Bharatanatyam",
      "Kathak",
      "Kuchipudi",
      "Mohiniyattam",
    ],
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&auto=format&fit=crop",
    reverse: false,
  },
  {
    number: "02",
    title: "Western Dance",
    subtitle: "Energy • Rhythm • Style",
    description:
      "Explore energetic dance styles that combine music, body movement and creative expression. Discover your own style through movement.",
    styles: [
      "Hip Hop",
      "Freestyle",
      "Jazz",
      "Contemporary",
    ],
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop",
    reverse: true,
  },
  {
    number: "03",
    title: "Modern Dance",
    subtitle: "Creativity • Freedom • Movement",
    description:
      "Express ideas and emotions through creative movement. Modern dance encourages individuality, imagination and freedom of expression.",
    styles: [
      "Modern Contemporary",
      "Creative Dance",
    ],
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1200&auto=format&fit=crop",
    reverse: false,
  },
  {
    number: "04",
    title: "Other Dance Forms",
    subtitle: "Explore • Experiment • Enjoy",
    description:
      "Step beyond familiar styles and explore different dance forms. Experience new movements, rhythms and cultural influences.",
    styles: [
      "Belly Dance",
      "Creative Dance Forms",
    ],
    image:
      "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1200&auto=format&fit=crop",
    reverse: true,
  },
];

function Departments() {
  return (
    <Box sx={{ backgroundColor: "#F8F0E5", overflow: "hidden" }}>

      {/* HERO BANNER */}
      <Box
        sx={{
          minHeight: { xs: "390px", md: "500px" },
          backgroundImage:
            "linear-gradient(rgba(35,12,25,0.58), rgba(35,12,25,0.72)), url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFFFFF",
          px: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#E5C47B",
              letterSpacing: 5,
              fontSize: 13,
              mb: 2,
            }}
          >
            FIND YOUR RHYTHM
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 38, md: 65 },
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              mb: 2,
            }}
          >
            Our Dance Departments
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.8,
              color: "#F8F0E5",
            }}
          >
            From traditional expressions to modern movements,
            explore different dance styles and discover the
            joy of dance.
          </Typography>
        </Box>
      </Box>

      {/* INTRODUCTION */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 6, md: 9 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#9B7650",
            letterSpacing: 3,
            fontSize: 13,
            mb: 2,
          }}
        >
          EXPLORE YOUR PASSION
        </Typography>

        <Typography
          sx={{
            color: "#3B1728",
            fontSize: { xs: 27, md: 38 },
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            mb: 2,
          }}
        >
          A World of Dance Awaits You
        </Typography>

        <Typography
          sx={{
            color: "#66545B",
            lineHeight: 1.9,
            fontSize: 16,
          }}
        >
          Every dance style has its own story, rhythm and expression.
          Explore our departments to find the dance form that inspires you.
        </Typography>
      </Container>

      {/* DEPARTMENT SECTIONS */}
      {departments.map((department) => (
        <Box key={department.number}>
          <Container
            maxWidth="lg"
            sx={{ pb: { xs: 7, md: 10 } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: department.reverse ? "row-reverse" : "row",
                },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >

              {/* DEPARTMENT IMAGE */}
              <Box
                sx={{
                  width: { xs: "100%", md: "52%" },
                  height: { xs: 280, md: 390 },
                  overflow: "hidden",
                  borderRadius: department.reverse
                    ? "100px 8px 100px 8px"
                    : "8px 100px 8px 100px",
                }}
              >
                <Box
                  component="img"
                  src={department.image}
                  alt={department.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>

              {/* DEPARTMENT CONTENT */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    color: "#B18B54",
                    fontSize: 14,
                    letterSpacing: 3,
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  DEPARTMENT {department.number}
                </Typography>

                <Typography
                  sx={{
                    color: "#3B1728",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: { xs: 31, md: 42 },
                    mb: 1,
                  }}
                >
                  {department.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#9B7650",
                    fontSize: 14,
                    letterSpacing: 1,
                    mb: 3,
                  }}
                >
                  {department.subtitle}
                </Typography>

                <Typography
                  sx={{
                    color: "#66545B",
                    lineHeight: 1.9,
                    fontSize: 16,
                    mb: 3,
                  }}
                >
                  {department.description}
                </Typography>

                <Divider
                  sx={{
                    borderColor: "#D8C5AC",
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    color: "#3B1728",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Dance Styles
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  {department.styles.map((style) => (
                    <Box
                      key={style}
                      sx={{
                        border: "1px solid #B18B54",
                        color: "#3B1728",
                        px: 2,
                        py: 1,
                        borderRadius: "30px",
                        fontSize: 13,
                      }}
                    >
                      {style}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}

      {/* FINAL CALL TO ACTION */}
      <Box
        sx={{
          backgroundColor: "#3B1728",
          textAlign: "center",
          py: { xs: 7, md: 9 },
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: "#E5C47B",
            letterSpacing: 3,
            fontSize: 13,
            mb: 2,
          }}
        >
          YOUR JOURNEY STARTS HERE
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: { xs: 28, md: 42 },
            mb: 2,
          }}
        >
          Find the Dance That Moves You
        </Typography>

        <Typography
          sx={{
            color: "#E8DDE1",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Explore different dance styles and take the first
          step towards your dance journey.
        </Typography>

        <Button
          href="/contact"
          variant="contained"
          sx={{
            backgroundColor: "#E5C47B",
            color: "#3B1728",
            px: 4,
            py: 1.5,
            borderRadius: 0,
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#F0D69A",
            },
          }}
        >
          Enquire Now
        </Button>
      </Box>
    </Box>
  );
}

export default Departments;
