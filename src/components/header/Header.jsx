import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-20 item-center bg-amber-200 mx-3 ">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
        alt=""
        className="h-30 w-35 m-2"
      />

      <div className="flex gap-10 items-center text-white">
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <button className="bg-emerald-500 px-5 py-2 text-white rounded-full"> Get Started</button>
       
      </div>
    </div>
  );
};

export default Header;
