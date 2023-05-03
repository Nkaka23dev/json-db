import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import HostVanDetailsNav from "../../../../components/layout/HostVanDetailsNav";
import Van from "../../../../VansInterface";
import { getHostVans } from "../../../../api";
import { requiredAuth } from "../../../../utils/requiredAuth";
import { Suspense } from "react";
import Loading from "../../../../components/Loading";

export const loader = async ({ params, request }: any) => {
  await requiredAuth(request);
  return defer({ hostVansDetails: getHostVans(params.id) })
}

export default function HostVanDetails() {
  const vanDetailpromises = useLoaderData() as any;

  function getHostVanDetails(van: Van) {
    return (<div className="max-w-6xl mx-auto">
      <div className='px-16 bg-white'>
        {van && <div className="flex  justify-between max-w-6xl mx-auto  items-center pt-10">
          <Link to=".." relative="path" className="text-xl font-semibold py-5">Back to All Vans</Link>
        </div>}
      </div>
      <div className="bg-white px-16">
        <div className=" flex items-center  justify-between">
          <div className="flex items-center gap-5">
            <img src={van.imageUrl} className="w-64 h-64" alt="" />
            <div>
              <button className="bg-[#E17654] py-3 px-10 capitalize font-semibold text-white">{van.type}</button>
              <p className="text-2xl mt-3 font-semibold">{van.name}</p>
              <p className="text-xl mt-4">${van.price}/day</p>
            </div>
          </div>

        </div>
        <div className="text-black">
          <HostVanDetailsNav />
          <Outlet context={van} />
        </div>
      </div>
    </div>)
  }
  return (
    <section className="bg-[#FFF7ED] px-5 pb-16 ">
      <Suspense fallback={<Loading />}>
        <Await resolve={vanDetailpromises.hostVansDetails}>
          {getHostVanDetails}
        </Await>
      </Suspense>
    </section>
  )
}
