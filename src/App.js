import React from 'react';
import Navbar from './Navbar';
import Masthead from './Masthead';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import CopyRight from './CopyRight';
const App=()=>{
    return(
        <div id="page-top">
           <Navbar/>
            <Masthead/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default App;