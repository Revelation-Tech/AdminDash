import AllUserTab from "../components/tabs/AllUserTab";
import ActiveTab from "../components/ActiveTab";
import DeactiveTab from "../components/DeactiveTab";
import FroozenTab from "../components/FroozenTab";

export const tabItems = [
  {
    label: "all users",
    component: AllUserTab,
    className: "capitalize",
    key: "all"
  },
  {
    label: "active users",
    component: ActiveTab,
    className: "capitalize",
    key: "active"
  },
  {
    label: "deactive users",
    component: DeactiveTab,
    className: "capitalize",
    key: "deactive"
  },
  {
    label: "froozen users",
    component: FroozenTab,
    className: "capitalize",
    key: "frozen"
  },
];
