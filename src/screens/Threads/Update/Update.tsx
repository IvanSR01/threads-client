import Layout from '@/components/Layout/Layout'
import { FC, useEffect, useRef, useState } from 'react'
import styles from '../Add/Add.module.scss'
import ImgItem from '@/screens/Threads/ImgItem/ImgItem'
import Button from '@/components/UI/Button/Button'
import Field from '@/components/UI/Field/Field'
import Thread from '@/components/thread/Thread'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IUpdateThread } from '@/shared/interface/Thread.interface'
import ThreadService from '@/services/thread/Thread.service'
import { useAuth, useSetImg, useToastyError } from '@/hook'
import { useRouter } from 'next/router'

const Update: FC = () => {
	const { query } = useRouter()
	const { mutate } = useMutation(
		(props: IUpdateThread) =>
			ThreadService.setThread({ ...props, _id: query?.id?.toString() }),
		{
			onSuccess: () => {
				setFiles({ ...files, content: '', imgs: [] })
			},
			onError: err => {
				useToastyError(err)
			}
		}
	)
	if (!query.id) return
	useQuery(['thr'], () => ThreadService.getThreadsById(query?.id?.toString()), {
		onSuccess: ({ data }) => {
			setFiles({ ...files, content: data.content, imgs: data.imgs })
		}
	})
	const { user } = useAuth()
	if (!user) return
	const [files, setFiles] = useState<IUpdateThread>({
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
		<Layout title={'Threads | Update | Thread'} description={''}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2>Update thread</h2>
					<div className={styles.form}>
						<input
							onClick={e => onClickAdd(e)}
							type={'file'}
							hidden
							ref={inputRef}
						/>
						{files.imgs?.length ? (
							<div>
								<div className={styles.img}>
									{files?.imgs?.map((item, i) => (
										<ImgItem onClick={() => onClickRemove(i)} img={item} />
									))}
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
							<Field
								placeholder={'Content'}
								setState={(e: any) =>
									setFiles({ ...files, content: e.target.value })
								}
								className={styles.inputContent}
							/>
							<Button onClick={() => onSubmit()}>Update thread</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Update
