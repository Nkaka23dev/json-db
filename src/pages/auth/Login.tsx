import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation
} from "react-router-dom";
import { loginUser } from "../../api";

export const loader = ({ request }: any) => {
  return new URL(request.url).searchParams.get("message");
}
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  try {
    await loginUser({ email, password });
    localStorage.setItem("userloggedIn", JSON.stringify(true));
    return redirect(pathname)
  } catch (err: any) {
    return err.message
  }
}
export default function Login() {
  const error = useActionData() as string;
  const message = useLoaderData() as string;
  const navigation = useNavigation();
  return (
    <section className="px-5 pt-16 pb-40 ">
      <div className="max-w-xl mx-auto space-y-10">
        <h1 className="text-3xl text-center">Sign In Into Your Account</h1>
        {message && <h1 className="text-center text-red-500 text-xl capitalize font-semibold py-3">{message}</h1>}
        {error && <h1 className="text-center text-red-500 text-xl capitalize font-semibold py-3">{error}</h1>}
        <Form method="post" className="space-y-6" replace >
          <input type="text" placeholder="Email Address..." className="py-3 w-full px-5 border border-gray-500 outline-none" name="email" />
          <input type="password" placeholder="Password" className="py-3 w-full px-5 border border-gray-500 outline-none" name="password" />
          <button type="submit" disabled={navigation.state === "submitting"} className="w-full hover:bg-[#d66441] duration-300 bg-[#E17654] py-3 px-10 text-white text-xl rounded-md">
            {navigation.state === "submitting" ? "Submitting" : "Log In"}
          </button>
        </Form>
      </div>
    </section>
  )
}
