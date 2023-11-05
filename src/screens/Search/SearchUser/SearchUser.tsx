import { FC } from 'react'
import styles from './SearchUser.module.scss'
import { ISearchUser } from './SearchUser-interface'
import { Avatar } from '@mui/material'
import Button from '@/components/UI/Button/Button'
import { useActiveState, useGetImgUrl } from '@/hook'
import clsx from 'clsx'

const SearchUser: FC<ISearchUser> = ({ user }) => {
	const url = useGetImgUrl(user?.img)
	const activeState = useActiveState({ids: user._id, type: 'sub'})
	const onClickFollowingUser = () => {

	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.desription}>
				<div className={styles.img}>
					<Avatar alt='' sx={{ width: 50, height: 50 }} src={url} />
				</div>
				<div>
					<div className={styles.title}>{user?.userName ? user.userName : user?.fullName}</div>
					<p>Following {user.subCount}</p>
				</div>
			</div>
			<Button onClick={onClickFollowingUser} className={clsx(styles.button, activeState && styles.active)}>{activeState ? 'Unsubscribe user' : 'Following user'}</Button>
		</div>
		)
}
export default SearchUser