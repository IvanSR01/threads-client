import { AppDispatch, RootState } from "@/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useAppDispatch = () => useDispatch<AppDispatch>()

const useAction = () => {
	return {
		useAppDispatch, useAppSelector
	}
}

export default useAction