import { useEffect, useState } from "react";
import {Outlet, useParams } from "react-router-dom";
import HostVanDetailsNav from "../../../../components/layout/HostVanDetailsNav";

export interface Van {
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
  return (
    <section className="bg-[#FFF7ED] px-5 pb-16 ">
      <div className="max-w-6xl mx-auto">
        <div className=''>
          <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
            <p className="text-2xl font-bold">Your Listed Vans</p>
            <p className="text-xl font-semibold">View All</p>
          </div>
        </div>
        {van ? <div className="bg-white px-16">
          <div className=" flex items-center mt-6  pt-10 justify-between">
            <div className="flex items-center gap-5">
              <img src={van.imageUrl} className="w-64 h-64" alt="" />
              <div>
                <button className="bg-[#E17654] py-3 px-10 capitalize font-semibold text-white">{van.type}</button>
                <p className="text-4xl font-semibold">{van.name}</p>
                <p className="text-xl mt-4">${van.price}/day</p>
              </div>
            </div>

          </div>
          <div className="text-black">
            <HostVanDetailsNav />
            <Outlet context={van} />
          </div>
        </div> : <h2 className="text-3xl text-center py-10">Loading.....</h2>}
      </div>
    </section>
  )
}
