export function PaintAppFooter() {
    return (
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0 text-white">Copyright &copy; BattleReadyBrushstrokes 2023</div>
                    </div>
                    <div className="col-auto">
                        <div className="small m-0 text-white">This site powered by React.js + AWS</div>
                    </div>
                    <div className="col-auto">
                        <a className="link-light small" target={"_blank"} href="https://github.com/dmJKNOT/jw-paints">Source Code</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
