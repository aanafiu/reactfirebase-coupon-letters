import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Provider/userProvider";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { user, signOutUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const name = user?.displayName?.includes("-")
    ? user.displayName.split("-")[0]
    : user?.displayName?.split(" ")[0];

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-[95%] mx-auto py-4 flex items-center justify-between relative">
      {/* Logo */}
      <Link to="/" className="w-[80%]">
        <img src={logo} alt="Logo" className="h-[80px] w-fit" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full justify-center items-center gap-4 font-semibold px-10">
       
        <Link to="/home" className="btn-grad text-navText p-2">
          Home
        </Link>
        <Link to="/brands" className="btn-grad text-navText p-2">
          Brands
        </Link>
        {user && (
          <Link to="/myprofile" className="whitespace-nowrap btn-grad text-navText p-2">
            My Profile
          </Link>
        )}
        <Link to="/about" className="whitespace-nowrap btn-grad text-navText p-2">
          About Dev
        </Link>
      </div>

       {/* Hamburger Menu (Mobile) */}
       <div className="lg:hidden w-[80%] flex items-center justify-end px-10">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* User Profile or Login/Registration */}
      <div className="hidden gap-6 md:flex w-[100%] justify-end">
         {user && (
          <Link to="/myprofile" className="p-2 btn-grad whitespace-normal flex flex-col items-center justify-center">
            Welcome, <span className="text-purple-500 text-lg font-bold">{name}</span>
          </Link>
        )}
        {user ? (
          <div
            onClick={signOutUser}
            className="btn-grad w-[250px] flex justify-center items-center gap-3 border-2 border-purple-500 p-3 rounded-badge hover:border-navText hover:text-purple-500 hover:bg-white cursor-pointer"
          >
            <div className="whitespace-nowrap">
              <img className="w-[50px] h-[50px] rounded-badge" src={user?.photoURL} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>{user.email}</h1>
              <button className="text-lg font-bold">Log Out</button>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link to="/user/login" className="btn-grad btn btn-ghost font-bold hover:text-white">
              Login
            </Link>
            <Link to="/user/register" className="btn-grad btn btn-ghost font-bold hover:text-white">
              Registration
            </Link>
          </div>
        )}
      </div>

     

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute w-full top-full right-0 w-[80%] bg-navBg flex flex-col items-start gap-4 p-5 rounded-badge shadow-lg lg:hidden">
          {user && (
            <Link
              to="/myprofile"
              className="p-2 btn-grad w-full"
              onClick={() => setMenuOpen(false)}
            >
              Welcome, <span className="text-purple-500 text-lg font-bold">{name}</span>
            </Link>
          )}
          <Link to="/home" className="btn-grad text-navText p-2 w-full" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/brands"
            className="btn-grad text-navText p-2 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Brands
          </Link>
          {user && (
            <Link
              to="/myprofile"
              className="btn-grad text-navText p-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </Link>
          )}
          <Link
            to="/about"
            className="btn-grad text-navText p-2 w-full"
            onClick={() => setMenuOpen(false)}
          >
            About Dev
          </Link>

          {user ? (
            <div
            onClick={signOutUser}
            className="btn-grad w-full justify-center items-center flex md:hidden gap-3 border-2 border-purple-500 p-3 rounded-badge hover:border-navText hover:text-purple-500 hover:bg-white cursor-pointer"
          >
            <div>
              <img className="w-[50px] h-[50px] rounded-badge" src={user?.photoURL} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>{user.email}</h1>
              <button className="text-lg font-bold">Log Out</button>
            </div>
          </div>
          ) : (
            <div className="flex flex-col gap-3 w-full md:hidden">
              <Link
                to="/user/login"
                className="btn-grad btn btn-ghost font-bold w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/user/register"
                className="btn-grad btn btn-ghost font-bold w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
