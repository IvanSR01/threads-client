import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { checkAuth, logout } from '@/store/action/auth.action'
import { useRouter } from 'next/router'
import { getTokens } from '@/api/tokens.api'
import { useAction, useAuth } from '@/hook'
const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser }
}) => {
	const { user } = useAuth()
	const { pathname } = useRouter()
	const { accessToken, refreshToken } = getTokens()

	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		if (accessToken) dispatch(checkAuth())
	}, [])

	useEffect(() => {
		if (!refreshToken && user) dispatch(logout())
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}
export default AuthProvider
