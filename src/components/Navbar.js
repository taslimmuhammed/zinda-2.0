import { useState, useEffect } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { close, zenda, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // className="w-full flex py-6 justify-between items-center navbar fixed scroll:bg-white "
    <nav className={`w-full flex py-6 justify-between items-center navbar z-30 fixed ${scrolled ? 'bg-black shadow' : 'bg-transparent'} ${styles.paddingX}`}>
      {/* <img src={zenda} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <div className="font-sans text-gradient uppercase text-2xl font-bold">ZINDA AI</div>
      <ul className="list-none sm:flex hidden justify-between items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-xl ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="mx-3"><ConnectWallet /> </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-mono font-bold shadow-md cursor-pointer text-[24px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li><ConnectWallet /> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
