import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req) {
	const token = req.cookies.get('authToken')

	if (!token) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	try {
		const secret = process.env.VERCEL_JWT_SECRET
		console.log(secret)
		console.log(jwt.verify(token, secret))
		jwt.verify(token, secret)
	} catch (err) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/home'
}
