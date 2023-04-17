import { useQuery } from 'react-query';
import { Link } from 'react-router-dom'
interface Van {
    description: String
    id: number
    imageUrl: string
    name: string
    price: number
    type: string
}
interface VansData {
    vans: Van[];
}
export default function Vans() {
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
        return <div className='py-80 text-center text-2xl text-red-600'>error</div>;
    }
    return (
        <section className='mt-40'>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>Explore our van options</h1>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-10 my-10'>
                            {[...new Set(data?.vans.map(van => van.type))].map((van) => {
                                return <h1 key={van} className={`bg-[#FFEAD0] py-3 px-10 capitalize cursor-pointer font-semibold`}>{van}</h1>
                            })}
                        </div>``
                        <h1 className='text-xl underline cursor-pointer'>Clear filters</h1>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    {data?.vans.map((van) => {
                        return (
                            <Link to={`/vans/${van.id}`} key={van.id} className='cursor-pointer'>
                                <img src={van.imageUrl} alt=""  className="w-96 h-96"/>
                                <div className='my-3 flex justify-between items-center font-semibold'>
                                    <div>
                                        <h1>{van.name}</h1>
                                        <button className="hover:bg-gray-800 py-3 px-10 bg-black text-white">Luxry</button>
                                    </div>
                                    <div>
                                        <p>${van.price}</p>
                                        <p>/day</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}