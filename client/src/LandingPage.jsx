import React, { useRef } from "react";
import logo from "./assets/logoDotchat.png";
import dashboard from "./assets/dashboard.png";
import chat from "./assets/chat.png";
import prompt from "./assets/imgen.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const LandingPage = () => {
  const navigate = useNavigate();
  const myRef = useRef(null);

  return (
    <div>
      <header className="flex items-center">
        <div className="mx-52 py-10 flex flex-1 justify-between">
          <div className="flex items-center">
            <img className="h-[50px] w-[50px]" src={logo} alt="" />
            <h1 className="text-[1.8rem] font-semibold ml-2">dotChat</h1>
          </div>
          <div className="flex gap-5 items-center">
            <Link>Home</Link>
            <Link onClick={() => navigate("/about")} to="about" smooth={true}>
              About
            </Link>
            <Link
              onClick={() => navigate("/contact")}
              to="contact"
              smooth={true}
            >
              Contact
            </Link>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-tl from-[#070086] to-[#544bfc] p-2 px-5 rounded-lg"
          >
            Sign In
          </button>
        </div>
      </header>
      <section>
        {/* hero-section */}
        <div className="mx-52">
          <div className="flex justify-center gap-5 flex-col items-center">
            <h1 className="font-semibold  text-center text-[3rem]">
              <span className="font-bold bg-gradient-to-r from-[#37d4ff] to-[#544bfc] text-transparent bg-clip-text">
                DotChat
              </span>
              - Smart Ai <br /> Advanced chat bot
            </h1>
            <p className="text-center w-2/3">
              dotChat is all-in-one solution for all the your AI needs. It
              supports text, voice, images & video suggestion and image
              generation too. Just type a query and let it go !
            </p>
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-tl from-[#070086] to-[#544bfc] text-[1.3rem] p-2 px-5 rounded-lg"
            >
              Get Started
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="border-8 border-indigo-600 p-2 rounded-xl h-[530px] w-[850px] mt-10"
              src={dashboard}
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        {/* fetures-section */}
        <div className="mx-52 my-40">
          <h1 className="text-[3rem] text-center font-semibold">
            Features of DotChat
          </h1>
          <p className="text-center mb-20 text-[2rem]">
            Connect wit Multiple ai tool Without lossing screen
          </p>
          <div className="flex mt-10 flex-col gap-20">
            <div className="flex-1 h-[200px] rounded-lg p-3  flex  card-wrap">
              <div className="flex-1">
                <img src={chat} alt="" />
              </div>
              <div className="flex-1">
                <h1 className="text-[1.5rem] font-semibold">
                  Answers wide range of varities of questions
                </h1>
                <p>
                Thanks to the GPT 3.5 Turbo, the response is generated with the help of AI and have a great accuracy. You can ask questions on any topic like code, finance etc.
                </p>
              </div>
            </div>
            <div className="flex-1 h-[200px] rounded-lg p-3  flex  card-wrap">
              <div className="flex-1">
                <h1 className="text-[1.5rem] font-semibold">
                  Search images & videos on internet in just one click
                </h1>
                <p>
                It all starts with your query just enter and let the dotChat search the images and videos across all over the internet and pick out the best one for you
                </p>
              </div>
              <div className="flex-1">
                <img src={chat} alt="" />
              </div>
            </div>

            <div className="flex-1 h-[200px] rounded-lg p-3 flex  card-wrap">
              <div className="flex-1">
                <img src={prompt} alt="" />
              </div>
              <div className="flex-1">
                <h1 className="text-[1.5rem] font-semibold">
                  Prompt your imagination with Advanced AI image generation
                </h1>
                <p>
                Why depending on the images available on the internet, create your own image with your prompt. dotChat supports image generation just type your statement and AI will generate image for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={myRef} id="about">
        {/* fetures-section */}
        <div className="mx-52 my-40"></div>
      </section>

      <section>
        <div className="mx-52 flex flex-col justify-between py-10 my-40">
        <hr />
        <div className="flex justify-between mt-3">
          <h1 className="text-center">
            &#169; dotchat developers @avenir saviours
          </h1>
          <div className="flex gap-5">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default LandingPage;
