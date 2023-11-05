import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { APP_URl } from '@/api/tokens.api'
import { ISeo } from '@/shared/interface/Meta.interface'
const Meta: FC<ISeo> = ({ title, description, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${APP_URl}${asPath}`
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.webp" sizes="any" />
				{description ? (
					<>
						<title>{title}</title>
						<meta name={'description'} content={description} />
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:url' content={currentUrl} />
					</>
				) : (
					<>
						<title>{title}</title>
						<meta name='robots' content='noindex, nofollow' />
					</>
				)}
			</Head>

			{children}
		</>
	)
}

export default Meta
