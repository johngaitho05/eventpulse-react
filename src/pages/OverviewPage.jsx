import React from 'react';
import Overview from '../components/Overview';
import DashboardLayout from './DashboardLayout';

const OverviewPage = () => {
    return (
        <>
            <DashboardLayout>
                <Overview />
            </DashboardLayout>
        </>
    );
};

export default OverviewPage;
