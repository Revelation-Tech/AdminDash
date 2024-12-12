import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set, get) => ({
      lastName: null,
      firstName: null,
      type: null,
      referral: null,
      phone: null,
      gender: null,
      dob: null,
      email: null,
      setData: (data) => set({ ...data }),
    }),
    {
      name: "admins",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAdminStore;
