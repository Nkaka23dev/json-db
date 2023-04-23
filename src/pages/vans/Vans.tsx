import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom'
import { VansData } from '../../VansInterface';

export default function Vans() {
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
    const { isLoading, error, data } = useQuery<VansData>('data', async () => {
        const response = await fetch('/api/vans');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
    if (isLoading) {
        return <div className='py-80 text-center text-2xl text-gray-600'>Loading...</div>;
    }
    if (error) {
        return <div className='py-80 text-center text-2xl text-red-600'>Error, Couldn't fetch the data</div>;
    }
    const displayedVans = typeFilter
        ? data?.vans.filter(van => van.type === typeFilter)
        : data?.vans
    return (
        <section className='mt-24'>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>Explore our van options</h1>
                    <div className='flex max-w-[61rem] justify-between items-center'>
                        <div className='flex gap-10 my-10'>
                            {[...new Set(data?.vans.map(van => van.type))].map((van) => {
                                return <button onClick={() => handleFilterChange("type", `${van}`)} key={van}
                                    className={`bg-[#FFEAD0] text-black 
                                 ${van === 'simple' ? 'hover:bg-[#E17654]  hover:text-white' : ''}
                                 ${van === 'rugged' ? 'hover:bg-[#115E59] hover:text-white ' : ''} 
                                 ${van === 'rugged' ? 'hover:bg-[#115E59] hover:text-white ' : ''} 
                                 ${van === 'luxury' ? 'hover:bg-black hover:text-white' : ''} 
                                 py-3 px-10 capitalize cursor-pointer font-semibold`}>{van}</button>
                            })}
                        </div>
                        {typeFilter && <button onClick={() => handleFilterChange('type', null)} className='text-xl hover:underline cursor-pointer'>Clear filters</button>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    {displayedVans?.map((van) => {
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