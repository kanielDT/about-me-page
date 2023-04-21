import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Grid from "./components/Grid.jsx"
import PictCarousel from "./components/PictCarousel.jsx"
import Quote from "./components/Quote.jsx"
import Video from "./components/Video.jsx"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <>
    <About/>
    <PictCarousel/>
    <Quote/>
    <Grid/>
    <Video/>
    <Footer/>

    </>
  )

  
   
}
export default App;
