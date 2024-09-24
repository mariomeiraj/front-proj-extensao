import useModalStore from '@/store/useModalStore'
import styles from './header.module.css'

export default function HeaderLoginBtn() {
	const { openModalLogin } = useModalStore()

	return (
		<button onClick={() => openModalLogin()} className={styles.btn}>
			LOGIN
		</button>
	)
}
