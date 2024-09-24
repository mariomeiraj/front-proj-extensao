import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req) {
	const token = req.cookies.get('authToken')

	if (!token) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	try {
		jwt.verify(token, process.env.JWT_SECRET)
	} catch (err) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/home'
}
