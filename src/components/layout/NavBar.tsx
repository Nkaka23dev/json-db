

export default function NavBar() {
  return (
    <section className="bg-[#FFF7ED] px-5 fixed w-full left-0 right-0 top-0 ">
      <ul className="max-w-6xl mx-auto py-8 flex items-center justify-between text-2xl">
        <li  className="font-bold cursor-pointer text-3xl">#VANALIFE</li>
        <ul className="flex font-semibold items-center cursor-pointer gap-10">
        <li className="hover:underline">Host</li>
          <li className="hover:underline">About</li>
          <li  className="hover:underline">Vans</li>
        </ul>
      </ul>
    </section>
  );
}
