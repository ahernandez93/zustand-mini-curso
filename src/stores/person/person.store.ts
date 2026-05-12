import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session.store";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Action {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeAPI: StateCreator<PersonState & Action, [["zustand/devtools", never], ["zustand/persist", unknown]]> = (set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (value) => set(({ firstName: value }), false, "setFirstName"),
  setLastName: (value) => set(({ lastName: value }), false, "setLastName"),
});

export const usePersonStore = create<PersonState & Action>()(
  devtools(
    persist(storeAPI, {
      name: "person-storage",
      storage: customSessionStorage,
    }),
  ),
);
