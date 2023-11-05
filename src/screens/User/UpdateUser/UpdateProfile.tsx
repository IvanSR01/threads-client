import { FC, useEffect, useRef, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './UpdateProfile.module.scss'
import AuthFields from '@/screens/Auth/AuthFields/AuthFields'
import { useForm } from 'react-hook-form'
import { inputs } from '../../Auth/Register/Inputs.data'
import { IUpdate } from '@/shared/interface/Auth.interface'
import { useAction, useSetImg } from '@/hook'
import { updateUser } from '@/store/action/user.action'
import Button from '@/components/UI/Button/Button'

const UpdateProfile: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdate>({
		mode: 'onChange'
	})
	const inputRef = useRef<HTMLInputElement>(null)
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const [file, setFile] = useState<string>('')
	const {imgs, onClickRemove, onClickAdd} = useSetImg({inputRef, folder: 'avatar'})
	useEffect(() => {
		console.log(imgs)
		setFile(imgs[0])
	}, [imgs])
	const onSubmit = (data: IUpdate) => {
		dispatch(updateUser({ ...data, img: file }))
	}
	return (
		<Layout title={'Threads | Update Profile'} description={''}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.form}>
							<input ref={inputRef} type={'file'} hidden onClick={(e: any) => onClickAdd(e)}/>
							{file ? (
								<Button className={styles.button} onClick={() => onClickRemove(0)}>Remove img</Button>
							) : (
								<Button className={styles.button} onClick={() => inputRef.current?.click()}>Add img</Button>
							)}
							<AuthFields
								arrayInputs={inputs}
								register={register}
								errors={errors}
								type={'Update'}
							/>
							<Button type={'submit'} className={styles.button}>
								Update
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default UpdateProfile
