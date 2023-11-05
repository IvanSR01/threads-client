import { FC } from 'react'
import styles from './AlertItem.module.scss'
import { IAlertItem } from './AlertItem-interface'
import { Avatar } from '@mui/material'
import Button from '@/components/UI/Button/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import { useGetImgUrl } from '@/hook'
const AlertItem: FC<IAlertItem> = ({ img, title, content, onClick }) => {
	const url = useGetImgUrl(img)
	return (
		<div className={styles.wrapper}>
			<div className={styles.desription}>
				<div className={styles.img}>
					<Avatar alt='' sx={{ width: 50, height: 50 }} src={url} />
				</div>
				<div>
					<div className={styles.title}>{title}</div>
					<p>{content}</p>
				</div>
			</div>
			<Button onClick={onClick} className={styles.button}><AiOutlineDelete/></Button>
		</div>
	)
}
export default AlertItem
