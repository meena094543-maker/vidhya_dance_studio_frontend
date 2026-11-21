
import React from "react";
import {
    Box,
    Container,
    Typography,
    Divider
} from "@mui/material";

const policySections = [
    {
        title: "1. Introduction",
        content:
            "Welcome to Vidhya Dance Studio. We respect your privacy and are committed to protecting the personal information you share with us through our website and services."
    },
    {
        title: "2. Information We Collect",
        content:
            "We may collect information such as your name, email address, mobile number, age group, dance preferences and other details submitted through registration, enquiry and appointment forms."
    },
    {
        title: "3. How We Use Your Information",
        content:
            "The information collected may be used to manage student registrations, respond to enquiries, share class schedules, communicate important updates and improve our studio services."
    },
    {
        title: "4. Information Protection",
        content:
            "We take reasonable steps to protect the personal information submitted through our website. However, no online system can guarantee complete security of information."
    },
    {
        title: "5. Sharing of Information",
        content:
            "We do not intend to sell or rent your personal information. Information may be shared only when necessary to provide our services or when required by applicable law."
    },
    {
        title: "6. Cookies and Website Usage",
        content:
            "Our website may use cookies or similar technologies to improve website performance and user experience. You can manage cookies through your browser settings."
    },
    {
        title: "7. Children's Privacy",
        content:
            "For students under 18 years of age, parents or legal guardians should provide the necessary registration information and consent wherever required."
    },
    {
        title: "8. Your Privacy Rights",
        content:
            "You may contact us to request access to, correction of, or deletion of personal information you have submitted, subject to applicable legal requirements."
    },
    {
        title: "9. Changes to This Policy",
        content:
            "Vidhya Dance Studio may update this Privacy Policy when necessary. Any revised version will be published on this page."
    },
    {
        title: "10. Contact Us",
        content:
            "If you have questions about this Privacy Policy or how your information is handled, please contact Vidhya Dance Studio through the Contact Us page."
    }
];

function PrivacyPolicy() {
    return (
        <Box
            sx={{
                backgroundColor: "#F8F0E5",
                minHeight: "100vh",
                pb: 8
            }}
        >
            {/* HERO SECTION WITH BANNER IMAGE */}
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(59,23,40,0.65), rgba(59,23,40,0.75)), url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=85')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    py: { xs: 7, md: 10 },
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
                        fontSize: { xs: "32px", md: "46px" },
                        fontFamily: "Georgia, serif",
                        fontWeight: 700,
                        mb: 2
                    }}
                >
                    Privacy Policy
                </Typography>

                <Typography
                    sx={{
                        color: "#E8D9D0",
                        fontSize: "15px"
                    }}
                >
                    Your Privacy Matters to Us
                </Typography>
            </Box>

            {/* POLICY CONTENT */}
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
                        This Privacy Policy explains how Vidhya Dance Studio
                        collects, uses and protects information provided by
                        visitors, students and parents while using our website.
                    </Typography>

                    {policySections.map((section, index) => (
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

                            {index !== policySections.length - 1 && (
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
                        Vidhya Dance Studio | Privacy Policy
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default PrivacyPolicy;
