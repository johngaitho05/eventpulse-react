import React from 'react';
import { Menu } from 'antd';
import {GlobalOutlined, LogoutOutlined} from "@ant-design/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import {DoneOutlined, House, MyLocationOutlined, SettingsOutlined} from "@mui/icons-material";
import {Link, useNavigate} from 'react-router-dom';
import Logo from "../assets/logo.png";
import {TbCalendarUser} from "react-icons/tb";
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
  getItem('Overview', 'overview', <DashboardIcon/>),
  getItem('Events', 'events', <EventIcon/>, [
    getItem('Create Event', 'new-event', <EditCalendarIcon/>),
    getItem('Create Venue', 'new-venue', <House/>),
    getItem('My Events', 'my-events', <TbCalendarUser/>),
    getItem('Registered Events', 'registered-events', <DoneOutlined/>),
    getItem('Recommended', 'recommended', null, [
      getItem('Local', 'recommended-local', <MyLocationOutlined/>),
      getItem('International', 'recommended-international', <GlobalOutlined/>)
    ]),
  ]),
  getItem('Settings', 'settings', <SettingsOutlined/>),
  getItem('logout', 'logout', <LogoutOutlined/>),
];
const SideNav = () => {
  const navigate = useNavigate();
    const loc = window.location.pathname.split('dashboard/')[1] || 'overview'
  const onClick = (menu) => {
    if (menu.key === 'logout'){
      localStorage.removeItem('user')
      window.location = '/'
    }else {
      navigate(`/dashboard/${menu.key === 'overview' ? '' : menu.key}`)
    }
  }

  return (
    <div className="sidenav">
      <div className="brand mt-6 mb-6">
        <Link to='/'>
        <img src={Logo} alt="EventPulse" className="w-[180px]"/>
      </Link>
      </div>
      <Menu className="w-full mt-10 bg-transparent text-white hover:text-white"
            onClick={onClick}
            defaultSelectedKeys={[loc]}
            defaultOpenKeys={['events', 'recommended']}
            mode="inline"
            items={items}
      />
    </div>
  );
};

export default SideNav;
