import styled from 'styled-components';
import MyCourses from './MyCourses';
import MyEducation from './MyEducation';
import MyMusic from './MyMusic';
import MyArt from './MyArt';

import MovingComponent from 'react-moving-text';
import MyPhotography from './MyPhotography';

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

          <h2
            style={{
              marginTop: '-5vw',
              marginBottom: '1vw',
              fontSize: '8vw',
            }}
          >
            Matt Bruer
          </h2>
          <h2 style={{ fontSize: '3vw' }}>
            Software Engineer | JavaScript Developer | Web Developer | Full
            Stack Developer
          </h2>
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
        <h2 style={{ marginBottom: '5vw', fontSize: '4vw' }}>
          Gathering more about me as a job candidate?{' '}
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4vw',
          }}
        >
          <MovingComponent
            type="bounce"
            duration="1000ms"
            delay="10s"
            direction="normal"
            timing="ease"
            iteration="2"
            fillMode="none"
          >
            <h2
              style={{
                fontSize: '7vw',
              }}
            >
              I'm so glad you're here!
            </h2>
          </MovingComponent>
        </div>
      </Intro>
      <img
        alt="page divider"
        src="divider.png"
        style={{ mixBlendMode: 'lighten', width: '80%', marginLeft: '10%' }}
      />
      <div style={{ padding: '5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '5vw' }}>
          Let's start with coding:
        </h2>
        <p
          style={{
            textAlign: 'center',
            padding: '5% 0 5% 0',
            fontSize: '3.5vw',
          }}
        >
          In December 2022, I completed a 17-week immersive software engineering
          bootcamp. 40+ hours/week of full stack Javascript.
        </p>
        <img
          style={{
            border: '.5vw groove white',
            boxShadow: '0px 0px 2vw #0c6f76',
          }}
          width="100%"
          src="FSACert.jpg"
          alt="fsa cert"
        />
        <p
          style={{
            textAlign: 'center',
            padding: '5% 0 5% 0',
            fontSize: '3.5vw',
          }}
        >
          I stay on top of my stack with deep-dive Udemy courses on React for
          SPAs, NextJS for SSR, and React Native for mobile. I've completed
          in-depth Typescript courses, and I'm learning AWS.
        </p>
        {/* <p style={{ textAlign: 'center' }}>(scroll horizontally)</p> */}
      </div>

      <MyCourses />

      <h2 style={{ textAlign: 'center', fontSize: '6vw' }}>My Education</h2>
      <p
        style={{
          textAlign: 'center',
          padding: '5%',
          fontSize: '3.5vw',
        }}
      >
        I have a degree in Psychology and went to one of the best music schools
        on the planet where I studied composition and production...and BANJO!
      </p>
      <MyEducation />
      <h2 style={{ textAlign: 'center', fontSize: '6vw', marginBottom: '2vw' }}>
        My Life Before Code
      </h2>
      <p
        style={{
          textAlign: 'center',
          marginBottom: '2vw',
          fontSize: '3.5vw',
        }}
      >
        (So, Matt...what's your employment history?)
      </p>
      <p
        style={{
          textAlign: 'center',
          padding: '5%',
          fontSize: '3.5vw',
        }}
      >
        My career has been as a freelance creative. From 2008-2015, I played
        banjo in a traditional bluegrass band in Los Angeles. In 2015, I moved
        home to Missouri and worked as a real estate and wedding photographer,
        shooting ~2,000 homes and ~50 weddings.
      </p>
      <h2 style={{ textAlign: 'center' }}>Music</h2>
      <MyMusic />
      <MyPhotography />
      <MyArt />

      <div
        style={{
          display: 'flex',
          margin: '5%',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            borderRadius: '200px',
            width: '20vw',
            boxShadow: '0px 0px 10px #0c6f76',
            overflow: 'hidden',
          }}
        >
          <a
            href="https://github.com/mattbruer"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github logo" width="100%" src="github.png" />
          </a>
        </div>
        <div
          style={{
            border: '1px solid white',

            height: '100%',
            width: '20vw',
            borderRadius: '20px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px #0c6f76',
            overflow: 'hidden',
          }}
        >
          <a
            href="https://www.linkedin.com/in/matt-bruer/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ padding: '.5vw .5vw 0 .5vw' }}
              alt="linkedIn logo"
              width="100%"
              src="linkedIn.png"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0b1218;
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
