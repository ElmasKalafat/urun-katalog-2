import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Moon from "../images/moon.png";
import Sun from "../images/sun.png";
import Basket from "../images/shopping-basket.png";
import { searchAction } from "../redux/actions/search";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.background = "black";
      root.style.color = "gray";
    } else {
      root.style.background = "white";

      root.style.color = "black";
    }
  }, [color]);
  const searchPost = (e) => {
    if (e.key === "Enter") {
      dispatch(searchAction(search));
    }
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 rounded-lg">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <h1 className="cursor-pointer font-bold  text-pink-900 text-2xl italic">
          NewShop
        </h1>
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchPost}
          className="flex-grow pl-5 bg-transparent  outline-none text-sm text-gray-600  placeholder-gray-400"
          type="text"
          placeholder="search"
        />
        <AiOutlineSearch
          className="hidden md:inline-flex cursor-pointer md:mx-2 bg-gradient-to-r p-1 from-violet-500 to-fuchsia-500 text-white rounded-full"
          size={23}
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        {color ? (
          <img
            src={Moon}
            className="cursor-pointer  h-7 w-7"
            onClick={() => setColor(!color)}
          />
        ) : (
          <img
            src={Sun}
            className="cursor-pointer h-7 w-7"
            onClick={() => setColor(!color)}
          />
        )}
        <div
          onClick={() => dispatch({ type: "DRAWER", payload: true })}
          className="flex d items-center  p-3 "
        >
          <img src={Basket} className=" cursor-pointer h-7 w-7" />
          <span className="relative  -top-3 right-1.5  px-2 bg-red-500 text-white rounded-full text-sm">
            {cardItems?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
