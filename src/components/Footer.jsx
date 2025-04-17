import React from "react";
import hampshireLogo from "../assets/hampshire-logo.png";
import foodHygiene from "../assets/food-hygiene.png";

export default function Footer() {
  const footerStyle = {
    background: "#f8f8f8",
    padding: "10px",
    textAlign: "center",
    borderTop: "2px solid #ddd",
  };

  const footerContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const footerTextStyle = {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <a
          href="https://www.hants.gov.uk/socialcareandhealth/childrenandfamilies/allservices"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hampshireLogo}
            alt="Hampshire County Council"
            style={{ maxHeight: "140px" }}
          />
        </a>

        <a
          href="https://ratings.food.gov.uk/business/712588/STEPPING-STONES-PRE-SCHOOL-PLAYGROUP-FORDINGBRIDGE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={foodHygiene}
            alt="Food Hygiene Rating"
            style={{ maxHeight: "60px" }}
          />
        </a>
      </div>
      <p style={footerTextStyle}>
        © 2025 Muddy Boots Pre-School • Fordingbridge • Hampshire • SP6 1JF •
        Tel:{" "}
        <a
          href="tel:07436716189"
          style={{ color: "#0077cc", textDecoration: "none" }}
        >
          07436 716189
        </a>
      </p>
    </footer>
  );
}
