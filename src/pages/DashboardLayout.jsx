import React from 'react';
import SideNav from '../components/SideNav.jsx';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
    return (
        <Layout>
            <Sider width={265} className="px-4 h-[100vh] hidden lg:block">
                <SideNav />
            </Sider>

            {/* small screen sider */}
            <div className="absolute  top-0 z-20">
                <Sider width={265} className="px-4 h-[100vh] block lg:hidden">
                    <SideNav />
                </Sider>
            </div>

            <Content className="max-h-[100vh] overflow-y-auto px-8">{children}</Content>
        </Layout>
    );
};

export default DashboardLayout;
