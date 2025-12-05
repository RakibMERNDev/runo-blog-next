"use client";
import { Dispatch, SetStateAction } from "react";
import { MdMenu, MdCancel } from "react-icons/md";

const MobileMenuToggle = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {isOpen ? (
        <MdCancel
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <MdMenu
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
    </>
  );
};

export default MobileMenuToggle;
