import {useEffect, useRef, useState} from "react";

export function PaintAppNavBar() {

    const [showCollapseNav, setShowCollapseNav] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showBlog, setShowBlog] = useState(false);

    const blogDropdownRef = useRef(null);
    const portfolioDropdownRef = useRef(null);

    function togglePortfolioDropdown() {
        setShowBlog(false);
        setShowPortfolio(!showPortfolio)
    }

    function toggleBlogDropdown() {
        setShowPortfolio(false);
        setShowBlog(!showBlog)
    }

    //detect click outside nav
    useEffect(() => {
        const handleClickOutsideBlog = (event) => {
            if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target)) {
                setShowBlog(false);
            }
        };

        const handleClickOutsidePortfolio = (event) => {
            if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target)) {
                setShowPortfolio(false);
            }
        };


        document.addEventListener('click', handleClickOutsidePortfolio, true);
        document.addEventListener('click', handleClickOutsideBlog, true);

        return () => {
            document.removeEventListener('click', handleClickOutsidePortfolio, true);
            document.removeEventListener('click', handleClickOutsideBlog, true);
        };
    }, [ ]);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="./">Battle Ready Brushstrokes</a>
                <button className="navbar-toggler collapsed"
                        type="button"
                        onClick={() => setShowCollapseNav(!showCollapseNav)}><span
                    className="navbar-toggler-icon"></span></button>
                <div className={showCollapseNav? "navbar-collapse collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="./">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
                        <li className="nav-item dropdown" ref={blogDropdownRef}>
                            <a className="nav-link dropdown-toggle" role="button" id="navbarDropdownBlog"
                               onClick={() => toggleBlogDropdown()}>Blog</a>
                            <ul className={showBlog? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"}>
                                <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" ref={portfolioDropdownRef}>
                            <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" role="button"
                               onClick={() => togglePortfolioDropdown()} >Portfolio</a>
                            <ul className={showPortfolio? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"}>
                                <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a>
                                </li>
                                <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}
