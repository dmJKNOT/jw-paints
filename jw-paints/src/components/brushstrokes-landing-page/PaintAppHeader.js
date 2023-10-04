import dreadnaught_img from '../../assets/gallery/Dreadnaught_01.PNG'

export function PaintAppHeader() {
    return (
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">Commission Miniature Painting</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Dazzle your players with a centerpiece monster for your
                                RPG campaign, or commission a war-gaming unit today!</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="jw-paints/src/components/brushstrokes-landing-page/PaintAppHeader#features">Services</a>
                                <a className="btn btn-outline-light btn-lg px-4" href="jw-paints/src/components/brushstrokes-landing-page/PaintAppHeader#!">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5"
                                                                                           src={dreadnaught_img}
                                                                                           alt="..."/></div>
                </div>
            </div>
        </header>
    );

}