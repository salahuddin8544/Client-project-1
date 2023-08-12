import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { HiLogin, HiMenu, HiOutlineX, HiShoppingCart } from "react-icons/hi";
import { FaSignOutAlt, FaSignInAlt, FaHome, FaRProject, FaBloggerB, FaCloudDownloadAlt, FaQuestionCircle, FaUserFriends } from "react-icons/fa";
import logo from '../../assets/logo/logo-v.jpg'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const lists = [
    {
      name:"3D Animation",
      link:'services/animation'
    },
    {
      name:"CGI",
      link:'services/cgi'
    }
  ]
  
  return (
    <nav className='p-5 shadow-lg bg-black border-b-2  md:flex md:items-center md:justify-between sticky top-0 z-10'> 
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-4xl text-gray-400 font-[poppins] cursor-pointer'>
          <img src={logo} className='w-11 rounded-full' alt="" />
        </Link>
        <div onClick={() => setOpen(!open)} name="menu" className='md:hidden  text-black text-3xl cursor-pointer '>
          {
            open ? <HiOutlineX></HiOutlineX>
              :
              <HiMenu></HiMenu>
          }

        </div>

      </div>
      <ul id='list-item' className={`md:flex  w-full absolute left-0 items-center transition-all top-20 ease-in md:static md:w-auto duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>

        <li className='mx-4  my-6 md:my-0'>
          <Link to={'/'} className='text-white flex items-center hover:text-gray'>
          <FaHome className='me-1'></FaHome>
            Home
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0 w-full relative'>
          <Link to={'/services'} onMouseEnter={()=> setIsOpen((prev)=> !prev)} className='text-white flex items-center hover:text-gray'>
          <FaRProject className='me-1'></FaRProject>
            Services
          {
            isOpen && <div className='w-full absolute top-6'>{lists.map((list,i)=>(
              <h3 className='bg-white border-b-2' style={{width:'115px'}} key={i}><Link to={list.link} className=''  >{list.name}</Link></h3>
            ))}</div>
          }
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/blog'} className='text-white flex items-center hover:text-gray'>
          <FaBloggerB className='me-1'></FaBloggerB>
            Blog
          </Link>
        </li>
        
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/upcoming'} className='text-white flex items-center hover:text-gray'>
            <FaQuestionCircle className='me-1'></FaQuestionCircle>
            Contact
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/about'} className='text-white flex items-center hover:text-gray'>
            <FaUserFriends className='me-1'></FaUserFriends>
            About
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;