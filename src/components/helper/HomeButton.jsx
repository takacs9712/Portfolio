import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const HomeButton = () => {
  return (
    <div className="relative">
      <div className="absolute inset-10 flex items-center justify-center">
        <Link to="/">
          <button className="text-white bg-black px-4 py-4 rounded-xl hover:bg-stone-600 transition-colors duration-300 text-xl">
            <AiOutlineHome />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeButton;
