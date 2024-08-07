import { useState } from "react";
import { Link } from "react-router-dom";
const navbarItems = [
  {
    name: "Home",
    path: "/#",
  },
  {
    name: "Explore",
    path: "/#features",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

const Header = () => {
  const [isActive, setActive] = useState("Home");
  const navItems = navbarItems.map(({ name, path }) => (
    <li
      key={path}
      onClick={() => {
        setActive(name);
        window.scrollTo(0, 0);
      }}
    >
      <Link
        to={path}
        className={`block py-2 px-3 ${
          isActive === name ? "text-orange-600" : "text-gray-800"
        }  hover:text-orange-600`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  ));

  return (
    <nav className="nav">
      <div className="max-w-screen-2xl flex flex-wrap justify-between items-center p-4 mx-auto">
        <div className="logo flex flex-col justify-center align-center">
          <a href="/#">
            <img className="h-[100px]" src="/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium antialiased flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navItems}
          </ul>
        </div>
        <a
          href="/#planner"
          type="button"
          className="text-gray-100 bg-orange-600 font-medium text-sm rounded-lg py-2.5 px-5"
        >
          Make your Plan
        </a>
      </div>
    </nav>
  );
};

export default Header;
