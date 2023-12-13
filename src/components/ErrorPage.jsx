import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Oh, Halaman tidak ditemukan!!!</div>;
}

export default ErrorPage;
