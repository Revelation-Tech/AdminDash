import { create } from "zustand";

const useModalStore = create((set, get) => ({
    data: null,
    type: null,
    show: false,
    onClose: () => set({ show: false, type: null, data: null}),
    onOpen: ({data, type}) => set({ data, type, show: true }),
}));

export default useModalStore;
