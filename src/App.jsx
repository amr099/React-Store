import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import { Suspense } from "react";
import Footer from "src/Components/Footer";

function App() {
    return (
        <>
            <div className='relative min-h-screen'>
                <Nav />
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

export default App;
