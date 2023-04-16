export default function VansList() {
    return (
        <section className="bg-[#FFF7ED] px-5 ">
            <div className="max-w-6xl mx-auto">
                <div className=''>
                    <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
                        <p className="text-2xl font-bold">Your Listed Vans</p>
                        <p className="text-xl font-semibold">View All</p>
                    </div>
                </div>
                {[1, 2, 3].map((val, index) => {
                    return (
                        <div className="bg-white flex items-center mt-6 px-16 py-10 justify-between">
                            <div className="flex items-center gap-5">
                                <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png" className="w-64 h-32" alt="" />
                                <div>
                                    <p className="text-3xl font-semibold">Mostest Explore</p>
                                    <p className="text-xl mt-4">$70</p>
                                </div>
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
