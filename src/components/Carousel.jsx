import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const testimonials = [
  "Stepping Stones is a very welcoming, friendly pre-school. Both of my children have loved it there and my 7-year-old often asks to go back.",
  "All the staff are delightful, friendly, and understanding. A positive and welcoming environment and my child always leaves happy! A fantastic team.",
  "The strengths of the pre-school are the measures that have been taken to ensure my child's safety and happiness while he is not communicating.",
  "Thank you for everything you did for my children. Moving to Fordingbridge was a tricky decision but after seeing how much my eldest child loved coming to you and how eager my youngest was to start, we knew it was the right one.",
  "I wanted to let you know how truly AMAZING you all are! My children have loved their time with you and you ALL go above and beyond to take care of our children.",
];

const CarouselComponent = () => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "800px",
      margin: "auto",
      textAlign: "center",
      mt: 4,
      overflow: "visible",
    }}
  >
    <header>Here's what parents had to say...</header>
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      dynamicHeight={false}
      swipeable={true}
      emulateTouch={true}
      swipeScrollTolerance={5}
    >
      {testimonials.map((text, index) => (
        <Box
          key={index}
          sx={{
            padding: "40px",
            background: "#B3EBF2",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            overflow: "visible",
            width: "100%",
            minHeight: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              color: "#333",
              textAlign: "center",
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: 1.6,
              userSelect: "none",
            }}
          >
            "{text}"
          </Typography>
        </Box>
      ))}
    </Carousel>
  </Box>
);

export default CarouselComponent;
