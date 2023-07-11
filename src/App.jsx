import styles from "./style";
import {  AboutUs ,  Clients, CTA, Footer, Navbar, Stats, Hero, Purpose  } from "./components";
import Partenaires from "./components/Partenaires";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Reset from "./reset";
import Au from './components/auth/AuthPage'
import Page from "./page";
const App = () => (
 <Router>
   <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> 
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> 
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Partenaires />  
        <AboutUs/> 
        <Stats/>
        <Purpose />
        <Routes> 
        <Route path="/login" element={<Au />} />
        </Routes>
        <Routes> 
        <Route path="/client/confirm/:activationcode" element={<Page />} />
        </Routes>
        <Routes> 
        <Route path="/reset" element={<Reset />} />
        </Routes>
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        <CTA /> 
        <Clients/> 
        <Footer />
      </div>
    </div>
  </div>
 </Router>
);
export default App;