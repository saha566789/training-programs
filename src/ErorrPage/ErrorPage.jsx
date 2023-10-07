import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-60">
    <h1 className="font-bold text-4xl">Oops!</h1>
 <p className="mt-4">Sorry, an unexpected error has occurred.</p>
 <p>
   <i>{error.statusText || error.message}</i>
 </p>

 </div>

  );
}