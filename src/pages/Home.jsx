import React from "react";
import img1 from "../assets/img1.jpg";
import CarouselComponent from "../components/Carousel";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box
          sx={{
            width: "60%", // Set the width to 60% of the screen
            margin: "auto", // Center the Box
            background: "none",
          }}
        >
          <h1>Welcome to Muddy Boots Pre-school</h1>
          <p>
            <strong>
              Muddy Boots Fordingbridge Limited is a Company Limited by
              Guarantee. Company number: 12773497. Also registered with the
              Charity Commission. Charity number: 1206196.
            </strong>
          </p>
          <p>
            Our charitable purpose is to provide high quality care and education
            by promoting equality that values diversity to children below the
            statutory school age. We follow the Early Years Foundation Stage
            Curriculum and are registering with Ofsted.{" "}
            <p>
              At Stepping Stones, we work in close partnership with parents and
              carers to create a safe, happy, and stimulating environment where
              every child is nurtured as an individual.
            </p>
            <p>
              We are supported by our Local Authority and guided by a passionate
              team dedicated to helping children develop confidence, curiosity,
              and a lifelong love of learning.
            </p>
          </p>
          <p>
            Muddy Boots is located at the Fordingbridge Infant and Junior School
            site.
          </p>
        </Box>
      </div>
      <CarouselComponent></CarouselComponent>
    </>
  );
};

export default Home;
