import { Link } from "react-router-dom";
import bgImg from "../assets/image 54.png"

export default function About() {
    return (
        <section className='mt-28'>
            <div className="">
                <div className="w-full">
                    <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png" className="object-cover h-[50vh] w-full object-center aspect-video" />
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="">
                        <h1 className="text-6xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
                        <p className="text-xl mt-10">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <p className="text-xl mt-10">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>
                    <div className="bg-[#FFCC8D] py-20 my-10 ">
                        <div className=" px-6 text-2xl font-semibold text-gray-700">
                            <h2>Your destination is waiting.<br />Your van is ready.</h2>

                        </div>
                        <div className="px-8 mt-10">
                            <Link className="mt-20 hover:bg-gray-800 py-3 px-10 bg-black text-white" to="/vans">Explore our vans</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
