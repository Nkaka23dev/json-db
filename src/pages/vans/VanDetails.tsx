import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import Van from '../../VansInterface';
import { getVans } from '../../api';
import { Suspense } from "react";
import Loading from "../../components/Loading";

export const loader = ({ params }: any) => {
    const { id } = params;
    return defer({ vanDetails: getVans(id) });
}
export default function VanDetails() {
    const location = useLocation();
    const vanDetailPromise = useLoaderData() as any;
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    console.log(vanDetailPromise)
    function vanDetails(van: Van) {
        return (
            <div className="">
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
            </div>
        )
    }
    return (
        <section className='mt-28'>
            <Suspense fallback={<Loading />}>
                <Await resolve={vanDetailPromise.vanDetails}>
                    {vanDetails}
                </Await>
            </Suspense>
        </section>
    )
}
