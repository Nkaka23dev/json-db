import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import { QueryClient, QueryClientProvider } from 'react-query';
import VanDetails from "./pages/VanDetails";
import PageLayout from "./pages/layouts/PageLayout";
import HostLayout from "./pages/layouts/HostLayout";
import HostVans from "./pages/hostpages/HostVans";
import Dashboard from "./pages/hostpages/Dashboard";
import Reviews from "./pages/hostpages/Reviews";
import Income from "./pages/hostpages/Income";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id/" element={<VanDetails />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
      </Route>
    </Route>
  )
)
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}