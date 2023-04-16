import NavBar from '../../components/layout/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/layout/Footer'
export default function PageLayout() {
    return (
        <section className="">
            <nav>
                <NavBar />
            </nav>
            <main className='mt-[4.6rem]'>
                <Outlet />
            </main>
            <footer className=''>
                <Footer />
            </footer>
        </section>
    )
}
