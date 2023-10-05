import './App.css';
import {PaintAppHeader} from "./components/brushstrokes-home-page/PaintAppHeader";
import {PaintAppNavBar} from "./components/PaintAppNavBar";
import {PaintAppServicesSection} from "./components/brushstrokes-home-page/PaintAppServicesSection";
import {PaintAppTestimonialSection} from "./components/brushstrokes-home-page/PaintAppTestimonialSection";
import {PaintAppBlogPreviewSection} from "./components/brushstrokes-home-page/PaintAppBlogPreviewSection";
import {PaintAppFooter} from "./components/PaintAppFooter";
import {PaintAppCallToAction} from "./components/brushstrokes-home-page/PaintAppCallToAction";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PaintAppHomePage} from "./components/brushstrokes-home-page/PaintAppHomePage";
import {PaintAppAboutPage} from "./components/brushstrokes-about-page/PaintAppAboutPage";
import {PaintAppContactPage} from "./components/brushstrokes-contact-page/PaintAppContactPage";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaintAppHomePage />}/>
                <Route path="about" element={<PaintAppAboutPage />}/>
                <Route path="contact" element={<PaintAppContactPage />}/>
                <Route path="about" element={<PaintAppAboutPage />}/>
                <Route path="about" element={<PaintAppAboutPage />}/>

                {/*<Route index element={<Home />} />*/}
                {/*<Route path="blogs" element={<Blogs />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
                {/*<Route path="*" element={<NoPage />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
