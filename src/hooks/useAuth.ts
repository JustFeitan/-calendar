import {useAppSelector} from "./redux";

export const useAuth = () => {
  const {isAuth} = useAppSelector(state => state.user);
  return isAuth;
}