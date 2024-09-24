import './globals.css'

export const metadata = {
	title: 'WorkShop empreender'
}

export default function RootLayout({ children }) {
	return (
		<html lang="ptBR">
			<body>{children}</body>
		</html>
	)
}
