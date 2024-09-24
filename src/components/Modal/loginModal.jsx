import useModalStore from '@/store/useModalStore'
import styles from './modal.module.css'
import { useState } from 'react'
import { postLogin } from '@/services/api'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Login() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		email: '',
		senha: ''
	})
	const { closeModalLogin, openModalRegister } = useModalStore()

	const changeForRegisterModal = () => {
		closeModalLogin()
		openModalRegister()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const data = await postLogin(formData)
			if (!data.token) {
				return alert(data)
			}

			closeModalLogin()
			Cookies.set('authToken', data.token, { expires: 7 })
			router.push('/home')
		} catch (error) {
			alert('Erro no login: ' + error.message)
		}
	}

	return (
		<div className={styles.content}>
			<div className={styles.callToLog}>
				<h2>Entrar agora.</h2>
				<span>Entre para aproveitar todos seus benefícios.</span>
			</div>

			<form
				onSubmit={handleSubmit}
				action="/registrar"
				method="post"
				className={styles.form}
			>
				<label htmlFor="email">E-mail:</label>
				<input
					placeholder="Digite seu email"
					type="email"
					id="email"
					name="email"
					required
					value={formData.email}
					onChange={handleChange}
				/>

				<label htmlFor="senha">Senha:</label>
				<input
					placeholder="Digite sua senha"
					type="password"
					id="senha"
					name="senha"
					required
					value={formData.senha}
					onChange={handleChange}
				/>

				<input type="submit" value="Entrar" />
			</form>

			<p className={styles.textChangeBtn}>Ainda não tem uma conta?</p>

			<button
				onClick={() => changeForRegisterModal()}
				className={styles.changeModalBtn}
			>
				Cadastre-se
			</button>
		</div>
	)
}
