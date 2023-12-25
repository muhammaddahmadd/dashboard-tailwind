import React from "react";

const CollapsedSidebar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="font-sans bg-gray-100">
      {/* Sidebar */}
      <div className="h-screen flex overflow-hidden bg-gray-800">
        {/* Sidebar Toggle Button */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2"
        >
          <button className="text-gray-500 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={open ? "" : "hidden"}
          className="fixed inset-0 flex z-40 md:static md:flex-shrink-0 md:flex-1 bg-gray-800"
        >
          {/* Sidebar Background */}
          <div className="hidden md:block md:flex-shrink-0">
            <div className="h-full relative flex-1 flex flex-col overflow-y-auto">
              {/* Your Sidebar Content Goes Here */}
              <div className="p-4">
                <h1 className="text-white text-2xl font-semibold">
                  Sidebar Content
                </h1>
                <ul className="mt-4">
                  <li className="text-gray-300 hover:text-white cursor-pointer">
                    Link 1
                  </li>
                  <li className="text-gray-300 hover:text-white cursor-pointer">
                    Link 2
                  </li>
                  <li className="text-gray-300 hover:text-white cursor-pointer">
                    Link 3
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Overlay for small screens */}
          <div
            onClick={() => setOpen(false)}
            className={
              open ? "md:hidden fixed inset-0 bg-gray-600 opacity-75" : "hidden"
            }
          ></div>
        </div>

        {/* Page Content */}
        <div
          className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            open ? "ml-64" : "ml-0"
          }`}
        >
          {/* Your main page content goes here */}
          <div className="p-4">
            <h1 className="text-gray-800 text-2xl font-semibold">
              Main Content
            </h1>
            <p className="text-gray-600">
              Welcome to the main content area! This is where your application's
              main content will be displayed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsedSidebar;
