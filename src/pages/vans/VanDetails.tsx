import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from "react-router-dom"
import Van from '../../VansInterface';

export default function VanDetails() {
    const location = useLocation();
    const params = useParams();
    const [van, setVan] = useState<Van>()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (
        <section className='mt-28'>
            {van ? <div className="">
                <div className="max-w-5xl mx-auto">
                    <Link to={`..${search}`} relative="path" className="text-xl font-semibold py-5 underline capitalize">Back to {type} Vans</Link>
                    <img src={van.imageUrl} className="object-cover mt-5 h-80 w-96 object-center aspect-video" />
                </div>

                <div className="max-w-5xl mx-auto ">
                    <div className="">
                        <button className='py-3 px-10 text-xl bg-[#FFEAD0] mt-5 capitalize'>{van.type}</button>
                        <h1 className="text-2xl">{van.name}</h1>
                        <p className="text-xl mt-5"></p>
                        <p className="text-xl mt-5"> <span className='font-bold'>${van.price}</span> /day</p>
                    </div>
                    <div className="py-5">
                        <div className="text-lg  text-gray-700">
                            <h2>{van.description}</h2>

                        </div>
                        <div className="mt-10 grid w-full bg-[#FF8C38] py-3 px-10">
                            <Link className=" font-semibold  m-auto text-center text-white w-full max-w-full" to="/vans">Explore our vans</Link>
                        </div>
                    </div>
                </div>
            </div> : <h2 className="py-80 text-center text-2xl text-gray-600">Loading.....</h2>}

        </section>
    )
}
