import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import {Layout} from "antd";

const MyLayout: FC = () => {
    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
        </Layout>
    );
};

export default MyLayout;