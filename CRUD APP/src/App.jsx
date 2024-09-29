import React from "react";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 ">
      <h1 className="text-3xl font-bold underline text-center text-white">Redux Toolkit</h1>
      <Input/>
      <List/>
    </div>
  );
};

export default App;
