import { Link, NavLink } from "react-router-dom";
import SideNav from "./sideNav";
import { horizontalNav } from "../../data/SettingsNavData";
import { Outlet } from "react-router-dom";

const Settings = () => {
    return (<>
          <section className="">
            <SideNav />
            <div className=' lg:w-[calc(100%-220px)] lg:ml-[220px] h-screen bg-bills-lightgrey2'>
                <div className="p-1 md:py-3 md:px-8">
                    <h1 className="text-2xl font-semibold uppercase"> control and settings</h1>

                    <div className=" mt-5 ">
                        {horizontalNav.map((link) => {
                            return (
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                           
                                            color: isActive ? '#1F6CAB' : 'black',
                                            borderBottom: isActive ? ' #1F6CAB solid 2px' : 'none'

                                        };
                                    }}

                                    key={link.id} className=' mr-2 md:mr-4 text-sm md:px-3 md:pb-3 text-center' to={link.link} end > {link.name}</NavLink>
                            )
                        })}


                    </div>
                  <Outlet/>  
                   
                </div>
            </div>
            
        </section>
    </>
    );
}

export default Settings;