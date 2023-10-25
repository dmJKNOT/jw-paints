import insta from '../../assets/instagram.svg'


export function PaintAppContactCards() {
    const scrollToMessagUs = () => {
        const element = document.getElementById('message_us_form');
        if (element) {
            // 👇 Will scroll smoothly to the top of the given section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
            <div className="col">
                <a onClick={scrollToMessagUs} style={{textDecoration: 'none', color: 'black'}}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div className="h5 mb-2">Send us a message</div>
                </a>
                <p className="text-muted mb-0">Ask us about techniques and materials</p>
            </div>
            <div className="col">
                <a href="https://www.instagram.com/dm_jknot/" target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                    <div className="feature text-white rounded-3 mb-3"><img src={insta}></img></div>
                    <div className="h5">Follow our story</div>
                </a>
                <p className="text-muted mb-0">Follow us on instagram to see exciting work in progress photos.</p>

            </div>
            <div className="col">
                <a onClick={scrollToMessagUs} style={{textDecoration: 'none', color: 'black'}}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                    <div className="h5">Commission Pricing</div>
                    <p className="text-muted mb-0">Get a quote for a painted piece today.</p>
                </a>
            </div>
            {/*<div className="col">*/}
            {/*    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i*/}
            {/*        className="bi bi-telephone"></i></div>*/}
            {/*    <div className="h5">Call us</div>*/}
            {/*    <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>*/}
            {/*</div>*/}
        </div>
    );

}