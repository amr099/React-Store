import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <section class='relative overflow-hidden'>
            <img
                class='hidden lg:block absolute top-0 right-0 w-1/2 h-full'
                src='saturn-assets/images/http-codes/image-yellow.png'
                alt=''
            />
            <div class='relative container px-4 mx-auto'>
                <img
                    class='absolute top-0 left-0 ml-20 h-142'
                    src='saturn-assets/images/http-codes/blue-orange-double-light.png'
                    alt=''
                />
                <div class='relative py-20 md:py-24 lg:py-44 max-w-sm mx-auto lg:mx-0'>
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
                        class='relative group inline-block py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden'
                    >
                        <div class='absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500'></div>
                        Take me home
                    </Link>
                </div>
            </div>
            <img
                class='lg:hidden w-full h-135 md:h-166 object-cover object-bottom'
                src='saturn-assets/images/http-codes/image-yellow.png'
                alt=''
            />
        </section>
    );
}
