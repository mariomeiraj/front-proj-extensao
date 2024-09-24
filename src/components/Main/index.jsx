import Image from 'next/image'
import styles from './main.module.css'
import image3d from '../../assets/image.svg'
import useModalStore from '@/store/useModalStore'

export default function Main() {
	const { openModalRegister } = useModalStore()

	return (
		<main className={styles.main}>
			<h2>Bem-vindo ao Workshop de Empreendedorismo!</h2>
			<p>
				Somos um grupo de estudantes da <strong>UNEX,</strong> estamos
				desenvolvendo este workshop como parte de um projeto de extensão. Nosso
				objetivo é compartilhar conhecimento e promover o empreendedorismo entre
				nossos colegas e a comunidade.
			</p>

			<section className={styles.sectionMid}>
				<ul>
					<li>Palestras de Especialistas</li>
					<li>Networking</li>
					<li>Mentorias</li>
					<li>Certificado de Participação</li>
					<li>Espaço para Ideação</li>
					<li>Estudos de Caso</li>
				</ul>

				<Image
					src={image3d}
					className={styles.image3d}
					alt="Um desenho 3d de um boneco sentado em uma cadeira de frente para uma mesa com um computador."
				/>
			</section>

			<section className={styles.sectionFinal}>
				<h1>Garanta sua vaga gratuitamente!</h1>
				<p>
					Não fique de fora dessa oportunidade incrível! Inscreva-se já para o
					nosso Workshop de Empreendedorismo e dê o primeiro passo rumo ao
					sucesso. As vagas são limitadas e você não vai querer perder essa
					chance de aprender com especialistas e fazer networking com outros
					empreendedores!
				</p>
				<button
					onClick={() => openModalRegister()}
					className={styles.btnRegister}
				>
					INSCREVA-SE
				</button>
			</section>
		</main>
	)
}
