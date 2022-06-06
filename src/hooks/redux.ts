import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRoot, AppStore} from "../store/store";

export const useAppSelector: TypedUseSelectorHook<AppRoot> = useSelector;