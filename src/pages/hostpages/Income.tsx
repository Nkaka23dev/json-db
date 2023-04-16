import React from 'react'
import Transactions from '../../components/Transactions'

export default function Income() {
    return (
        <section className='mt-40'>
            <div className="max-w-6xl mx-auto">
                <div>
                    <p className="text-3xl font-semibold">Income</p>
                </div>
                <div className="w-full mt-5">
                    <img src="/chart.png" className="object-cover h-[20rem] w-[35rem] mx-auto object-center aspect-video" />
                </div>
            </div>
            <Transactions />
        </section>
    )
}
