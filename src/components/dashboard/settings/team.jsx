import { NavLink } from "react-router-dom";
import { horizontalNav } from "../../../data/SettingsNavData";

import { Filter, ImportCurve, SearchNormal1, User } from "iconsax-react";

const Team = () => {
    return ( 
        <>
        <section className="mt-8">
           
        <div className="flex justify-between items-center ">
            <div className="relative w-1/3">
                <SearchNormal1 size={16} className="absolute  text-black/60 left-3 top-3 "/>
                <input type="text" name="" id="" className=" w-full p-2 pl-10 rounded-md shadow outline-none focus:ring-2 ring-bills-darkblue placeholder-black/60" placeholder="Search" />
            </div>

            <div className="">
                <button className="btn-outline mr-3"> <Filter size={24} className="inline" variant="Outline"/> Filter </button>
                <button className="btn-fill mr-3"><ImportCurve size={24} className="inline" variant="Outline"/> Export Csv </button>
                <button className="btn-fill "><User size={24} className="inline" variant="Outline"/> Invite Member </button>
            </div>
        </div>
            
        </section>
        </>
     );
}
 
export default Team;