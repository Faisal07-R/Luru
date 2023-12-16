import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { Home, Explore, Login, MerchantDetail, MerchantList, ProductDetail, ProductList, Register, UserProfile, NotFound } from "../views";
import ErrorPage from "../components/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "explores",
        element: <Explore />,
      },
      {
        path: "users/:id",
        element: <UserProfile />,
      },
      {
        path: "merchantdetail/:id",
        element: <MerchantDetail />,
      },
      {
        path: "productdetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
// export default function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth/login" element={<Login />} />
//         <Route path="/auth/register" element={<Register />} />
//         <Route path="/explores" element={<Explore />} />
//         <Route path="/merchants" element={<MerchantList />} />
//         <Route path="/merchants/:id" element={<MerchantDetail />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/users/:id" element={<UserProfile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }
