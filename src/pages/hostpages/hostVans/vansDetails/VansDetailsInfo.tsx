import { useOutletContext } from "react-router-dom"
import Van from "../../../../VansInterface";

export default function VansDetailsInfo() {
    const currentVan = useOutletContext<Van>();

    return (
        <section className=' text-lg pb-10 space-y-1'>
            <div className='flex gap-5'>
                <h1 className='font-semibold capitalize text-xl'>Name: </h1>
                <span>{currentVan.name}</span>
            </div>
            <div className='flex gap-5'>
                <h1 className='font-semibold text-xl'>Category: </h1>
                <span className="capitalize">{currentVan.type}</span>
            </div>
            <div className=''>
                <p> <span className='font-semibold text-xl capitalize'>Description: </span>{currentVan.description} </p>
            </div>
            <div className='flex gap-5'>
                <h1 className='font-semibold text-xl'>Visibility: </h1>
                <span className="capitalize">{currentVan.type}</span>
            </div>
        </section>
    )
}
