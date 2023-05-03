import { Await, Link, defer, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../api";
import { requiredAuth } from "../../../utils/requiredAuth";
import Van from "../../../VansInterface";
import { Suspense } from "react";
import Loading from "../../../components/Loading";

export async function loader({ request }: any) {
    await requiredAuth(request);
    return defer({ hostVans: getHostVans() });
}
export default function HostVans() {
    const HostVansPromises = useLoaderData() as any;
    console.log(HostVansPromises)

    function hostVans(vans: Van[]) {
        return (
            <section>
                {vans.map((van: Van) => {
                    return (
                        <Link to={`${van.id}`} key={van.id} className="bg-white flex items-center mt-6 px-16 py-10 justify-between">
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
        )
    }
    return (
        <section className="bg-[#FFF7ED] px-5 ">
            <div className="max-w-6xl mx-auto">
                <div className=''>
                    <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
                        <p className="text-4xl font-bold">Your Listed Vans</p>
                        <p className="text-xl font-semibold">View All</p>
                    </div>
                </div>
                <Suspense fallback={<Loading />}>
                    <Await resolve={HostVansPromises.hostVans}>
                        {hostVans}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}
