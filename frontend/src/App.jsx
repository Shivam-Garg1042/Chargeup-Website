
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
import AppDownloadButton from './components/downloadButton/AppDownloadButton.jsx';
import VerticalJourneyTimeline from './aboutComponents/timeline/Timeline.jsx';
import TimelineSlider from './aboutComponents/timeline/Timeline.jsx';



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
              <AppDownloadButton/>
              
              
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
            <AppDownloadButton/>
            
            <TimelineSlider/>
            
            
            
            
            </>} />
          {/* <Route path="/contact" element={<SustainabilitySection/>} /> */}
          <Route path="/solutions" element={
            <>
            
            <Benefits/>
            <FAQ/>
            <AppDownloadButton/>
            
            </>
          } />
           <Route path="/partners" element={
            <>
            
            
            <br/>
            <br/>
            <br/>
            <IntegrationPartners/>
            <IndiaMap/>
            <BePartner/>
            
            <AppDownloadButton/>
            
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
            <AppDownloadButton/>
            </>
          } />
           <Route path="/community" element={
            <>
              <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <GalleryWrapper/>
            <Activities/>
            <AppDownloadButton/>
            </>
          } />
          <Route path="/people" element={
            <>
              <br/>
            <br/>
            <br/>
            <br/>
            <Commandments/>
            
            
            <Activities/>
            <Career/>
            <AppDownloadButton/>
            </>
          } />
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






































