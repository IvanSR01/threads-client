import { IOption } from "./Option/Option-interface";

export interface ISelect {
	items: IOption[]
	className?: string
	sortCount: number
	setSortCount?: (val?: any) => void
}