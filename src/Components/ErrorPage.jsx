import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div class='flex flex-col justify-center mx-auto w-[50%] h-[100vh]'>
            <h3 class='text-7xl font-semibold text-gray-900 mb-4'>
                {error?.statusCode}
            </h3>
            <h4 class='font-heading text-4xl font-bold text-gray-900 mb-6'>
                Oops! Unexpected error accurred.
            </h4>
            <p class='text-xl font-semibold text-gray-500 mb-14'>
                {error?.statusText || error?.message}
            </p>
            <Link
                to='/'
                class='relative group self-start py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden'
            >
                Take me home
            </Link>
        </div>
    );
}
