'use client';

import React, { JSX } from 'react';

const Hello: React.FC = (): JSX.Element => {
  console.log('client component');
  return <div>Client Side component</div>;
};

export default Hello;
