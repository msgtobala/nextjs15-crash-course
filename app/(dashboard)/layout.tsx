import React, { JSX } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <p className='text-3xl'>Dashboard layout</p>
      {children}
    </>
  );
};

export default Layout;
