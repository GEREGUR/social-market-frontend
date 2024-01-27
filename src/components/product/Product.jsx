/* eslint-disable react/prop-types */
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const Product = (props) => {
  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden border-black border-2">
        <div>
          <img className="w-full h-full" src={props.img} />
        </div>
        <div className="w-full h-28 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 ">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 px-4 border-black border-2 border-t-0">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;