import { FC, useState } from 'react'
import styles from './Search.module.scss'
import Layout from '@/components/Layout/Layout'
import { ISearchPage } from '@/shared/interface/Page.interface'
import Field from '@/components/UI/Field/Field'
import Select from '@/components/UI/select/Select'
import { number } from 'prop-types'
import Thread from '@/components/thread/Thread'
import { useFilter } from '@/hook/hooks/useFilter'
import SearchUser from '@/screens/Search/SearchUser/SearchUser'

const Search: FC<ISearchPage> = ({ threads, users }) => {
	const items = [{ title: 'Threads' }, { title: 'Users' }]
	const [state, setState] = useState<number>(0)
	const [value, setValue] = useState<string>('')
	const { threads: newThreads, users: newUsers } = useFilter({
		threads,
		users,
		valueFilter: value
	})
	const map = [
		newThreads.map(item => <Thread {...item} />),
		newUsers.map(item => <SearchUser user={item} />)
	]
	return (
		<Layout title={'Threads | Search'} description={''}>
			<div className={styles.wrapper}>
				<div>
					<header className={styles.header}>
						<Field
							placeholder={'Search...'}
							className={styles.input}
							setState={(e: any) => setValue(e.target.value)}
						/>
						<Select
							items={items}
							className={styles.select}
							sortCount={state}
							setSortCount={setState}
						/>
					</header>
					<main className={styles.main}>
						{map[state]}
					</main>
				</div>
			</div>
		</Layout>
	)
}
export default Search
