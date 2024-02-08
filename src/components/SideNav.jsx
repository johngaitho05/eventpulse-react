import React from 'react';
import { Menu } from 'antd';
import {DashboardOutlined, GlobalOutlined} from "@ant-design/icons";
import {CalendarMonthOutlined, EditCalendarOutlined, MyLocationOutlined} from "@mui/icons-material";
import {Link, useNavigate} from 'react-router-dom';
import Logo from "../assets/logo.png";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Overview', 'overview', <DashboardOutlined/>),
  getItem('Events', 'events', <CalendarMonthOutlined/>, [
    getItem('Create Event', 'new-event', <EditCalendarOutlined />),
    getItem('My Events', 'my-events'),
    getItem('Registered Events', 'registered-events'),
    getItem('Recommendations', 'recommendations', null, [
      getItem('Local', 'local', <MyLocationOutlined/>),
      getItem('International', 'international', <GlobalOutlined/>)
    ]),
  ]),
];
const SideNav = () => {
  const navigate = useNavigate();

  const onClick = (menu) => {
    navigate(`/dashboard/${menu.key === 'overview' ? '': menu.key}`)
  }

  return (
    <div>
      <div className="brand mt-6">
        <Link to='/'>
        <img src={Logo} alt="EventPulse" className="w-[180px]"/>
      </Link>
      </div>
      <Menu className="w-full mt-10 bg-transparent text-white"
            onClick={onClick}
            defaultSelectedKeys={['overview']}
            defaultOpenKeys={['events', 'recommendations']}
            mode="inline"
            items={items}
      />
    </div>
  );
};

export default SideNav;
