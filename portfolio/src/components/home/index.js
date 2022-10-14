import AboutMe from "../about-me";
import Footer from "../footer";
import Header from "../header";



function Home() {
    return (
        <div className="homepage">
            <Header />
            <div className="d-flex justify-content-center">
                <div className="card p-2 m-3 w-75"><AboutMe /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;