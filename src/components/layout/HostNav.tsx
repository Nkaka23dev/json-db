import { NavLink } from "react-router-dom";

export default function HostNav() {
    return (
        <section className='mt-16 bg-[#FFF7ED] px-5 fixed w-full left-0 right-0 top-0 '>
            <div className="max-w-6xl mx-auto py-6 flex items-center justify-between text-xl">
                <div className="flex font-semibold items-center cursor-pointer gap-x-10">
                    <NavLink to="/host" end className="hover:underline">Dashboard</NavLink>
                    <NavLink to="income" className="hover:underline">Income</NavLink>
                    <NavLink to="vans" className="hover:underline">Vans</NavLink>
                    <NavLink to="reviews" className="hover:underline">reviews</NavLink>
                </div>
            </div>
        </section>
    )
}
