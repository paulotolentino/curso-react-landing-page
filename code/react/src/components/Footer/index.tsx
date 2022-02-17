import React from "react";
import "./index.css";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <span>The Best React Course Ever</span>
      <span>Copyright © 2022</span>
    </footer>
  );
};

export default Footer;
