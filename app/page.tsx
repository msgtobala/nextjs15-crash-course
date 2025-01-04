import React from "react";

import Hello from "@/app/components/hello";

const Home: React.FC = () => {
    console.log("Home page");
    return (
        <>
            <h1 className="text-3xl">Welcome to Next.JS</h1>
            <Hello/>
        </>
    );
}

export default Home;