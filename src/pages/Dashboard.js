import React from "react";
import { Info, Repos, Navbar, User, Search } from "../components";
import { GlobalContext } from "../context/context";
import loadingImage from "../images/preloader.gif";

const Dashboard = () => {
  const { loading } = GlobalContext();

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
