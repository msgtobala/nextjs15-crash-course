import React, { JSX } from 'react';

const HelloServer: React.FC = (): JSX.Element => {
  console.log('server component');
  return <div>Server Side component</div>;
};

export default HelloServer;
