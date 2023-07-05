import React from 'react';

const About = ({match}) => {
  return (
    <div>
      <h2>About{match.url}</h2>
    </div>
  );
};

export default About;
