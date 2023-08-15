import React from "react";
import Image from "./images/logoW.png";

function Footer() {
  return (
    <div className="Footer pt-10 text-white bg-gray">
      <div className="w-5/6 mx-auto flex flex-row py-5 ">
        <div className="w-3/4 flex flex-col">
          <img src={Image} alt="logo" className="w-1/3 py-5 object-cover" />
          <p className="text-sm font-light py-1 xl:text-base">Qoptars Pvt. Ltd.</p>
          <p className="text-xs font-light xl:text-sm">
            C-615, Academic Block C, <br/>Indian Institute Of Technology Hyderabad,<br/>
            Kandi, Sangareddy, Telangana - 502285
          </p>
        </div>
        <div className="w-1/4 px-0 flex flex-col pt-20 md:px-5 xl:px-10">
          <p className="text-xs font-light pt-8 xl:text-sm">AirFPV</p>
          <p className="text-xs font-light xl:text-sm">Support</p>
        </div>
        <div className="w-1/4 px-0 pt-20 flex flex-col md:px-5 xl:px-10">
          <p className="text-xs font-light pt-5 xl:text-sm">Instagram</p>
          <p className="text-xs font-light xl:text-sm">LinkedIN</p>
          <p className="text-xs font-light xl:text-sm">Youtube</p>
        </div>
      </div>
      <p className="text-xs font-light text-center py-10 pt-10 xl:text-sm">
        © 2023 Qoptars Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
