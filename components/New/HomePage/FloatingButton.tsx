import { sponsorApplyUrl } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

// This is a styled component for the floating container
const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    // Adjust the breakpoint as needed
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.btnBlue};
    border-radius: 20px 20px 0 0;
    gap: 0;
  }
`;

// This is a styled component for each button
const Button = styled.button`
  font-family: "Rammetto One";
  background-color: ${Colors.btnBlue}; // Your button color
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  color: white;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  radius: 100%;
  font-size: 14px;

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 15px 30px;
    flex: 1; // Make buttons equal width

    height: 60px;
    background-color: ${Colors.btnBlue};
  }

  &:hover {
    background-color: ${Colors.aero}; // Darker shade for hover
    scale: 1.05;
  }
`;

// The actual floating button component
const FloatingMenu = () => {
  return (
    <FloatingContainer>
      {/* <Button
        onClick={() => {
          window.open(tickSiteUrl, "_blank");
        }}
      >
        Tickets
      </Button> */}
      {/* <Button
        onClick={() => {
          window.open(hackathonUrl, "_blank");
        }}
      >
        {" "}
        <span style={{ fontSize: 10 }}> Hackathon </span>{" "}
      </Button> */}
      <Button
        onClick={() => {
          window.open(sponsorApplyUrl, "_blank");
        }}
      >
        Sponsor
      </Button>
    </FloatingContainer>
  );
};

export default FloatingMenu;
