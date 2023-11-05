import { IThread } from '@/shared/interface/Thread.interface'
export interface IThreadUi extends IThread {
	onClick?: () => void
	className?: string
}
