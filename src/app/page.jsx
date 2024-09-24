'use client'
import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import LogModal from '@/components/Modal/logModal'
import { Fragment } from 'react'
import useModalStore from '@/store/useModalStore'

export default function Home() {
	const { modalRegisterIsOpen, modalLoginIsOpen } = useModalStore()

	return (
		<div className={styles.wrapper}>
			{modalRegisterIsOpen || modalLoginIsOpen ? <LogModal /> : <Fragment />}

			<div className={styles.page}>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}
