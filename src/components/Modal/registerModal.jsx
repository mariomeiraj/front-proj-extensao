import useModalStore from '@/store/useModalStore'
import styles from './modal.module.css'
import { useState } from 'react'
import { postResgister } from '@/services/api'

export default function Register() {
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		senha: '',
		confirmarSenha: ''
	})
	const { closeModalRegister, openModalLogin } = useModalStore()

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const changeForLoginModal = () => {
		closeModalRegister()
		openModalLogin()
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const { senha, confirmarSenha } = formData

		if (senha !== confirmarSenha) {
			alert('As senhas não coincidem.')
			return
		}

		try {
			const data = await postResgister(formData)
			closeModalRegister()
			openModalLogin()
			return alert(data)
		} catch (error) {
			alert('Erro no login: ' + error.message)
		}
	}

	return (
		<div className={styles.content}>
			<div className={styles.callToLog}>
				<h2>Cadastre-se agora.</h2>
				<span>É rápido e fácil.</span>
			</div>

			<form
				onSubmit={handleSubmit}
				action="/registrar"
				method="post"
				className={styles.form}
			>
				<label htmlFor="nome">Nome:</label>
				<input
					placeholder="Digite seu nome"
					type="text"
					id="nome"
					name="nome"
					value={formData.nome}
					onChange={handleChange}
					required
				/>

				<label htmlFor="email">E-mail:</label>
				<input
					placeholder="Digite seu email"
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor="senha">Senha:</label>
				<input
					placeholder="Digite sua senha"
					type="password"
					id="senha"
					name="senha"
					value={formData.senha}
					onChange={handleChange}
					required
				/>

				<label htmlFor="confirmar-senha">Confirmar Senha:</label>
				<input
					placeholder="Confirme sua senha"
					type="password"
					id="confirmar-senha"
					name="confirmarSenha"
					value={formData.confirmarSenha}
					onChange={handleChange}
					required
				/>

				<input type="submit" value="Cadastre-se" />
			</form>

			<p className={styles.textChangeBtn}>Já tem uma conta?</p>

			<button
				onClick={() => changeForLoginModal()}
				className={styles.changeModalBtn}
			>
				Faça Login
			</button>
		</div>
	)
}
