import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="bg-[#FFF7ED] px-5 fixed w-full left-0 right-0 top-0 ">
      <div className="max-w-6xl mx-auto py-8 flex items-center justify-between text-2xl">
        <Link to="/" className="font-bold cursor-pointer text-3xl">#VANALIFE</Link>
        <div className="flex font-semibold items-center cursor-pointer gap-10">
          <Link to="/about" className="hover:underline">  About</Link>
          <Link to="/" className="hover:underline">Vans</Link>
        </div>
      </div>
    </section>
  );
}
