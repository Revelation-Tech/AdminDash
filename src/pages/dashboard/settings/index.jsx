import { Link, NavLink, useLocation } from "react-router-dom";

import { horizontalNav } from "../../../data/SettingsNavData";
import { Outlet } from "react-router-dom";
import Home from "./tabs/home";
import SideNav from "../SideNav";

const Settings = () => {
  const location = useLocation();
  console.log(location);

  const hideContent =
    location.pathname.includes("/team") ||
    location.pathname.includes("/preferences");

  return (
    <>
      <section className="">
       
          <div className=" mt-5 border-b-2 border-gray-200 md:pb-2.5">
            {horizontalNav.map((link) => {
              return (
                <NavLink
                  // style={({ isActive }) => {
                  //   return {
                  //     color: isActive ? "#1F6CAB" : "black",
                  //     borderBottom: isActive ? " #1F6CAB solid 2px" : "none",
                  //   };
                  // }}
                  key={link.id}
                  className={({isActive}) => `${isActive ? "text-bills-darkblue font-semibold border-b-2 border-bills-darkblue" :"text-black"} mr-2 md:mr-4 text-sm md:px-3 md:pb-3 text-center`}
                  to={link.link}
                  end
                >
                  {" "}
                  {link.name}
                </NavLink>
              );
            })}
          </div>
          <Outlet />
      </section>
    </>
  );
};

export default Settings;
