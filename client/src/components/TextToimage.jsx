import React from "react";
import { OpenAIApi, Configuration } from "openai";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { useSpeechRecognition } from "react-speech-kit";

const TextToimage = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [mic, setMic] = useState(false);

  //open ai configration
  const configration = new Configuration({
    organization: "org-w1PX6nPkcw8j5ljdOx8vWyMd",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configration);

  const toggleMic = () => {
    setMic(!mic);
    if (!mic) {
      listen();
    }
    if (mic) {
      stop();
    }
  };
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setInput(result);
    },
  });

  const downloadImage = async (image) => {
    const imagesrc = await fetch(image.url,{mode:'no-cors'})
    const imageBlog = await imagesrc.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image.jpeg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  };

  const SendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await openai.createImage({
        prompt: input,
        n: 1,
        size: "256x256",
      });
      console.log(response.data.data);
      setImages(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#171f3c] p-5  flex-1 overflow-hidden overflow-y-auto flex flex-col justify-center items-center rounded-md my-2 h-[77vh] mb-4">
        <h1 className="text-[2rem] my-5 text-center">🤖 Ai generated images</h1>
        
        <div className="flex gap-5  justify-center">
          {
            images.map((image, id) => (
              <div key={id} className="p-5 border justify-center rounded-md">
                <img className="h-200 w-200" src={image.url} alt="" />
                <div className="flex mt-5 justify-center">
                  <button 
                    onClick={() => downloadImage(image)}
                    className="p-2 w-full rounded-md px-3 bg-indigo-600">
                    Download
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="">
        <form
          onSubmit={SendMessage}
          className="flex p-2 px-4 bg-gray-700  rounded-lg items-center"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value, e.preventDefault())}
            autoComplete="off"
            type="text"
            placeholder="Ask to our smart chat bot ? "
            className="text-white bg-gray-700 focus:bg-gray-700 flex-1 rounded-md outline-none"
          />

          {/* {message} */}
          <BiMicrophone
            onClick={toggleMic}
            className={`mr-2 hover:bg-gray-900 p-2 text-[2.6rem] rounded-full ${
              listening && "bg-green-400 blink"
            }`}
          ></BiMicrophone>

          <BiSend
            onClick={SendMessage}
            type="submit"
            className="p-2 text-[2.6rem] hover:bg-gray-900 rounded-md"
          />
        </form>
      </div>
    </>
  );
};

export default TextToimage;
