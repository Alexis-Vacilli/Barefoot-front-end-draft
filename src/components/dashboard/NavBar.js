import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-span-full  w-full  col-start-3  col-end-14 shadow-xl  ">
            <header className="flex justify-between h-16 align-center items-center font-mainFont relative   ">
              <nav className="flex  w-full justify-between ">
                <div className="cursor-pointer">
                  <Link to="/" className="pl-1 md:pl-8">
                    Home
                  </Link>
                </div>
      
                <div className="flex flex-row">
                  <div className="flex flex-row w-2/4 ">
                    <div className="profile flex-row flex mr-2 md:mr-7">
                      <div className="flex-row flex relative">
                        <img
                          alt="profile"
                        />
                        <span>
                        </span>
                        <span className="text-sm mr-1 flex   w-16">
                          <span>
                          </span>
                          <span>
                          </span>
      
                          <AiOutlineDown
                          />
                        </span>
                        <div>
                          <div
                            className="dropdown flex bg-white  shadow-xl flex-col absolute right-20 z-30 top-12 "
                          >
                            <div className="flex py-2 px-4  cursor-pointer hover:bg-gray-500 hover:text-white">
                              <div className="drop-item">
                                <FaUserEdit className="mt-1" />
                              </div>
                              <div className="drop-item">
                                <Link to="/dashboard/profile/">
                                  <span className="text-xs ml-2"> Profile</span>
                                </Link>
                              </div>
                            </div>
                            <div
                              className="logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white "
                            >
                              <div className="drop-item">
                                <IoLogOutOutline className="mt-1" />
                              </div>
                              <div className="drop-item">
                                <span className="l text-xs ml-2 cursor-pointer">
                                  Logout
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span>
                              <FiGlobe
                              />
                              <span>
                              </span>
                            </span>
                            <span>
                              English
                            </span>
                            <span>
                            </span>
                            <span>
                              <AiOutlineDown className=" text-lg cursor-pointer pt-1 mt-0.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
         );
    }
}
 
export default NavBar;