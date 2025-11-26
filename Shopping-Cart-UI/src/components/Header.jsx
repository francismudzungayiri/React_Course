import { BsChevronRight } from "react-icons/bs";

const Header = () => {
  return (
    <div className="pt-10 flex flex-col mb-15">
      <p className="mx-auto text-gray-500 p-3 rounded-4xl border border-blue-100">
        Top Gadgets for every need.
      </p>
      <h1 className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:5xl xl:text-7xl font-bold text-gray-400 text-center">
        You One-Stop <span className="text-blue-500">Tech</span> Shop
      </h1>
      <p className="bg-gray-200 p-2 w-fit text-gray-400 mt-10 rounded-2xl flex gap-3 items-center hover:cursor-pointer hover:font-bold hover:text-blue-500 mx-auto">
        Shop <BsChevronRight className="text-gray-900 font-extrabold" />
      </p>
      <div className="flex gap-9 mt-10 justify-center ">
        <div className="w-1/4 h-[60vh] bg-[url('/hero1.jpg')] rounded-t-[50%] bg-cover bg-center"></div>
        <div className="w-1/4 h-[60vh] bg-[url('/hero2.jpg')] rounded-t-[50%] bg-cover bg-center"></div>
        <div className="w-1/4 h-[60vh] bg-[url('/hero1.jpg')] rounded-t-[50%] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Header;
