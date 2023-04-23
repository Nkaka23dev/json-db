import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="bg-[#FFF7ED] px-5 fixed w-full left-0 right-0 top-0">
      <div className="max-w-6xl mx-auto py-6 flex items-center justify-between text-xl">
        <NavLink to="/" className="font-bold cursor-pointer text-2xl">#VANLIFE</NavLink>
        <div className="flex font-semibold items-center cursor-pointer gap-x-10">
          <NavLink to="host" className="hover:underline">  Host</NavLink>
          <NavLink to="about" className="hover:underline">  About</NavLink>
          <NavLink to="vans" className="hover:underline">Vans</NavLink>
        </div>
      </div>
    </section>
  );
}
