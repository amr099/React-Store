import React from "react";
import { Breadcrumbs as UIBreadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
export default function Breadcrumbs() {
    const location = useLocation();

    return (
        <UIBreadcrumbs className='py-4'>
            <Link to={`/`} className='opacity-60'>
                home
            </Link>
            {location?.pathname
                ?.split("/")
                ?.filter((path) => path != "")
                ?.map((path) => (
                    <Link to={`/${path}`} className='opacity-60'>
                        {path}
                    </Link>
                ))}
        </UIBreadcrumbs>
    );
}
