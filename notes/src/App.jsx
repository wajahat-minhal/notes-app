import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {

  const submitHandler = (e)=>{

    e.preventDefault();
    console.log("Form Submitted")
  }

  return (
    <>
      <div className="flex bg-black text-white">
        <form
          action=""
          onSubmit={(e) => {
        submitHandler(e)
      }}
          className="flex flex-col h-screen w-1/2 gap-5 p-5"
        >
          <h1 className="w-full text-center">Add Notes</h1>
          <input
            type="text"
            placeholder="enter name"
            className="w-full p-5 border-2 rounded outline-none"
          />
          <textarea
            name=""
            id=""
            placeholder="write details"
            className="p-13 w-full border-2 rounded outline-none"
          ></textarea>
          <button className="w-full border-2 rounded">Submit</button>
        </form>

        <div className="bg-black w-1/2 h-screen gap-3 p-5 flex flex-wrap border-l-2">
          <div className="w-45 h-40 bg-white text-black "></div>
          <div className="w-45 h-40 bg-white text-black"></div>
          <div className="w-45 h-40 bg-white text-black"></div>
          <div className="w-45 h-40 bg-white text-black"></div>
        </div>
      </div>
    </>
  );
}

export default App;
