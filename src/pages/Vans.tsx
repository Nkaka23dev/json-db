import React, { useEffect, useState } from 'react'

export default function Vans() {
    const [vans, setVans] = useState(null);
    useEffect(() => {
        
    })
    return (
        <section className='mt-40'>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>Explore our van options</h1>
                    <div className='flex gap-10 my-10'>
                        {[1, 2, 3, 4].map((value, idx) => {
                            return <h1 className={`${idx !== 3?'bg-[#FFEAD0] ':'underline'} py-3 px-10 font-semibold`}>Simple</h1>
                        })}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    {[1, 2, 3, 4, 5, 6].map(() => {
                        return (
                            <div className=''>
                                <img src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png" alt="" />
                                <div className='my-3 flex justify-between items-center font-semibold'>
                                    <div>
                                        <h1>Modest Explorer</h1>
                                        <button className="hover:bg-gray-800 py-3 px-10 bg-black text-white">Luxry</button>
                                    </div>
                                    <div>
                                        <p>$60</p>
                                        <p>/day</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
