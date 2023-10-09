import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  // const navLinks = [
  //   { title: "Home", link: "/" },
  //   { title: "About", link: "/about" },
  //   { title: "Sign", link: "/sign-in" },
  //   { title: "Profile", link: "/profile" },
  // ];

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
            toggle
              ? `flex absolute right-0 top-full flex-col bg-slate-200 px-6 pb-4 rounded-b-md `
              : `hidden`
          } sm:relative sm:flex sm:flex-row sm:justify-end sm:items-center text-slate-950 sm:pb-0 sm:px-0`}
        >
          <ul className="flex gap-4 sm:flex-row flex-col sm:p-0 p-6">
            <Link to="/">
              <li className=" text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className=" text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className=" text-slate-700 hover:underline"> Sign in</li>
              )}
            </Link>
          </ul>
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
