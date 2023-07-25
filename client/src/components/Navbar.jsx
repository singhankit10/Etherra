import { useState, useContext } from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png'
import { TransactionContext } from "../context/TransactionContext";
import Learning from "../components/Learning";
import Services from "../components/Services";

const NavbarItem = ({ title, classProps, link, external }) => {
  const handleItemClick = () => {
    if (external) {
      window.open(link, "_blank");
    } else {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <li className={`mx-4 cursor-pointer ${classProps}`} onClick={handleItemClick}>
      {title}
    </li>
  );
};



const Navbar = () => {

    const { connectWallet, currentAccount, disconnectWallet } = useContext(TransactionContext);

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-intial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer' />

            </div>

            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <NavbarItem title="Github" classProps="..." link="https://github.com/singhankit10/Etherra" external />
                <NavbarItem title="Learning" classProps="..." link="#learning" />
                <NavbarItem title="About Us" classProps="..." link="#services" />

                {!currentAccount && (
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    <button type="button" onClick={connectWallet}>Login</button>     
                    
                </li>
                )}

                {currentAccount && (
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    <button type="button" onClick={disconnectWallet}>Logout</button>     
                </li>
                )}
            </ul>

            <div className='flex relative'>
                    {toggleMenu 
                    ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                    }

                    {toggleMenu && (
                        <ul
                         className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                        >
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>
                            {["Github", "Learning", "About Us"].map((item, index) => (
                                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg' />
                            ))}
                        </ul>
                    )
                    }
            </div>
        </nav>
    );
}

export default Navbar;