import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set, get) => ({
      name: null,
      type: null,
      phone: null,
      email: null,
      createdAt: null,
      role: null,
      preferences: [],
      setData: (data) => set({ ...data }),
      setPreferences: (data) => set({ preferences: data }),
    }),
    {
      name: "admins",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAdminStore;
