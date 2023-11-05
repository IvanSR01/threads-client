import { ICreate } from '@/shared/interface/Thread.interface'
import FileService from '@/services/file/File.service'
import { useError } from '@/hook'
import { useState } from 'react'

type TypeUseThread = {
	inputRef: any
	folder?: string
}
type TypeReturnThread = {
	imgs: string[]
	onClickAdd: (val: any) => void
	onClickRemove: (i: number) => void
}
export const useSetImg = ({inputRef, folder}: TypeUseThread): TypeReturnThread => {
	const [imgs, setImgs] = useState<string[]>([])
	const onClickAdd = async (e: any) => {
		try {
			if(!e.target.files.length) 	return 	inputRef.current.click()
			const files = new FormData()
			let file: any = e.target.files[0]
			files.append('file', file)
			const { data } = await FileService.uploads({files, folder: folder || 'thread'})
			setImgs([...imgs, data[0].url])
		} catch (e) {
			console.log(useError(e))
		}
	}
	const onClickRemove = (i: number) => {
		const img = imgs[i]
		if(imgs.length > 1) {
			const newImgs = imgs.filter((item) => {
				return item !== img
			})
			setImgs(newImgs)
		}
		setImgs([])
	}
	return { imgs, onClickAdd, onClickRemove }
}