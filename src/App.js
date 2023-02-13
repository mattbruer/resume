import styled from 'styled-components';
import MyCourses from './MyCourses';
import MyEducation from './MyEducation';
import { bio } from './bio';
import MovingComponent from 'react-moving-text';

function App() {
  return (
    <Container>
      <Hello>
        <BusinessCard>
          <h1
            style={{
              paddingRight: '35px',
              backgroundImage:
                'url("https://i.pinimg.com/originals/9d/29/b9/9d29b94ab69bb63fda387109602cb85d.jpg")',
              backgroundSize: 'contain',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              fontFamily: 'Ms Madi',
              fontSize: '24vw',
            }}
          >
            Hello!
          </h1>

          <p
            style={{
              marginTop: '-5vw',
              marginBottom: '1vw',
              fontSize: '6vw',
            }}
          >
            Matt Bruer
          </p>
          <p style={{ fontSize: '3vw' }}>
            Software Engineer | JavaScript Developer | Web Developer | Full
            Stack Developer
          </p>
        </BusinessCard>

        <Headshot>
          <img width={'100%'} src="me.jpg" alt="headshot" />
        </Headshot>
      </Hello>
      <TechStack>
        <img
          alt=""
          width="15%"
          style={{ marginLeft: '2vw', marginRight: '1vw' }}
          src="react.png"
        />
        <img
          width="15%"
          style={{ marginRight: '2vw' }}
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png"
          alt=""
        />

        <img
          width="13%"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt=""
        />
        <img width="15%" src="postgres.png" alt="" />

        <img
          width="20%"
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
          alt=""
        />
        <img
          width="15%"
          src="https://devstickers.com/assets/img/pro/rd5f.png"
          alt=""
        />
      </TechStack>
      <Intro>
        <h3 style={{ marginBottom: '5vw' }}>{bio}</h3>
        <MovingComponent
          type="bounce"
          duration="1000ms"
          delay="7s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          <h2 style={{ fontSize: '6vw' }}>I'm so glad you're here!</h2>
        </MovingComponent>
      </Intro>
      <hr />
      <div style={{ padding: '5%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2vw' }}>
          Let's start with coding:
        </h2>
        <p style={{ textAlign: 'center' }}>
          I self-study with Udemy courses for deep dives into new tech I want to
          learn. These courses are often 40+ hours long and build large and
          complete full stack projects.
        </p>
        <p style={{ textAlign: 'center' }}>(scroll horizontally)</p>
      </div>

      <MyCourses />
      <p style={{ textAlign: 'center', padding: '5%' }}>
        In December 2022, I completed a 17-week full time immersive software
        engineering bootcamp. 40+ hours/week focusing on full stack Javascript.
      </p>
      <img
        style={{
          marginLeft: '5%',
          marginBottom: '5%',
          boxShadow: '0px 0px 3vw black',
        }}
        width="90%"
        src="FSACert.jpg"
        alt="fsa cert"
      />
      <h2 style={{ textAlign: 'center' }}>My Education</h2>
      <MyEducation />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #09111a;
  color: whitesmoke;
  font-family: 'Noto Serif JP', serif;
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
  border: 1px solid black;
  border-radius: 100vw;
  display: flex;
  overflow: hidden;
  margin-right: 1vw;
  box-shadow: 0px 0px 1vw #0c6f76;
`;

const Intro = styled.div`
  height: 100%;
  padding: 5vw;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 3px;
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: space-evenly;
  box-shadow: 0px 0px 3vw #0c6f76;
  /* border-radius: 100px; */
`;
