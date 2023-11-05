import { FC } from 'react'
import styles from './ImgItem.module.scss'
import { IImgItem } from './ImgItem-interface'
import Image from 'next/image'
import { useGetImgUrl } from '@/hook'
import Button from '@/components/UI/Button/Button'

const ImgItem: FC<IImgItem> = ({ img, onClick }) => {
	const url = useGetImgUrl(img)
	return (
		<div className={styles.wrapper}>
			<Image src={url} loader={() => url} alt={''} height={150} width={150}/>
			<Button onClick={onClick}>Delete</Button>
		</div>
	)
}
export default ImgItem