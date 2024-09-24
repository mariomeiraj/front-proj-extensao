import styles from './header.module.css'
import HeaderLoginBtn from './headerLoginBtn'
import HeaderLogo from './headerLogo'

export default function Header() {
	return (
		<header className={styles.header}>
			<HeaderLogo />

			<HeaderLoginBtn />
		</header>
	)
}
