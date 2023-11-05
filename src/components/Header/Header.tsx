import { FC } from 'react'
import styles from './Header.module.scss'
import Logo from './logo/Logo'
import NavBar from './navbar/NavBar'
import Button from '../UI/Button/Button'
import Link from 'next/link'
import { buttonsAuthMap, buttonsMap, TypeButtons } from './Buttons.map'
import { useAction, useAuth } from '@/hook'
import { AiOutlineUser } from 'react-icons/ai'
import { MaterialIcon } from '@/components/UI/MaterialIcon/MaterialIcon'
import { logout } from '@/store/action/auth.action'

const Header: FC = () => {
	const { user } = useAuth()
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const onClickLogout = () => {
		dispatch(logout())
	}
	return (
		<div className={styles.header}>
			<Logo />
			<NavBar />
			<div className={styles.buttons}>
				{!!user ? (
					<>
						{buttonsAuthMap.map(item => (
							<Link href={item.link}>
								<Button
									className={styles.button}
									onClick={item.link === '/' ? () => onClickLogout() : () => {}}
								>
									<MaterialIcon
										name={item.icon ? item.icon : 'AiOutlineUser'}
									/>
								</Button>
							</Link>
						))}
					</>
				) : (
					<>
						{buttonsMap.map(({ link, title }: TypeButtons, i: number) => (
							<Link href={link} key={i}>
								<Button className={styles.button}>{title}</Button>
							</Link>
						))}
					</>
				)}
			</div>
		</div>
	)
}
export default Header
