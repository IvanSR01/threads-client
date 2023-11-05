import { UseFormRegister } from 'react-hook-form';
export interface IAuthField {
	placeholder: string
	register: UseFormRegister<any>
	error: any;
	name: 'Email' | 'Password' | 'Username' | 'Fullname'
	type?: string
}