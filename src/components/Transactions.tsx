
export default function Transactions() {
    const prices = [{
        price: 6478,
        id: 1
    }, {
        price: 6478,
        id: 2
    }, {
        price: 6478,
        id: 3
    }]
    return (
        <section className="bg-[#FFF7ED] px-5 ">
            <div className="max-w-6xl mx-auto">
                <div className=''>
                    <div className="flex justify-between max-w-6xl mx-auto  items-center py-4 ">
                        <p className="text-2xl font-bold">Your Transaction</p>
                        <p className="text-xl font-semibold">View All</p>
                    </div>
                </div>
                {prices.map((price) => {
                    return (
                        <div key={price.id} className="bg-white flex items-center px-16 py-10  justify-between mt-6">
                            <div className="flex items-center gap-5">
                                <p className='text-2xl font-semibold'>${price.price}</p>
                            </div>
                            <div>
                                <p>Edit</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
