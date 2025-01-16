import { Progress, Spin, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { ArrowDown2, ImportCurve, SearchNormal1 } from "iconsax-react";
import { LoadingOutlined, DownOutlined } from "@ant-design/icons";

import useDashboardQuery from "./hooks/useDashboardQuery";
import DashboardReportCard from "./components/ReportCard";
import CustomTableCard from "@components/CustomTableCard";

import columns from "./data/columns";
import csvItems from "./data/csvItems";
import useTableStore from "../../../store/useTableStore";
import useUserQuery from "../Users/hooks/useUserQuery";
import { formatCurrency } from "../../../utils/functions";
import { BillChart } from "../../../data/chartData/BillsData/BillChart";
import ExportOptionButton from "../../../components/ExportOptionButton";

const Overview = () => {
  const { dashboard, comparativeTransactions } = useDashboardQuery();
  const { fetchUsers } = useUserQuery();

  const { data, isFetching: dashboardLoading } = dashboard;
  const { data: userData, isLoading } = fetchUsers;

  const { searchTable } = useTableStore();

  const [items, setItems] = useState();

  // console.log(userData);

  useEffect(() => {
    useTableStore.setState({
      columns,
      data: userData,
      loading: isLoading,
      url: "/users",
    });

    const xItems = csvItems(userData || []);
    setItems(xItems);
  }, [data, dashboardLoading]);

  const pageLoading = (loading) => {
    return (
      <div className="flex flex-col justify-center items-center h-60">
        <Spin
          spinning={loading}
          size="small"
          indicator={<LoadingOutlined spin />}
        />
      </div>
    );
  };

  return (
    <div className="">
      <div className="">
        <h1 className="font-semibold text-3xl">Dashboard</h1>
        <div className="py-8 space-y-8">
          <div className="grid grid-cols-3 gap-4 ">
            <DashboardReportCard
              title="Revenue Generated"
              value={data?.revenue || 0}
            />

            <DashboardReportCard
              title="Total Transaction Volume"
              value={data?.totalTransaction}
            />

            <DashboardReportCard
              title="Total Transaction Value"
              value={formatCurrency(data?.transactionVolume)}
            />
          </div>

          <div className="flex gap-5">
            <div className="w-full max-w-screen-xl bg-white p-5 rounded-lg border border-gray-100">
              <div className="inline-flex items-center w-full justify-between mb-5">
                <div className="">
                  <h6 className="font-inter text-xs text-[#A3AED0]">
                    USERS ACQUISITION
                  </h6>
                  <div className="inline-flex items-center gap-1 py-2.5">
                    <h2 className="text-4xl font-inter font-bold text-[#2B3674]">
                      {data?.customers || 0}
                    </h2>
                    <span className="font-medium text-sm text-[#A3AED0]">
                      Customers
                    </span>
                  </div>
                </div>

                {/* <div className="bg-gray-200/40 rounded-md p-2.5 inline-flex items-center gap-2">
                  <span className="text-[0.625rem] font-inter font-medium">
                    Yearly
                  </span>
                  <ArrowDown2 className="size-4" variant="Bold" />
                </div> */}
              </div>
              {data?.monthlyTotals && (
                <BillChart
                  label={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "July",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                  ]}
                  value={data?.monthlyTotals}
                />
              )}

              {dashboardLoading && pageLoading(dashboardLoading)}
            </div>
            <div className="inline-flex flex-col w-full max-w-xs bg-white border border-gray-100 rounded-lg p-5">
              <h6 className="font-inter text-xs text-[#A3AED0]">
                TRANSACTION COMPLETION RATE
              </h6>
              <div className="py-4">
                <p className="inline-flex items-center text-sm font-inter gap-1">
                  <span className="p-0.5 size-2 rounded-full bg-bills-skyblue"></span>{" "}
                  Successful Transactions {data?.successVolume || 0}
                </p>
                <p className="inline-flex items-center text-sm font-inter gap-1">
                  <span className="p-0.5 size-2 rounded-full bg-red-500"></span>{" "}
                  Failed Transactions {data?.failedVolume || 0}
                </p>
              </div>
              <div className="inline-flex items-center justify-center relative py-4">
                <Progress
                  type="circle"
                  percent={data?.successPercentage ?? 0}
                  size={240}
                  showInfo={false}
                  strokeColor="#008000"
                />
                <div className="absolute flex items-center flex-col justify-center flex-1">
                  <div className="relative">
                    <Progress
                      type="circle"
                      percent={data?.failedPercentage ?? 0}
                      size={180}
                      showInfo={false}
                      strokeColor="#E71D36"
                    />
                  </div>
                  <div className="absolute bottom-16 inline-flex items-center justify-center flex-col">
                    <h3 className="text-3xl text-[#2B3674] font-semibold font-clashGrotesk">
                      {data?.totalTransaction || 0}
                    </h3>
                    <p className="text-xs text-[#A3AED0] font-inter">
                      Total Transaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="w-full max-w-screen-xl bg-white p-5 rounded-lg border border-gray-100">
              <div className="inline-flex items-center w-full justify-between mb-5">
                <div className="">
                  <h6 className="font-inter text-xs text-[#A3AED0]">
                    TOTAL TRANSACTION COMPARATIVE COUNT
                  </h6>
                </div>

                {/* <div className="bg-gray-200/40 rounded-md p-2.5 inline-flex items-center gap-2">
                  <span className="text-[0.625rem] font-inter font-medium">
                    This Week
                  </span>
                  <ArrowDown2 className="size-4" variant="Bold" />
                </div> */}
              </div>

              {comparativeTransactions?.isLoading ? (
                pageLoading(comparativeTransactions?.isLoading)
              ) : (
                <BillChart
                  label={Object.keys(comparativeTransactions?.data?.count)}
                  value={Object.values(comparativeTransactions?.data?.count)}
                />
              )}
            </div>

            <div className="w-full max-w-screen-xl bg-white p-5 rounded-lg border border-gray-100">
              <div className="inline-flex items-center w-full justify-between">
                <div className="">
                  <h6 className="font-inter text-xs text-[#A3AED0] capitalize">
                    TOTAL TRANSACTION COMPARATIVE AMOUNT
                  </h6>
                </div>

                {/* <div className="bg-gray-200/40 rounded-md p-2.5 inline-flex items-center gap-2">
                  <span className="text-[0.625rem] font-inter font-medium">
                    This Week
                  </span>
                  <ArrowDown2 className="size-4" variant="Bold" />
                </div> */}
              </div>
              {comparativeTransactions?.isLoading ? (
                pageLoading(comparativeTransactions?.isLoading)
              ) : (
                <BillChart
                  label={Object.keys(comparativeTransactions?.data?.amount)}
                  value={Object.values(comparativeTransactions?.data?.amount)}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col py-3 space-y-5 w-full mb-5">
            {/* <h3 className="text-lg font-semibold">Best Performing</h3> */}
            <div className="rounded-lg bg-white p-5 inline-flex items-center w-full">
              <div className="w-full max-w-[150px] border-b border-bills-skyblue text-center">
                <h4 className="text-bills-skyblue text-sm font-inter  pb-2">
                  Users
                </h4>
              </div>
              {/* search */}
              <div className="md:inline-flex items-center space-x-7 w-full justify-end">
                <div className="inline-flex items-center ring-1 ring-bills-borderLight outline-none focus:ring-1 focus:ring-bills-darkblue rounded-md px-3 gap-1.5 p-3.5 w-full max-w-sm">
                  <SearchNormal1 size={16} className="text-black/60" />
                  <input
                    type="text"
                    className=" w-full placeholder-black/60 border-0 focus:outline-none"
                    placeholder="Search"
                    onKeyUp={(e) => searchTable(e.target.value)}
                  />
                </div>

                {/* <Dropdown
                  menu={{
                    items: [
                      { label: <button>PDF</button>, key: "pdf" },
                      { label: <button>CSV</button>, key: "csv" },
                    ],
                  }}
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-bills-darkblue rounded-lg text-white"
                  >
                    <ImportCurve
                      size={16}
                      className="inline"
                      variant="Outline"
                    />
                    Export
                  </a>
                </Dropdown> */}

                <ExportOptionButton
                  csvHeader={items?.headers}
                  csvData={items?.body}
                />

                {/* <button className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-bills-darkblue rounded-lg text-white">
                  <ImportCurve size={16} className="inline" variant="Outline" />
                  Export
                </button> */}
              </div>
            </div>
          </div>

          <CustomTableCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
