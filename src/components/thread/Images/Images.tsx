import { FC } from 'react'
import { IImages } from '@/components/thread/Images/Images-interface'
import Image from 'next/image'
import { API_URL } from '@/api/tokens.api'
import { useGetImgUrl } from '@/hook'
import Img from './Img'
const Images: FC<IImages> = ({ imgs }) => {
	return (
		<div style={{ marginTop: '20px'}}>
			{imgs.length ? (
				<>
					{imgs.map((item, i) => (
						<span>
							<Img src={item} key={i}/>
						</span>
					))}
				</>
			) : (
				<></>
			)}
		</div>
	)
}
export default Images