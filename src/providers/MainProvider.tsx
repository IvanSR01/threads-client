import { FC, ReactNode } from 'react'
import QueryProvider from './QueryProvider'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TypeRoles } from '@/shared/types/auth.types'
import AuthProvider from './AuthProvider/AuthProvider'
interface IMainProvider {
	children: ReactNode
	Component: TypeRoles
}

const MainProvider: FC<IMainProvider> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryProvider>
				<AuthProvider Component={Component}>{children}</AuthProvider>
			</QueryProvider>
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</Provider>
	)
}
export default MainProvider

