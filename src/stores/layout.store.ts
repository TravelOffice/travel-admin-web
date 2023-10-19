import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface LayoutState {
  isSidebarOpen: boolean,
  toggleSidebar: () => void,
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      isSidebarOpen: true,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    }),
    {
      name: 'layout-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutStore((state) => ({
    isSidebarOpen: state.isSidebarOpen,
    toggleSidebar: state.toggleSidebar,
  }));
  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
