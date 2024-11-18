import '../App.css';
import appLogo from '../assets/alertifyLogo.svg';
import dropdownIcon from '../assets/dorpdownIcon.svg';
import navmenu from '../assets/navmenu.svg';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white fixed w-full z-20 top-0 start-0 border-b border-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src={appLogo} className="h-8" alt="Flowbite Logo"/>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white hover:bg-white hover:text-blue-600 rounded-3xl py-3 px-5 border border-white gap-3 mx-5">
            Login or Signup
          </button>
          <button className="bg-white text-black hover:bg-black hover:text-white rounded-3xl p-3">
            Get a Demo
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm lg:hidden">
            <img src={navmenu} alt="navmenu"/>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-row">
            <li>
              <a href="#" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-12 mx-10 py-3">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-12 mx-10 py-3">
                Pricing
              </a>
            </li>
            <li className="group">
              <a href="#" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-3 mx-10 pt-1 pb-3 flex items-center">
                Resources
                <span className="ml-2 transition-transform duration-200 transform group-hover:rotate-180">
                  <img src={dropdownIcon} alt="dropdownIcon"/>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
