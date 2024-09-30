import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productSlice";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  if(state.isLoading){
    return <p>Loading...</p>
  }
  return (
    <div className="min-h-screen bg-gray-800 text-white ">
      <h1 className="text-center text-2xl"> Fetch Data in Redux Toolkit</h1>
      <div className="w-screen flex justify-center">
        <button
          className=" text-2xl bg-green-500 rounded-md m-auto"
          onClick={() => dispatch(fetchProducts())}
        >
          Fetch Data
        </button>
      </div>
     <div>
      {
        state.products.map((item)=>{
          return <p key={item.id}>{item.title}</p> 
        })
      }
     </div>
    </div>
  );
};

export default App;
