import { ChangeEvent, FC, useState } from 'react'
import styles from './Field.module.scss'
import { IField } from './Field-interface'
import clsx from 'clsx'

const Field: FC<IField> = ({ className, setState, placeholder }) => {
	const [value, setValue] = useState<string>('')
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		// setState ? setState(e.target.value) : ''
		setState(e)
	}
	return (
		<div className={styles.wrapper}>
			<input
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e)}
				className={clsx(styles.input, className)}
			/>
			<label className={styles.label}></label>
		</div>
	)
}
export default Field