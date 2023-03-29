import React from 'react'
import logo from '../src/assets/logoDotchat.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()
    
  return (
    <div>
        <header className="flex items-center">
        <div className="mx-52 py-10 flex flex-1 justify-between">
          <div className="flex items-center">
            <img className="h-[50px] w-[50px]" src={logo} alt="" />
            <h1 className="text-[1.8rem] font-semibold ml-2">dotChat</h1>
          </div>
          <div className="flex gap-5 items-center">
            <Link  to={'/'}  >Home</Link>
            <Link  to={'/about'}  >
              About
            </Link>
            <Link to={'/contact'} >
              Contact
            </Link>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-tl from-[#070086] to-[#544bfc] p-2 px-5 rounded-lg"
          >
            Sign In
          </button>
        </div>
      </header>

      <section id="contact">
        {/* fetures-section */}
        <div className="mx-52 my-40 flex flex-col justify-center">
          <h1 className="text-[3rem] text-center font-semibold">Contact us</h1>

          <div className="flex gap-5 justify-center">
            <form className="flex gap-5  flex-col  w-1/2">
              <div className="flex  gap-2 flex-col">
                <label htmlFor="">Email</label>
                <input className="border p-2 text-black " type="text" />
              </div>
              <div className="flex gap-2 flex-col">
                <label htmlFor="">Message</label>
                <textarea className='text-black p-2' />
              </div>
              <button className="bg-indigo-600 p-2">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section>
        
        <div className="mx-52  flex justify-between py-10 my-40">
          <h1 className="text-center">
            &#169; devloped by devloper team of aveniour saviour
          </h1>
          <div className="flex gap-5">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact