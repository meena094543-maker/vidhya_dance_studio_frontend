
import React from "react";
import {
    Box,
    Container,
    Typography,
    Divider
} from "@mui/material";

const termsSections = [
    {
        title: "1. Introduction",
        content:
            "Welcome to Vidhya Dance Studio. By accessing or using our website and services, you agree to follow these Terms and Conditions. Please read them carefully."
    },
    {
        title: "2. Website Usage",
        content:
            "Users must provide accurate information while using registration, enquiry and appointment forms. The website must not be used for unlawful activities or in a way that affects its proper functioning."
    },
    {
        title: "3. Student Registration",
        content:
            "Students must submit the required details during registration. Parents or legal guardians should provide the necessary information and consent for students below 18 years of age."
    },
    {
        title: "4. Class Schedule and Attendance",
        content:
            "Class timings and schedules may change depending on studio requirements. Students are expected to attend classes regularly and arrive on time. Any planned changes will be communicated where possible."
    },
    {
        title: "5. Fees and Payments",
        content:
            "Applicable class fees and payment details will be communicated by the studio. Students or parents are responsible for completing payments according to the agreed payment schedule."
    },
    {
        title: "6. Cancellation and Rescheduling",
        content:
            "Class cancellations, missed sessions and rescheduling requests will be handled according to the studio's applicable policies. Students should contact the studio for clarification."
    },
    {
        title: "7. Student Behaviour",
        content:
            "Students are expected to maintain respectful behaviour towards instructors, staff and other students. Disruptive behaviour, harassment or damage to studio property is not acceptable."
    },
    {
        title: "8. Health and Safety",
        content:
            "Students should inform the studio about any relevant physical limitations before participating in dance activities. Students are expected to follow instructor guidance and studio safety instructions."
    },
    {
        title: "9. Intellectual Property",
        content:
            "Website content, text, graphics, logos and other materials belonging to Vidhya Dance Studio must not be copied, reproduced or distributed without permission."
    },
    {
        title: "10. Changes to Services and Terms",
        content:
            "Vidhya Dance Studio may update its website, services, class schedules or these Terms and Conditions when necessary. Updated terms will be published on this page."
    },
    {
        title: "11. Contact Information",
        content:
            "For questions or clarification about these Terms and Conditions, please contact Vidhya Dance Studio through the Contact Us page."
    }
];

function TermsAndConditions() {
    return (
        <Box
            sx={{
                backgroundColor: "#F8F0E5",
                minHeight: "100vh",
                pb: 8
            }}
        >
            {/* HERO SECTION - DANCE STUDIO HALL BANNER */}
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(40,15,30,0.58), rgba(40,15,30,0.68)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=85')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: { xs: 280, md: 350 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: { xs: 7, md: 10 },
                    px: 2,
                    textAlign: "center",
                    borderBottom: "4px solid #E5C47B"
                }}
            >
                <Typography
                    sx={{
                        color: "#E5C47B",
                        letterSpacing: "4px",
                        fontSize: "12px",
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    VIDHYA DANCE STUDIO
                </Typography>

                <Typography
                    sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "30px", md: "46px" },
                        fontFamily: "Georgia, serif",
                        fontWeight: 700,
                        mb: 2
                    }}
                >
                    Terms & Conditions
                </Typography>

                <Typography
                    sx={{
                        color: "#E8D9D0",
                        fontSize: "15px"
                    }}
                >
                    Guidelines for Using Our Website and Services
                </Typography>
            </Box>

            {/* TERMS CONTENT */}
            <Container maxWidth="md">
                <Box
                    sx={{
                        backgroundColor: "#FFFFFF",
                        mt: 5,
                        p: { xs: 3, md: 5 },
                        borderRadius: "8px",
                        boxShadow: "0 5px 25px rgba(59,23,40,0.07)"
                    }}
                >
                    <Typography
                        sx={{
                            color: "#555555",
                            fontSize: "14px",
                            lineHeight: 2,
                            mb: 4
                        }}
                    >
                        These Terms and Conditions explain the basic rules
                        and responsibilities for visitors, students and
                        parents using Vidhya Dance Studio's website and services.
                    </Typography>

                    {termsSections.map((section, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                            <Typography
                                sx={{
                                    color: "#3B1728",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    mb: 1.2
                                }}
                            >
                                {section.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666666",
                                    fontSize: "14px",
                                    lineHeight: 2
                                }}
                            >
                                {section.content}
                            </Typography>

                            {index !== termsSections.length - 1 && (
                                <Divider
                                    sx={{
                                        mt: 3,
                                        borderColor: "#E8DCC8"
                                    }}
                                />
                            )}
                        </Box>
                    ))}

                    <Divider sx={{ my: 3, borderColor: "#E8DCC8" }} />

                    <Typography
                        sx={{
                            color: "#A17B43",
                            fontSize: "13px",
                            fontWeight: 600,
                            textAlign: "center"
                        }}
                    >
                        Vidhya Dance Studio | Terms & Conditions
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default TermsAndConditions;
