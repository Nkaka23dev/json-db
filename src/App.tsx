import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import { QueryClient, QueryClientProvider } from 'react-query';
import VanDetails from "./pages/vans/VanDetails";
import PageLayout from "./pages/layouts/PageLayout";
import HostLayout from "./pages/layouts/HostLayout";
import HostVans from "./pages/hostpages/hostVans/HostVans";
import Dashboard from "./pages/hostpages/Dashboard";
import Reviews from "./pages/hostpages/Reviews";
import Income from "./pages/hostpages/Income";
import HostVanDetails from "./pages/hostpages/hostVans/vansDetails/HostVanDetails";
import VansDetailsInfo from "./pages/hostpages/hostVans/vansDetails/VansDetailsInfo";
import VansDetailsPricing from "./pages/hostpages/hostVans/vansDetails/VansDetailsPricing";
import VansDetailsPhoto from "./pages/hostpages/hostVans/vansDetails/VansDetailsPhoto";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetails />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<VansDetailsInfo />} />
          <Route path="pricing" element={<VansDetailsPricing />} />
          <Route path="photo" element={<VansDetailsPhoto />} />
        </Route>
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