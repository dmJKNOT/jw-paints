import belakor_wip from '../../assets/gallery/belakor_WIP.PNG'

export function PaintAppAboutDetailsTwo() {
    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0"
                                                                             src={belakor_wip}
                                                                             alt="..."/></div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">Growth &amp; beyond</h2>
                        <p className="lead fw-normal text-muted mb-0">Evolving with every brushstroke,
                            we are here to breathe life into your stories, drawing inspiration from our RPG tabletop
                            adventures, and enhancing your gaming narratives with each new piece of art.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}