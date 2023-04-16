import { Outlet } from 'react-router-dom'
import HostNav from '../../components/layout/HostNav'

export default function HostLayout() {
    return (
        <>
            <HostNav />
            <section className='mt-32'>
                <Outlet />
            </section>
        </>
    )
}
