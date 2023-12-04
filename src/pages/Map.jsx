import MapD from "../map/MapD";
import Header from "../containers/Header";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import { Typography, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";

function MapPage() {
  const isMobileSize = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Header isMobileSize={isMobileSize}/>
      {!isMobileSize? <Statistics /> : <div>
        <Typography marginX={5} marginTop={6}>Select a destination for your daily sport routine and the app will give your statistics.</Typography>
        </div>}
      <MapD isMobileSize={isMobileSize}/>
      {!isMobileSize ? <Navbar /> : <Footer />}
    </>
  );
}

export default MapPage;
