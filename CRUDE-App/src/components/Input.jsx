import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/crudeSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handlelClick = () => {
    const data =  {id:Date.now(),value:input}
    dispatch(addItem(data));
    setInput("");
  };
  return (
    <div>
      <div className="w-full max-w-xs m-auto mt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handlelClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
