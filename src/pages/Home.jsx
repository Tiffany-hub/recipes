import React from 'react';
import Popular from "../components/Popular";
import TopBar from "../components/TopBar";
import '../index.css'; 

function Home() {
  return (
    <div>
      <TopBar />
      <div className="home-container">
        <Popular />
      </div>
    </div>
  );
}

export default Home;
