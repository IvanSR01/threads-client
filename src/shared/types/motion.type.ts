export type TypeMotion = {
	initial: TypeMotionItem
	animate: TypeMotionItem
	exit: TypeMotionItem
}

type TypeMotionItem = {
	opacity?: number
	x?: string
	y?: string
}
