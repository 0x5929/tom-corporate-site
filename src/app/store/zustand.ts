import { create } from 'zustand'

interface GlobalStore {
    blacknav: boolean
    update: (state: boolean) => void
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
    blacknav: false,
    update: (state) => set(() => ({ blacknav: state })),
}))
