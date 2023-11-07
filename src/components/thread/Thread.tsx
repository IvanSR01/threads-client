import { FC, useEffect, useState } from 'react'
import styles from './Thread.module.scss'
import { IThreadUi } from './Thread-interface'
import Image from 'next/image'
import { BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import Link from 'next/link'
import { useActiveState, useAction, useAuth, useGetImgUrl } from '@/hook'
import { toast } from 'react-toastify'
import { toggleLike } from '@/store/action/thread.action'
import Images from './Images/Images'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const Thread: FC<IThreadUi> = ({
	_id,
	content,
	author,
	imgs,
	status,
	comment,
	like,
	onClick,
	className
}) => {
	const isLike = useActiveState({ ids: _id, type: 'like' })
	const { push } = useRouter()
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const url = {
		urlImage: useGetImgUrl(author?.img),
		urlLink: `/user/${author?._id}`
	}
	const { user } = useAuth()
	const onClickLike = () => {
		if (!user) {
			return toast.error('Please sing in')
		}
		dispatch(toggleLike(_id))
	}

	return (
		<div className={clsx(styles.wrapper, className)} onClick={onClick}>
			<main className={styles.main}>
				<div className={styles.img}>
					<Link href={url.urlLink}>
						{author?.img && (
							<Image
								loader={() => url.urlImage}
								src={url.urlImage}
								width={50}
								height={50}
								alt=''
							/>
						)}
					</Link>
					<div></div>
				</div>
				<div className={styles.thread}>
					<div className={styles.authorAndStatus}>
						<Link href={url.urlLink}>
							<h3>{author?.userName ? author?.userName : author?.fullName}</h3>
						</Link>
						<p>{status}</p>
					</div>
					<p>{content}</p>
					<Images imgs={imgs} />
					<div className={styles.feedback}>
						<div className={styles.row__one}>
							<BsHeart
								onClick={() => onClickLike()}
								className={isLike && styles.active}
							/>
							<FaRegComment onClick={() => push(`/fullThread/${_id}`)} />
						</div>
						<div className={styles.row__two}>
							<div className={styles.item}>
								<b>Like</b>
								<span>{like}</span>
							</div>
							<div className={styles.item}>
								<b>Comment</b>
								<span>{comment?.length ? comment?.length : 0}</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
export default Thread
