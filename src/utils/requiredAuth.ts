import { redirect } from "react-router-dom";

export async function requiredAuth(request: any){
    const pathname  = new URL(request.url).pathname;
    const isloggedIn = JSON.parse(localStorage.getItem("userloggedIn") as string) ;
    if(!isloggedIn){
        return redirect(`/login?message=you must login first.&redirectTo${pathname}`);
    }
}