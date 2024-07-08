import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  // Extract first letter of the user's name
  const userInitial = user && user.user && user.user.name ? user.user.name.charAt(0).toUpperCase() : '';
  

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          {/* Remaining code for the dialog */}
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <div className="ml-4 flex lg:ml-0">
              <Link to={'/'} className='flex'>
                <div className="flex">
                  <h1 className='text-2xl font-bold text-black  px-2 py-1 rounded'>Fashion Forest</h1>
                </div>
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to={'/allproducts'} className="text-sm font-medium text-gray-700">
                  All Products
                </Link>
                {user ? <Link to={'/order'} className="text-sm font-medium text-gray-700">
                  Order
                </Link> : <Link to={'/signup'} className="text-sm font-medium text-gray-700">
                    Signup
                  </Link>}
                {user?.user?.email === 'smitlodhiya1110@gmail.com ' ?
                  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700">
                    Admin
                  </Link> : ""}
                {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer">
                  Logout
                </a> : ""}
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700">
                  <div className="inline-block w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-700">{userInitial}</span>
                  </div>
                </a>
              </div>

              <div className="flex lg:ml-6">
                <button onClick={toggleMode}>
                  {mode === 'light' ?
                    (<FiSun className='' size={30} />
                    ) : 'dark' ?
                      (<BsFillCloudSunFill size={30} />
                      ) : ''}
                </button>
              </div>

              <div className="ml-4 flow-root lg:ml-6">
                <Link to={'/cart'} className="group -m-2 flex items-center p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <span className="ml-2 text-sm font-medium text-gray-700 group-">{cartItems.length}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
