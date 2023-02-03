import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IEliquid } from './types/eliquid.interface';

interface IEliquidState {
  eliquid: IEliquid[];
  error: null;
  loading: boolean;
  addEliquid: (title: string) => void;
  toggleEliquid: (id: number) => void;
}

interface IFilter {
  filter: string;
  setFilter: (filters: string) => void;
  filterByCompany: string;
  setFilterByCompany: (filterByCompany: string) => void;
}

export const useEliquids = create<IEliquidState>()(
  devtools((set, get) => ({
    eliquid: [
      {
        id: 1,
        title: 'Big Bro',
        company: 'Elmerck',
        completed: false,
      },
      {
        id: 2,
        title: 'Tabacum',
        company: 'Elmerck',
        completed: true,
      },
      {
        id: 3,
        title: 'Yoo Gurt',
        company: 'Elmerck',
        completed: false,
      },
      {
        id: 4,
        title: 'Juice',
        company: 'Elmerck',
        completed: false,
      },
      {
        id: 5,
        title: 'TEA',
        company: 'Pride Vape',
        completed: false,
      },
    ],
    loading: false,
    error: null,
    // 1 variant
    //   addEliquid: (title: string) =>
    //     set((state) => {
    //       const newEliquid = { id: Date.now(), title };

    //       return { eliquid: [...state.eliquid, NewEliquid] };
    //     }),
    // })),

    // 2 variant(short)
    // addEliquid: (title: string) =>
    //   set((state) => ({ eliquid: [...state.eliquid, { id: Date.now(), title }] })),

    // 3 variant (get())
    addEliquid: (title) => {
      const newEliquid = { id: Date.now(), title };

      set({ eliquid: [...get().eliquid, newEliquid] });
    },

    toggleEliquid: (elId) =>
      set({
        eliquid: get().eliquid.map((el) =>
          elId === el.id ? { ...el, completed: !el.completed } : el,
        ),
      }),
  })),
);

export const useFilter = create<IFilter>()((set) => ({
  filter: 'all',
  setFilter: (value: string) => set({ filter: value }),
  filterByCompany: 'allCompany',
  setFilterByCompany: (name: string) => set({ filterByCompany: name }),
}));
