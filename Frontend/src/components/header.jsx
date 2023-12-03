import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Consultant",
    href: "/doctors",
  },
  {
    name: "Subcription",
    href: "/subscription",
  },
  {
    name: "about us",
    href: "/about",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link
            to="/"
            className="font-bold flex items-center space-x-2 cursor-pointer"
          >
            <img src="ods.png" alt="Logo" className="h-10 cursor-pointer" />
            <h1 className="text-xl md:text-3xl font-bold">ODS</h1>
          </Link>
        </div>

        {/* Responsive Navigation */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <X
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
              aria-hidden="true"
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
              aria-hidden="true"
            />
          )}
        </div>

        <nav className="hidden lg:flex px-3 py-2 rounded-full">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-semibold cursor-pointer px-2 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src="ods.png" alt="Logo" className="h-8" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="font-semibold cursor-pointer px-2 hover:bg-white hover:rounded-full hover:py-[0.3rem]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;