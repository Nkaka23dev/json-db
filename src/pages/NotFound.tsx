import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section>
    <div className="py-60 grid max-w-3xl mx-auto">
        <h1 className="text-4xl max-w-lg font-semibold m-auto text-center
        ">Sorry the page you are looking for not found!</h1>
        <Link className="mx-auto w-full py-3 text-center  text-lg mt-3 rounded-lg bg-black text-white" to="/">Back Home</Link>
    </div>
</section>
  )
}
