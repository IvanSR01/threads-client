import { FC } from 'react'
import styles from './Item.module.scss'
import { IItem } from './Item-interface'
import clsx from 'clsx'

const Item: FC<IItem> = ({ title, onClick, active }) => {
	return (
		<div
			onClick={onClick}
			className={clsx(styles.item, active && styles.active)}
		>
			{title}
		</div>
	)
}
export default Item