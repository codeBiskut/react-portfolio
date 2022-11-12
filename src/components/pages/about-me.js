import headshot from '../../assets/headshot3.jpg'
import '../../styles/about-me.css'

function AboutMe() {
    return (
        <div id="about-me-page  ">
            <div className='image-container d-flex justify-content-center p-4'>
                <img src={headshot}
                    className="headshot" />
            </div>
            <hr className="rounded justify-content-center"></hr>
            <div className='text-container p-4'>
                <p>My name is Joshua Rinehart, and this is a little bit about me! I'm an aspiring web designer armed with a certificate from 2University and The Ohio State University. In addition to web development, I am also passionate about graphic design and I am in the process of building a clothing brand based upon my designs!</p>
            </div>
        </div>
    )
}

export default AboutMe;