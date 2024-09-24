import Image from 'next/image'
import styles from './modal.module.css'
import iconCloseBtn from '../../assets/close-btn.png'
import useModalStore from '@/store/useModalStore'
import Register from './registerModal'
import Login from './loginModal'
import { Fragment } from 'react'

export default function LogModal() {
	const {
		modalRegisterIsOpen,
		modalLoginIsOpen,
		closeModalLogin,
		closeModalRegister
	} = useModalStore()

	const closeAllModal = () => {
		closeModalLogin()
		closeModalRegister()
		return
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalWrapper}>
				<div className={styles.divCloseBtn}>
					<Image
						onClick={() => closeAllModal()}
						className={styles.closeBtn}
						src={iconCloseBtn}
						alt="Botão para fechar modal de registro"
					/>
				</div>

				<div className={styles.logModal}>
					{modalRegisterIsOpen ? (
						<Register />
					) : modalLoginIsOpen ? (
						<Login />
					) : (
						<Fragment />
					)}
				</div>
			</div>
		</div>
	)
}
