import { FC } from 'react'
import styles from './AuthFields.module.scss'
import AuthField from './AuthFiled/AuthField'
import { UseFormRegister } from 'react-hook-form'

interface IAuthFields {
	arrayInputs: any[]
	register: UseFormRegister<any>
	errors: any
	type?: string
}

const AuthFields: FC<IAuthFields> = ({ arrayInputs, errors, register, type }) => {
	return (
		<div className={styles.wrapper}>
			{arrayInputs.map(({name, title}, i) => (
				<AuthField
					name={name}
					register={register}
					error={errors[name]?.message}
					placeholder={title}
					key={i}
					type={type}
				/>
			))}
		</div>
	)
}
export default AuthFields
