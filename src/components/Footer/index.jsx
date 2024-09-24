import styles from './footer.module.css'
import iconInsta from '../../assets/001-instagram.png'
import iconTiktok from '../../assets/003-tiktok.png'
import iconLinkedin from '../../assets/002-linkedin.png'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>UNEX © all rights reserved</span>
			<div>
				<ul>
					<li>
						<a href="#">
							<Image
								className={styles.socialIcon}
								src={iconInsta}
								alt="Logo Instagram"
							/>
						</a>
					</li>
					<li>
						<a href="#">
							<Image
								className={styles.socialIcon}
								src={iconTiktok}
								alt="Logo Tiktok"
							/>
						</a>
					</li>
					<li>
						<a href="#">
							<Image
								className={styles.socialIcon}
								src={iconLinkedin}
								alt="Logo Linkedin"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
