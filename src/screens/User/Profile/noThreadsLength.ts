export const noThreadsLength: TypeNoThreadsLength[] = [
	{
		title: 'You dont have any trades yet',
		link: '/created',
		where: 'created'
	},
	{
		title: 'You dont have any favorite trades yet',
		link: '/',
		where: 'home'
	}
]
export type TypeNoThreadsLength = {
	title: string
	link: string
	where: string
}