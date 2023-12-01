import MapD from "../map/MapD";
import Header from "../containers/Header";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";

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
