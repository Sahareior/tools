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

const App = () => {
  return (
    <div className="bg-black  w-full">
<Certificate />
    </div>
  );
};

export default App;
