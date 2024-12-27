import { create } from "zustand";

const useTableStore = create((set, get) => ({
  loading: false,
  pagination: { position: ["bottomCenter"], showTitle: true },
  data: [],
  columns: [],
  filteredData: [],
  searchValue: "",
  filterByColumn: (column, value) => {
    // console.log(column, value);
    const { data } = get();

    const filtered = data?.filter((item) => item[column]);

    console.log(filtered)

    set({ filteredData: filtered });
  },
  searchTable: (searchTerm) => {

    const { data } = get();
    const lowerCaseSearch = searchTerm.toLowerCase();

    set({ searchValue: lowerCaseSearch });

    const filtered = data?.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(lowerCaseSearch)
      )
    );

    // console.log(filtered)

    set({ filteredData: filtered });
  },
}));

export default useTableStore;
