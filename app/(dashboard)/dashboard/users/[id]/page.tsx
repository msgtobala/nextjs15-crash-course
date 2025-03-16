import React, { JSX } from 'react';

const Page: React.FC<{ params: { id: string } }> = async ({
  params,
}): Promise<JSX.Element> => {
  const { id } = await params;
  return <h1 className="text-3xl">User details Page {id}</h1>;
};

export default Page;
