import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">yeondong</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlinedIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreOutlinedIcon />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
