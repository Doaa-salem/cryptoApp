import { Layout, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const RootLayout = () => {
  const d = new Date();

  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Outlet />
          </div>
        </Layout>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
