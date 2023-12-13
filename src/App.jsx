import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
// import Navigation from './components/Navigation'
// import AppRoutes, { router } from './routes/AppRoutes'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <RouterProvider router={router} />
      {/* <AppRoutes /> */}
    </>
  );
}

export default App;
