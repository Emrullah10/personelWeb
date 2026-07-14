import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getSystemPreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: getSystemPreference(),
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'theme-storage' }
  )
);
