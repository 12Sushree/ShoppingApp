import { BookType, Contact, House, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-700 bg-blend-lighten w-full h-16 items-center p-3">
      <div className="text-2xl text-white">
        <ul className="flex gap-4">
          <li className="hover:cursor-pointer hover:text-blue-500 duration-200 flex gap-1 items-center">
            <House />
            Home
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500 duration-200 flex gap-1 items-center">
            <ShoppingBag />
            Products
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500 duration-200 flex gap-1 items-center">
            <BookType />
            About Us
          </li>
          <li className="hover:cursor-pointer hover:text-blue-500 duration-200 flex gap-1 items-center">
            <Contact />
            Contact Us
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="border-amber-500 rounded bg-amber-500 w-18 h-8 text-black hover:cursor-pointer hover:bg-yellow-600 hover:scale-125 hover:text-white duration-200">
          Signup
        </button>
        <button className="border-red-400 rounded bg-red-400 w-18 h-8 text-black hover:cursor-pointer hover:bg-red-700 hover:scale-125 hover:text-white duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
