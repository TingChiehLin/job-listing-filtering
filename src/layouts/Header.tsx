import { FC } from "react";
import BG_Header from "../assets/images/bg-header-desktop.svg";

const Header: FC = () => {
  return (
    <div>
      <div className="bg-Dark-Cyan">
        <img src={BG_Header} />
      </div>
    </div>
  );
};

export default Header;
