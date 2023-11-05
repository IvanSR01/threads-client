import { FC } from 'react'
import styles from './NavBar.module.scss'
import NavItem from './NavItem/NavItem'
import { TypeNavMap, navDataMap } from './NavMapData'

const NavBar: FC = () => {
	return (
			 <div className={styles.wrapper}>
					{navDataMap.map((item: TypeNavMap, i: number) => (
						<NavItem {...item} key={i}/>
					))}
			 </div>
		)
}
export default NavBar