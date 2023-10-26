import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "src/features/products/productsApiSlice";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { data } = useGetCategoriesQuery();

  return (
    <footer className="relative w-full mt-10 bg-sky-100 py-5">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex-col justify-center text-center md:text-left md:flex md:flex-row flex-wrap gap-4  md:justify-between">
          <Typography variant="h5" className="mb-6 text-primary">
            React Store
          </Typography>
          <div className="md:w-[70%] flex flex-wrap gap-4">
            {data?.map((category) => (
              <Link
                key={category}
                to={`/${category}`}
                className="hover:text-primary mr-3 text-start lg:w-[20%]"
              >
                <span
                  color="gray"
                  className="hover:text-primary font-bold whitespace-nowrap transition-colors text-xs md:text-sm"
                >
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a
              href="https://amrahmad.netlify.app/"
              className="font-bold hover:text-primary"
            >
              Amr Ahmad
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://github.com/amr099"
              className="opacity-80 transition-opacity hover:opacity-100 hover:text-2xl"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/amr-ahmad"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
