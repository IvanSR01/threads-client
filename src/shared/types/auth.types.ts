import { ReactNode } from 'react';
import type { NextPage } from 'next'

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {
	Component: TypeRoles,
	children: ReactNode
}

export type TypeAuthInputes = {
	name: string
	title: string
}