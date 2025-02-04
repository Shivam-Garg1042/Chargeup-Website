
import 'aos/dist/aos.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/home/Home';
import MarqueeSlider from './components/ev_partners/MarqueeSlider';
import SustainabilitySection from './components/sustainability/SustainabilitySection';
import Footer from './components/footer/Footer';
import IntegrationPartners from './components/integrationPartners/IntegrationPartners';
import FAQ from './solutionComponents/FAQ/FAQ.jsx';
import Benefits from './components/benefits/Benefits.jsx'
import Community from './components/community/Community.jsx';
import TeamGrid from './aboutComponents/team/TeamGrid.jsx';
import BePartner from './partnersComponent/becomeOurPartner/BePartner.jsx';
import NewsSection from './investorsComponent/newsSection/NewsSection.jsx';
import VerticalTimeline from './aboutComponents/timeline/Timeline.jsx';
import Story from './aboutComponents/story/Story.jsx';
import Activities from './communityComponents/groupActivities/Activities.jsx';
import GalleryWrapper from './communityComponents/testimony/GalleryWrapper.jsx';
import Career from './peopleComponents/career/Career.jsx';
import Commandments from './peopleComponents/commandments/Commandments.jsx';
import IndiaMap from './components/map/IndiaMap.jsx';
import TestimonialSlider from './components/videoTestimonials/TestimonialSlider.jsx';
import InvestorGrid from './investorsComponent/investors/InvestorGrid.jsx';



function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <br/>
              <br/>
              <br/>
              <br/>
              <Home />
              <Benefits/>
              {/* <MarqueeSlider /> */}
              <SustainabilitySection/>
              <IntegrationPartners/>
             <IndiaMap/>
              <TestimonialSlider/>
              
              {/* <Community/> */}
            </>
          } />
          <Route path="/about" element={
            <>
            <br/>
            <br/>
            <br/>
            <br/>
            <Story/>
            <TeamGrid/>
            {/* <VerticalTimeline/> */}
            
            
            
            </>} />
          {/* <Route path="/contact" element={<SustainabilitySection/>} /> */}
          <Route path="/solutions" element={
            <>
            
            <Benefits/>
            <FAQ/>
            
            
            </>
          } />
           <Route path="/partners" element={
            <>
            
            
            <br/>
            <BePartner/>
            <IntegrationPartners/>
            
            
            </>
          } />
          <Route path="/investors" element={
            <>
              <br/>
            <br/>
            <br/>
            <br/>
            <NewsSection/>
            <InvestorGrid/>
            </>
          } />
           <Route path="/community" element={
            <>
              <br/>
            <br/>
            <br/>
            <br/>
            <Activities/>
            <GalleryWrapper/>
            </>
          } />
          <Route path="/people" element={
            <>
              <br/>
            <br/>
            <br/>
            <br/>
            <Career/>
            <Commandments/>
            <Activities/>
            </>
          } />
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






































