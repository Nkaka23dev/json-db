import { useEffect } from "react"

export default function App() {
  
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => console.log(data.vans[0])).catch((e) => console.log(e))
  }, [])
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}