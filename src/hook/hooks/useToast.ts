import { toast } from "react-toastify"
import { useError } from ".."

export const useToastyError = (error: any) => {
	const message = useError(error)
	toast.error(message)
	throw message
}