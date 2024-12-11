import { create } from "zustand";


const useTableStore = create((set, get) => ({
    pagination: {position: ['bottomCenter'], showTitle: true},
    data: [],
    columns: [],
    loading: false
}))

export default useTableStore;