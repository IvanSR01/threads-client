import { FC } from 'react'
import styles from '../Auth.module.scss'
import AuthFields from '../AuthFields/AuthFields'
import { useForm } from 'react-hook-form'
import { ILogin } from '@/shared/interface/Auth.interface'
import Button from '@/components/UI/Button/Button'
import LinkUI from '../Link/Link'
import { login } from '@/store/action/auth.action'
import Meta from '@/components/Meta/Meta'
import { useAction, useAuth, useAuthRedirect } from '@/hook'
import { inputs } from '@/screens/Auth/Login/inputs.data'

const Login: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ILogin>({
		mode: 'onChange'
	})
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const onSubmit = (data: ILogin) => {
		dispatch(login(data))
		reset()
	}
	return (
		<Meta title={'Login'}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.heading}>LOGIN</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<AuthFields
							register={register}
							errors={errors}
							arrayInputs={inputs}
						/>
						<Button disabled={isLoading} type='submit' className={styles.button}>
							Login
						</Button>
					</form>
					<LinkUI link='/auth/register'>Or Register</LinkUI>
				</div>
			</div>
		</Meta>
	)
}
export default Login
