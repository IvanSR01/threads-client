import { FC, useEffect, useState } from 'react'
import styles from './NavItem.module.scss'
import { INavItem } from './NavItem-interface'
import { MaterialIcon } from '@/components/UI/MaterialIcon/MaterialIcon'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const NavItem: FC<INavItem> = ({ icon, link, activeIcon }) => {
	const { pathname } = useRouter()
	const [isActive, setIsActive] = useState<boolean>(false)
	useEffect(() => {
		if (pathname === link) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [pathname, link])
	return (
		<Link
			href={link}
			className={clsx(styles.wrapper, isActive && styles.active)}
		>
			{isActive ? (
				<>
					{activeIcon ? (
						<MaterialIcon name={activeIcon} />
					) : (
						<MaterialIcon name={icon} />
					)}
				</>
			) : (
				<MaterialIcon name={icon} />
			)}
		</Link>
	)
}
export default NavItem
