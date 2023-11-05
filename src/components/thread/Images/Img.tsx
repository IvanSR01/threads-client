import { FC } from 'react'
import Image from 'next/image'
import { useGetImgUrl } from '@/hook'

interface IImg {
	src: string
}
const Img: FC<IImg> = ({src}) => {
	const url = useGetImgUrl(src)
	return (
		<Image src={url} loader={() => url} alt='' height={200} width={200}/>
	)
}
export default Img