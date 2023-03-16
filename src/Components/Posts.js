import { React, useContext } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdDateRange, MdEdit } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { ImNotification } from "react-icons/im";
import { AiFillLike } from "react-icons/ai";
import { UserContext } from "../context/user";

const Posts = () => {
  const { user } = useContext(UserContext);

  function followed(e) {
    if (e.target.innerText === "Follow") {
      e.target.innerText = "Followed";
      e.target.style = `background:black;color:white`;
    } else {
      e.target.innerText = "Follow";
      e.target.style = "";
    }
  }

  function locationEdit(e) {
    console.log(e.target);
  }
  const posts = [
    {
      image: "../Rectangle 5.png",
      type: "../article.png",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      text: "I’ve worked in UX for the better part of a decade. F..",
      authorImg: "../Rectangle 3.png",
      authorName: "Sarthak Kamra",
      views: "1.4k",
    },
    {
      image: "../Rectangle 5 (1).png",
      type: "../education.png",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      text: "I’ve worked in UX for the better part of a decade. F..",
      authorImg: "../Rectangle 3 (1).png",
      authorName: "Sarah West",
      views: "4.8k",
    },
    {
      image: "../Rectangle 5 (2).png",
      type: "../meetup.png",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      iconText: <MdDateRange />,
      date: "Fri, 12 Oct, 2018 ",
      iconLocation: <GoLocation />,
      location: "Ahmedabad, India",
      btn: "Visit Website",
      authorImg: "../Ronal.png",
      authorName: "Ronal Jones",
      views: "800",
    },
    {
      image: "",
      type: "../job.png",
      title: "Software Developer - II",
      iconText: <BsBag />,
      text: "Innovaccer Analytic...",
      iconLocation: <GoLocation />,
      location: " Noida, India",
      btn: "Apply on Timesjobs",
      authorImg: "../Rectangle 3 (2).png",
      authorName: "Joseph Gray",
      views: "1.7k",
    },
  ];

  const stl = {
    bigContainer:
      "w-full lg:flex flex-row justify-between lg:w-[75%] lg:mx-auto lg:mt-[28px]",
    locationPart: "hidden lg:flex flex-col w-[26%] h-[300px]  bg-white",
    container:
      "w-full h-fit flex flex-col items-center mb-[4px]  border border-[3px] border-btn1",
    postImg: "w-full h-[120px] md:h-[220px]",
    wrapper: "w-[95%] h-fit",
    title: "w-[280px] h-fit font-[600] mt-[6px] lg:w-[600px] lg:text-[22px]",
    threeDots:
      "relative group text-[28px] w-[36px] h-[32px] flex justify-center items-center hover:bg-btn1 rounded-[4px]",
    onHover:
      "hidden group-hover:flex absolute top-[33px] right-0 z-[20] w-[160px] h-[102px] bg-white flex-col justify-around text-[14px] px-[8px] rounded-[4px] shadow-[0px_11px_30px_4px_rgba(0,0,0,0.56)]",
    postText:
      "w-full h-fit flex mt-[10px] text-[13px] lg:text-[18px] lg:mb-[32px]",
    postBtn:
      "w-full h-[34px] mt-[16px] mb-[30px] text-[13px] font-[600] border-[1px] border-[#A9AEB8] text-[#E56135] rounded-[8px]",
    wrap2: "w-full h-[38px] flex items-center justify-between mb-[10px]",
    shareBtn:
      "w-[70px] h-[36px] rounded-[4px] flex items-center justify-center bg-btn1 text-[12px] lg:w-[42px] ]",

    location: "w-full h-[43px] flex items-center border-b-[2px]",
    locationIcon: "w-[12%] h-full flex justify-center items-center",
    input: "w-[75%] h-[70%]  flex items-center text-[14px] outline-none",
    editBtn: "w-[13%] h-full flex justify-center items-center",
    note: "w-full flex h-fit mt-[32px] text-[#949494]",
  };

  return (
    <div>
      <div className={stl.bigContainer}>
        <div className="w-full lg:w-[67%] flex flex-col">
          {posts.map((post, index) => (
            <div key={index} className={stl.container}>
              {post.image ? (
                <div className={stl.postImg}>
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div></div>
              )}

              <div className={stl.wrapper}>
                <div className="w-[60px] h-[19px] mt-[14px] lg:w-[77px] lg:h-[25px]">
                  <img src={post.type} alt="" className="object-contain" />
                </div>
                <div className="w-full h-fit flex justify-between">
                  <div className={stl.title}>{post.title}</div>
                  <div className={stl.threeDots}>
                    <FiMoreHorizontal />
                    <div className={stl.onHover}>
                      <p className="hover:bg-btn1">Edit</p>
                      <p className="hover:bg-btn1">Report</p>
                      <p className="hover:bg-btn1">Option3</p>
                    </div>
                  </div>
                </div>
                <div className={stl.postText}>
                  <div className="flex w-fit h-fit items-center">
                    <p className="mr-[4px]">{post.iconText}</p>
                    {post.text}
                    {post.date}
                  </div>
                  <div className="flex w-fit h-fit items-center ml-[30px]">
                    <span className="mr-[4px]">{post.iconLocation}</span>
                    {post.location}
                  </div>
                </div>
                {post.btn ? (
                  <button className={stl.postBtn}>{post.btn}</button>
                ) : (
                  <span></span>
                )}

                <div className={stl.wrap2}>
                  <div className="w-fit h-fit flex ">
                    <div className="h-[37px] w-[37px] lg:h-[48px] lg:w-[48px] ">
                      <img
                        src={post.authorImg}
                        alt=""
                        className="object-contain w-full h-full lg:w-[95%] lg:h-[95%]"
                      />
                    </div>
                    <div className=" ml-[12px] lg:flex items-center justify-center">
                      <p className="font-[600] text-[13px] lg:text-[18px]">
                        {post.authorName}
                      </p>
                      <p className="lg:hidden text-[12px]">
                        {post.views} views
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="hidden lg:flex items-center text-[14px] mr-[40px]">
                      <GrView className="mr-[13px]" /> {post.views} views
                    </p>
                    <button className={stl.shareBtn}>
                      <BsFillShareFill className="mr-[6px]" />{" "}
                      <span className="lg:hidden"> Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={stl.locationPart}>
          <div className={stl.location}>
            <div className={stl.locationIcon}>
              <GoLocation />
            </div>

            <input
              type="text"
              className={stl.input}
              placeholder="Noida, India"
            />
            <div className={stl.editBtn} onClick={locationEdit}>
              <MdEdit />
            </div>
          </div>

          <div className={stl.note}>
            <p className="w-[12%] flex items-start justify-center">
              <ImNotification />
            </p>
            <p className="w-[88%] text-[12px]">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>

          {user.length ? (
            <div className="w-full h-fit text-[14px] flex flex-col  justify-start px-[10px] mt-[50px]">
              <p className="flex items-center">
                <AiFillLike className="mr-[10px]" />
                Recommended Groups
              </p>
              <div className="w-[88%] text-[12px]">
                <div className=" flex justify-between items-center mt-[10px]">
                  <div className="flex items-center">
                    <img src="../Rectangle 6.png" alt="" />
                    <p className="ml-[10px]">Leisure</p>
                  </div>
                  <button
                    className="h-[24px] px-[12px] text-[12px] bg-btn1 rounded-[14px]"
                    onClick={followed}
                  >
                    Follow
                  </button>
                </div>

                <div className=" flex justify-between items-center mt-[10px]">
                  <div className="flex items-center">
                    <img src="../Rectangle 6.png" alt="" />
                    <p className="ml-[10px]">Activism</p>
                  </div>
                  <button
                    className="h-[24px] px-[12px] text-[12px] bg-btn1 rounded-[14px]"
                    onClick={followed}
                  >
                    Follow
                  </button>
                </div>

                <div className=" flex justify-between items-center mt-[10px]">
                  <div className="flex items-center">
                    <img src="../Rectangle 6.png" alt="" />
                    <p className="ml-[10px]">MBA</p>
                  </div>
                  <button
                    className="h-[24px] px-[12px] text-[12px] bg-btn1 rounded-[14px]"
                    onClick={followed}
                  >
                    Follow
                  </button>
                </div>

                <div className=" flex justify-between items-center mt-[10px]">
                  <div className="flex items-center">
                    <img src="../Rectangle 6.png" alt="" />
                    <p className="ml-[10px]">Philosophy</p>
                  </div>
                  <button
                    className="h-[24px] px-[12px] text-[12px] bg-btn1 rounded-[14px]"
                    onClick={followed}
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
