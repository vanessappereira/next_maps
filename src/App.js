import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <Map />
      </div>
    </>
  );
}

export default App;
