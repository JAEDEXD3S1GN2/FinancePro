import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Hero from "../Hero/Hero";

const Home = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Hero />
      )}
    </>
  );
};

export default Home;
