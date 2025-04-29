import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  min-height: 100vh;
  background-color: #000000; /* Black background */
  padding: 3rem 1rem;

  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ef4444; /* Red color for title */
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #e5e7eb; /* Light gray for description */
  line-height: 1.75rem;
  max-width: 640px;
  margin: 0 auto;
`;

const SkillsWrapper = styled.div`
  background-color: #1f1f1f; /* Dark background for skills section */
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const SkillsCard = styled.div`
  background-color: #333333; /* Dark background for skills card */
  border-radius: 0.75rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 640px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #ef4444; /* Red color for skills title */
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SkillItem = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ef4444; /* Red color for skill names */
`;

const SkillLevel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #e5e7eb; /* Light gray for skill level */
`;

const SkillBarContainer = styled.div`
  width: 100%;
  background-color: #4b5563; /* Dark gray for background */
  border-radius: 9999px;
  height: 0.625rem;
`;

const SkillBar = styled.div`
  background-color: #ef4444; /* Red color for skill bars */
  height: 100%;
  border-radius: 9999px;
  width: ${({ width }) => width};
`;

function About() {
  const skills = [
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "HTML/CSS", level: "95%" },
    { name: "React.js", level: "80%" },
    { name: "TypeScript", level: "75%" },
    { name: "Git", level: "85%" },
  ];

  return (
    <>
      <Header />
      <Container>
        <ContentWrapper>
          {/* About Section */}
          <TitleSection>
            <Title>About Me</Title>
            <Description>
              Hi, I'm Muhammad Hamza, a dedicated Web Developer specializing in JavaScript and React.
              My passion lies in building engaging, high-performance web applications with a focus
              on clean design and seamless user experiences.
            </Description>
          </TitleSection>

          {/* Skills Section */}
          <SkillsWrapper>
            <SkillsCard>
              <SkillsTitle>My Skills</SkillsTitle>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>{skill.level}</SkillLevel>
                    </SkillHeader>
                    <SkillBarContainer>
                      <SkillBar width={skill.level} />
                    </SkillBarContainer>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillsCard>
          </SkillsWrapper>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default About;
