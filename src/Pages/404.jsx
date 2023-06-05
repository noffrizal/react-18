import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return(
        <div className="min-h-screen items-center flex justify-center flex-col">
            <h1 className="text-3xl font-bold">Oopss!!</h1>
            <p className="my-5 text-xl">Sorry , an unexpected Error Occured</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage