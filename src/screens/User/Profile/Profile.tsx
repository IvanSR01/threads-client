import { FC, useState } from 'react'
import styles from '../User.module.scss'
import Layout from '@/components/Layout/Layout'
import { useAuth, useGetImgUrl } from '@/hook'
import Button from '@/components/UI/Button/Button'
import Switch from '@/components/Switch/Switch'
import { IProfile } from '@/shared/interface/Page.interface'
import Thread from '@/components/thread/Thread'
import ThreadService from '@/services/thread/Thread.service'
import { useQuery } from '@tanstack/react-query'
import { noThreadsLength } from '@/screens/User/Profile/noThreadsLength'
import Link from 'next/link'
import UserHeader from '@/screens/User/UserHeader'
import { useRouter } from 'next/router'

const Profile: FC<IProfile> = () => {
	const { data } = useQuery(['myThread'], () => ThreadService.getMeThread())
	const { user } = useAuth()
	const url = useGetImgUrl(user?.img)
	const [state, setState] = useState<number>(0)
	const map = ['My Thread', 'Favorite Thread']
	const threadsArr = [data, user?.likes]
	const { push } = useRouter()
	const onClick = () => {
		push('/user/update')
	}
	return (
		<Layout title={'Threads | Profile'} description={''}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.user}>
						<UserHeader user={user} url={url} button={'Update profile'} onClick={() => onClick()}/>
						<main className={styles.main}>
							<div className={styles.tab}>
								<Switch map={map} state={state} setState={setState} />
							</div>
							<div className={styles.items}>
								{!threadsArr[state]?.length ? (
									<div className={styles.center}>
										<h2>{noThreadsLength[state]?.title}</h2>
										<Link href={noThreadsLength[state]?.link}>
											<Button>{noThreadsLength[state]?.where}</Button>
										</Link>
									</div>
								) : (
									<>
										{threadsArr[state]?.map((item, i) => (
											<Thread {...item} key={i} />
										))}
									</>
								)}
							</div>
						</main>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Profile
