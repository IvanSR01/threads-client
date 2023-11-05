import { TypeMotion } from '../../../../../../project/Theards/threads/src/shared/types/motion.type'

export const motionVariantSelect: TypeMotion = {
	initial: {
		opacity: 0,
		x: '-100px'
	},
	animate: {
		opacity: 1,
		x: '00px'
	},
	exit: {
		opacity: 0,
		x: '-100px'
	}
}
