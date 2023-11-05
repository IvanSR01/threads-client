import { TypeMaterialIconName } from "@/shared/types/icons.types"

export interface INavItem {
	icon: TypeMaterialIconName
	link: string
	activeIcon?: TypeMaterialIconName
}