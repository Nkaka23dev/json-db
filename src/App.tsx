import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import { QueryClient, QueryClientProvider } from 'react-query';
import VanDetails, { loader as vanDeatialsLoader } from "./pages/vans/VanDetails";
import PageLayout from "./pages/layouts/PageLayout";
import HostLayout from "./pages/layouts/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/hostpages/hostVans/HostVans";
import Dashboard from "./pages/hostpages/Dashboard";
import Reviews from "./pages/hostpages/Reviews";
import Income from "./pages/hostpages/Income";
import HostVanDetails, { loader as hosVanDetailsLoader } from "./pages/hostpages/hostVans/vansDetails/HostVanDetails";
import VansDetailsInfo from "./pages/hostpages/hostVans/vansDetails/VansDetailsInfo";
import VansDetailsPricing from "./pages/hostpages/hostVans/vansDetails/VansDetailsPricing";
import VansDetailsPhoto from "./pages/hostpages/hostVans/vansDetails/VansDetailsPhoto";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loader as loginLoader, action as loginAction } from "./pages/auth/Login";
import { requiredAuth } from "./utils/requiredAuth";
import './server.js'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route loader={vansLoader}
        errorElement={<Error />}
        path="vans"
        element={<Vans />} />

      <Route path="vans/:id"
        errorElement={<Error />}
        loader={vanDeatialsLoader}
        element={<VanDetails />} />
      {/* host vans details*/}
      <Route path="host" element={<HostLayout />} >
        <Route
          index element={<Dashboard />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="reviews" element={<Reviews />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="income" element={<Income />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          errorElement={<Error />}
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          errorElement={<Error />}
          loader={hosVanDetailsLoader}
        >
          <Route
            index
            element={<VansDetailsInfo />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="pricing"
            element={<VansDetailsPricing />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="photo"
            element={<VansDetailsPhoto />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
        </Route>
      </Route>
      {/* end of host van details */}
      <Route path="*" element={<NotFound />} />
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