import React from 'react';
import SideNav from '../components/SideNav.jsx';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
    return (
        <Layout>
            <Sider width={260} className="px-4 h-[100vh]">
                <SideNav />
            </Sider>
            <Content className="px-10 mt-4">{children}</Content>
        </Layout>
    );
};

export default DashboardLayout;
