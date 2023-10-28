import { useState } from "react";
import { Link } from "react-router-dom";

function Chat() {
  const [searchVisibility, setSearchVisibility] = useState(true);

  const showInput = () => {
    const input = document.getElementById("search-input");
    if (searchVisibility) {
      input.style.display = "block";
      setSearchVisibility(false);
    } else {
      input.style.display = "none";
      setSearchVisibility(true);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="flex flex-col w-full sm:min-w-[250px] sm:w-[300px] lg:min-w-[25%] bg-blue-700 ">
          <div className="flex items-center justify-between py-1 px-2 font-bold text-2xl text-white bg-blue-900 shadow-lg shadow-indigo-100">
            <Link to={"/home"} className="px-3">
              Onemate
            </Link>
            <div className="flex items-center">
              <div>
                <img
                  className="w-11 mx-2 hover:bg-white p-1 rounded-full cursor-pointer"
                  src="images/search.png"
                  alt="Search"
                  onClick={() => showInput()}
                />
              </div>
              <Link to={"/profile"}>
                <img
                  className="w-11 hover:bg-white rounded-2xl p-1"
                  src="images/profile.png"
                  alt="Profile"
                  title="Profile"
                />
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <input
              id="search-input"
              className="w-[90%] focus:outline-none px-3 py-1 text-lg text-slate-600 tracking-wide rounded-b-lg hidden"
              type="text"
              placeholder="Search here..."
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full bg-blue-500 text-white hidden sm:block">
          <div className="w-full flex items-center justify-center min-h-screen">
            <div className="p-4 rounded-lg text-2xl">
              Click on a chat to start messaging
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
