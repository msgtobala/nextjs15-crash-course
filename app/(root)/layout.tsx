import React, { JSX } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <p>Root layout</p>
      {children}
    </>
  );
};

export default Layout;
