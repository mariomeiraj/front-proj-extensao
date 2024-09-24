import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req) {
	const token = req.cookies.get('authToken')

	if (!token) {
		return NextResponse.redirect(new URL('/', req.url))
	}
	try {
		jwtVerify(token.value, process.env.JWT_SECRET)

		return NextResponse.next()
	} catch (error) {
		return NextResponse.redirect(new URL('/', req.url))
	}
}

export const config = {
	matcher: '/home'
}
