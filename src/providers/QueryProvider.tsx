import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface IQueryProvider {
	children: ReactNode
}

const queryClient: QueryClient = new QueryClient()

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
export default QueryProvider
