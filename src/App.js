import styled from 'styled-components';
import MyCourses from './MyCourses';
import MyEducation from './MyEducation';
import { bio } from './bio';

function App() {
  return (
    <Container>
      <Hello>
        <BusinessCard>
          <h1 style={{ fontFamily: 'Ms Madi', fontSize: '15vw' }}>Hello!</h1>
          <p style={{ marginBottom: '20px', fontSize: '4vw' }}>Matt Bruer</p>
          <p style={{ fontSize: '2vw' }}>
            Software Engineer | Web Developer | JavaScript Developer | Full
            Stack Developer
          </p>
        </BusinessCard>
        <Headshot>
          <img width={'100%'} src="me.jpg" alt="headshot" />
        </Headshot>
      </Hello>
      <Intro style={{ textIndent: '25px' }}>{bio}</Intro>
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
  width: 100vw;
`;

const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Headshot = styled.div`
  width: 50%;
  border: 1px solid black;
  border-radius: 1000px;
  overflow: hidden;
  box-shadow: -10px -10px 10px black;
`;

const Intro = styled.div`
  height: 300px;
  border: 1px solid grey;
`;
