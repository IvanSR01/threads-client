import { FC } from 'react'
import styles from './Option.module.scss'
import { IOption } from './Option-interface'
import clsx from 'clsx'

const Option: FC<IOption> = ({ title, isActive, onClick, className }) => {
	return (
		<div onClick={onClick} className={clsx(styles.wrapper, className, isActive ? styles.active : '')}>
			{title}
		</div>
	)
}
export default Option
