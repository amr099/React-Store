import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import { Suspense, useState } from "react";
import Footer from "src/Components/Footer";
import Search from "./Components/Nav/Search";

function App() {
    const [searchbar, setSearchbar] = useState(false);

    return (
        <>
            <div className='relative min-h-screen'>
                <Nav searchbar={searchbar} setSearchbar={setSearchbar} />
                <Search searchbar={searchbar} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

export default App;
