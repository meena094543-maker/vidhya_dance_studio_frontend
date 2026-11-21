
import React from "react";
import { Box, Typography } from "@mui/material";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

function StudioLogo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
      <SportsGymnasticsIcon
        sx={{
          fontSize: 43,
          color: "#E5C47B",
        }}
      />

      <Box>
        <Typography
          sx={{
            color: "#E5C47B",
            fontWeight: 800,
            fontSize: "20px",
            lineHeight: 1.1,
            letterSpacing: 1,
          }}
        >
          VIDHYA
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: 2,
          }}
        >
          DANCE STUDIO
        </Typography>
      </Box>
    </Box>
  );
}

export default StudioLogo;
