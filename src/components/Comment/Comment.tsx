import { FC } from 'react'
import styles from './Comment.module.scss'
import { ICommentUi } from './Comment-interface'
import Link from 'next/link'
import Image from 'next/image'
import Images from '@/components/thread/Images/Images'
import { BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { useGetImgUrl } from '@/hook'

const Comment: FC<ICommentUi> = ({comment, user,content}) => {
	console.log(content)
	const url = {
		urlImage: useGetImgUrl(user?.img),
		urlLink: `/user/${user?._id}`
	}
	return (
			 <div className={styles.wrapper}>
				 <main className={styles.main}>
					 <div className={styles.img}>
						 <Link href={url.urlLink}>
							 {user?.img && (
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
								 <h3>{user?.userName ? user?.userName : user?.fullName}</h3>
							 </Link>
						 </div>
						 <p>{content}</p>
					 </div>
				 </main>
			 </div>
		)
}
export default Comment