import { FC, useEffect, useRef, useState } from 'react'
import styles from './Add.module.scss'
import Layout from '@/components/Layout/Layout'
import Field from '@/components/UI/Field/Field'
import Button from '@/components/UI/Button/Button'
import { ICreate } from '@/shared/interface/Thread.interface'
import ImgItem from '@/screens/Threads/ImgItem/ImgItem'
import { useMutation } from '@tanstack/react-query'
import FileService from '@/services/file/File.service'
import { TypePropsFile } from '@/shared/types/files.types'
import instance from '@/api/axios.api'
import { useAuth, useError, useToastyError } from '@/hook'
import { useSetImg } from '@/hook/hooks/useSetImg'
import Thread from '@/components/thread/Thread'
import ThreadService from '@/services/thread/Thread.service'

const Add: FC = () => {
	const { mutate } = useMutation((props: ICreate) => ThreadService.createThread(props), {
		onSuccess: () => {
			setFiles({...files, content: '', imgs: []})
		},
		onError: (err) => {
			useToastyError(err)
		}
	})
	const { user } = useAuth()
	if(!user) return
	const [files, setFiles] = useState<ICreate>({
		content: '',
		imgs: []
	})
	const inputRef = useRef<HTMLInputElement>(null)
	const { onClickAdd, imgs, onClickRemove } = useSetImg({ inputRef })
	const onSubmit = () => {
		mutate(files)
	}
	useEffect(() => {
		setFiles({ ...files, imgs: imgs })
	}, [imgs])
	return (
		<Layout title={'Threads | Created'} description={''}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2>Create thread</h2>
					<div className={styles.form}>
						<input
							onClick={e => onClickAdd(e)}
							type={'file'}
							hidden
							ref={inputRef}
						/>
						{files.imgs.length ? (
							<div>
								<div className={styles.img}>
									{files?.imgs?.map((item, i) => <ImgItem onClick={() => onClickRemove(i)} img={item} />)}
								</div>
								<Button
									onClick={() => inputRef.current?.click()}
									className={styles.imgButton}
								>
									Add img
								</Button>
							</div>
						) : (
							<Button
								onClick={() => inputRef.current?.click()}
								className={styles.imgButton}
							>
								Add img
							</Button>
						)}
						<form>
							<Field placeholder={'Content'} setState={(e: any) => setFiles({...files, content: e.target.value})} className={styles.inputContent} />
							<Button onClick={() => onSubmit()}>Create thread</Button>
						</form>
					</div>
					<div className={styles.thread}>
						<Thread
							_id={''}
							author={user}
							content={files.content}
							imgs={files.imgs}
							like={0}
							comment={[]}
							status={'mount'}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Add
