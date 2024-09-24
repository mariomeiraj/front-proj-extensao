import styles from './homeContent.module.css'

const HomeContent = () => {
	return (
		<div className={styles.container}>
			<h1>Bem-vindo ao Workshop!</h1>
			<p>
				Estamos animados para ter você conosco. Confira abaixo os próximos
				eventos:
			</p>

			<div className={styles.eventList}>
				<div className={styles.event}>
					<h2>Evento 1: Introdução ao Tema</h2>
					<p>
						<strong>Data:</strong> 01 de Outubro, 2024
					</p>
					<p>
						<strong>Hora:</strong> 10:00 - 12:00
					</p>
					<p>
						Uma introdução ao tema do workshop, cobrindo os principais conceitos
						e objetivos.
					</p>
				</div>

				<div className={styles.event}>
					<h2>Evento 2: Mão na Massa</h2>
					<p>
						<strong>Data:</strong> 05 de Outubro, 2024
					</p>
					<p>
						<strong>Hora:</strong> 14:00 - 16:00
					</p>
					<p>
						Atividades práticas para aplicar o que aprendemos na primeira
						sessão.
					</p>
				</div>

				<div className={styles.event}>
					<h2>Evento 3: Conclusão e Feedback</h2>
					<p>
						<strong>Data:</strong> 10 de Outubro, 2024
					</p>
					<p>
						<strong>Hora:</strong> 16:00 - 18:00
					</p>
					<p>
						Encerramento do workshop e espaço para feedback dos participantes.
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomeContent
