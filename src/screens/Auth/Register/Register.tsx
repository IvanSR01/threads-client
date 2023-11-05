import { FC } from 'react'
import styles from '../Auth.module.scss'
import { useForm } from 'react-hook-form'
import AuthFields from '../AuthFields/AuthFields'
import Button from '@/components/UI/Button/Button'
import LinkUI from '../Link/Link'
import { IRegister } from '@/shared/interface/Auth.interface'
import Meta from '../../../components/Meta/Meta'
import { useAction, useAuthRedirect } from '@/hook'
import { register as singOut } from '@/store/action/auth.action'
import { inputs } from '@/screens/Auth/Register/Inputs.data'

const Register: FC = () => {
	useAuthRedirect()
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors }
	} = useForm<IRegister>()

	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const onSubmit = (data: IRegister) => {
		dispatch(singOut(data))
		reset()
	}
	return (
		<Meta title={'Register'}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.heading}>Register</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<AuthFields
							register={register}
							errors={errors}
							arrayInputs={inputs}
						/>
						<Button type='submit' className={styles.button}>
							Register
						</Button>
					</form>
					<LinkUI link='/auth/login'>Or Login</LinkUI>
				</div>
			</div>
		</Meta>
	)
}
export default Register