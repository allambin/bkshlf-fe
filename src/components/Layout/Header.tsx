import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

interface HeaderProps {
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleLogout }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Library</a>
        { !isLoggedIn && <a href="/register" className="text-sm font-semibold leading-6 text-gray-900">Register</a>}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {
          isLoggedIn ?
          <button  onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900">Logout <span aria-hidden="true">&rarr;</span></button> :
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      </div>
    </nav>
      </header>
    </div>
  );
}

export default Header;