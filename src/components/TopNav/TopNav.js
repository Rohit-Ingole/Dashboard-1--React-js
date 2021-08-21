import "./TopNav.css";

import notifications from "../../assets/JsonData/notification.json";
import user_menu from "../../assets/JsonData/user_menus.json";

import { Dropdown, ThemeMenu } from "../";
import { Link } from "react-router-dom";

const curr_user = {
  display_name: "Rohit Ingole",
  image: "https://avatars.dicebear.com/api/jdenticon/Rohit%20Ingole.svg",
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right-item">
        <Dropdown
          customToggle={() => renderUserToggle(curr_user)}
          contentData={user_menu}
          renderItems={(item, index) => renderUserMenu(item, index)}
        />
      </div>
      <div className="topnav__right-item">
        <Dropdown
          icon="bx bx-bell"
          badge="12"
          contentData={notifications}
          renderItems={(item, index) => renderNotificationItem(item, index)}
          renderFooter={() => <Link to="/">View All</Link>}
        />
      </div>
      <div className="topnav__right-item">
        <ThemeMenu />
      </div>
    </div>
  );
};

export default TopNav;
