import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useAuth, useToastyError } from '@/hook'
import { getTokens } from '@/api/tokens.api'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser }
}) => {

	const { user } = useAuth()
	const router = useRouter()

	const Children = () => <>{children}</>
	const { refreshToken } = getTokens()
	if(!isOnlyAdmin && !isOnlyUser) return <Children/>

	if(user?.isAdmin) return <Children/>

	if(isOnlyAdmin) {
		router.pathname !== '404' && router.replace('/404')
		return null
	}

	const isUser = user && !user.isAdmin

	if(isUser && isOnlyUser) return <Children/>
	else if(!isUser && isOnlyUser && refreshToken) return <Children/>
	else {
		router.pathname !== 'auth/login' && router.replace('/auth/login')
		useToastyError('Please sing in')
		return null
	}
}
export default CheckRole
