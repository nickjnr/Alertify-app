import '../App.css';

import logo from '../assets/logo.svg';
import socialmedia1 from '../assets/socialmedia1.svg';
import socialmedia2 from '../assets/socialmedia2.svg';
import socialmedia3 from '../assets/socialmedia3.svg';
import socialmedia4 from '../assets/socialmedia4.svg';

import forwardicon from '../assets/forwardicon.png';

const Footer = () => {
  return (
    <footer className="footer_bg text-white py-10 px-20 fontRubik">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-xl font-normal">
        <div>
            <div className='flex flex-row gap-2'>
            <img src={logo} alt="logo" />
            <h2 className=" text-3xl font-bold py-10 px-5">Alertify</h2>
            </div>
          <p className="mt-4">
            Sorem ipsum dolor sit amet consectetur. Conse laoresey condimentum sit vitae.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href='https://www.facebook.com/' className='transition-transform transform hover:-translate-y-4 '><img src={socialmedia1} alt="socialmedia1" /></a>
            <a href='https://www.facebook.com/' className='transition-transform transform hover:-translate-y-4 '><img src={socialmedia2} alt="socialmedia2" /></a>
            <a href='https://www.facebook.com/' className='transition-transform transform hover:-translate-y-4 py-3'><img src={socialmedia3} alt="socialmedia3" /></a>
            <a href='https://www.facebook.com/' className='transition-transform transform hover:-translate-y-4 py-3'><img src={socialmedia4} alt="socialmedia4" /></a>
          </div>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10">Products</h2>
          <ul className="mt-4 space-y-8">
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Mobile Push Notifications </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Web Push Notifications </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Email Notifications </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Integration Directory </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  SMS Notifications </p></li> </a>
          </ul>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10 px-5">Developers</h2>
          <ul className="mt-4 space-y-8">
            <a href='#'className='text-gray-500'><li className='group flex flex-row'>  <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-white"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Documentation </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  GitHub </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Code Sample </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Developers Community </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Status </p></li> </a>
          </ul>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10 px-5">Company</h2>
          <ul className="mt-4 space-y-8">
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  About Us </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Why Alertify </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Contact Sales </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Customer Referral Program </p></li> </a>
           <a href='#'className='text-gray-500'> <li className='group flex flex-row py-2'> <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"><img src={forwardicon} alt="ForwardIcon" className='w-5 h-5'/></span> <p className='transition-transform transform hover:translate-x-4 hover:text-white'>  Newsroom </p></li> </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
