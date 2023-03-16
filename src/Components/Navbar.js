import { React, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../context/user";

const Navbar = () => {
  const { user } = useContext(UserContext);

  // console.log(user);

  const stl = {
    size: "relative w-full h-[24px] flex justify-end items-center md:h-[72px] md:justify-around",
    shapes:
      "w-[51px] h-[10px] flex justify-between items-center mr-[12px] object-contain md:hidden",
    logo: "hidden md:block h-[24px] w-[162px] object-contain",
    search:
      "hidden lg:flex w-[360px] h-[42px] bg-btn1 rounded-[21px] text-[#7A7A7A] overflow-hidden",
    searchIcon: "w-[15%] h-full flex justify-center items-center",
    input: "w-[85%] h-full indent-[10px] flex items-center",
    createAccount: "hidden md:flex items-center font-bold w-fit h-[21px]",
  };
  return (
    <div className={stl.size}>
      <div className={stl.logo}>
        <img src="../whole.png" alt="logo" className="object-contain" />
      </div>
      <div className={stl.search}>
        <div className={stl.searchIcon}>
          <BsSearch />
        </div>
        <div className={stl.input}>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="bg-transparent w-[95%] outline-none"
          />
        </div>
      </div>
      <p className={stl.createAccount}>
        {user.length ? (
          user
        ) : (
          <p>
            Create account. <span className="text-btn2">It's free</span>
          </p>
        )}
        <p>
          <IoMdArrowDropdown />
        </p>
      </p>
      <div className={stl.shapes}>
        <img src="../Rectangle.png" alt="Rectangle" className="md:hidden" />
        <img src="../Oval.png" alt="Oval" className="md:hidden" />
        <img src="../Path.png" alt="Path" className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
