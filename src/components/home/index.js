import { useState } from "react";
import AboutMe from "../pages/about-me";
import Contact from "../pages/contact";
import Projects from "../projects/projects";
import Footer from "../footer";
import Header from "../header";

export function Home() {

    const [currentPage, setCurrentPage] = useState('About Me')


    function handleClick(event) {
        event.preventDefault();

        const location = event.target.text

        
        setCurrentPage(location)
    }



    return (
        <div className="homepage">
            <Header handleClick={handleClick} currentPage={currentPage}/>
            <div className="d-flex justify-content-center">
                <div className="card p-2 m-3 w-75">{
                    (() => {
                        switch (currentPage) {
                            case 'About Me':
                                return <AboutMe />
                            case 'Projects':
                                return <Projects />
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