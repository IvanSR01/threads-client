import { FC } from 'react'
import styles from './Logo.module.scss'
import { toast } from 'react-toastify'
import { RiThreadsFill } from 'react-icons/ri'
const Logo: FC = () => {
	return (
			 <div onClick={() => toast.info('Click')} className={styles.wrapper}>
					<RiThreadsFill/>
					<p>threads</p>
			 </div>
		)
}
export default Logo