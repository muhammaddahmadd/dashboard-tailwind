import React from "react";

function Navbar() {
  return (
    <nav className="md:flex lg:items-center md:justify-between flex-wrap p-4 lg:px-8  text-stone-800 bg-white">
      <div className="lg:flex lg:flex-col lg:mb-4">
        <h2 className="text-xl lg:text-2xl font-bold mb-1">Projects</h2>
        <p className="text-sm">
          You can add new projects or add existing projects
        </p>
      </div>
      <div className="lg:flex lg:space-x-2 lg:gap-2">
        <p className="text-sm lg:text-base">Jonas</p>
        <button className="rounded-xl bg-purple-300 px-3 py-3 lg:px-3 lg:py-3"></button>
      </div>
    </nav>
  );
}

export default Navbar;
