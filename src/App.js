import './App.css'
import Feature from './Component/Feature';
import CustomersSection from './Component/CustomersSection';
import StrengthSection from './Component/StrengthSection';
import FeaturesSection from './Component/FeaturesSection';
import PricingPlans from './Component/PricingPlans';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Hero from './Component/Hero';
import BasicApi from './Api/BasicApi';
import Home from './Component/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Kalyan from './Kalyan';
import Database from './Database/Database';
import Tools from './Tools/Tools';
import Faq from './FAQ/Faq';
import Statistics from './Statistics/Statistics';
import Charts from './Statistics/Charts';

import Hero1 from './Kalyan/Hero1';
import Developer from './Devloper/Devloper';
import Containe from './Kalyan/Containe';
import Security from './Kalyan/Security';
import Card from './Kalyan/Card';

function App() {
  return (
    <>
       <Header/>
     <Routes>
     
    <Route path="/" element={<Home/>} />
      <Route path="/api" element={<BasicApi/>} />
      <Route path="/developer" element={<Developer/>} />
      <Route path="/database" element={<Database/>} />
      <Route path="/tool" element={<Tools/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/statistics" element={<Statistics/>} />
      <Route path="/charts" element={<Charts/>} />
     </Routes>
     {/* <Security/> */}
     {/* <Card/> */}
    {/* <Hero1/>

    <Containe/> */}


   {/* <Header/>
   <Hero/>
   <Feature/>
   <CustomersSection/>
   <StrengthSection/>
   <FeaturesSection/>
   <PricingPlans/>
     <Footer/> 
     <PricingPlans/> 
     <BasicApi/> */}
   {/* <Home/> */}
   {/* <Kalyan/> */}
   {/* <BasicApi/> */}
   {/* <Database/> */}
   {/* <Tools/> */}
    </>

  );
}

export default App;
