import { NavLink } from "react-router-dom";
import { Filter, ImportCurve, SearchNormal1, User } from "iconsax-react";

import useModalStore from "@store/useModalStore";
import TeamTable from "../components/table/TeamTable";
import InviteUser from "../components/modal/InviteUser";
import { horizontalNav } from "../../../../data/SettingsNavData";

const Team = () => {
  const { onOpen, type, show } = useModalStore();

//   console.log(type, show)

  return (
    <>
      <section className="mt-8">
        <div className="flex justify-between items-center ">
          <div className="relative w-1/4">
            <SearchNormal1
              size={16}
              className="absolute  text-black/60 left-3 top-3 "
            />
            <input
              type="text"
              name=""
              id=""
              className=" w-full p-2 pl-10 rounded-md shadow outline-none focus:ring-2 ring-bills-darkblue placeholder-black/60"
              placeholder="Search"
            />
          </div>

          <div className="">
            <button className="btn-outline mr-3">
              {" "}
              <Filter
                size={24}
                className="inline"
                variant="Outline"
              /> Filter{" "}
            </button>
            <button className="btn-fill mr-3">
              <ImportCurve size={24} className="inline" variant="Outline" />{" "}
              Export Csv{" "}
            </button>
            <button
              className="btn-fill"
              onClick={() => onOpen({ type: "invite" })}
            >
              <User size={24} className="inline" variant="Outline" /> Invite
              Member{" "}
            </button>
          </div>
        </div>

        <TeamTable />

        {type?.includes("invite") && show && <InviteUser />}
      </section>
    </>
  );
};

export default Team;
