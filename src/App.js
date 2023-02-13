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
          <MovingComponent
            type="slideInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
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
          </MovingComponent>

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
          <img
            style={{
              border: '0.3vw dashed black',
              borderRadius: '100vw',
              boxShadow: '0px 0px 5px black',
            }}
            width={'100%'}
            src="me.jpg"
            alt="headshot"
          />
        </Headshot>
      </Hello>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
          boxShadow: '0px 0px 3vw red',
        }}
      >
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
          width="15%"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt=""
        />
        <img width="15%" src="postgres.png" alt="" />

        <img
          width="15%"
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
          alt=""
        />
        <img
          width="15%"
          src="https://devstickers.com/assets/img/pro/rd5f.png"
          alt=""
        />
      </div>
      <Intro
        style={{
          padding: '5vw',
          fontSize: '2vw',
          textAlign: 'center',
          borderTop: '1px solid grey',
        }}
      >
        <h2>{bio}</h2>
      </Intro>
      <h2 style={{ textAlign: 'center' }}>My Education</h2>
      <img width="60%" src="FSACert.jpg" alt="fsa cert" />
      <MyEducation />
      <h2 style={{ textAlign: 'center' }}>Coding Courses</h2>
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
  border: 0.6vw dashed black;
  border-radius: 100vw;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 0px 20px black;
`;

const Intro = styled.div`
  height: 25vw;
  /*   */
  padding: 4px;

  /* border: 1px solid grey; */
`;
