import AllUserTab from "../components/tabs/AllUserTab";
import ActiveTab from "../components/ActiveTab";
import DeactiveTab from "../components/DeactiveTab";
import FroozenTab from "../components/FroozenTab";

export const tabItems = [
  {
    label: "all users",
    component: AllUserTab,
    className: "capitalize",
  },
  {
    label: "active users",
    component: ActiveTab,
    className: "capitalize",
  },
  {
    label: "deactive users",
    component: DeactiveTab,
    className: "capitalize",
  },
  {
    label: "froozen users",
    component: FroozenTab,
    className: "capitalize",
  },
];
