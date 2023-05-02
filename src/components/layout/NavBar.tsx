import { NavLink, redirect, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi"

export default function NavBar() {
  const navigate = useNavigate();
  const fekeLogout = () => {
    localStorage.removeItem("userloggedIn");
    // navigate("/login")
  }
  return (
    <section className="bg-[#FFF7ED] px-5 fixed w-full left-0 right-0 top-0">
      <div className="max-w-6xl mx-auto py-6 flex items-center justify-between text-xl">
        <NavLink to="/" className="font-bold cursor-pointer text-2xl">#VANLIFE</NavLink>
        <div className="flex font-semibold items-center cursor-pointer gap-x-10">
          <NavLink to="host" className="hover:underline">  Host</NavLink>
          <NavLink to="about" className="hover:underline">  About</NavLink>
          <NavLink to="vans" className="hover:underline">Vans</NavLink>
          <NavLink to="login" className="hover:underline"><BiUserCircle className="text-3xl mt-2" /></NavLink>
          <button onClick={fekeLogout} className="hover:underline">Logout</button>
        </div>
      </div>
    </section>
  );
}
