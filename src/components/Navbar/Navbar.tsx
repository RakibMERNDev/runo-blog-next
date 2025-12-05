import { LeagueSpartanFont, RobotoFont } from "@/assets/fonts";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaSearch } from "react-icons/fa";
import MobileMenuToggle from "./MobileMenuToggle";
import { Dispatch, SetStateAction } from "react";


const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const navMenu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Articles", link: "/articles" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socialLogos = [
    { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
    { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
    { icon: <FaYoutube size={24} />, link: "https://youtube.com" },
  ];

  return (
    <nav className="flex justify-between items-center bg-black/20 px-5 md:px-16 py-7 text-white">
      {/* Logo/Title text */}
      <h2 className={`${LeagueSpartanFont.className} font-bold text-xl`}>
        Runo
      </h2>
      <div className="flex items-center justify-around">
        {/* nav links */}
        <ul
          className={`hidden md:flex gap-6 ${RobotoFont.className} font-medium`}
        >
          {navMenu.map((item) => (
            <li
              key={item.name}
              className="hover:underline hover:decoration-[#D4A373] underline-offset-8 cursor-pointer transition-all duration-300"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* logos */}
        <div className="hidden md:flex border-r-2 h-6 w-px border-white mx-3" />
        <div className="hidden md:flex gap-3">
          {socialLogos.map((logo) => (
            <Link
              key={logo.link}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-400 transition-colors duration-300"
            >
              {logo.icon}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex border-r-2 h-6 w-px border-white mx-3" />
        {/* search button */}
        <button
          type="button"
          aria-label="Search"
          className="hover:text-gray-400 cursor-pointer transition-colors duration-300 bg-transparent border-none p-0"
        >
          <FaSearch size={24} />
        </button>
      </div>
      {/* mobile menu */}
      <div>
        <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
