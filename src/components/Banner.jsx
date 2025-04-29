import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const BannerSection = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: black;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const BannerImg = styled.div`
  flex: 1;
`;

const BannerContent = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const BannerTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: red; /* Red color for title */

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const BannerSubTitle = styled.h6`
  font-size: 1.25rem;
  color: #f3f4f6; /* Light gray for subtitle */
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const BannerDescription = styled.p`
  font-size: 1rem;
  color: #d1d5db; /* Light gray for description text */
  margin-bottom: 2rem;
  line-height: 1.75;

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const StyledLink = styled(Link)`
  background-color: red; /* Red background for button */
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred; /* Darker red on hover */
  }
`;

const Banner = () => {
  return (
    <BannerSection id="banner">
      <Container>
        <BannerWrapper>
          {/* Image Section */}
          <BannerImg>
            <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.05}>
              <img
                src="/banner.jpg"
                alt="3D Coding Illustration"
                style={{ width: "100%", maxWidth: "650px" }}
              />
            </Tilt>
          </BannerImg>

          {/* Content Section */}
          <BannerContent>
            <BannerSubTitle>Hello, I'm Muhammad Hamza.</BannerSubTitle>
            <BannerTitle>Web Developer</BannerTitle>
            <BannerDescription>
              I am a web developer proficient in JavaScript and React, with a
              strong passion for crafting dynamic and user-friendly web
              applications. I have a keen eye for design and usability, ensuring
              that every project I undertake not only functions flawlessly but
              also delivers an exceptional user experience. I enjoy using the
              latest tools and tricks to create websites that are interactive
              and easy to use. I pay attention to both the design and how easy
              it is for people to navigate through the site.
            </BannerDescription>
            <StyledLink to="/about">About Me</StyledLink>
          </BannerContent>
        </BannerWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
