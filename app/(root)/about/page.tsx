import React, { JSX } from 'react';

const About: React.FC = (): JSX.Element => {
  throw new Error('This is a test error');
  return <p>About Page</p>;
};

export default About;
