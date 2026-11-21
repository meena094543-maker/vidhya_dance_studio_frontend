
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Vidhya Dance Studio?",
        answer:
          "Vidhya Dance Studio is a dance learning space where students can explore different dance styles, develop their skills and express themselves through movement."
      },
      {
        question: "What dance styles are available?",
        answer:
          "Our sample programme includes Classical, Western, Modern and other dance forms such as Bharatanatyam, Kathak, Hip Hop, Jazz and Contemporary."
      },
      {
        question: "Do I need previous dance experience?",
        answer:
          "No. Beginners can start learning from the basics. Classes can be selected according to the student's experience and learning level."
      }
    ]
  },
  {
    category: "Classes",
    questions: [
      {
        question: "Are classes available for children and adults?",
        answer:
          "Yes. The studio programme is designed with separate class groups for children and adults."
      },
      {
        question: "How can I check the class timings?",
        answer:
          "Visit the Class Schedule page to explore the weekly timetable and available class timings."
      },
      {
        question: "Can I learn more than one dance style?",
        answer:
          "Students can enquire about different dance styles and available class options."
      },
      {
        question: "What should I wear for dance classes?",
        answer:
          "Comfortable clothing that allows free movement is recommended. Specific dress requirements can vary depending on the dance style."
      }
    ]
  },
  {
    category: "Admissions",
    questions: [
      {
        question: "How can I join a dance class?",
        answer:
          "You can contact us through the Contact Us page or submit an enquiry to get information about joining a class."
      },
      {
        question: "How do I register for a class?",
        answer:
          "Submit your details through the registration or enquiry process. The studio can provide further admission instructions."
      },
      {
        question: "Can beginners join at any time?",
        answer:
          "Beginners can enquire about suitable batches and admission availability before joining."
      }
    ]
  },
  {
    category: "Payments",
    questions: [
      {
        question: "What are the class fees?",
        answer:
          "Please contact the studio directly to know the current fee details for your selected dance programme."
      },
      {
        question: "Are there any additional charges?",
        answer:
          "Any additional charges, if applicable, can be clarified with the studio during the admission enquiry."
      }
    ]
  }
];

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [expanded, setExpanded] = useState(false);

  const currentCategory = faqData.find(
    (item) => item.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setExpanded(false);
  };

  return (
    <Box sx={{ backgroundColor: "#F8F0E5", minHeight: "100vh", pb: 10 }}>

      {/* HERO */}
      <Box
        sx={{
          minHeight: { xs: 280, md: 360 },
          backgroundImage:
            "linear-gradient(rgba(35,12,25,0.78), rgba(35,12,25,0.65)), url(https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1800)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#E5C47B",
              letterSpacing: 4,
              fontSize: 13,
              mb: 2
            }}
          >
            HERE TO HELP YOU
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: 38, md: 58 },
              fontWeight: 700
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography sx={{ color: "#F8F0E5", mt: 2 }}>
            Find answers to common questions about our dance studio.
          </Typography>
        </Box>
      </Box>

      {/* INTRO */}
      <Container maxWidth="md" sx={{ pt: 8, pb: 4 }}>
        <Box textAlign="center">
          <Typography
            sx={{
              color: "#A17B43",
              letterSpacing: 3,
              fontSize: 13,
              fontWeight: 700
            }}
          >
            HOW CAN WE HELP?
          </Typography>

          <Typography
            sx={{
              color: "#3B1728",
              fontSize: { xs: 27, md: 36 },
              fontWeight: 700,
              mt: 1
            }}
          >
            Everything You Need to Know
          </Typography>

          <Typography
            sx={{
              color: "#75666B",
              mt: 2,
              lineHeight: 1.8
            }}
          >
            Whether you are a beginner or an experienced dancer,
            explore the answers below to learn more about classes,
            admissions and learning opportunities.
          </Typography>
        </Box>
      </Container>

      {/* FAQ CONTENT */}
      <Container maxWidth="md" sx={{ mt: 3 }}>

        {/* CATEGORY BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 5
          }}
        >
          {faqData.map((item) => (
            <Button
              key={item.category}
              onClick={() => handleCategoryChange(item.category)}
              sx={{
                borderRadius: 20,
                px: 3,
                py: 1.1,
                backgroundColor:
                  selectedCategory === item.category
                    ? "#3B1728"
                    : "#FFFFFF",
                color:
                  selectedCategory === item.category
                    ? "#FFFFFF"
                    : "#3B1728",
                border: "1px solid #E4D5C4",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === item.category
                      ? "#51243A"
                      : "#EFE1CF"
                }
              }}
            >
              {item.category}
            </Button>
          ))}
        </Box>

        {/* QUESTIONS */}
        <Box>
          {currentCategory.questions.map((item, index) => (
            <Accordion
              key={`${selectedCategory}-${index}`}
              expanded={expanded === index}
              onChange={() =>
                setExpanded(expanded === index ? false : index)
              }
              elevation={0}
              sx={{
                mb: 2,
                borderRadius: "10px !important",
                overflow: "hidden",
                border: "1px solid #E8DCCB",
                backgroundColor: "#FFFFFF",
                "&:before": { display: "none" }
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <RemoveIcon sx={{ color: "#A17B43" }} />
                  ) : (
                    <AddIcon sx={{ color: "#A17B43" }} />
                  )
                }
                sx={{
                  px: { xs: 2, md: 3 },
                  py: 1.2,
                  "& .MuiAccordionSummary-content": {
                    my: 1.5
                  }
                }}
              >
                <Typography
                  sx={{
                    color: "#3B1728",
                    fontSize: { xs: 15, md: 17 },
                    fontWeight: 600,
                    pr: 1
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: { xs: 2, md: 3 },
                  pt: 0,
                  pb: 3
                }}
              >
                <Typography
                  sx={{
                    color: "#75666B",
                    fontSize: 14,
                    lineHeight: 1.9
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      </Container>

      {/* CONTACT CTA */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box
          sx={{
            backgroundColor: "#3B1728",
            borderRadius: 3,
            textAlign: "center",
            py: { xs: 4, md: 5 },
            px: 3
          }}
        >
          <Typography
            sx={{
              color: "#E5C47B",
              fontSize: 13,
              letterSpacing: 3,
              mb: 1
            }}
          >
            STILL HAVE QUESTIONS?
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: 25, md: 32 },
              fontWeight: 700
            }}
          >
            We're Happy to Help!
          </Typography>

          <Typography sx={{ color: "#E5D9DC", mt: 1, mb: 3 }}>
            Get in touch with us for more information.
          </Typography>

          <Button
            href="/contact"
            sx={{
              backgroundColor: "#E5C47B",
              color: "#3B1728",
              px: 4,
              py: 1.3,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#D6B36A"
              }
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>

    </Box>
  );
}

export default FAQ;
