import HeaderLogo from '@/components/Header/headerLogo'
import styles from './home.module.css'
import Footer from '@/components/Footer'
import Image from 'next/image'
import userIcon from '../../assets/user-icon.png'
import HomeContent from '@/components/Main/HomeContent'

export default function Home() {
	return (
		<div className={styles.home}>
			<header>
				<HeaderLogo />
				<Image
					classname={styles.userIcon}
					src={userIcon}
					alt="Imagem em vetor de um usuario."
				/>
			</header>

			<main>
				<HomeContent />
			</main>

			<Footer />
		</div>
	)
}
