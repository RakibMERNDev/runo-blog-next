"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const NavbarWrapper = () => {

const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
         <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>   
        </>
    );
};

export default NavbarWrapper;