import styles from './NotFound.module.scss'
import { FC } from 'react'
import Button from '@/components/UI/Button/Button'
import Link from 'next/link'
import Meta from '@/components/Meta/Meta'

const NotFound: FC = () => {
	return (
		<Meta title={'Threads | Not found'}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1>Page not found</h1>
					<Link href={'/'}>
						<Button>To Home</Button>
					</Link>
				</div>
			</div>
		</Meta>
	)
}
export default NotFound
