import styled from "styled-components";
import MyCourses from "./MyCourses";
import MyEducation from "./MyEducation";
import { bio } from "./bio";
import MovingComponent from "react-moving-text";

function App() {
  return (
    <Container>
      <Hello>
        <BusinessCard>
          <h1
            style={{
              paddingRight: "35px",
              backgroundImage:
                'url("https://i.pinimg.com/originals/9d/29/b9/9d29b94ab69bb63fda387109602cb85d.jpg")',
              backgroundSize: "contain",
              color: "transparent",
              WebkitBackgroundClip: "text",
              fontFamily: "Ms Madi",
              fontSize: "24vw",
            }}
          >
            Hello!
          </h1>

          <p
            style={{
              marginTop: "-5vw",
              marginBottom: "1vw",
              fontSize: "6vw",
            }}
          >
            Matt Bruer
          </p>
          <p style={{ fontSize: "3vw" }}>
            Software Engineer | JavaScript Developer | Web Developer | Full
            Stack Developer
          </p>
        </BusinessCard>
        <Headshot>
          <img width={"100%"} src="me.jpg" alt="headshot" />
        </Headshot>
      </Hello>
      <Intro
        style={{
          padding: "5vw",
          // textIndent: "25px",
          fontSize: "2vw",
          textAlign: "center",
          borderTop: "1px solid grey",
        }}
      >
        <h2>{bio}</h2>
      </Intro>
      <h2 style={{ textAlign: "center" }}>My Education</h2>
      <img width="60%" src="FSACert.jpg" alt="fsa cert" />
      <MyEducation />
      <h2 style={{ textAlign: "center" }}>Coding Courses</h2>
      <MyCourses />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #09111a;
  color: whitesmoke;
  font-family: "Noto Serif JP", serif;
`;

const Hello = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding-left: 7vw;
  margin-bottom: 4vw;
`;

const BusinessCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  margin-left: 3vw;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Headshot = styled.div`
  width: 50%;
  height: 50%;
  border: 5px solid black;
  border-radius: 1000px;

  overflow: hidden;
  box-shadow: -10px -10px 10px black;
`;

const Intro = styled.div`
  height: 25vw;
   background-color: gainsboro;
  color: black; */

  /* border: 1px solid grey; */
`;
