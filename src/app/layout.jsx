import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
	title: 'WorkShop empreender'
}

export default function RootLayout({ children }) {
	return (
		<html lang="ptBR">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
