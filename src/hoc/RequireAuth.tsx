import React, {FC, ReactElement} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {RouteName} from "../router/routes";
import {useAppSelector} from "../hooks/redux";
import {useAuth} from "../hooks/useAuth";

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({children}) => {
    const isAuth = useAuth()
    const location = useLocation();
    if (!isAuth) {
        return <Navigate to={RouteName.LOGIN} state={{from: location.pathname}}/>
    }
    return (
        children
    );
};

export default RequireAuth;