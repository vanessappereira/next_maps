import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar/index";
import { useMediaQuery } from 'react-responsive'

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1280px)" })

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1279px)" })

const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery()

  return isDesktop ? children : null
}

const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return isTabletAndBelow ? children : null
}

function App() {
  return (
    <>
      <Desktop>
        <Navbar />
        <Map />
      </Desktop>
      <TabletAndBelow >
        <Navbar />
        <Map />
      </TabletAndBelow>
    </>
  );
}

export default App;
