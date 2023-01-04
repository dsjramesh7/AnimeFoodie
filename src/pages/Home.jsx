import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Banner from "../Assets/ramen.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="header-container">
          <h1>Anime Stall</h1>
          <p>
            Best Food In <span>India</span>
          </p>
          <Link to={"/menu"}>
            <button>Order Now!!!</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
