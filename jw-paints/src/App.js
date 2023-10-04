import './App.css';
import {PaintAppHeader} from "./components/brushstrokes-landing-page/PaintAppHeader";
import {PaintAppNavBar} from "./components/PaintAppNavBar";
import {PaintAppServicesSection} from "./components/brushstrokes-landing-page/PaintAppServicesSection";
import {PaintAppTestimonialSection} from "./components/brushstrokes-landing-page/PaintAppTestimonialSection";
import {PaintAppBlogPreviewSection} from "./components/brushstrokes-landing-page/PaintAppBlogPreviewSection";
import {PaintAppFooter} from "./components/PaintAppFooter";
import {PaintAppCallToAction} from "./components/brushstrokes-landing-page/PaintAppCallToAction";

function App() {
  return (
    <div className="App">
        <PaintAppNavBar/>
        <PaintAppHeader/>
        <PaintAppServicesSection/>
        <PaintAppTestimonialSection/>
        {/*<PaintAppBlogPreviewSection/>*/}
        <PaintAppCallToAction/>
        <PaintAppFooter/>
    </div>
  );
}

export default App;
