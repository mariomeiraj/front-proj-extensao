const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function postLogin(form) {
	const response = await fetch(`${baseURL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(form)
	})

	return response.json()
}

export async function postResgister(form) {
	const response = await fetch(`${baseURL}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(form)
	})

	if (!response.ok) {
		const errorMessage = await response.text()
		throw new Error(errorMessage)
	}

	return response.json()
}
