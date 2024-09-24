import { create } from 'zustand'

const useModalStore = create(set => ({
	modalRegisterIsOpen: false,
	modalLoginIsOpen: false,
	openModalLogin: () => set({ modalLoginIsOpen: true }),
	closeModalLogin: () => set({ modalLoginIsOpen: false }),
	openModalRegister: () => set({ modalRegisterIsOpen: true }),
	closeModalRegister: () => set({ modalRegisterIsOpen: false })
}))

export default useModalStore
