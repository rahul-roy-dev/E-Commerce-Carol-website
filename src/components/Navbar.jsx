import React from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' instead of 'react-router'

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { title: 'Jewelry & Accessories', path: '/' },
    { title: 'Clothing & Shoes', path: '/' },
    { title: 'Home & Living', path: '/' },
    { title: 'Wedding & Party', path: '/' },
    { title: 'Toys & Entertainment', path: '/' },
    { title: 'Art & Collectibles', path: '/' },
    { title: 'Craft Supplies & Tools', path: '/' },
  ];

  return (
    <header className='max-w-screen-3xl xl:px-28 px-4 absolute top-0 right-0 left-0 '>
      <nav className='flex justify-between w-full  items-center  md:py-0 pt-4 pb-3'>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />

        {/* logo */}
        <a href='/'>
          <img src={logo} alt='' className='w-29 h-28' />
        </a>

        {/* account and shopping btn */}
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
          <a href='/' className='flex items-center gap-2'>
            <FaUser /> Account
          </a>
          <a href='/' className='flex items-center gap-2'>
            <FaShoppingBag /> Shopping
          </a>
        </div>

        {/* navbar for sm device */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />
            }
          </button>
        </div>
      </nav>

      <hr />

      {/* Category items */}
      <div className='pt-4'>
        <ul className='lg:flex items-center  justify-between text-Black hidden'>
          {navItems.map(({ title, path }) => (
            <li key={title} className='hover:text-orange-500'>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
      <ul className={`bg-Black text-white px-4 py-2 rounded-lg mx-4 ${isMenuOpen ? '' : 'hidden'}`}>
          {navItems.map(({ title, path }) => (
            <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
