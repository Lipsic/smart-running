import React from "react";
import MapD from "../map/MapD";
import Header from "../containers/Header";
import Navbar from "../components/Navbar";
import Statistics from "../containers/mobile/Statistics";

// O marcador permanece sem o formulário ser preenchido

function MapPage() {
  return (
    <>
      <Header />
      <Statistics />
      <MapD />
      <Navbar />
    </>
  );
}

export default MapPage;
