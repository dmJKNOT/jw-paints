import {PaintAppNavBar} from "../PaintAppNavBar";
import {PaintAppHeader} from "../brushstrokes-home-page/PaintAppHeader";
import {PaintAppServicesSection} from "../brushstrokes-home-page/PaintAppServicesSection";
import {PaintAppTestimonialSection} from "../brushstrokes-home-page/PaintAppTestimonialSection";
import {PaintAppFooter} from "../PaintAppFooter";
import {PaintAppAboutHeader} from "./PaintAppAboutHeader";
import {PaintAppAboutOurTeam} from "./PaintAppAboutOurTeam";
import {PaintAppAboutDetailsOne} from "./PaintAppAboutDetailsOne";
import {PaintAppAboutDetailsTwo} from "./PaintAppAboutDetailsTwo";

export function PaintAppAboutPage() {

    return (
        <div className="flex-shrink-0 App">
            <PaintAppNavBar/>
            <PaintAppAboutHeader/>
            <PaintAppAboutDetailsOne/>
            <PaintAppAboutDetailsTwo/>
            <PaintAppAboutOurTeam/>
            <PaintAppFooter/>
        </div>
    );
}