import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError() as any;
    return (
        <section className="h-screen grid">
            <h1 className="m-auto">{error} </h1>
        </section>
    )
}
