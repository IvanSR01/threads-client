import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const navDataMap: TypeNavMap[] = [
	{
		icon: 'AiOutlineHome',
		link: '/',
		activeIcon: 'AiFillHome'
	},
	{
		icon: 'AiOutlineSearch',
		link: '/search'
	},
	{
		icon: 'AiOutlineHeart',
		activeIcon: 'AiFillHeart',
		link: '/activity'
	},
	{
		icon: 'AiOutlineFileAdd',
		activeIcon: 'AiFillFileAdd',
		link: '/create'
	},
	{
		icon: 'AiOutlineEdit',
		activeIcon: 'AiFillEdit',
		link: '/update'
	}
]

export type TypeNavMap = {
	icon: TypeMaterialIconName
	activeIcon?: TypeMaterialIconName
	link: string
}
