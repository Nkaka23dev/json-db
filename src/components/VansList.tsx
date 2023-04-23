import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Van from "../VansInterface"

export default function VansList() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <section className="bg-[#FFF7ED] px-5 ">
            <div className="max-w-6xl mx-auto">
                <div className=''>
                    <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
                        <p className="text-4xl font-bold">Your Listed Vans</p>
                        <p className="text-xl font-semibold">View All</p>
                    </div>
                </div>
                {vans.length ?
                    <section>
                        {vans.map((van: Van) => {
                            return (
                                <Link to={`vans/${van.id}`} key={van.id} className="bg-white flex items-center mt-6 px-16 py-10 justify-between">
                                    <div className="flex items-center gap-5">
                                        <img src={van.imageUrl} className="w-32 h-32" alt="" />
                                        <div>
                                            <p className="text-3xl font-semibold">{van.name}</p>
                                            <p className="text-xl mt-4">${van.price}/day</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Edit</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </section>
                    : <h2 className="text-3xl text-center py-10">Loading.....</h2>}
            </div>
        </section>
    )
}
