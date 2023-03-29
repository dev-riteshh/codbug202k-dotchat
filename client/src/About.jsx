import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logoDotchat.png";
import chat from "../src/assets/dashboardmodel.png";
import team from "../src/assets/team.jpg"

const About = () => {
  return (
    <div>
      <header className="flex items-center">
        <div className="mx-52 py-10 flex flex-1 justify-between items-center">
          <div className="flex items-center">
            <img className="h-[50px] w-[50px]" src={logo} alt="" />
            <h1 className="text-[1.8rem] font-semibold ml-2">dotChat</h1>
          </div>
          <div className="flex gap-5 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <Link
            to={"/register"}
            className="bg-gradient-to-tl from-[#070086] to-[#544bfc] px-5 py-3 rounded-lg"
          >
            Sign In
          </Link>
        </div>
      </header>
      <section>
        <div className="mx-52 ">
          <div className="flex flex-col mb-[8rem] justify-center items-center">
            <h1 className="text-[2rem] text-center mb-5 font-semibold">About Us</h1>
            <p className="text-center w-4/5">
            Are you enjoying the dotChat? hope you are! then lets meet the <br /> team working behind the dotChat.
            </p>
          </div>

          <div className="flex-1 mt-5 items-center  gap-10 rounded-lg p-3 flex card-wrap">
            <div className="flex-1">
              <img src={chat} alt="" />
            </div>
            <div className="flex-1">
              <h1 className="text-[1.5rem] font-semibold">
                What is Dotchat? 
              </h1>
              <p>
              dotChat is all-in-one solution for all the your AI needs It supports text, voice, images & video suggestion and image generation using artificial intelligence too.
              </p>
            </div>
          </div>

          <div className="flex-1 mt-5 items-center rounded-lg gap-10 p-3  flex card-wrap">
            <div className="flex-1">
              <h1 className="text-[1.5rem] font-semibold">
              Team behind DotChat
              </h1>
              <p>
              Meet the developer team of the dotChat ! We created the dotChat to explore all types of solution at a single place. Its very amazing experience to build the dotChat and adding new features to dotChat and taking it a next step further
              </p>
            </div>
            <div className="flex-1">
              <img className="w-[35rem]" src={team} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        
        <div className="mx-52 flex justify-between py-10 my-40">
          <h1 className="text-center">
            &#169; dotchat developers @avenir saviours
          </h1>
          <div className="flex gap-5">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
