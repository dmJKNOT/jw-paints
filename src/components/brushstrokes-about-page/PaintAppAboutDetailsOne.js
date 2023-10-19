import old_terrain from '../../assets/gallery/Dwarven_terrain_all_old.PNG'

export function PaintAppAboutDetailsOne() {
    return (
        <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0"
                                                   src={old_terrain} alt="..."/></div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">Our founding</h2>
                        <p className="lead fw-normal text-muted mb-0">Born from our passion for RPG tabletop gaming,
                            we specialize in custom miniature and terrain paintings, dedicated to enhancing your gaming
                            experiences with uniquely crafted art.</p>
                    </div>
                </div>
            </div>
        </section>
    );

}