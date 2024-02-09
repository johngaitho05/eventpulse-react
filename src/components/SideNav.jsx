import React from 'react';
import { Menu } from 'antd';
import {GlobalOutlined, LikeOutlined, LogoutOutlined} from "@ant-design/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import {DoneOutlined, House, MyLocationOutlined, SettingsOutlined} from "@mui/icons-material";
import {Link, useNavigate} from 'react-router-dom';
import Logo from "../assets/logo.png";
import {TbCalendarUser} from "react-icons/tb";
import {getInitials, getUser} from "../helpers/utils.js";
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
    getItem('Recommended', 'recommended', <LikeOutlined/>, [
      getItem('Local', 'recommended-local', <MyLocationOutlined/>),
      getItem('International', 'recommended-international', <GlobalOutlined/>)
    ]),
  ]),
  getItem('Settings', 'settings', <SettingsOutlined/>),
  getItem('logout', 'logout', <LogoutOutlined/>),
];

const SideNav = () => {
  const user = getUser()
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
      <div className="min-h-[86vh]">
        <div className="brand mt-6 mb-6">
          <Link to='/'>
            <img src={Logo} alt="EventPulse" className="w-[180px]"/>
          </Link>
        </div>
        <hr/>
        <Menu className="w-full mt-10 bg-transparent text-white hover:text-white"
              onClick={onClick}
              defaultSelectedKeys={[loc]}
              defaultOpenKeys={['events', 'recommended']}
              mode="inline"
              items={items}
        />
      </div>
      <hr/>
      <div className="grid grid-cols-2 grid-flow-col text-white mt-4 cursor-pointer">
        <span className="mt-2 font-bold"><span className="text-sm mr-2 bg-red-700 p-3 rounded-full">{getInitials()}</span></span><br/>
        <span className="mr-10 leading-4">
          <span className="text-nowrap">{user?.name}</span><br/>
          <span className="text-xs">{user?.email}</span></span>
      </div>
    </div>

  );
};

export default SideNav;
