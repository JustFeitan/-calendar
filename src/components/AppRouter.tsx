import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import MyLayout from "./Layout";
import Event from "../pages/Event";
import {RouteName} from "../router/routes";
import RequireAuth from "../hoc/RequireAuth";
import Login from "../pages/Login";

const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<MyLayout/>}>
                    <Route index element={
                        <RequireAuth>
                            <Event/>
                        </RequireAuth>
                    }/>
                    <Route path={RouteName.LOGIN} element={<Login/>}/>
                    <Route path='*' element={<div>Wrong path</div>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;