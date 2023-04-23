import { NavLink } from 'react-router-dom'

export default function HostVanDetailsNav() {
    return (
        <section className='text-black '>
            <div className="max-w-6xl mx-auto py-6 flex items-center justify-between text-xl">
                <div className="flex font-semibold items-center cursor-pointer gap-x-10">
                    <NavLink to="." end className="hover:underline">Details</NavLink>
                    <NavLink to="pricing" className="hover:underline">Pricing</NavLink>
                    <NavLink to="photo" className="hover:underline">Photo</NavLink>
                </div>
            </div>
        </section>
    )
}
