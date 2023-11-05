import { FC } from 'react'
import * as MaterialIcons from 'react-icons/ai'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

interface IIcon {
	name: TypeMaterialIconName
}

export const MaterialIcon: FC<IIcon> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent />
}
