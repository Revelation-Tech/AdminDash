import { create } from "zustand";

const useModalStore = create((set, get) => ({
    data: null,
    type: null,
    show: false,
    title: null,
    onClose: () => set({ show: false, type: null, data: null, title: null}),
    onOpen: ({data, type, title}) => set({ data, type, title, show: true }),
}));

export default useModalStore;
