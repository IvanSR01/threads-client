import { FC } from 'react'
import styles from './AuthField.module.scss'
import { IAuthField } from './AuthField-interface'

type TypeRegister = {
	[key: string]: string | boolean
}

const AuthField: FC<IAuthField> = ({ placeholder, register, name, error, type }) => {
	const registers: TypeRegister = {
		email: 'Email is required!',
		password: 'FullName is required!',
		fullName: 'Password is required!',
		login: 'Login is required',
		userName: false
	}
	const registersTypeTwo: TypeRegister = {
		email: false,
		password: false,
		fullName: false,
		userName: false
	}
	return (
		<div className={styles.wrapper}>
			<input
				{...register(name, { required: type ? registersTypeTwo[name] : registers[name] })}
				type='text'
				className={styles.input}
				placeholder={placeholder}
			/>
			{error && <label className={styles.label}>{error}</label>}
		</div>
	)
}
export default AuthField
