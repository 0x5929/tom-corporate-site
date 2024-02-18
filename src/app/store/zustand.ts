import { create } from 'zustand'

interface GlobalStore {
    contentPos: number | null
    update: (pos: number) => void
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
    contentPos: null,
    update: (pos) => set(() => ({ contentPos: pos })),
}))
