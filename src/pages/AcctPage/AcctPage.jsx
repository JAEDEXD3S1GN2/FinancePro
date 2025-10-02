import React from "react";
import Header from "../../components/Header";
import UserAccountPage from "../UserAccountPage";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";

const AcctPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return <>{isLoading ? <Loading /> : <UserAccountPage />}</>;
};

export default AcctPage;
