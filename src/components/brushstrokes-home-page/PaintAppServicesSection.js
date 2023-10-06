
export function PaintAppServicesSection() {
    return (
        <section className="py-5" id="services">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">Everything you need to decorate your table</h2></div>
                    <div className="col-lg-8">
                        <div className="row gx-5 row-cols-1 row-cols-md-2">
                            <div className="col mb-5 h-100">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <span className="material-symbols-outlined">landscape</span>
                                    {/*<i*/}
                                    {/*className="bi bi-collection"></i>*/}
                                </div>
                                <h2 className="h5">Scenery and terrain</h2>
                                <p className="mb-0">3D printed, laser cut, or hand crafted scenery professionally
                                    painted to bring your table to life</p>
                            </div>
                            <div className="col mb-5 h-100">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <span className="material-symbols-outlined">apartment</span></div>
                                <h2 className="h5">Dioramas</h2>
                                <p className="mb-0">Capture a moment in time forever or
                                    order a scenic stage to display your models</p>
                            </div>
                            <div className="col mb-5 mb-md-0 h-100">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <span className="material-symbols-outlined">
                                        person_apron
                                    </span>
                                </div>
                                <h2 className="h5">Special Characters</h2>
                                <p className="mb-0">Stand alone heroes, villains, or creatures that capture the eye and tell a story</p>
                            </div>
                            <div className="col h-100">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <span
                                    className="material-symbols-outlined">
                                    groups
                                    </span>
                                </div>
                                <h2 className="h5">Units</h2>
                                <p className="mb-0">Squads of models painted to table top standard, and BATTLE READY!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
