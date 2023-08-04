import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productsCard } from "../redux/actions/card";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  console.log("product", product);
  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addCard = () => {
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };
  return (
    <div className="w-full items-center flex justify-center space-x-5 space-y-5">
      <div>
        <img
          className="w-[450px] h-[450px] mt-5 rounded-2xl shadow-lg"
          src={product?.image}
        />
      </div>

      <div className="w-2/3 space-y-7 space-x-8">
        <div className="font-bold text-xl ml-8">{product?.title}</div>
        <div className="opacity-70 text-xl">{product?.description}</div>
        <div className="opacity-70 text-xl">Category: {product?.category}</div>
        <div className="opacity-70 text-xl">
          Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}
        </div>
        <div className="font-bold text-xl">Price: {product?.price}</div>

        <div className="flex items-center space-x-4 border rounded-full w-[120px] justify-center ">
          <CgMathMinus
            onClick={decrement}
            size={30}
            className="cursor-pointer  p-1"
          />
          <span className="text-2xl">{count}</span>
          <CgMathPlus
            onClick={() => increment(product?.rating?.count)}
            size={28}
            className="cursor-pointer p-1"
          />
        </div>
        <button
          onClick={addCard}
          className="p-3 w-full text-center rounded-lg text-white  text-lg bg-[#87677be1]"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Details;
