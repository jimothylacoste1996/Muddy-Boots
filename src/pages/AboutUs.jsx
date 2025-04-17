import { Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Wrap content with Box to control width */}
      <Box
        sx={{
          width: "60%", // Set the width to 60% of the screen
          margin: "auto", // Center the Box
          background: "none",
        }}
      >
        <h2>Opening Hours</h2>
        <p>
          Opening hours – Monday to Friday, <strong>8:30am – 3:30pm</strong>,
          term times only.
        </p>
        <h2>A Brief History</h2>
        <p>
          Muddy Boots comes with the benefit of the many years of experience of
          the Stepping Stones pre-school and staff. We have always been a
          friendly community preschool based in the heart of Fordingbridge.
        </p>
        <p>
          The setting was first formed under the name of ‘Four Seasons’ at the
          Methodist Church. It became Stepping Stones Pre-school Playgroup in
          1996 when it moved to the main building of the Avonway Community
          Centre. In September 2010, the Pre-school changed location from the
          main building to the Annexe building.
        </p>
        <p>
          Over the last few years, it became increasingly difficult to recruit
          parents and as part of the ongoing development of the setting, the
          Chair, existing trustees and staff took the decision to change to a
          Company Limited by Guarantee and to run under the Charity Commission
          guidelines. To do this, the new charity and company Muddy Boots has
          been set up.
        </p>
      </Box>
    </div>
  );
};

export default AboutUs;
