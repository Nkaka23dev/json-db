import { Link } from "react-router-dom";
import bgImg from "../assets/image 54.png"

export default function About() {
    return (
        <section className='mt-24'>
            <div className="">
                <div className="w-full">
                    <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png" className="object-cover w-full object-center aspect-video" />
                </div>
                <div className="about-page-content">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="about-page-cta">
                    <h2>Your destination is waiting.<br />Your van is ready.</h2>
                    <Link className="link-button" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </section>
    )
}
