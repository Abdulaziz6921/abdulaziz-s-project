import { AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import React, { useState, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { UserContext } from "../context/user";

const Main = () => {
  // console.log(setUser);
  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  // const [signUp, setSignUp] = useState(true);

  // if (open && window.innerWidth < 768) {
  //   document.body.style = `overflow:hidden; position:relative`;
  // }

  function closing() {
    setOpen(false);
    setSignIn(false);
  }
  let myFunc = (e) => {
    e.preventDefault();
    let fName = e.target.parentElement.parentElement.parentElement[0].value;
    let lName = e.target.parentElement.parentElement.parentElement[1].value;
    if (fName === "" || lName === "") {
      alert("Fill in all inputs");
    } else {
      setUser(fName + " " + lName);
      closing();
    }
  };

  // let submission=()=>{
  // fName =
  // }

  const stl = {
    size: "w-full h-[236px] flex flex-col justify-between items-start relative md:h-[440px]",
    bgImg: "w-full h-full absolute z-10 left-0 top-0",
    heroImg1: "w-full h-full object-cover filter brightness-50 sm:hidden",
    heroImg2: "hidden sm:block w-full h-full object-cover filter brightness-50",

    top: " w-[95%] h-[28px] flex justify-between items-center absolute z-20 left-0 top-[14px] right-0 mx-auto text-white md:hidden",
    joinBtn:
      "px-[8px] py-[6px] text-[12px] font-[500] rounded-[4px] border-[1px] border-white",

    bottom:
      "w-fit h-[40px] absolute z-20 left-[16px] bottom-[32px] text-white md:left-[200px] md:bottom-[80px]",

    sizeOfHeader:
      "w-full h-[66px] flex justify-between items-center px-[17px] lg:w-[75%] md:mx-auto",
    header: "md:hidden text-[14px] font-bold",
    headers:
      "hidden md:flex w-[358px] h-[21px] items-center justify-between text-[#8A8A8A]",

    typeBtn:
      "bg-btn1 rounded-[4px] px-[10px] py-[8px] text-[13px] font-[500] ml-[16px]",

    shadow: `${
      open ? "flex" : "hidden"
    } w-full h-[100vh] bg-[#00000090] filter bright-50 fixed top-0 z-[100] left-0  items-end md:justify-center md:items-center md:h-full`,
    signing:
      "relative w-full h-[73%] bg-white rounded-t-[8px] flex-col items-center md:w-[54%] lg:h-fit md:rounded-t-[0px] lg:rounded-b-[8px]",
    intro:
      "text-[#008A45] bg-[#EFFFF4] h-[50px]  text-center  items-center justify-center text-[14px] lg:flex hidden",
    boxSignUp: `${
      signIn ? "hidden" : "flex"
    } h-fit items-center px-[36px] lg:pt-[24px] lg:pb-[36px] px-[20px] py-[22px]`,
    signUp: `w-full h-[73%] bg-white  flex-col items-center lg:w-[50%] lg:h-full lg:py-[0px] lg:px-0`,
    vectorImgPart:
      "w-[50%] h-[100%]  flex-col justify-between items-end hidden lg:flex",
    vectorImg: "w-full h-[300px]",
    header1:
      "w-full h-[23px] flex justify-between items-center text-[18px] font-bold lg:text-[24px]",
    inputs: "w-full h-fit flex flex-col bg-btn1 mt-[20px] ",
    fullName: "w-full h-[40px] flex",
    name: "bg-[#F7F8FA] w-[50%] h-full indent-[8px] border border-[1px] outline-none",
    otherInputs:
      "bg-[#F7F8FA] w-full h-[40px] indent-[8px] border border-[1px] outline-none",
    btns: "w-full h-fit flex justify-between items-center mt-[22px]",
    createBtn:
      "py-[10px] px-[28px] bg-btn2 rounded-[28px] text-[13px] font-[600] text-white lg:w-full lg:rounded-[20px] lg:text-[14px]",
    easySigning:
      "w-full h-[38px] border border-2 flex justify-center items-center text-center mt-[18px] text-[13px]",
    terms:
      "w-[85%] h-[38px] border border-2 flex justify-center items-center text-center mt-[18px] text-[12px] lg:hidden mx-auto",

    boxSignIn: `${
      signIn ? "flex" : "hidden"
    } h-fit items-center px-[36px] lg:pt-[24px] lg:pb-[36px] px-[20px] py-[22px]`,

    signIn: `w-full h-[73%] bg-white  flex-col items-center lg:w-[50%]   lg:h-full`,
  };

  return (
    <>
      <div className={stl.size}>
        <div className={stl.bgImg}>
          <img
            src="../hero image1.png"
            alt="heroImg"
            className={stl.heroImg1}
          />
          <img
            src="../hero image2.png"
            alt="heroImg"
            className={stl.heroImg2}
          />
        </div>

        <div className={stl.top}>
          <AiOutlineArrowLeft className="text-[16px]" />

          <button className={stl.joinBtn} onClick={() => setOpen(true)}>
            {user.length ? "Leave Group" : "Join Group"}
          </button>
        </div>

        <div className={stl.bottom}>
          <h2 className="font-bold text-[17px] md:text-[24px] lg:text-[36px]">
            Computer Engineering
          </h2>
          <p className="text-[12px] md:text-[15px] lg:text-[18px]">
            142,765 Computer Engineering follow this
          </p>
        </div>
      </div>

      <div className={stl.sizeOfHeader}>
        <h1 className={stl.header}>Posts(368)</h1>
        <div className={stl.headers}>
          <h1 className="text-black">All Posts(368)</h1>
          <h1>Article</h1>
          <h1>Event</h1>
          <h1>Education</h1>
          <h1>Job</h1>
        </div>

        <div className="md:hidden">
          <button className={stl.typeBtn}>
            <p>
              Filter:
              <select className="w-[53px] bg-transparent outline-none">
                <option value="All">All</option>
                <option value="All">Type</option>
                <option value="All">Favorite</option>
              </select>
            </p>
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <button className={stl.typeBtn}>
            <p className="flex items-center text-[16px]">
              Write a post
              <span className="ml-[16px]">
                <IoMdArrowDropdown />
              </span>
            </p>
          </button>

          <button
            className={stl.typeBtn}
            style={{ background: "#2F6CE5" }}
            onClick={() => setOpen(true)}
          >
            <p className="flex items-center text-[16px] text-white">
              <span className="mr-[8px]">
                {user.length ? "" : <FaUserPlus />}
              </span>
              {user.length ? "Leave Group" : "Join Group"}
            </p>
          </button>
        </div>
      </div>
      <hr className=" hidden lg:block w-[75%] mx-auto h-[3px] bg-btn1" />

      <div className={stl.shadow}>
        <div className={stl.signing}>
          <AiFillCloseCircle
            className="hidden md:block text-[22px] absolute z-[100] right-[-10px] top-[-30px] text-white"
            onClick={closing}
          />
          <div className={stl.intro}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={stl.boxSignUp}
          >
            <div className={stl.signUp}>
              <div className={stl.header1}>
                <p>Create Account</p>
                <AiFillCloseCircle
                  className="md:hidden text-[22px] "
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className={stl.inputs}>
                <div className={stl.fullName}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={stl.name}
                    id="first_name"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={stl.name}
                    id="second_name"
                  />
                </div>
                <input
                  type="email"
                  className={stl.otherInputs}
                  placeholder="Email"
                  id="email"
                />
                <input
                  type="password"
                  className={stl.otherInputs}
                  placeholder="Password"
                />
                <input
                  type="password"
                  className={stl.otherInputs}
                  placeholder="Confirm password"
                />
              </div>

              <div className={stl.btns}>
                <button onClick={myFunc} className={stl.createBtn}>
                  Create Account
                </button>
                <div onClick={() => setSignIn(true)}>
                  <p className="underline lg:hidden">or, Sign in</p>
                </div>
              </div>

              <button className={stl.easySigning}>
                <BsFacebook className="mr-[10px] text-blue-700" /> Sign up with
                Facebook
              </button>
              <button className={stl.easySigning}>
                <FcGoogle className="mr-[10px]" /> Sign up with Google
              </button>

              <p className={stl.terms}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
            <div className={stl.vectorImgPart}>
              <p className="text-[13px] mb-[31px]">
                Already have an account?{" "}
                <span className="text-btn2" onClick={() => setSignIn(true)}>
                  Sign In
                </span>
              </p>
              <div className={stl.vectorImg}>
                <img
                  src="../Group 3.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] mt-[12px]">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </form>

          <div className={stl.boxSignIn}>
            <div className={stl.signIn}>
              <div className={stl.header1}>
                <p>Welcome Back!</p>
                <AiFillCloseCircle
                  className="text-[22px] lg:hidden"
                  onClick={closing}
                />
              </div>
              <div className={stl.inputs}>
                <input
                  type="email"
                  className={stl.otherInputs}
                  placeholder="Email"
                />
                <input
                  type="password"
                  className={stl.otherInputs}
                  placeholder="Password"
                />
              </div>

              <div className={stl.btns}>
                <button className={stl.createBtn}>Sign In</button>
                <button>
                  <p
                    onClick={() => setSignIn(false)}
                    className="underline lg:hidden"
                  >
                    or, Create Account
                  </p>
                </button>
              </div>

              <button className={stl.easySigning}>
                <BsFacebook className="mr-[10px] text-blue-700" /> Sign in with
                Facebook
              </button>
              <button className={stl.easySigning}>
                <FcGoogle className="mr-[10px]" /> Sign in with Google
              </button>
              <div className="mx-auto text-center mt-[22px] text-[12px] ">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className={stl.vectorImgPart}>
              <p className="text-[13px] mb-[31px]">
                Don’t have an account yet?
                <span className="text-btn2" onClick={() => setSignIn(false)}>
                  Create new for free!
                </span>
              </p>
              <div className={stl.vectorImg}>
                <img
                  src="../Group 3.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ___________________________________________________ */}
      </div>
    </>
  );
};

export default Main;
