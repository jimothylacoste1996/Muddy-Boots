import React from "react";
import img1 from "../assets/img1.jpg";
import CarouselComponent from "../components/Carousel";

const Home = () => {
  return (
    <>
      <img
        src={img1}
        alt="Food Hygiene Rating"
        style={{
          paddingTop: "50px",
          width: "50%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Welcome to Stepping Stones Pre-school</h1>
        <p>
          <strong>
            Located in the heart of Fordingbridge, Stepping Stones Pre-school is
            a warm, friendly, and inclusive setting for children aged 2 to 5
            years.
          </strong>
        </p>
        <p>
          As a registered charity (No. 1030424) and Company Limited by
          Guarantee, we are committed to providing high-quality childcare and
          early education that is accessible to all families in our community.
        </p>
        <p>
          We are proud to be rated 'Good' by Ofsted, and we continually strive
          to enhance our provision with the goal of achieving an 'Outstanding'
          rating in the future.
        </p>
        <p>
          At Stepping Stones, we work in close partnership with parents and
          carers to create a safe, happy, and stimulating environment where
          every child is nurtured as an individual.
        </p>
        <p>
          We are supported by our Local Authority and guided by a passionate
          team dedicated to helping children develop confidence, curiosity, and
          a lifelong love of learning.
        </p>
      </div>
      <CarouselComponent></CarouselComponent>
    </>
  );
};

export default Home;
