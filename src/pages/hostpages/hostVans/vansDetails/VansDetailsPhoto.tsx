import { useOutletContext } from "react-router-dom";
import Van from "../../../../VansInterface";

export default function VansDetailsPhoto() {
    const currentVan = useOutletContext<Van>();
    return (
        <div className='pb-10'>
            <img src={currentVan.imageUrl} className="object-cover h-80 w-96 object-center aspect-video" />
        </div>
    )
}
