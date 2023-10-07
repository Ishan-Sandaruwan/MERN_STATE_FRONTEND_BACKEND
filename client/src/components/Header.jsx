import react ,{ useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Sign", link: "/sign-in" },
  ];

  return (
    <header className="bg-slate-200">
      <div className="flex justify-between mx-auto max-w-7xl items-center p-3  relative font-Poppins">
        <h1 className="font-bold text-base sm:text-xl text-slate-700">
          <span className="text-slate-500">LaBeTa</span> Estate
        </h1>
        <form className="flex items-center bg-slate-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent focus:outline-none w-40 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <div
          className="sm:hidden text-2xl text-slate-700 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose /> : <FiMenu />}
        </div>
        <div
          className={`${
            toggle ? `flex absolute right-0 top-full flex-col bg-slate-200 px-6 pb-4 rounded-b-md ` : `hidden`
          } sm:relative sm:flex sm:flex-row sm:justify-end sm:items-center text-slate-950 sm:pb-0 sm:px-0`}
        >
          {navLinks.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              onClick={() => setActive(link.title)}
            >
              <button
                className={`cursor-pointer hover:underline ${
                  active === link.title && "text-slate-600 font-bold"
                } ${index === navLinks.length - 1 ? `mr-0` : `sm:mr-4`} p-2 sm:p-0`}
              >
                {link.title}
              </button>
            </Link>
          ))}
        </div>
        {/* <div
          className={`${
            toggle ? `flex` : `hidden`
          } sm:hidden absolute right-0 top-full flex-col bg-slate-200 px-6 pb-4 rounded-b-md`}
        >
          {navLinks.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              onClick={() => setActive(link.title)}
            >
              <button className={`py-2 hover:underline`}>{link.title}</button>
            </Link>
          ))}
        </div> */}
      </div>
    </header>
  );
}
