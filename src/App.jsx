import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Certificate from "./pages/Certificate";
import CustomSteps from "./pages/CustomSteps";
import TextScrollTrigger from "./pages/TextScrollTrigger";
import OpScroll from "./Components/OpScroll";
import OpHero from "./Components/OpHomepage/OpHero";
import CustomSwiper from "./Components/CustomSwiper";

const App = () => {
  return (
    <div className="bg-black  w-full">
{/* <Certificate /> */}

{/* <Navbar />
<Hero />
<AboutUs /> */}

{/* <CustomSteps /> */}

{/* <TextScrollTrigger />  */}
{/* < OpScroll /> */}
{/* <OpHero /> */}
<CustomSwiper />
    </div>
  );
};

export default App;
