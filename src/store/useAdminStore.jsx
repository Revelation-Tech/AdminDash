import { create } from zustand;

const useAdminStore = create((set, get) => ({
    lastName: null,
    firstName: null,
    type: null,
    referral: null,
    phone: null,
    gender: null,
    dob: null,
    email:null,
    setData: (data) => set({...data})
}));

export default useAdminStore;