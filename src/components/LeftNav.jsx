import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
const LeftNav = () => {
  const { selectCategories, SetSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return SetSelectCategories(name);
      case "home":
        return SetSelectCategories(name);
      case "menu":
        return false;

      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-x-auto h-[calc(100%-56px)] md:h-[100%] py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all  ${
        mobileMenu ? "translate-x-0" : "translate-x-[-240px]"
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.length &&
          categories.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  className={`${
                    selectCategories === item.name ? "bg-white/[0.15]" : ""
                  }`}
                />
                {item.divider && <hr className="my-5 border-white/[0.2]" />}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default LeftNav;
