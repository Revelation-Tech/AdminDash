import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set, get) => ({
      fullname: null,
      type: null,
      phone: null,
      email: null,
      createdAt: null,
      role: null,
      image: null,
      preferences: [],
      setData: (data) => set({ ...data }),
      setPreferences: (data) => set({ preferences: data }),
      reset: () =>
        set({
          fullname: null,
          type: null,
          phone: null,
          email: null,
          createdAt: null,
          role: null,
          preferences: [],
        }),
    }),
    {
      name: "admins",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAdminStore;
