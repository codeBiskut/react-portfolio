import { useState } from "react";
import AboutMe from "../pages/about-me";
import Contact from "../pages/contact";
import Projects from "../projects/projects";
import Resume from '../pages/resume';
import Footer from "../footer";
import Header from "../header";
import "./home.css"

export function Home() {

    const [currentPage, setCurrentPage] = useState('About Me')


    function handleClick(event) {
        event.preventDefault();

        const location = event.target.text


        setCurrentPage(location)
    }



    return (
        <div className="homepage">
            <Header handleClick={handleClick} currentPage={currentPage} />
            <div className="d-flex justify-content-center center-color">
                <div className="card p-2 m-3 w-75 card-color">{
                    (() => {
                        switch (currentPage) {
                            case 'About Me':
                                return <AboutMe />
                            case 'Projects':
                                return <Projects />
                            case 'Resume':
                                return <Resume />
                            case 'Contact':
                                return <Contact />
                            default:
                                return <AboutMe />
                        }
                    })()
                }</div>
            </div>
            <Footer />
        </div>
    )
}

// export default Home;