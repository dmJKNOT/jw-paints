import zuko from '../../assets/team/Zuko.jpg'
import destiny from '../../assets/team/Destiny.jpg'
import howl from '../../assets/team/Howl.jpg'
import josh from '../../assets/team/Josh.jpg'

export function PaintAppAboutOurTeam() {
    return (
        <section className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="text-center">
                    <h2 className="fw-bolder">Our team</h2>
                    <p className="lead fw-normal text-muted mb-5">Dedicated to quality and success</p>
                </div>
                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5 mb-5 mb-xl-0">
                        <div className="text-center">
                            <img className="img-fluid rounded-circle mb-4 px-4"
                                 src={josh} alt="..."/>
                            <h5 className="fw-bolder">Joshua Walters</h5>
                            <div className="fst-italic text-muted">Founder &amp; CTO</div>
                        </div>
                    </div>
                    <div className="col mb-5 mb-5 mb-xl-0">
                        <div className="text-center">
                            <img className="img-fluid rounded-circle mb-4 px-4"
                                 src={destiny} alt="..."/>
                            <h5 className="fw-bolder">Destiny Walters</h5>
                            <div className="fst-italic text-muted">CEO</div>
                        </div>
                    </div>
                    <div className="col mb-5 mb-5 mb-sm-0">
                        <div className="text-center">
                            <img className="img-fluid rounded-circle mb-4 px-4"
                                 src={zuko} alt="..."/>
                            <h5 className="fw-bolder">Zuko Walters</h5>
                            <div className="fst-italic text-muted">Operations Manager</div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="text-center">
                            <img className="img-fluid rounded-circle mb-4 px-4"
                                 src={howl} alt="..."/>
                            <h5 className="fw-bolder">Howl Walters</h5>
                            <div className="fst-italic text-muted">CFO</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}