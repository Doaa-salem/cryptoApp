import React, { useEffect, useState } from "react";
//antd
import { Button, Menu, Typography, Avatar } from "antd";
import {
  MenuOutlined,
  FundOutlined,
  BulbOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
//rrd
import { Link } from "react-router-dom";
//image
import icon from "../assets/cryptocurrency.png";

//menu
function getItem(label, key, icon) {
  return {
    key,
    icon,

    label,
  };
}

const menuElements = [
  getItem(<Link to='/'>Home</Link>, "home", <HomeOutlined />),
  getItem(
    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
    "Cryptocurrencies",
    <FundOutlined />
  ),
  ,
  getItem(
    <Link to='/exchanges'>Exchanges</Link>,
    "Exchanges",
    <MoneyCollectOutlined />
  ),
  getItem(<Link to='/news'>News</Link>, "News", <BulbOutlined />),
];
const Navbar = () => {
  //mobile responsive
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  ////////////////////////////
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onMouseOver={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu items={menuElements} theme='dark' />}
    </div>
  );
};

export default Navbar;
