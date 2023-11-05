import { FC, MouseEvent } from 'react'
import styles from './Button.module.scss'
import { IButton } from './Button-interface'
import clsx from 'clsx'

const Button: FC<IButton> = ({ children, className, onClick, type, disabled }) => {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (!onClick) return
		return onClick && onClick(e)
	}
	return (
		<button
			type={type ? type : 'button'}
			className={clsx(styles.wrapper, className)}
			onClick={handleClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
export default Button
