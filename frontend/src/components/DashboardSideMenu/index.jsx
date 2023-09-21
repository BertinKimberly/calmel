import { Menu } from "antd";
import React from "react";
import {
   AppstoreOutlined,
   OrderedListOutlined,
   ShopOutlined,
   UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MdWork, MdWorkOutline } from "react-icons/md";

function SideMenu() {
   const navigate = useNavigate();
   return (
      <div className='SideMenu'>
         <Menu
            onClick={(item) => {
               navigate(item.key);
            }}
            items={[
               {
                  label: "Dashboard",
                  icon: <AppstoreOutlined />,
                  key: "/dashboard",
               },
               {
                  label: "Users",
                  icon: <UserOutlined />,
                  key: "/dashboard/users",
               },
               {
                  label: "Roles",
                  icon: <MdWorkOutline />,
                  key: "/roles",
               },
               {
                  label: "Customers",
                  icon: <UserOutlined />,
                  key: "/customers",
               },
            ]}
         ></Menu>
      </div>
   );
}

export default SideMenu;
