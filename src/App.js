import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import PavingStone from "./pages/Projects/PavingStone";
import Design3d from "./pages/Projects/Design3d";
import RetainingWall from "./pages/Projects/RetainingWall";
import Plantings from "./pages/Projects/Plantings";
import OneTimeCleanups from "./pages/Projects/OneTimeCleanups";
import LawnCare from "./pages/Projects/LawnCare";
import JoinOurTeam from "./pages/JoinOurTeam";
import Blog from "./pages/Blog";
import FertilizerBlog from "./pages/Blog/FertilizerBlog";
import PavingStoneBlog from "./pages/Blog/PavingStoneBlog";
import BeesBlog from "./pages/Blog/BeesBlog";
import ChaferBeetleBlog from "./pages/Blog/ChaferBeetleBlog";
import SeasonalGuideBlog from "./pages/Blog/SeasonalGuideBlog";
import ServicesAndLocations from "./pages/Services/ServicesAndLocations";
import LandscapeMaintenance from "./pages/Services/LandscapeMaintenance";
import ResidentialLawnCare from "./pages/Services/ResidentialLawnCare";
// import ChaferBeetleControl from "./pages/Services/ChaferBeetleControl";
import HardscapeInstallsMaintenance from "./pages/Services/HardscapeInstallsMaintenance";
import SoftscapeInstallsMaintenance from "./pages/Services/SoftscapeInstallsMaintenance";
import DesignAndModelling from "./pages/Services/DesignAndModelling";
import SnowManagement from "./pages/Services/SnowManagement";
import Vancouver from "./pages/ServiceArea/Vancouver";
import NorthVancouver from "./pages/ServiceArea/NorthVancouver";
import WestVancouver from "./pages/ServiceArea/WestVancouver";
import Burnaby from "./pages/ServiceArea/Burnaby";
import Richmond from "./pages/ServiceArea/Richmond";
import NewWestminster from "./pages/ServiceArea/NewWestminster";
import Coquitlam from "./pages/ServiceArea/Coquitlam";
import PortCoquitlam from "./pages/ServiceArea/PortCoquitlam";
import PortMoody from "./pages/ServiceArea/PortMoody";
import MapleRidge from "./pages/ServiceArea/MapleRidge";
import Delta from "./pages/ServiceArea/Delta";
import Surrey from "./pages/ServiceArea/Surrey";
import WhiteRock from "./pages/ServiceArea/WhiteRock";
import TagManager from "react-gtm-module";

function App() {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_TAG_KEY
  };
  TagManager.initialize(tagManagerArgs);
  
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route
          path="/services/services-and-locations"
          element={<ServicesAndLocations />}
        />
        <Route
          path="/services/landscape-maintenance"
          element={<LandscapeMaintenance />}
        /> 
        <Route
          path="/services/residential-lawn-care"
          element={<ResidentialLawnCare />}
        />
       <Route
          path="/services/hardscape-installs-maintenance"
          element={<HardscapeInstallsMaintenance />}
        />
        <Route
          path="/services/softscape-installs-maintenance"
          element={<SoftscapeInstallsMaintenance />}
        />
        <Route path="/services/design-and-modelling" element={<DesignAndModelling />} />
        <Route path="/services/snow-management" element={<SnowManagement />} />
        {/* <Route path="/services/european-chafer-beetle-control" element={<ChaferBeetleControl />} /> */}


        <Route path="/our-projects" element={<Projects />} />
        <Route path="/our-projects/3d-design" element={<Design3d />} />
        <Route path="/our-projects/paving-stones" element={<PavingStone />} />
        <Route
          path="/our-projects/retaining-walls"
          element={<RetainingWall />}
        />
        <Route
          path="/our-projects/one-time-cleanups"
          element={<OneTimeCleanups />}
        />
        <Route path="/our-projects/lawn-care" element={<LawnCare />} />
        <Route path="/our-projects/plantings" element={<Plantings />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-our-team" element={<JoinOurTeam />} />

        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/paving-stone-quality-and-value"
          element={<PavingStoneBlog />}
        />
       
        <Route path="/blog/saving-the-bees" element={<BeesBlog />} />
       
        
        <Route path="/blog/european-chafer-beetle" element={<ChaferBeetleBlog />} />
        <Route
          path="/blog/seasonal-maintenance-guide"
          element={<SeasonalGuideBlog />}
        />
         <Route
          path="/blog/the-essential-guide-to-lawn-fertilization"
          element={<FertilizerBlog />}
        />

        <Route path="/service-area/vancouver" element={<Vancouver />} />
        <Route path="/service-area/north-vancouver" element={<NorthVancouver />} />
        <Route path="/service-area/west-vancouver" element={<WestVancouver />} />
        <Route path="/service-area/burnaby" element={<Burnaby />} />
        <Route path="/service-area/richmond" element={<Richmond />} />
        <Route path="/service-area/new-westminister" element={<NewWestminster />} />
        <Route path="/service-area/coquitlam" element={<Coquitlam />} />
        <Route path="/service-area/port-coquitlam" element={<PortCoquitlam />} />
        <Route path="/service-area/port-moody" element={<PortMoody />} />
        <Route path="/service-area/maple-ridge" element={<MapleRidge />} />
        <Route path="/service-area/delta" element={<Delta />} />
        <Route path="/service-area/surrey" element={<Surrey />} />
        <Route path="/service-area/white-rock" element={<WhiteRock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
