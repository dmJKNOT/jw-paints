import {PaintAppNavBar} from "../PaintAppNavBar";
import {PaintAppHeader} from "./PaintAppHeader";
import {PaintAppServicesSection} from "./PaintAppServicesSection";
import {PaintAppTestimonialSection} from "./PaintAppTestimonialSection";
import {PaintAppFooter} from "../PaintAppFooter";


export function PaintAppHomePage() {

    return (
        <div className="flex-shrink-0 App">
            <PaintAppNavBar/>
            <PaintAppHeader/>
            <PaintAppServicesSection/>
            <PaintAppTestimonialSection/>
            {/*<PaintAppBlogPreviewSection/>*/}
            {/*<PaintAppCallToAction/>*/}
            <PaintAppFooter/>
        </div>
    );
}
