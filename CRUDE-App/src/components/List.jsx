import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/crudeSlice";

const List = () => {
  const state = useSelector((state) => state.crudeData.item);
  const dispatch = useDispatch()
  console.log(state);
  return (
    <div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 m-auto">
        {state.map((item, index) => (
          <li className="pb-3 sm:pb-4" key={index}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.value}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.id}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-red-700">
               <button onClick={()=> dispatch(deleteItem(item.id))}>delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
