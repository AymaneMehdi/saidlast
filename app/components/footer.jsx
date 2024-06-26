import React from "react";

const Footer = () => {
  return (
    <footer className="text-center pos-re">
      <div className=" mx-auto">
        <a className="logo w-[180px]" href="#">
          <img
            src="/images/saidtexlogo.png"
            alt="logo"
            className="w-[180px] h-[50px]"
          />
        </a>

        <p>
          &copy; SAIDTEX © 2024 by{" "}
          <a className="hover:text-blue-500" href="https://feizhoucom.com">
            FeizhouCom
          </a>
        </p>
      </div>

      <div className="curve curve-top curve-center"></div>
    </footer>
  );
};

export default Footer;
