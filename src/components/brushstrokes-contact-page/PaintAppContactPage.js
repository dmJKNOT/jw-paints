import {PaintAppNavBar} from "../PaintAppNavBar";
import {PaintAppHeader} from "../brushstrokes-home-page/PaintAppHeader";
import {PaintAppServicesSection} from "../brushstrokes-home-page/PaintAppServicesSection";
import {PaintAppTestimonialSection} from "../brushstrokes-home-page/PaintAppTestimonialSection";
import {PaintAppFooter} from "../PaintAppFooter";
import {PaintAppContactForm} from "./PaintAppContactForm";
import {PaintAppContactCards} from "./PaintAppContactCards";

export function PaintAppContactPage() {

    return (
        <div className="flex-shrink-0 App">
            <PaintAppNavBar/>
            <section className="py-5">
                <div className="container px-5">
                    <PaintAppContactForm/>
                    <PaintAppContactCards/>
                </div>
            </section>
            <PaintAppFooter/>
        </div>
    );
}