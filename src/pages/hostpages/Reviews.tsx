import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <section className='mt-40 px-5'>
    <div className="max-w-6xl mx-auto">
        <div>
            <p className="text-3xl font-semibold">Your review</p>
        </div>
        <div className="w-full">
            <img src="/review2.png" className="object-cover mx-auto h-full w-[35rem] object-center aspect-video" />
        </div>
        <div className="text-lg p-4 py-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam ipsum blanditiis totam dignissimos amet. Commodi facere corporis qui, saepe adipisci voluptate provident, cum temporibus maxime cumque excepturi labore consequuntur delectus nisi, dolorum atque perferendis consequatur mollitia suscipit ipsa tempore sunt? Debitis consequuntur tempore ratione a iure, provident facere impedit.
        </div>
    </div>
</section>
  )
}
