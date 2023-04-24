import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import Van from '../../VansInterface';
import { getVans } from '../../api';

export function loader() {
    return getVans()
}
export default function Vans() {
    const vans = useLoaderData() as any
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const handleFilterChange = (key: string, value: string | null): any => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    } 
    const displayedVans = typeFilter
        ? vans.filter((van: Van) => van.type === typeFilter)
        : vans
    return (
        <section className='mt-24'>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>Explore our van options</h1>
                    <div className='flex max-w-[61rem] justify-between items-center'>
                        <div className='flex gap-10 my-10'>
                            <div className='flex gap-10 my-10'>
                                <button
                                    onClick={() => handleFilterChange("type", "simple")}
                                    className={
                                        ` py-3 px-10 hover:bg-[#E17654] hover:text-white rounded-sm font-semibold ${typeFilter === "simple" ? "bg-[#E17654]  text-white" : "bg-[#FFEAD0] "}`
                                    }
                                >Simple</button>
                                <button className={
                                    ` py-3 px-10 hover:bg-black hover:text-white  rounded-sm font-semibold ${typeFilter === "luxury" ? " bg-black text-white" : "bg-[#FFEAD0] "}`
                                } onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
                                <button onClick={() => handleFilterChange("type", "rugged")}
                                    className={
                                        ` py-3 hover:bg-[#115E59] hover:text-white  px-10 rounded-sm font-semibold ${typeFilter === "rugged" ? "bg-[#115E59] text-white" : "bg-[#FFEAD0] "}`
                                    }
                                >Rugged</button>
                            </div>
                        </div>
                        {typeFilter && <button onClick={() => handleFilterChange('type', null)} className='text-xl hover:underline cursor-pointer'>Clear filters</button>}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    {displayedVans?.map((van: any) => {
                        return (
                            <Link to={`${van.id}`}
                                state={{
                                    search: `?${searchParams.toString()}`,
                                    type: typeFilter
                                }}
                                key={van.id} className='cursor-pointer'>
                                <img src={van.imageUrl} alt="" className="w-96 h-96" />
                                <div className='my-3 grid grid-cols-2 items-center font-semibold'>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg capitalize'>{van.name}</h1>
                                        <button className={`capitalize  text-white py-3 px-10 ${van.type === 'simple' ? 'bg-[#E17654]' : ''}
                                        ${van.type === 'rugged' ? 'bg-[#115E59]' : ''}
                                        ${van.type === 'luxury' ? 'bg-black' : ''}`}
                                        >{van.type}</button>
                                    </div>
                                    <div className='ml-[4.5rem]'>
                                        <p>${van.price}</p>
                                        <p>/day</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}