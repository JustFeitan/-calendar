import React, {FC} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {RouteName} from "../router/routes";
import {useAuth} from "../hooks/useAuth";

const NavBar: FC = () => {
    const isAuth = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <Header>
            <Row justify={'end'} >
                <div style={{color: "white"}}>Max</div>
                {isAuth
                ? <Menu theme="dark"
                        mode="horizontal"
                        disabledOverflow={true}
                        selectable={false}
                    >
                        <Menu.Item key={1} onClick={() => navigate(RouteName.EVENT, {state: {from: location.pathname}})}>Event</Menu.Item>
                        <Menu.Item key={2} onClick={() => navigate(RouteName.LOGIN, {state: {from: location.pathname}})}>Login out</Menu.Item>
                    </Menu>
                : <Menu theme="dark"
                        mode="horizontal"
                        disabledOverflow={true}
                        selectable={false}
                    >
                        <Menu.Item key={1} onClick={() => navigate(RouteName.EVENT, {state: {from: location.pathname}})}>Event</Menu.Item>
                        <Menu.Item key={2} onClick={() => navigate(RouteName.LOGIN, {state: {from: location.pathname}})}>Login</Menu.Item>
                    </Menu>
                }

            </Row>
        </Header>
    );
};

export default NavBar;