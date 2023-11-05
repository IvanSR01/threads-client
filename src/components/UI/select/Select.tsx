import { FC, useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { ISelect } from './Select-interface'
import Option from './Option/Option'
import { AnimatePresence, motion } from 'framer-motion'
import { motionVariantSelect } from './MotionVariantSelect'
import clsx from 'clsx'

const Select: FC<ISelect> = ({ items, className, sortCount, setSortCount }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const onClick = (i: number) => {
		setSortCount ?	setSortCount(i) : ''
		setIsOpen(false)
	}
	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (e: any) => {
			const path = e.path || (e.composedPath && e.composedPath())
			if (!path.includes(modalRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)
	return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className={clsx(className, styles.wrapper)} ref={modalRef}>
			<header className={styles.heading}>
				<p>Search by:</p>
				<h2 onClick={() => setIsOpen(!isOpen)}>{items[sortCount].title}</h2>
			</header>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={motionVariantSelect}
						initial={'initial'}
						animate={'animate'}
						exit={'exit'}
						className={styles.menu}
					>
						{items.map((item, i) => (
							<Option isActive={i == sortCount} onClick={() => onClick(i)} key={i} {...item} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
export default Select
