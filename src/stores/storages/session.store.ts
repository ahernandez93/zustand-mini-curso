import { createJSONStorage, StateStorage } from "zustand/middleware";

const storageAPI: StateStorage = {
  getItem: (name: string): string | Promise<string | null> | null => {
    const data = sessionStorage.getItem(name);
    return data;
  },

  setItem: (name: string, value: string): void => {
    sessionStorage.setItem(name, value);
  },

  removeItem: (name: string): void | Promise<void> => {
    sessionStorage.removeItem(name);
  },
};

export const customSessionStorage = createJSONStorage(() => storageAPI);
