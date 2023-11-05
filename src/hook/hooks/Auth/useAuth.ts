import useAction from '@/hook/hooks/useAction';

const { useAppSelector } = useAction()

export const useAuth = () => useAppSelector(state => state.user)