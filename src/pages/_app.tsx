import MainProvider from '@/providers/MainProvider'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthFields
export default function App({ Component, pageProps }: TypeAppProps) {
	// const router = useRouter();
  // const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	router.events.on('routeChangeStart', (url) => {
	// 		setLoading(true);
	// 	 });
	
	// 	router.events.on('routeChangeComplete', (url) => {
	// 		setLoading(false);
	// 	});
	// }, [router.events])
  return (
		<MainProvider Component={Component}>
			{/* {loading ? 'LOading...' : <Component {...pageProps} /> } */}
			<Component {...pageProps} /> 
		</MainProvider>
	)
}
