export interface IRegister  {
	email: string
	password:string
	fullName:string
	userName?: string
}
export interface ILogin {
	login: string
	password: string
}

export interface IUpdate {
	email?: string
	password?:string
	fullName?:string
	userName?: string
	img?: string
}