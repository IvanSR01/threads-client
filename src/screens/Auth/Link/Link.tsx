import { FC } from 'react'
import styles from './Link.module.scss'
import { ILink } from './Link-interface'
import Link from 'next/link'

const LinkUI: FC<ILink> = ({ link = '', children }) => {
	return (
		<Link href={link} className={styles.wrapper}>
			{children}
		</Link>
	)
}
export default LinkUI
