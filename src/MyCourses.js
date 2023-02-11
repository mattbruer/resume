import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MyCourses = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ChevronLeftIcon fontSize="large" />
      <div style={styles.container}>
        {courses.map((c, i) => {
          return (
            <div style={styles.photoBox}>
              <img
                style={{ borderRadius: 5 }}
                height="225px"
                src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${c}.png`}
                alt="course"
              />
            </div>
          );
        })}
      </div>
      <ChevronRightIcon fontSize="large" />
    </div>
  );
};

export default MyCourses;

const courses = [
  't',
  'r',
  'p',
  'w',
  'k',
  'l',
  'j',
  'h',
  'f',
  'g',
  'o',
  'u',
  'd',
  'i',
  's',
  'm',
  'a',
  'b',
  'n',
  'c',
  'e',
];

const styles = {
  container: {
    display: 'flex',
    overflowX: 'scroll',
    borderRadius: '15px',

    backgroundColor: '#123',
  },
  photoBox: {
    borderRadius: '20px',
    border: '1px solid black',
    boxShadow: '-10px 15px 5px black',
    display: 'flex',
    height: '225px',
    margin: 30,
  },
  arrows: {
    height: '225px',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
};
