import { useOutletContext } from 'react-router-dom';
import { Van } from './HostVanDetails';

export default function VansDetailsPricing() {
    const currentVan = useOutletContext<Van>();
    return (
        <div className='text-3xl pb-10'>${currentVan.price}/day</div>
    )
}
