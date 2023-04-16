import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Van {
  description: String
  id: number
  imageUrl: string
  name: string
  price: number
  type: string
}
export default function HostVanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState<Van>()

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id])

  console.log(van)
  return (
    <section className="bg-[#FFF7ED] px-5 pb-16 ">
      <div className="max-w-6xl mx-auto">
        <div className=''>
          <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
            <p className="text-2xl font-bold">Your Listed Vans</p>
            <p className="text-xl font-semibold">View All</p>
          </div>
        </div>
        {van ? <section>
          <div className="bg-white flex items-center mt-6 px-16 py-10 justify-between">
            <div className="flex items-center gap-5">
              <img src={van.imageUrl} className="w-64 h-64" alt="" />
              <div>
                <button className="bg-[#E17654] py-3 px-10 capitalize font-semibold text-white">{van.type}</button>
                <p className="text-4xl font-semibold">{van.name}</p>
                <p className="text-xl mt-4">${van.price}/day</p>
              </div>
            </div>
          </div>
        </section> : <h2 className="text-3xl text-center py-10">Loading.....</h2>}
      </div>
    </section>
  )
}
