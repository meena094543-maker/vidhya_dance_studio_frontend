
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip
} from "@mui/material";

const weeklySchedule = {
  SUN: {
    kids: [
      {
        name: "Bharatanatyam",
        time: "9:00 AM - 10:00 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Hip Hop",
        time: "10:15 AM - 11:15 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      },
      {
        name: "Creative Dance",
        time: "11:30 AM - 12:30 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ],
    adults: [
      {
        name: "Kathak",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Contemporary",
        time: "5:15 PM - 6:15 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      }
    ]
  },

  MON: {
    kids: [
      {
        name: "Bharatanatyam",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Western Dance",
        time: "5:15 PM - 6:15 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      },
      {
        name: "Freestyle",
        time: "6:30 PM - 7:30 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      }
    ],
    adults: [
      {
        name: "Kathak",
        time: "6:00 AM - 7:00 AM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Contemporary",
        time: "6:00 PM - 7:00 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ]
  },

  TUE: {
    kids: [
      {
        name: "Kathak",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Hip Hop",
        time: "5:15 PM - 6:15 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      }
    ],
    adults: [
      {
        name: "Bharatanatyam",
        time: "6:00 AM - 7:00 AM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Jazz Dance",
        time: "6:00 PM - 7:00 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      },
      {
        name: "Freestyle",
        time: "7:15 PM - 8:15 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ]
  },

  WED: {
    kids: [
      {
        name: "Kuchipudi",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Creative Dance",
        time: "5:15 PM - 6:15 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ],
    adults: [
      {
        name: "Contemporary",
        time: "6:00 AM - 7:00 AM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      },
      {
        name: "Hip Hop",
        time: "6:00 PM - 7:00 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      }
    ]
  },

  THU: {
    kids: [
      {
        name: "Bharatanatyam",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Freestyle",
        time: "5:15 PM - 6:15 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      }
    ],
    adults: [
      {
        name: "Kathak",
        time: "6:00 AM - 7:00 AM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Jazz Dance",
        time: "6:00 PM - 7:00 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ]
  },

  FRI: {
    kids: [
      {
        name: "Kathak",
        time: "4:00 PM - 5:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Hip Hop",
        time: "5:15 PM - 6:15 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      },
      {
        name: "Creative Dance",
        time: "6:30 PM - 7:30 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ],
    adults: [
      {
        name: "Bharatanatyam",
        time: "6:00 AM - 7:00 AM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Contemporary",
        time: "6:00 PM - 7:00 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      }
    ]
  },

  SAT: {
    kids: [
      {
        name: "Bharatanatyam",
        time: "9:00 AM - 10:00 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=900"
      },
      {
        name: "Hip Hop",
        time: "10:15 AM - 11:15 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=900"
      },
      {
        name: "Creative Dance",
        time: "11:30 AM - 12:30 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900"
      }
    ],
    adults: [
      {
        name: "Kathak",
        time: "4:00 PM - 5:00 PM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900"
      },
      {
        name: "Western Dance",
        time: "5:15 PM - 6:15 PM",
        level: "All Levels",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
      }
    ]
  }
};

function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState("MON");
  const [selectedGroup, setSelectedGroup] = useState("kids");

  const days = [
    { short: "SUN", full: "Sunday" },
    { short: "MON", full: "Monday" },
    { short: "TUE", full: "Tuesday" },
    { short: "WED", full: "Wednesday" },
    { short: "THU", full: "Thursday" },
    { short: "FRI", full: "Friday" },
    { short: "SAT", full: "Saturday" }
  ];

  const classes = weeklySchedule[selectedDay][selectedGroup];

  return (
    <Box sx={{ backgroundColor: "#F8F0E5", minHeight: "100vh", pb: 10 }}>

      {/* HERO */}
      <Box
        sx={{
          minHeight: { xs: 300, md: 390 },
          backgroundImage:
            "linear-gradient(90deg, rgba(35,12,25,0.88), rgba(35,12,25,0.35)), url(https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1800)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#E5C47B",
              letterSpacing: 4,
              fontSize: 13,
              mb: 2
            }}
          >
            MOVE • LEARN • EXPRESS
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 38, md: 62 },
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Find Your Rhythm
            <br />
            <Box component="span" sx={{ color: "#E5C47B" }}>
              Every Day.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#F8F0E5",
              mt: 2,
              maxWidth: 500,
              fontSize: 16,
              lineHeight: 1.8
            }}
          >
            Explore our weekly dance classes and find the perfect time
            to learn, practise and enjoy your favourite dance style.
          </Typography>
        </Container>
      </Box>

      {/* SCHEDULE */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 9 } }}>

        <Box textAlign="center" mb={5}>
          <Typography
            sx={{
              color: "#A17B43",
              letterSpacing: 3,
              fontSize: 13,
              fontWeight: 700
            }}
          >
            OUR WEEKLY PROGRAM
          </Typography>

          <Typography
            sx={{
              color: "#3B1728",
              fontSize: { xs: 30, md: 42 },
              fontWeight: 700,
              mt: 1
            }}
          >
            Dance Classes & Timings
          </Typography>

          <Typography sx={{ color: "#76656B", mt: 1 }}>
            Choose your day and explore the classes available.
          </Typography>
        </Box>

        {/* DAY SELECTOR */}
        <Box
          sx={{
            display: "flex",
            gap: 1.2,
            overflowX: "auto",
            pb: 2,
            justifyContent: { xs: "flex-start", md: "center" },
            "&::-webkit-scrollbar": { height: 5 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#C6A66B",
              borderRadius: 5
            }
          }}
        >
          {days.map((day) => (
            <Button
              key={day.short}
              onClick={() => setSelectedDay(day.short)}
              sx={{
                minWidth: { xs: 72, md: 105 },
                py: 1.5,
                px: 2,
                borderRadius: 2,
                backgroundColor:
                  selectedDay === day.short ? "#3B1728" : "#FFFFFF",
                color:
                  selectedDay === day.short ? "#FFFFFF" : "#3B1728",
                border: "1px solid #E4D5C4",
                display: "flex",
                flexDirection: "column",
                gap: 0.3,
                "&:hover": {
                  backgroundColor:
                    selectedDay === day.short ? "#51243A" : "#EFE1CF"
                }
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                {day.short}
              </Typography>
              <Typography sx={{ fontSize: 10, opacity: 0.8 }}>
                {day.full}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* AGE GROUP SELECTOR */}
        <Box
          sx={{
            mt: 5,
            mb: 4,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#EDE1D2",
              borderRadius: 3,
              p: 0.7,
              width: { xs: "100%", sm: 440 }
            }}
          >
            <Button
              onClick={() => setSelectedGroup("kids")}
              fullWidth
              sx={{
                py: 1.6,
                borderRadius: 2,
                backgroundColor:
                  selectedGroup === "kids" ? "#3B1728" : "transparent",
                color: selectedGroup === "kids" ? "#FFFFFF" : "#3B1728",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor:
                    selectedGroup === "kids" ? "#51243A" : "#E5D5C1"
                }
              }}
            >
              ♡ Kids Classes
            </Button>

            <Button
              onClick={() => setSelectedGroup("adults")}
              fullWidth
              sx={{
                py: 1.6,
                borderRadius: 2,
                backgroundColor:
                  selectedGroup === "adults" ? "#3B1728" : "transparent",
                color: selectedGroup === "adults" ? "#FFFFFF" : "#3B1728",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor:
                    selectedGroup === "adults" ? "#51243A" : "#E5D5C1"
                }
              }}
            >
              ✦ Adults Classes
            </Button>
          </Box>
        </Box>

        {/* SELECTED DAY TITLE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: 3
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#3B1728",
                fontSize: { xs: 24, md: 30 },
                fontWeight: 700
              }}
            >
              {days.find((day) => day.short === selectedDay).full}
            </Typography>

            <Typography sx={{ color: "#88767B", fontSize: 14 }}>
              {selectedGroup === "kids"
                ? "Kids Dance Programme"
                : "Adults Dance Programme"}
            </Typography>
          </Box>

          <Chip
            label={`${classes.length} Classes Available`}
            sx={{
              backgroundColor: "#E9D8BB",
              color: "#684522",
              fontWeight: 700
            }}
          />
        </Box>

        {/* CLASS CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)"
            },
            gap: 3
          }}
        >
          {classes.map((item, index) => (
            <Box
              key={`${selectedDay}-${selectedGroup}-${index}`}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(59,23,40,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-7px)",
                  boxShadow: "0 15px 32px rgba(59,23,40,0.15)"
                }
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    display: "block"
                  }}
                />

                <Chip
                  label={selectedGroup === "kids" ? "KIDS" : "ADULTS"}
                  sx={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    backgroundColor: "#E5C47B",
                    color: "#3B1728",
                    fontWeight: 800
                  }}
                />
              </Box>

              <Box sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#3B1728",
                    fontSize: 22,
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  {item.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5
                  }}
                >
                  <Typography sx={{ color: "#A17B43", fontSize: 18 }}>
                    ◷
                  </Typography>
                  <Typography sx={{ color: "#65565B", fontSize: 14 }}>
                    {item.time}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2.5
                  }}
                >
                  <Typography sx={{ color: "#A17B43", fontSize: 17 }}>
                    ✧
                  </Typography>
                  <Typography sx={{ color: "#65565B", fontSize: 14 }}>
                    {item.level}
                  </Typography>
                </Box>

                <Button
                  href="/contact"
                  fullWidth
                  sx={{
                    backgroundColor: "#3B1728",
                    color: "#FFFFFF",
                    py: 1.2,
                    borderRadius: 2,
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "#5A2A40"
                    }
                  }}
                >
                  Enquire About This Class
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {/* NOTE */}
        <Box
          sx={{
            mt: 6,
            p: 3,
            borderLeft: "4px solid #C49A55",
            backgroundColor: "#F0E5D6"
          }}
        >
          <Typography sx={{ color: "#5F4A4F", fontSize: 13 }}>
            Note: All class timings and schedules shown here are sample
            details for demonstration. Actual timings can be updated later.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default ClassSchedule;
