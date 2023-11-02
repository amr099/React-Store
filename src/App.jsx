import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "src/Components/Footer";
import Search from "./Components/Nav/Search";
import Nav from "./Components/Nav/Nav";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  const [searchbar, setSearchbar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden">
        <Nav
          searchbar={searchbar}
          setSearchbar={setSearchbar}
          scroll={scroll}
        />
        <Search
          searchbar={searchbar}
          scroll={scroll}
          setSearchbar={setSearchbar}
        />
        <Breadcrumbs />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
