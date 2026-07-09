import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, desc)
    // console.log("Form Submitted");

    const copyTask = [...task];
    copyTask.push({ title, desc });

    setTask(copyTask);

    console.log(task);

    setTitle("");
    setDesc("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col  lg:w-1/2 gap-5 p-5"
        >
          <h1 className="w-full text-center">Add Notes</h1>
          <input
            type="text"
            placeholder="enter name"
            className="w-full p-5 border-2 rounded outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="write details"
            className="p-3 w-full border-2 rounded outline-none h-40"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <button className="p-2 w-full border-2 rounded">Submit</button>
        </form>

        <div className="lg:w-1/2 p-5 lg:border-l-2">
          <h1>Recent Notes</h1>
          <div className="flex flex-wrap gap-3">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
                >
                  <div>
                    <h3 className="leading-tight text-lg font-bold">
                      {elem.title}
                    </h3>
                    <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
                      {elem.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
