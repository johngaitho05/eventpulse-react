import React from 'react';
import Nav from './overview/Nav';
import Events from './overview/Events';

const Overview = () => {
    return (
        <div className="flex flex-col gap-5">
            <Nav />
            <Events />
        </div>
    );
};

export default Overview;
