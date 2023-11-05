import { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Meta from '../Meta/Meta'
import styles from './Layout.module.scss'
interface ILayout {
	children: ReactNode
	title: string
	description: string
}

const Layout: FC<ILayout> = ({ children, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			<div className={styles.wrapper}>{children}</div>
		</Meta>
	)
}

export default Layout
