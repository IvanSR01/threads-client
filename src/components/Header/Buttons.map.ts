import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const buttonsMap: TypeButtons[] = [
	{
		link: '/auth/login',
		title: 'Login'
	},
	{
		link: '/auth/register',
		title: 'Register'
	}
]

export const buttonsAuthMap: TypeButtons[] = [
	{
		link: '/user/profile',
		icon: 'AiOutlineUser'
	},
	{
		link: '/',
		icon: 'AiOutlineLogout'
	},

]

export type TypeButtons = {
	link: string
	title?: string
	icon?: TypeMaterialIconName
}
