import styles from './User.module.scss'
import { FC } from 'react'
import { Avatar } from '@mui/material'
import Button from '@/components/UI/Button/Button'
import { IUser } from '@/shared/interface/User.interface'

interface IUserHeader {
	url: string
	user: IUser | null
	button: string
	onClick?: (val?: any) => void
	active?: boolean
}

const UserHeader: FC<IUserHeader> = ({
	url,
	user,
	button,
	onClick,
	active
}) => {
	return (
		<header className={styles.header}>
			<div className={styles.img}>
				<Avatar alt={user?.fullName} sx={{ width: 100, height: 100 }} src={url} />
			</div>
			<div className={styles.flex}>
				<div className={styles.description}>
					<div>{user?.userName ? user.userName : user?.fullName}</div>
					<div>Following {user?.subCount}</div>
				</div>
				<Button className={active ? styles.active : ''} onClick={onClick}>
					{button}
				</Button>
			</div>
		</header>
	)
}
export default UserHeader