import { BsAmd } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router";

const Nav = () => {
  const pagelinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Shop", path: "/catalog" },
    { id: 3, name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md rounded-md">
      <div className="flex items-center gap-2 ">
        <BsAmd className="text-blue-500 text-4xl" />
        <span className="font-bold text-2xl text-gray-600">ShopMate</span>
      </div>
      <div className="flex gap-5 ">
        {pagelinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className="font-bold text-gray-400 hover:text-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <BsCart4 className="text-2xl text-blue-500 cursor-pointer hover:text-blue-200" />
    </nav>
  );
};

export default Nav;
