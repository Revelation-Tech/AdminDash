import { create } from "zustand";

const useTableStore = create((set, get) => ({
  url: undefined,
  loading: false,
  pagination: { position: ["bottomCenter"], showTitle: true },
  data: [],
  columns: [],
  filteredData: [],
  searchValue: "",
  params: {},
  filterByColumn: (column, value) => {
    // console.log(column, value);
    const { data } = get();

    const filtered = data?.filter((item) => item[column]);

    console.log(filtered);

    set({ filteredData: filtered });
  },
  searchTable: (searchTerm) => {
    const { data } = get();
    const lowerCaseSearch = searchTerm.toLowerCase();

    set({ searchValue: lowerCaseSearch });

    // Recursive function to search deeply in nested objects or arrays
    const deepSearch = (value) => {
      if (typeof value === "object" && value !== null) {
        // Handle objects or arrays by iterating through their values
        return Object.values(value).some(deepSearch);
      }
      // Convert non-object values to a string and check for the search term
      return String(value).toLowerCase().includes(lowerCaseSearch);
    };

    // Filter the data based on the deep search
    const filtered = data?.filter((item) =>
      Object.values(item).some(deepSearch)
    );

    set({ filteredData: filtered });
  },
}));

export default useTableStore;
