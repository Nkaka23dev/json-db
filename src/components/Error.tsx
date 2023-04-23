import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError() as any;
    return (
        <section>
            <div className="py-60 grid max-w-3xl mx-auto">
                <h1 className="text-4xl max-w-lg font-semibold m-auto text-center
        ">Error: {error.message}</h1>
                <pre className="text-xl max-w-lg font-semibold m-auto text-center">Error Status:{error.status}</pre>
                <pre className="text-xl max-w-lg font-semibold m-auto text-center">{error.statusText}</pre>
            </div>
        </section>
    )
}
