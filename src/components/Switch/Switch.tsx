import { FC } from 'react'
import styles from './Switch.module.scss'
import { ISwitch } from './Switch-interface'
import Item from '@/components/Switch/Item/Item'

const Switch: FC<ISwitch> = ({map, setState, state}) => {
	const onClick = (i: number) => {
		setState(i)
	}
	return (
		<div className={styles.wrapper}>
			{map.map((item, i) => (
				<Item onClick={() => onClick(i)} active={state === i } title={item} key={i}></Item>
			))}
		</div>
	)
}
export default Switch