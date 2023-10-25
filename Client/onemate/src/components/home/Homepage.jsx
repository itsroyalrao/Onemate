import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-blue-600 w-full min-h-screen flex">
        <div className="flex flex-col w-0 sm:min-w-[250px] lg:min-w-[25%] ">
          <div className="flex items-center justify-between p-1 font-bold text-2xl text-white bg-blue-900 shadow-lg shadow-indigo-100">
            <Link to={"/home"} className="px-3">
              Onemate
            </Link>
            <Link to={"/profile"} className="hover:bg-white p-3 rounded-full">
              <img
                className="w-9"
                src="images/profile.png"
                alt="Profile"
                title="Profile"
              />
            </Link>
          </div>
        </div>
        <div className="flex-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam
          esse debitis consectetur cumque doloribus et, quibusdam sit facere
          praesentium voluptas eveniet aliquid in tempora!
        </div>
      </div>
    </>
  );
}

export default Homepage;
